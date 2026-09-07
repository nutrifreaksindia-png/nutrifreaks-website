#!/usr/bin/env python3
"""Deploy nutrifreaks-website to production via SSH."""

from __future__ import annotations

import os
import sys
from pathlib import Path

try:
    import paramiko
except ImportError:
    print("Installing paramiko...", file=sys.stderr)
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
    import paramiko

ROOT = Path(__file__).resolve().parents[1]
ENV_FILE = ROOT / ".deploy.env"
DEPLOY_SCRIPT = ROOT / "deploy" / "deploy-web.sh"


def load_env() -> dict[str, str]:
    if not ENV_FILE.exists():
        print(f"Missing {ENV_FILE}. Copy .deploy.env.example and fill in credentials.", file=sys.stderr)
        sys.exit(1)

    env: dict[str, str] = {}
    for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        env[key.strip()] = value.strip().strip('"').strip("'")
    return env


def main() -> int:
    cfg = load_env()
    host = cfg.get("DEPLOY_HOST", "72.61.224.223")
    user = cfg.get("DEPLOY_USER", "root")
    password = cfg.get("DEPLOY_PASSWORD")
    if not password:
        print("DEPLOY_PASSWORD is required in .deploy.env", file=sys.stderr)
        return 1

    script = DEPLOY_SCRIPT.read_text(encoding="utf-8")

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(host, username=user, password=password, timeout=30)

    print(f"Deploying to {user}@{host}...")
    stdin, stdout, stderr = client.exec_command(f"bash -s <<'DEPLOY_EOF'\n{script}\nDEPLOY_EOF", get_pty=True)

    while True:
        line = stdout.readline()
        if not line:
            break
        sys.stdout.buffer.write(line.encode("utf-8", errors="replace"))

    err = stderr.read().decode("utf-8", errors="replace")
    if err:
        sys.stderr.buffer.write(err.encode("utf-8", errors="replace"))

    code = stdout.channel.recv_exit_status()
    client.close()
    return code


if __name__ == "__main__":
    raise SystemExit(main())
