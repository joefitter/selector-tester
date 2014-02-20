'use strict';

angular.module('selectorTesterApp')
  .controller('JQueryCtrl', ['$scope', function ($scope) {
    $scope.model = {
      selector: '',
      inputHtml: '<!doctype html>\n'+
        '<html>\n'+
        '<head>\n'+
        '    <meta charset="utf-8">\n'+
        '    <title>Example Page</title>\n'+
        '    <script src="js/app.js"></script>\n'+
        '    <link rel="stylesheet" href="css/style.css">\n'+
        '</head>\n'+
        '<body>\n'+
        '    <header>\n'+
        '        <nav id="main-navigation">\n'+
        '           <ul>\n'+
        '                <li><a href="/">Home</a></li>\n'+
        '                <li><a href="/about">About</a></li>\n'+
        '                <li><a href="/services">Services</a></li>\n'+
        '                <li><a href="/contact">Contact</a></li>\n'+
        '            </ul>\n'+
        '        </nav>\n'+
        '    </header>\n'+
        '    <div id="main">\n'+
        '        <div class="fl" id="sidebar">\n'+
        '            <section id="sidebar-top">\n'+
        '                <p>The <strong>TOP</strong> of the sidebar</p>\n'+
        '            </section>\n'+
        '            <section id="sidebar-bottom">\n'+
        '                <p>The <span class="green">Bottom</span> of the sidebar</p>\n'+
        '            </section>\n'+
        '        </div>\n'+
        '        <div class="fr" id="content">\n'+
        '            <div class="nested-div">\n'+
        '                <div class="nested-div">\n'+
        '                    <div class="nested-div">\n'+
        '                        Nested Content\n'+
        '                    </div>\n'+
        '                </div>\n'+
        '            </div>\n'+
        '            <section id="content-top">\n'+
        '                <p>The main content with a <a href="/contact">LINK</a> to the contact page.</p>\n'+
        '            </section>\n'+
        '            <section id="content-bottom">\n'+
        '                <p>The bottom of the content</p>\n'+
        '           </section>\n'+
        '        </div>\n'+
        '    </div>\n'+
        '     <footer>\n'+
        '        <nav id="footer-links">\n'+
        '            <ul>\n'+
        '                <li><a href="/">Home</a></li>\n'+
        '                <li><a href="/about">About</a></li>\n'+
        '                <li><a href="/services">Services</a></li>\n'+
        '                <li><a href="/contact">Contact</a></li>\n'+
        '            </ul>\n'+
        '        </nav>\n'+
        '    </footer>\n'+
        '    <script>\n'+
        '        var _gaq = _gaq || [];\n'+
        '        _gaq.push([\'_setAccount\', \'UA-1076265-1\']);\n'+
        '        _gaq.push([\'_setDomainName\', \'jquery.com\']);\n'+
        '        _gaq.push([\'_setAllowLinker\', true]);\n'+
        '        _gaq.push([\'_trackPageview\']);\n'+
        '        (function() {\n'+
        '            var ga = document.createElement(\'script\');\n'+
        '            ga.type = \'text/javascript\'; ga.async = true;\n'+
        '            ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n'+
        '            var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n'+
        '       })();\n'+
        '   </script>\n'+
        '</body>\n'+
        '</html>'
    };
  }]);