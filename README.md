# 智视未来 - 机器人评估平台

一个交互式平台，用于评估不同机器人的潜能和能力。该项目使用 Next.js 开发并部署在 GitHub Pages 上。

## 项目简介

该平台允许用户对各种机器人进行评估，帮助研究人员收集关于人类如何认知和评价不同类型机器人的数据。

## 在线访问

项目部署在 GitHub Pages 上，可通过以下链接访问：

- [主页（动态检测）](https://xuconghu.github.io/test111/index.html)
- [静态版本（推荐）](https://xuconghu.github.io/test111/static.html)
- [评估页面](https://xuconghu.github.io/test111/assessment.html)

## 部署到 GitHub Pages

项目使用 GitHub Pages 部署，由于资源路径问题，提供了几种解决方案：

### 方法一：使用 Next.js 配置部署

1. 确保 `next.config.js` 正确配置：

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/test111',
  assetPrefix: '/test111/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

2. 构建项目：

```bash
npm run build
```

3. 将 `out` 目录的内容推送到 GitHub 仓库的 `gh-pages` 分支。

### 方法二：使用动态加载器

项目包含 `loader.html` 文件用于预加载所有必要资源后重定向到主页。

### 方法三：使用静态HTML（推荐）

为解决部署问题，项目提供了两个完全静态的页面：

- `static.html` - 包含所有CSS和布局内联在页面中的静态版本
- `assessment.html` - 评估页面的静态版本

这两个文件不依赖外部资源，可以避免GitHub Pages上的路径问题。

## 本地开发

1. 克隆仓库：

```bash
git clone https://github.com/xuconghu/test111.git
cd test111
```

2. 安装依赖：

```bash
npm install
```

3. 运行开发服务器：

```bash
npm run dev
```

## 技术栈

- Next.js
- React
- CSS
- JavaScript

## 常见问题

### 资源404错误

部署到 GitHub Pages 时，可能会出现资源无法加载的404错误，原因是资源路径中缺少仓库名称。解决方法：

1. 使用完全静态的HTML页面（`static.html`和`assessment.html`）
2. 正确配置 `next.config.js` 文件
3. 使用 `loader.html` 预加载所有资源

## 许可证

本项目采用 CC BY-NC-ND 4.0 许可证，禁止商业使用及创建衍生作品。 