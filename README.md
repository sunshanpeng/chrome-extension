# chrome-extension
chrome扩展

dinner——定时提醒报名吃饭功能 <br /> 
使用了background browser_action  <br /> 
background：定时提醒报名 <br /> 
browser_action： <br /> 
1、判断缓存中有没有用户信息，没有的话弹出登录窗口 <br /> 
2、如果缓存中有用户信息或者用户在登录窗口登录后则登录报名系统 <br /> 
3、吃饭按钮和不吃了按钮绑定对应事件，发送ajax请求 <br /> 
4、弹出框提示报名情况 <br /> 
