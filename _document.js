import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        {/* 添加base标签以确保所有相对URL都是相对于正确的基础路径 */}
        <base href="https://xuconghu.github.io/test111/" />
        
        {/* 预加载关键资源 */}
        <link rel="preload" href="https://xuconghu.github.io/test111/_next/static/css/76cfff4c24f026a8.css" as="style" />
        <link rel="preload" href="https://xuconghu.github.io/test111/_next/static/chunks/webpack-d795ab09e6cdf4f1.js" as="script" />
        <link rel="preload" href="https://xuconghu.github.io/test111/_next/static/chunks/main-app-304e637656ebcdc6.js" as="script" />
        
        {/* 添加脚本修复资源路径问题 */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // 添加路径修复脚本
            (function() {
              window.__NEXT_BASE_PATH__ = '/test111';
              window.__NEXT_ASSET_PREFIX__ = 'https://xuconghu.github.io/test111';
              
              // 动态添加资源修复函数
              window.fixResourcePaths = function() {
                const links = document.querySelectorAll('link[rel="stylesheet"]');
                links.forEach(link => {
                  if (link.href && link.href.includes('/_next/') && !link.href.includes('https://xuconghu.github.io')) {
                    link.href = 'https://xuconghu.github.io/test111' + link.href.substring(link.href.indexOf('/_next/'));
                  }
                });
                
                const scripts = document.querySelectorAll('script[src]');
                scripts.forEach(script => {
                  if (script.src && script.src.includes('/_next/') && !script.src.includes('https://xuconghu.github.io')) {
                    script.src = 'https://xuconghu.github.io/test111' + script.src.substring(script.src.indexOf('/_next/'));
                  }
                });
              };
              
              // 页面加载时执行修复
              document.addEventListener('DOMContentLoaded', window.fixResourcePaths);
            })();
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 