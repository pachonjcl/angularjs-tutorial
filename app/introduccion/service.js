'use strict';

app.service('IntroduccionService', function() {
  this.getEjemplos = function(){
    return [`
      <html ng-app="myApp">
        <body ng-init="hello = 'Hello World'">
          {{hello}}
        </body>
      </html>`,
      `
      <html ng-app="yourApp">
        <body ng-init="hello = 'Hello World'">
          {{hello}}
        </body>
      </html>`
      ];
  }
});