/**
 * Modificar Imagen
 */


//Acceder a las etiquetas HTML
var Paris_Texto = document.getElementById("titulo");
var Paris_Imagen = document.getElementById("Torre_Eiffel")

// Evento que espera a que el usuario pulse sobre la imagen 
Paris_Imagen.addEventListener("click",function() {

    // Aumenta el temaño de la imagen
    Paris_Imagen.style.width= "1100px"; 



    Paris_Imagen.addEventListener("click",function(){
        // Disminuye el tamaño de la imagen
        Paris_Imagen.style.width= "600px"; 
    });

});
