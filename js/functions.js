        
        //variable para el cambio de imagen
        var myIndex = 0;
        var miIndex = 0;


        //invocacion a la funcion
        slideShow();

        //  cambio de imagen cada 4 segundos
        function slideShow() {
            var i;
            var x = document.getElementsByClassName("certificadosShow");
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                }
            myIndex++;
            if (myIndex >= x.length) { myIndex = 0 }
            x[myIndex].style.display = "block";
            setTimeout(slideShow, 4000);
        }


