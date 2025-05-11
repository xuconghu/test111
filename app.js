// 修复资源路径问题的应用脚本
document.addEventListener('DOMContentLoaded', function() {
  const BASE_URL = 'https://xuconghu.github.io/test111';
  
  // 修复所有链接和资源路径
  function fixPaths() {
    // 修复CSS链接
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(link => {
      if (link.href && link.href.includes('/_next/') && !link.href.includes(BASE_URL)) {
        link.href = `${BASE_URL}${link.href.substring(link.href.indexOf('/_next/'))}`;
      }
    });
    
    // 修复JS脚本
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (script.src && script.src.includes('/_next/') && !script.src.includes(BASE_URL)) {
        script.src = `${BASE_URL}${script.src.substring(script.src.indexOf('/_next/'))}`;
      }
    });
    
    // 修复图片
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src && !img.src.startsWith('http') && !img.src.startsWith(BASE_URL)) {
        img.src = `${BASE_URL}/${img.src.replace(/^\//g, '')}`;
      }
    });
  }
  
  // 尝试修复路径
  fixPaths();
  
  // 加载缺失的关键脚本
  const missingScripts = [
    '_next/static/chunks/webpack-d795ab09e6cdf4f1.js',
    '_next/static/chunks/main-app-304e637656ebcdc6.js',
    '_next/static/chunks/684-532ad7394de2d0ee.js',
    '_next/static/chunks/4bd1b696-71c528fed80023f1.js',
    '_next/static/chunks/807-3710092f442c8cce.js',
    '_next/static/chunks/app/layout-8c1da133cc5e625f.js',
    '_next/static/chunks/app/page-dde548461c0f6929.js',
    '_next/static/chunks/845-47c6b98efc383ebc.js'
  ];
  
  // 加载CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = `${BASE_URL}/_next/static/css/76cfff4c24f026a8.css`;
  document.head.appendChild(cssLink);
  
  // 按顺序加载脚本
  function loadScriptsSequentially(index) {
    if (index >= missingScripts.length) return;
    
    const script = document.createElement('script');
    script.src = `${BASE_URL}/${missingScripts[index]}`;
    script.onload = () => loadScriptsSequentially(index + 1);
    script.onerror = (error) => console.error(`Failed to load script: ${missingScripts[index]}`, error);
    document.head.appendChild(script);
  }
  
  loadScriptsSequentially(0);
}); 