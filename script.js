$(document).ready(function() {
    var $grid1 = $('#grid1');
    var $grid2 = $('#grid2');
    var $grid3 = $('#grid3');
    var $grid4 = $('#grid4');
    var $image = $('#movingImage');
    var $carga = $('#carga');
    var estadob1=0;
    var estadob2=0;
    var estadob3=0;
    var estadob4=0;
    $("#bateria").text("Nivel de bateria 100%");
    $("#estado").text("En reposo");
    for (let i = 0; i < 4; i++){
        var random = Math.floor(Math.random()*4)+1;
        var bodega= "#b"+(i+1);
        var grid= "grid"+(i+1);
        if(random==1){
            $(bodega).text("Libre y sucia"); 
        }
        if(random==2){
            document.getElementById(grid).style.backgroundColor = "rgb(255, 255, 255)";
            $(bodega).text("Libre y limpia"); 
        }
        if(random==3){
            document.getElementById(grid).style.backgroundColor = "rgb(0, 0, 0)";
            $(bodega).text("Ocupada y sucia"); 
        }
        if(random==4){
            document.getElementById(grid).style.backgroundColor = "rgb(92, 26, 4)";
            $(bodega).text("Ocupada y limpia"); 
        }

        if(i==0){
            estadob1=random;
        }
        if(i==1){
            estadob2=random;
        }
        if(i==2){
            estadob3=random;
        }
        if(i==3){
            estadob4=random;
        }
    }
    
    let currentPosition = { row: 0, col: -1 };
    let direction = 'right'; // Dirección inicial
    let isMoving = false;
    
    // Crear la cuadrícula de 2x2
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            $grid1.append(`<div class="cell" data-row="${row}" data-col="${col}"></div>`);
        }
    }

    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            $grid2.append(`<div class="cell" data-row="${row}" data-col="${col}"></div>`);
        }
    }

    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            $grid3.append(`<div class="cell" data-row="${row}" data-col="${col}"></div>`);
        }
    }

    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            $grid4.append(`<div class="cell" data-row="${row}" data-col="${col}"></div>`);
        }
    }
    //se indica el proceso a realizar al precionar el botón

    var iter=1;
    $('#moveButton').on('click', function() {
        var random1 = Math.floor(Math.random()*9000)+5000;
        var random2 = Math.floor(Math.random()*13000)+9000;
        var random3 = Math.floor(Math.random()*16000)+13000;
        var random4 = Math.floor(Math.random()*19000)+16000;
        if (estadob1!=1) {
            setTimeout(function(){
                estadob1=5;
                $("#b1").text("Libre y sucia");
                document.getElementById("grid1").style.backgroundColor = "rgb(175, 177, 179)";
            },random1);
        }
        if (estadob2!=1) {
            setTimeout(function(){
                estadob2=5;
                $("#b2").text("Libre y sucia");
                document.getElementById("grid2").style.backgroundColor = "rgb(175, 177, 179)";
            },random2);
        }
        if (estadob3!=1) {
            setTimeout(function(){
                estadob3=5;
                $("#b3").text("Libre y sucia");
                document.getElementById("grid3").style.backgroundColor = "rgb(175, 177, 179)";
            },random3);
        }
        if (estadob4!=1) {
            setTimeout(function(){
                estadob4=5;
                $("#b4").text("Libre y sucia");
                document.getElementById("grid4").style.backgroundColor = "rgb(175, 177, 179)";
            },random4);
        }
        if (!isMoving) {
            const intervalo1 =setInterval(
                function(){
                    if(estadob1==1){
                        if(estadob1==1 && estadob2==1 && estadob3==1 && estadob4==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if(iter==11 || iter==12){
                                moveImage(1000,300);
                                iter++;
                                 
                            }
                            if(iter==9 || iter==10){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                } 
                                iter++;
                                
                            }
                            if(iter==7 || iter==8){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }    
                                iter++; 

                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++; 
                            }
                            
                            if(iter==3 || iter==4){
                               moveImage($grid2.offset().left,$grid2.offset().top);
                               if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                } 
                                iter++;    
                            }
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top);
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }
                                iter++;
                            }
                             
                        }
                        

                        if(estadob1==1 && estadob2==1 && estadob3==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob4==5){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if(iter==7 || iter==8){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;
                                 
                            }
                            if(iter==3 || iter==4){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                } 
                                iter++;    
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top); 
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                } 
                                iter++;
                            }
                            
                        }
                        if(estadob1==1 && estadob2==1 && estadob4==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob3==5){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if(iter==7 || iter==8){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;   
                            }
                            if(iter==3 || iter==4){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                } 
                                iter++;    
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top); 
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                } 
                                iter++;
                            } 
                        }

                        if(estadob1==1 && estadob2==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob4==5){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if((iter==7 || iter==8) && estadob3==5){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;   
                            }
                            if(iter==3 || iter==4){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }
                                iter++;  
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top);
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }  
                                iter++;
                            } 
                        }
                    
                        if(estadob1==1 && estadob3==1 && estadob4==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob2==5){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if(iter==7 || iter==8){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;   
                            }
                            if(iter==3 || iter==4){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                } 
                                iter++;    
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top); 
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                } 
                                iter++;
                            }     
                        }
                        if(estadob1==1 && estadob3==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob4==5){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if((iter==7 || iter==8) && estadob2==5){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;   
                            }
                            if(iter==3 || iter==4){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }
                                iter++;  
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top);
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }  
                                iter++;
                            }      
                        }
                        if(estadob1==1 && estadob4==1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob3==5){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if((iter==7 || iter==8) && estadob2==5){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;   
                            }
                            if(iter==3 || iter==4){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }
                                iter++;  
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top);
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }  
                                iter++;
                            }      
                        }
                        if(estadob2!=1 && estadob3!=1 && estadob4!=1 && !isMoving){
                            if (iter==13) {
                                $("#fin").text("Simulacion Finalizada")
                            }
                            if((iter==11 || iter==12)){
                                moveImage(1000,300);
                                iter++;  
                            }
                            if((iter==9 || iter==10) && estadob4==5){
                                moveImage($grid4.offset().left,$grid4.offset().top);
                                if (iter==10) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }   
                                iter++;   
                            }
                            if((iter==7 || iter==8) && estadob3==5){
                                moveImage($grid3.offset().left,$grid3.offset().top);
                                if (iter==8) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }   
                                iter++;   
                            }
                            if(iter==5 || iter==6){
                                moveImage(1000,300);
                                iter++;   
                            }
                            if((iter==3 || iter==4) && estadob2==5){
                                moveImage($grid2.offset().left,$grid2.offset().top);
                                if (iter==4) {
                                    $("#bateria").text("Nivel de bateria 1%");
                                }
                                iter++;  
                            }  
                            if(iter==1 || iter==2){
                                moveImage($grid1.offset().left,$grid1.offset().top);
                                if (iter==2) {
                                    $("#bateria").text("Nivel de bateria 50%");
                                }  
                                iter++;
                            }  
                        }
                        
                    }
                    else{
                        if(estadob2==1){
                            if(estadob2==1 && estadob3==1 && estadob4==1 && !isMoving){
                                if (iter==13) {
                                    $("#fin").text("Simulacion Finalizada")
                                }
                                if((iter==11 || iter==12)){
                                    moveImage(1000,300);
                                    iter++;  
                                }
                                if((iter==9 || iter==10) && estadob1==5){
                                    moveImage($grid1.offset().left,$grid1.offset().top);
                                    if (iter==10) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }   
                                    iter++;   
                                }
                                if(iter==7 || iter==8){
                                    moveImage($grid4.offset().left,$grid4.offset().top);
                                    if (iter==8) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }   
                                    iter++;   
                                }
                                if(iter==5 || iter==6){
                                    moveImage(1000,300);
                                    iter++;   
                                }
                                if(iter==3 || iter==4){
                                    moveImage($grid3.offset().left,$grid3.offset().top);
                                    if (iter==4) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    } 
                                    iter++;    
                                }  
                                if(iter==1 || iter==2){
                                    moveImage($grid2.offset().left,$grid2.offset().top); 
                                    if (iter==2) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    } 
                                    iter++;
                                }   
                            }
                            if(estadob2==1 && estadob3==1 && !isMoving){
                                if (iter==13) {
                                    $("#fin").text("Simulacion Finalizada")
                                }
                                if((iter==11 || iter==12)){
                                    moveImage(1000,300);
                                    iter++;  
                                }
                                if((iter==9 || iter==10) && estadob4==5){
                                    moveImage($grid4.offset().left,$grid4.offset().top);
                                    if (iter==10) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }   
                                    iter++;   
                                }
                                if((iter==7 || iter==8) && estadob1==5){
                                    moveImage($grid1.offset().left,$grid1.offset().top);
                                    if (iter==8) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }   
                                    iter++;   
                                }
                                if(iter==5 || iter==6){
                                    moveImage(1000,300);
                                    iter++;   
                                }
                                if(iter==3 || iter==4){
                                    moveImage($grid3.offset().left,$grid3.offset().top);
                                    if (iter==4) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }
                                    iter++;  
                                }  
                                if(iter==1 || iter==2){
                                    moveImage($grid2.offset().left,$grid2.offset().top);
                                    if (iter==2) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }  
                                    iter++;
                                }      
                            }
                            if(estadob2==1 && estadob4==1 && !isMoving){
                                if (iter==13) {
                                    $("#fin").text("Simulacion Finalizada")
                                }
                                if((iter==11 || iter==12)){
                                    moveImage(1000,300);
                                    iter++;  
                                }
                                if((iter==9 || iter==10) && estadob3==5){
                                    moveImage($grid3.offset().left,$grid3.offset().top);
                                    if (iter==10) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }   
                                    iter++;   
                                }
                                if((iter==7 || iter==8) && estadob1==5){
                                    moveImage($grid1.offset().left,$grid1.offset().top);
                                    if (iter==8) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }   
                                    iter++;   
                                }
                                if(iter==5 || iter==6){
                                    moveImage(1000,300);
                                    iter++;   
                                }
                                if(iter==3 || iter==4){
                                    moveImage($grid4.offset().left,$grid4.offset().top);
                                    if (iter==4) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }
                                    iter++;  
                                }  
                                if(iter==1 || iter==2){
                                    moveImage($grid2.offset().left,$grid2.offset().top);
                                    if (iter==2) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }  
                                    iter++;
                                }      
                            }
                            if(estadob3!=1 && estadob4!=1 && !isMoving){
                                if (iter==13) {
                                    $("#fin").text("Simulacion Finalizada")
                                }
                                if((iter==11 || iter==12)){
                                    moveImage(1000,300);
                                    iter++;  
                                }
                                if((iter==9 || iter==10) && estadob4==5){
                                    moveImage($grid4.offset().left,$grid4.offset().top);
                                    if (iter==10) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }   
                                    iter++;   
                                }
                                if((iter==7 || iter==8) && estadob3==5){
                                    moveImage($grid3.offset().left,$grid3.offset().top);
                                    if (iter==8) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }   
                                    iter++;   
                                }
                                if(iter==5 || iter==6){
                                    moveImage(1000,300);
                                    iter++;   
                                }
                                if((iter==3 || iter==4) && estadob1==5){
                                    moveImage($grid1.offset().left,$grid1.offset().top);
                                    if (iter==4) {
                                        $("#bateria").text("Nivel de bateria 1%");
                                    }
                                    iter++;  
                                }  
                                if(iter==1 || iter==2){
                                    moveImage($grid2.offset().left,$grid2.offset().top);
                                    if (iter==2) {
                                        $("#bateria").text("Nivel de bateria 50%");
                                    }  
                                    iter++;
                                }
                            }
                        }
                        else{
                            if(estadob3==1){
                                if(estadob3==1 && estadob4==1 && !isMoving){
                                    if (iter==13) {
                                        $("#fin").text("Simulacion Finalizada")
                                    }
                                    if((iter==11 || iter==12)){
                                        moveImage(1000,300);
                                        iter++;  
                                    }
                                    if((iter==9 || iter==10) && estadob2==5){
                                        moveImage($grid2.offset().left,$grid2.offset().top);
                                        if (iter==10) {
                                            $("#bateria").text("Nivel de bateria 1%");
                                        }   
                                        iter++;   
                                    }
                                    if((iter==7 || iter==8) && estadob1==5){
                                        moveImage($grid1.offset().left,$grid1.offset().top);
                                        if (iter==8) {
                                            $("#bateria").text("Nivel de bateria 50%");
                                        }   
                                        iter++;   
                                    }
                                    if(iter==5 || iter==6){
                                        moveImage(1000,300);
                                        iter++;   
                                    }
                                    if(iter==3 || iter==4){
                                        moveImage($grid4.offset().left,$grid4.offset().top);
                                        if (iter==4) {
                                            $("#bateria").text("Nivel de bateria 1%");
                                        }
                                        iter++;  
                                    }  
                                    if(iter==1 || iter==2){
                                        moveImage($grid3.offset().left,$grid3.offset().top);
                                        if (iter==2) {
                                            $("#bateria").text("Nivel de bateria 50%");
                                        }  
                                        iter++;
                                    }
                                }
                                if(estadob4!=1 && !isMoving){
                                    if (iter==13) {
                                        $("#fin").text("Simulacion Finalizada")
                                    }
                                    if((iter==11 || iter==12)){
                                        moveImage(1000,300);
                                        iter++;  
                                    }
                                    if((iter==9 || iter==10) && estadob4==5){
                                        moveImage($grid4.offset().left,$grid4.offset().top);
                                        if (iter==10) {
                                            $("#bateria").text("Nivel de bateria 1%");
                                        }   
                                        iter++;   
                                    }
                                    if((iter==7 || iter==8) && estadob2==5){
                                        moveImage($grid2.offset().left,$grid2.offset().top);
                                        if (iter==8) {
                                            $("#bateria").text("Nivel de bateria 50%");
                                        }   
                                        iter++;   
                                    }
                                    if(iter==5 || iter==6){
                                        moveImage(1000,300);
                                        iter++;   
                                    }
                                    if((iter==3 || iter==4) && estadob1==5){
                                        moveImage($grid1.offset().left,$grid1.offset().top);
                                        if (iter==4) {
                                            $("#bateria").text("Nivel de bateria 1%");
                                        }
                                        iter++;  
                                    }  
                                    if(iter==1 || iter==2){
                                        moveImage($grid3.offset().left,$grid3.offset().top);
                                        if (iter==2) {
                                            $("#bateria").text("Nivel de bateria 50%");
                                        }  
                                        iter++;
                                    }
                                }
                            }
                            else{
                                if(estadob4==1 && !isMoving){
                                    if (iter==13) {
                                        $("#fin").text("Simulacion Finalizada")
                                    }
                                    if((iter==11 || iter==12)){
                                        moveImage(1000,300);
                                        iter++;  
                                    }
                                    if((iter==9 || iter==10) && estadob3==5){
                                        moveImage($grid3.offset().left,$grid3.offset().top);
                                        if (iter==10) {
                                            $("#bateria").text("Nivel de bateria 1%");
                                        }   
                                        iter++;   
                                    }
                                    if((iter==7 || iter==8) && estadob2==5){
                                        moveImage($grid2.offset().left,$grid2.offset().top);
                                        if (iter==8) {
                                            $("#bateria").text("Nivel de bateria 50%");
                                        }   
                                        iter++;   
                                    }
                                    if(iter==5 || iter==6){
                                        moveImage(1000,300);
                                        iter++;   
                                    }
                                    if((iter==3 || iter==4) && estadob1==5){
                                        moveImage($grid1.offset().left,$grid1.offset().top);
                                        if (iter==4) {
                                            $("#bateria").text("Nivel de bateria 1%");
                                        }
                                        iter++;  
                                    }  
                                    if(iter==1 || iter==2){
                                        moveImage($grid4.offset().left,$grid4.offset().top);
                                        if (iter==2) {
                                            $("#bateria").text("Nivel de bateria 50%");
                                        }  
                                        iter++;
                                    }    
                                }
                                else{
                                    if (estadob1!=1 && estadob2!=1 && estadob3!=1 && estadob4!=1 && !isMoving) {
                                        if (iter==13) {
                                            $("#fin").text("Simulacion Finalizada")
                                        }
                                        if((iter==11 || iter==12)){
                                            moveImage(1000,300);
                                            iter++;  
                                        }
                                        if((iter==9 || iter==10) && estadob4==5){
                                            moveImage($grid4.offset().left,$grid4.offset().top);
                                            if (iter==10) {
                                                $("#bateria").text("Nivel de bateria 1%");
                                            }   
                                            iter++;   
                                        }
                                        if((iter==7 || iter==8) && estadob3==5){
                                            moveImage($grid3.offset().left,$grid3.offset().top);
                                            if (iter==8) {
                                                $("#bateria").text("Nivel de bateria 50%");
                                            }   
                                            iter++;   
                                        }
                                        if(iter==5 || iter==6){
                                            moveImage(1000,300);
                                            iter++;   
                                        }
                                        if((iter==3 || iter==4) && estadob2==5){
                                            moveImage($grid2.offset().left,$grid2.offset().top);
                                            if (iter==4) {
                                                $("#bateria").text("Nivel de bateria 1%");
                                            }
                                            iter++;  
                                        }  
                                        if((iter==1 || iter==2) && estadob1==5){
                                            moveImage($grid1.offset().left,$grid1.offset().top);
                                            if (iter==2) {
                                                $("#bateria").text("Nivel de bateria 50%");
                                            }  
                                            iter++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                },2000);
                
            
        }
        
    });
    

    function moveImage(hor,ver) {
        
        // Mover la imagen en la dirección actual
        isMoving = true; // Marcar que la imagen está en movimiento
        
        const interval = setInterval(function() {
            if(hor==1000 && ver==300){
                document.getElementById("carga").style.backgroundColor = "rgb(255, 255, 120)";
                $("#estado").text("Cargando");
            }
            if(hor==400 || hor==1500){
                document.getElementById("carga").style.backgroundColor = "rgb(255, 255, 255)";
                $("#estado").text("Limpiando");
            }
            switch (direction) {
                case 'right':
                    currentPosition.col++;
                    if (currentPosition.col >= 2) {
                        currentPosition.col = 1;
                        currentPosition.row++;
                        direction = 'left';
                    }
                    break;
                case 'left':
                    currentPosition.col--;
                    if (currentPosition.col < 0) {
                        currentPosition.col = 0;
                        currentPosition.row++;
                        direction = 'right';
                    }
                    break;
            }
            // Mover la imagen a la nueva posición
            const left = currentPosition.col * 100+hor; // Ancho de la celda
            const top = currentPosition.row * 100+ver; // Alto de la celda
            if (hor==1000 && ver==300) {
                $image.animate({ left:'1000px', top:'300px' }, 500, function() {
                    if (currentPosition.row === 1 && currentPosition.col === 0) {
                        isMoving = false; // Marcar que la animación ha terminado
                        currentPosition = { row: 0, col: -1 }; 
                        clearInterval(interval); // Detener el intervalo
                        $("#bateria").text("Nivel de bateria 100%");
                        $("#estado").text("En reposo");
                        
                    }
                });
            }
            else{
                $image.animate({ left: left + 'px', top: top + 'px' }, 500, function() {
                    if (currentPosition.row === 1 && currentPosition.col === 0) {
                        isMoving = false; // Marcar que la animación ha terminado
                        currentPosition = { row: 0, col: -1 }; 
                        clearInterval(interval); // Detener el intervalo
                        
                        if(hor==400 && ver==300){
                            $("#b1").text("Libre y limpia");
                            document.getElementById("grid1").style.backgroundColor = "rgb(89, 224, 123)";
                            document.getElementById("carga").style.backgroundColor = "rgb(255, 255, 255)";
                        }
                        if(hor==1500 && ver==300){
                            
                            $("#b2").text("Libre y limpia");
                            document.getElementById("grid2").style.backgroundColor = "rgb(89, 224, 123)";
                            document.getElementById("carga").style.backgroundColor = "rgb(255, 255, 255)";
                            
                        }
                        if(hor==400 && ver==800){
                            
                            $("#b3").text("Libre y limpia"); 
                            document.getElementById("grid3").style.backgroundColor = "rgb(89, 224, 123)";
                            document.getElementById("carga").style.backgroundColor = "rgb(255, 255, 255)";
                            
                        }
                        if(hor==1500 && ver==800){
                            
                            $("#b4").text("Libre y limpia"); 
                            document.getElementById("grid4").style.backgroundColor = "rgb(89, 224, 123)";
                            document.getElementById("carga").style.backgroundColor = "rgb(255, 255, 255)";
                            
                        }
                    }
                });
            }
            
        },2000);
        
        
    }
        

        
});