// 修复资源路径问题的应用脚本
document.addEventListener('DOMContentLoaded', function() {
  // 直接替换页面上的所有资源路径中的相对URL为绝对URL
  const htmlContent = document.documentElement.innerHTML;
  const fixedContent = htmlContent.replace(/\/test111\/_next/g, 'https://xuconghu.github.io/test111/_next');
  
  // 强制加载缺失的脚本文件
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
  
  // 创建一个函数同步加载脚本
  function loadScriptSync(src) {
    document.write('<script src="' + src + '"><\/script>');
  }
  
  // 加载所有缺失的脚本
  for (let i = 0; i < missingScripts.length; i++) {
    loadScriptSync(missingScripts[i]);
  }
  
  // 创建一个新的样式表链接
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.href = 'https://xuconghu.github.io/test111/_next/static/css/76cfff4c24f026a8.css';
  document.head.appendChild(cssLink);
}); 