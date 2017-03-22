'use strict';

app.config(function($stateProvider) {

  $stateProvider.state('tutoriales', {
    url: '/tutoriales',
    component: 'tutoriales',
    resolve: {
      tutoriales: function(TutorialesService) {
        return TutorialesService.getAll();
      }
    }
  });

});