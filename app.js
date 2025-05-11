// 修复资源路径问题的应用脚本
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有的脚本和样式表
  const scripts = document.querySelectorAll('script[src]');
  const links = document.querySelectorAll('link[href]');
  const images = document.querySelectorAll('img[src]');
  
  // 替换脚本路径
  scripts.forEach(script => {
    if (script.src && !script.src.startsWith('http')) {
      const newSrc = script.src.replace('/test111/', 'https://xuconghu.github.io/test111/');
      script.src = newSrc;
    }
  });
  
  // 替换样式表路径
  links.forEach(link => {
    if (link.href && !link.href.startsWith('http')) {
      const newHref = link.href.replace('/test111/', 'https://xuconghu.github.io/test111/');
      link.href = newHref;
    }
  });
  
  // 替换图片路径
  images.forEach(img => {
    if (img.src && !img.src.startsWith('http')) {
      const newSrc = img.src.replace('/test111/', 'https://xuconghu.github.io/test111/');
      img.src = newSrc;
    }
  });
  
  // 动态加载可能缺失的资源
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // 按照控制台错误信息加载缺失的脚本
  const missingScripts = [
    'https://xuconghu.github.io/test111/_next/static/chunks/webpack-d795ab09e6cdf4f1.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/main-app-304e637656ebcdc6.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/684-532ad7394de2d0ee.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/4bd1b696-71c528fed80023f1.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/807-3710092f442c8cce.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/app/layout-8c1da133cc5e625f.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/app/page-dde548461c0f6929.js',
    'https://xuconghu.github.io/test111/_next/static/chunks/845-47c6b98efc383ebc.js'
  ];
  
  missingScripts.forEach(scriptSrc => {
    loadScript(scriptSrc).catch(err => {
      console.warn('无法加载脚本:', scriptSrc, err);
    });
  });
}); 