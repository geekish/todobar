var electron = require('electron');
var menubar = require('menubar');
var path = require('path');

var appInfo = {
  index: 'https://todoist.com/app',
  icon: path.join(__dirname, '/assets/logo.png'),
  title: 'Todobar',
};

var menu = menubar({
  index: appInfo.index,
  icon: appInfo.icon,
  tooltip: appInfo.title,
  width: 400,
  height: 600
});

menu.on('ready', function ready () {
  console.log(appInfo.title + ' is ready!');
});
