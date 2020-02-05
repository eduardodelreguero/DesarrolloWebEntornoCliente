Vue.component("hola-mundo", {
  props: ["idioma"],
  template: `<div>
                  <p v-if="idioma=='castellano'">Hola</p>
                  <p v-if="idioma=='ingles'">Hello</p>
                  <p v-if="idioma=='euskera'">Kaixo</p>
              </div>`
});

var app = new Vue({
  el: "#aplicacion"
});
