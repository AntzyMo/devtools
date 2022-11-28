let panels = chrome.devtools.panels

panels.create('AntzyMo','','panel.html',panel=>{
  console.log('自定义面板创建成功');
})

