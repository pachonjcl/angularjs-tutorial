'use strict';

app.component('introduccion', {
  controller: function(IntroduccionService) {
    // console.log(':O');
    this.ejemplos = IntroduccionService.getEjemplos();
  },
  template: `
    <header class="jumbotron" id="overview">
      <div class="container">
        <div class="col-sm-7">
          <h1>Introduccion</h1>
        </div>
      </div>
    <div ng-repeat="ejemplo in $ctrl.ejemplos">
      <div hljs source="ejemplo">
        
      </div>
    </div>
    </header>
`
})