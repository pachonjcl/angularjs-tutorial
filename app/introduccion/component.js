'use strict';

app.component('introduccion', {
  controller: function() {

  },
  template: `
    <header class="jumbotron" id="overview">
      <div class="container">
        <div class="col-sm-7">
          <h1>Introduccion</h1>
        </div>
      </div>
    <div>
      <div hljs no-escape>
        &lt;html ng-app="myApp"&gt;
          &lt;body ng-init="hello = 'Hello World'"&gt;
            {{hello}}
          &lt;/body&gt;
        &lt;/html&gt;
      </div>
    </div>
    </header>
`
})