!function(angular,factory){return"function"==typeof define&&define.amd?void define("ngFinder",["jquery","angular","elfinder"],function($,angular){return factory(angular)}):factory(angular)}(angular||null,function(angular){return angular.module("ngFinder",[]).directive("elFinder",function(){return{restrict:"C",scope:{url:"=url",options:"=options",onSelect:"&select"},controller:["$scope",function($scope){$scope.selectFile=function(url){var aFieldName=$scope.$parent.fieldName,aWin=$scope.$parent.window;aWin.document.forms[0].elements[aFieldName].value=url,$("#elfinder").hide()}}],link:function(scope,element,attrs){var menus={toolbar:attrs.toolbar||"mkdir,mkfile,upload|open,download|info|copy,cut,paste|rename,rm|view|help",navbar:attrs.contextmenuNavbar||"open,|,copy,cut,paste,|,rm,|,info",cwd:attrs.contextmenuCwd||"reload,back,|,upload,mkdir,mkfile,paste,|,info",files:attrs.contextmenuFiles||"open,download,|,copy,cut,paste,|,rm,edit,rename,|,info"},options={allowShortcuts:!1,rememberLastDir:!0,uiOptions:{toolbar:menus.toolbar.split("|").map(function(item){return item.split(",")})},contextmenu:{navbar:menus.navbar.split(","),cwd:menus.cwd.split(","),files:menus.files.split(",")},url:scope.url||"/elfinder",commandsOptions:{getfile:{onlyURL:!1}},useBrowserHistory:!1};scope.options&&$.extend(options,scope.options),attrs.select&&(options.contextmenu.files.unshift("getfile"),options.onlyMimes=["image"],options.getFileCallback=function(file){$("#elfinder").hide(),scope.onSelect({$file:file})}),$(element).elfinder(options),$(".elfinder-toolbar",element).addClass("btn-toolbar"),$(".elfinder-buttonset",element).addClass("btn-group"),$(".elfinder-button",element).addClass("btn btn-default");var replaceClasses={back:"arrow-left",forward:"arrow-right",mkdir:"plus-sign",mkfile:"file",upload:"upload",open:"folder-open",download:"download-alt",getfile:"download",info:"info-sign",quicklook:"eye-open",rm:"trash",rename:"pencil",edit:"pencil",resize:"fullscreen",view:"th",sort:"sort",help:"question-sign"};$(".elfinder-button-icon-copy",element).removeClass("elfinder-button-icon").addClass("icon-cut"),$(".elfinder-button-icon-cut",element).removeClass("elfinder-button-icon").addClass("icon-copy"),$(".elfinder-button-icon-paste",element).removeClass("elfinder-button-icon").addClass("icon-paste"),angular.forEach(replaceClasses,function(newClass,oldClass){$(".elfinder-button-icon-"+oldClass,element).removeClass("elfinder-button-icon").addClass("icon-"+newClass)})}}}),angular.module("ngFinder")});
//# sourceMappingURL=ng-finder.map