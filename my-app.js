  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/index/',
        url: 'index.html',
      },
      {
        path: '/contador/',
        url: 'contador.html',
      },


    ]

    
    // ... other parameters
  });


// Valores
  var j1_1 = 1; j1_2 = 2; j1_3 = 3; j1_4 = 4; j1_5 = 5; j1_6 = 6;
  var j1_7 = 0; j1_8 = 0; j1_9 = 0; j1_10 = 0; j1_11 = 0;
  
  var j2_1 = 1; j2_2 = 2; j2_3 = 3; j2_4 = 4; j2_5 = 5; j2_6 = 6;
  var j2_7 = 0; j2_8 = 0; j2_9 = 0; j2_10 = 0; j2_11 = 0;
// FIN Valores

var mainView = app.views.create('.view-main');

var nj1 = "";
var nj2 = "";

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  // se llega aca, cuando termina de cargar el INDEX.html
  console.log("Device is ready!");
  
});

  $$('#inicio').on('click', function(){
    
      nj1 = $$("#j1").val();
      nj2 = $$("#j2").val();

    console.log("jugadores: " + nj1 + nj2)
  
  });

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);


    // cargar un track por cada pagina que carga el usuario.
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="contador"]', function (e) {
    // se ejecuta cuando se carga ANOTADOR
    console.log(e);
    $$("#lbl_j1").text(nj1);
    $$("#lbl_j2").text(nj2);

})

$$("#prueba").on("click", function(){
  alert("probando");
});
function sel_valor(a){
  console.log(a);
  $$("#valor_selec").text(a);    

};

$$(document).on('page:init', '.page[data-name="finjuego"]', function (e) {
    // se ejecuta cuando se carga FIN JUEGO
    console.log(this.value);
    
   

})