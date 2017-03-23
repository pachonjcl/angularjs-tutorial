'use strict';

app.component('introduccion', {
  controller: function(IntroduccionService) {
    this.ejemplos = IntroduccionService.getEjemplos();
  },
  templateUrl: 'app/introduccion/introduccion.html'
});