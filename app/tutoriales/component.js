'use strict';

app.component('tutoriales', {
  bindings: { tutoriales: '<' },
  controller: function() {

  },
  template: `
      <header class="jumbotron" id="overview">
        <div class="container">
          <div class="col-sm-7">
            <h1>Angular Tutorial</h1>
          </div>
        </div>
        <div class="bs-docs-social">
          <div class="container">
            <ul class="bs-docs-social-buttons">
              <li>
                <a href="https://twitter.com/share" class="twitter-share-button" data-show-count="false" data-hashtags="pachonjcl">
                  Tweet
                </a>
                <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="container">
        <section id="tutoriales">
          <h1 class="page-header">Tutoriales</h1>
          <p class="text-muted">
            <input class="form-control" autofocus="autofocus" style="max-width: 15em; display: inline-block;" ng-model="textoBuscador" placeholder="Buscar...">
              {{(tutoriales| filter:textoBuscador).length}} tutoriales encontrados
          </p>
          <div class="list-group">
            <div ng-repeat="tutorial in $ctrl.tutoriales | filter:textoBuscador" href="{{tutorial.src}}" class="list-group-item"
              <p class="pull-right">
                <a href="{{tutorial.home}}" title="Home / Demo page" ng-if="tutorial.home">
                  <i class="fa fa-3x fa-home"></i>
                </a>
                <a href="{{tutorial.src}}" title="Code">
                  <i class="fa fa-3x fa-github"></i>
                </a>
              </p>
              <h4 class="list-group-item-heading">
                {{tutorial.titulo}}
              </h4>
              <p class="list-group-item-text text-muted">
                {{tutorial.descripcion}}
              </p>
            </div>
          </div>
        </section>
      </div>
`
})