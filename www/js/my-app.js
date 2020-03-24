  
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

var mainView = app.views.create('.view-main');

var nj1 = "";
var nj2 = "";
var pickerDevice ="";
var tipo = 0;
var totalj1 = 0;
var totalj2 = 0;
var saco = 0;

// Handle Cordova Device Ready Event
 $$(document).on('deviceready', function() {
  // se llega aca, cuando termina de cargar el INDEX.html
  console.log("Device is ready!");
  $$('#inicio').on('click', function(){
    nj1 = $$('#j1').val();  
    nj2 = $$('#j2').val();
    
    console.log("Jugadores seteados: " + nj1 + " / " + nj2);
    
  });
  
   
})  



// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);

    // cargar un track por cada pagina que carga el usuario.

    









}); 



$$(document).on('page:init', '.page[data-name="contador"]', function (e) {
  // se ejecuta cuando se carga ANOTADOR
  console.log(e);
  $$("#lbl_j1").text(nj1);
  $$("#lbl_j2").text(nj2);
 
  function puntaje ( pun ,sac, dad){
      /*puntaje es cuando saca de 1 a 6 en dados entonces se hace el calculo y actualiza la cantidad 
      de puntaje actual del jugador */
      var acum ;
      acum = dad * sac; 
     /*  console.log("acumulador es  "+ acum);
      console.log("puntos es  "+ pun);
      console.log("dados es "+ dad);
      console.log("saco es "+ sac); */
       console.log("se ejecuto la funcion");
     return acum;
 }


    $$("#j1_1").on('click', function(){
        //3 es un parametro general hasta q haga el popover
        totalj1 += puntaje (totalj1 , 3 , 1);
        console.log ("puntaje j1 despues de la funcion "+ totalj1);
        
    });
    $$("#j1_2").on('click', function(){
      //3 es un parametro general hasta q haga el popover
         totalj1 += puntaje (totalj1,3,2);
    });
    $$("#j1_3").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj1 +=  puntaje (totalj1,3,3);
    });
    $$("#j1_4").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj1 +=puntaje (totalj1,3,4);
    });
    $$("#j1_5").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj1 += puntaje (totalj1,3,5);
    });
    $$("#j1_6").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj1 += puntaje (totalj1,3,6);
    });
    $$("#j2_1").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj2 += puntaje (totalj1,3,1);
    });
    $$("#j2_2").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj2 += puntaje (totalj1,3,2);
    });
    $$("#j2_3").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj2 += puntaje (totalj1,3,3);
    });
    $$("#j2_4").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj2 += puntaje (totalj1,3,4);
    });
    $$("#j2_5").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj2 += puntaje (totalj1,3,5);
    });
    $$("#j2_6").on('click', function(){
      //3 es un parametro general hasta q haga el popover
      totalj2 += puntaje (totalj1,3,6);
    });

     console.log("puntaje j1"+ totalj1);
     console.log("puntaje j2"+ totalj2); 



 










  /*puntaje es cuando saca de 1 a 6 en dados entonces se hace el calculo y actualiza la cantidad 
    de puntaje actual del jugador */
    
 
  

     /* switch (sac){
        case 1:  sac=sac* 1 ;
                  pun= pun + sac;       
            break;
        case 2:  sac=sac* 2 ;
            pun= pun + sac;       
            break;   
        case 3:  sac=sac* 3 ;
            pun= pun + sac;       
            break;
        case 4:  sac=sac* 4 ;
                  pun= pun + sac;       
            break;
        case 5:  sac=sac* 5 ;
                  pun= pun + sac;       
            break;
       case 6:  sac=sac* 6 ;
            pun= pun + sac;       
             break
      } */

    

      
    
     $$('#fin').on('click', function(){
      nj1 = ''  
      nj2 = ''
      console.log("Jugadores fin: " + nj1 + " / " + nj2);
      totalj1=0;
      totalj2=0;
      
      }) 


});

