// 匹配规则 https://blog.csdn.net/*

(() => {
  // 解决复制需要登录限制
  javascript:document.body.contentEditable='true';document.designMode='on';
  // 复制带有版权声明问题
  document.addEventListener('copy', (event) => {
      const selection = document.getSelection();
      event.clipboardData.setData('text/plain', selection.toString());
      event.preventDefault();
      event.stopPropagation();
      let copy = (event.clipboardData || window.clipboardData).getData('text/plain');
      let index = copy.indexOf(`————————————————
  版权声明：本文为CSDN博主`);
      if(index > 0){
          copy = copy.substr(0,index);
          window.clipboardData.setData("Text",copy);
      }
  });
  // 自动展开文章
  if(document.getElementById('article_content')){
    document.getElementById('article_content').style.height = 'auto';
  }
  // 隐藏关注博主即可阅读全文
  if(document.getElementsByClassName('hide-article-box').length > 0){
    document.getElementsByClassName('hide-article-box')[0].style.display = 'none';
  }
  // 自动展开文章里代码
  var code_hides = document.getElementsByClassName('set-code-hide');
  if(code_hides.length > 0){
    for (var i = 0; i < code_hides.length; i++) {
      code_hides[i].style.display = 'none';
    }
  }
  var code_hide_boxs = document.getElementsByClassName('hide-preCode-box');
  if(code_hide_boxs.length > 0){
    for (var i = 0; i < code_hide_boxs.length; i++) {
      code_hide_boxs[i].remove();
    }
  }
  // 图片加载跨域问题
  if(document.getElementsByTagName("head").length > 0){
    var meta = document.createElement("meta");
    meta.name = 'referrer';
    meta.content = 'no-referrer';
    document.getElementsByTagName("head")[0].appendChild(meta)
  }
})();
