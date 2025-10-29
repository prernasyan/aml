module.exports = {
  apps: [
    {
      name: "aml",
      script: "./node_modules/.bin/vite",
      args: "preview --port 3001 --host 0.0.0.0",
      cwd: "/root/aml",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
