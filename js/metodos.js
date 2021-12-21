
    function aleatorio(inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }
    //document.getElementById("demo").innerHTML = aleatorio(1,100);

    function comparar(numero, aleatorio){
        var comparado = numero - aleatorio;
        var resultado = "";

        if(comparado > 0){
            resultado = "mayor";
        }
        if(comparado < 0){
            resultado = "menor";
        }
        if(comparado == 0){
            resultado = "correcto";
        }
        if(numero > 100 || numero < 0 ){
            resultado = "Fuera";
        }

        return resultado;
    }

    function sumarIntento(contador){

        if(contador<=10){
            contador++;
        }

        return contador;
    }

    function agregarVector(vector,valorIntento){
        var tmp = 0;
        for(var i=0;i<10;i++){

            if(vector[i] < 0){
                vector[i] = valorIntento;
                tmp++;
            }
            if(tmp!=0){
                break;
            }

        }
    return vector;
    }

    function mostrarVector(vector){
        var intentos ="";
        for(var i=0;i<10;i++){

            if(vector[i] > 0){
                intentos=intentos+vector[i]+" ";
                
            }

        }
    return intentos;
    }

    
    
    let vec = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    var ale = aleatorio(1,100);
    var contar = 0;
   
    //deja ver el numero aleatorio (pruebas de funcionamiento)
    //document.getElementById("demo").innerHTML = ale;
    
    

    function boton(){
        var temp = false;
        contar++;
        if(contar <= 10){
            document.getElementById("texto").innerHTML = comparar(document.getElementById("numPrueba").value,ale);
            agregarVector(vec,document.getElementById("numPrueba").value);

            if(comparar(document.getElementById("numPrueba").value,ale) == "correcto"){

                document.getElementById("fin").innerHTML = mostrarVector(vec);
                document.getElementById("demo").innerHTML = ale;
                temp = true;
                alert("ganaste");

                
            }
            
            document.getElementById("numIntentos").innerHTML = contar;
        }
        
        if(contar==10 && temp == false){

            document.getElementById("numPrueba").textContent = "";
            document.getElementById("fin").innerHTML = mostrarVector(vec);
            document.getElementById("demo").innerHTML = ale;
            alert("10 Intentos, ¡Haz Perdido!")
            
            
            
        }
        
    }
    function recargar(){
        document.location.reload();
    }
