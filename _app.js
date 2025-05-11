import { useEffect } from 'react';
import getConfig from 'next/config';

// 全局样式导入
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // 获取运行时配置
  const { publicRuntimeConfig } = getConfig() || {};
  const { basePath, assetPrefix } = publicRuntimeConfig || { basePath: '/test111', assetPrefix: 'https://xuconghu.github.io/test111' };
  
  // 组件挂载后运行路径修复逻辑
  useEffect(() => {
    // 定义资源路径修复函数
    const fixResourcePaths = () => {
      // 修复样式表链接
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        if (link.href && link.href.includes('/_next/') && !link.href.includes('https://xuconghu.github.io')) {
          link.href = `${assetPrefix}${link.href.substring(link.href.indexOf('/_next/'))}`;
        }
      });
      
      // 修复脚本链接
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (script.src && script.src.includes('/_next/') && !script.src.includes('https://xuconghu.github.io')) {
          script.src = `${assetPrefix}${script.src.substring(script.src.indexOf('/_next/'))}`;
        }
      });
      
      // 修复图片链接
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.src && !img.src.startsWith('http') && !img.src.startsWith(assetPrefix)) {
          img.src = `${assetPrefix}/${img.src.replace(/^\//g, '')}`;
        }
      });
      
      // 设置全局变量以帮助其他脚本
      window.__NEXT_BASE_PATH__ = basePath;
      window.__NEXT_ASSET_PREFIX__ = assetPrefix;
      
      console.log('资源路径修复完成');
    };
    
    // 执行修复
    fixResourcePaths();
    
    // 监听动态加载的内容
    const observer = new MutationObserver(() => {
      fixResourcePaths();
    });
    
    // 开始观察文档变化
    observer.observe(document.documentElement, { 
      childList: true, 
      subtree: true 
    });
    
    // 清理函数
    return () => {
      observer.disconnect();
    };
  }, [assetPrefix, basePath]);
  
  return <Component {...pageProps} />;
}

export default MyApp; 