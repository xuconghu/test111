// 部署前准备脚本
// 将正确的配置文件复制到相应位置

const fs = require('fs');
const path = require('path');

// 确保 test111 路径在所有地方保持一致
// 1. 处理 next.config.js
console.log('更新 next.config.js...');
const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/test111',
  assetPrefix: '/test111',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: '/test111',
    assetPrefix: '/test111',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.output.publicPath = '/test111/_next/';
    }
    return config;
  },
};

module.exports = nextConfig;`;

fs.writeFileSync('next.config.js', nextConfig);

// 2. 更新所有的 HTML 文件中的 BASE_URL
console.log('更新 HTML 文件中的 BASE_URL...');
const htmlFiles = ['index.html', 'loader.html'];
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(
      /const BASE_URL = ['"].*['"]/g, 
      `const BASE_URL = '/test111'`
    );
    fs.writeFileSync(file, content);
  }
});

// 3. 创建或更新 404.html
console.log('更新 404.html...');
const notFoundPage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>页面未找到 - 智视未来</title>
  <script>
    // 重定向到主页
    window.location.href = '/test111/';
  </script>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f9fafb;
      color: #111827;
    }
    .loader {
      border: 5px solid #f3f3f3;
      border-top: 5px solid #4a6bff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    h1 {
      margin-bottom: 10px;
    }
    p {
      color: #6b7280;
      text-align: center;
      max-width: 400px;
    }
  </style>
</head>
<body>
  <div class="loader"></div>
  <h1>页面未找到</h1>
  <p>正在跳转到主页...</p>
</body>
</html>`;

fs.writeFileSync('404.html', notFoundPage);

// 4. 创建根重定向页面
console.log('创建根重定向页面...');
const rootRedirect = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>智视未来 - 重定向中</title>
  <script>
    // 将用户重定向到正确的测试路径
    window.location.href = '/test111/';
  </script>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f9fafb;
      color: #111827;
    }
    .loader {
      border: 5px solid #f3f3f3;
      border-top: 5px solid #4a6bff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    p {
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="loader"></div>
  <p>正在重定向到主页...</p>
</body>
</html>`;

fs.writeFileSync('my-index.html', rootRedirect);

console.log('部署准备工作完成！'); 