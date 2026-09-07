#!/usr/bin/env bash
set -euo pipefail

BUILD_DIR="${BUILD_DIR:-/tmp/nutrifreaks-website-deploy}"
APP_DIR="${APP_DIR:-/var/www/web.nutrifreaks.com}"
REPO="${REPO:-https://github.com/nutrifreaksindia-png/nutrifreaks-website.git}"

rm -rf "$BUILD_DIR"
git clone "$REPO" "$BUILD_DIR"
cd "$BUILD_DIR"
git log -1 --oneline

npm install
npm run build

rm -rf "${APP_DIR}.bak"
cp -a "$APP_DIR" "${APP_DIR}.bak"

rsync -a --delete "$BUILD_DIR/.next/standalone/" "$APP_DIR/"
mkdir -p "$APP_DIR/.next/static"
rsync -a "$BUILD_DIR/.next/static/" "$APP_DIR/.next/static/"
rsync -a "$BUILD_DIR/public/" "$APP_DIR/public/"

if [ -f "$BUILD_DIR/.env.production" ]; then
  cp "$BUILD_DIR/.env.production" "$APP_DIR/.env.production"
fi

pm2 restart nutrifreaks-web
pm2 save

echo "DEPLOY_OK"
