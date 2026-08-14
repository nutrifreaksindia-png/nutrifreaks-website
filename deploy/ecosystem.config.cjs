module.exports = {
  apps: [
    {
      name: "nutrifreaks-web",
      cwd: "/var/www/web.nutrifreaks.com",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: "3210",
        HOSTNAME: "127.0.0.1",
        NEXT_PUBLIC_API_URL: "https://api.web.nutrifreaks.com",
        NEXT_PUBLIC_SITE_URL: "https://web.nutrifreaks.com",
      },
    },
    {
      name: "nutrifreaks-api",
      cwd: "/var/www/api.web.nutrifreaks.com",
      script: "src/index.js",
      env: {
        NODE_ENV: "production",
        PORT: "3211",
        CORS_ORIGINS: "https://web.nutrifreaks.com,http://localhost:3000",
        NOTIFY_EMAIL: "info@nutrifreaks.com",
      },
    },
  ],
};
