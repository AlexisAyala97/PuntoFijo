var fn;
var n=0;
var x0=1;
var op;
var xn=0;
var aux=0;
var i=0;
var resul;
var dcml;
var tab=document.getElementById("contenido");
var radio;

/** Esta Funcion sirve para redondear los numeros */
function redondeo(numero, decimales)
{
    var flotante = parseFloat(numero); // Se convierte el numero a un flotante
    var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales); // se redondea el flotante 
    resul=resultado;
}

function detector() {
    var formulario = document.forms[0];
        for (var i = 0; i < formulario.eq.length; i++) {
            if (formulario.eq[i].checked) {
        break;
            }
        }
        //alert('el marcado es: ' + formulario.eq[i].value + '.')
        radio = formulario.eq[i].value;
}

function calcular(){

    x0 = document.getElementById("x0").value;
    dcml = document.getElementById("dcml").value;
    console.log(x0);
    clean();
    detector();
    //console.log(radio);
    if(radio==0){
        alert("Selecione una ecuacion");
    }else{
        switch(radio){
        
            case '1':
            do{
                i++;
                
                if(dcml<=0){
                    alert("Error, debe haber por lo menos un decimal, debe ser mayor de 1.");
                }else{
        
                fn=(2-(Math.pow(Math.E,-x0))); // g(x)
                x0=fn;
                redondeo(x0,dcml);
                console.log(i," - ", resul);
        
                fn=(2-(Math.pow(Math.E,-resul)));// g(x)
                var flotante = parseFloat(fn); // Se convierte el numero a un flotante
                var resultado = Math.round(flotante*Math.pow(10,dcml))/Math.pow(10,dcml); // se redondea el flotante 
                var result = resultado;
                console.log(result);
                
                    
                var eq5 = document.getElementById("mensaje");
                eq5.innerHTML  = "<label align='justify' style='color:black'><h4> 2-e<sup>-x</sup>  raiz = "+ result+" </h4></label> ";
        
                tab=document.getElementById("contenido");
                tab.innerHTML+= "<tr> <th scope='row'>"+i+"</th>"+
                "<td>"+resul+"</td></tr>";
                
                n++;
                }
                
            }while(result!=resul);
            
            break;
    
            case '2':
            do{
                i++;
                
                if(dcml<=0){
                    alert("Error, debe haber por lo menos un decimal, debe ser mayor de 1.");
                }else{
                    console.log(x0);
                fn=(3*(Math.pow(x0,2))-3); //g(x)
                x0=fn;
                redondeo(x0,dcml);
                console.log(i," - ", resul);
        
                fn=(3*(Math.pow(x0,2))-3); //g(x)

                var flotante = parseFloat(fn); // Se convierte el numero a un flotante
                var resultado = Math.round(flotante*Math.pow(10,dcml))/Math.pow(10,dcml); // se redondea el flotante 
                var result = resultado;
                console.log(result);
                var infi = isFinite(result);    
                console.log(infi);    
                if(infi == true){
                    var eq5 = document.getElementById("mensaje");
                    eq5.innerHTML  = "<label align='justify' style='color:black'><h4> x<sup>3</sup>-3x+1 No tiene solución !!</h4></label> ";
                }else{
                var eq5 = document.getElementById("mensaje");
                eq5.innerHTML  = "<label align='justify' style='color:black'><h4> x<sup>3</sup>-3x+1 tiene solución</h4></label> ";
                }
                tab=document.getElementById("contenido");
                tab.innerHTML+= "<tr> <th scope='row'>"+i+"</th>"+
                "<td>"+resul+"</td></tr>";
                
                n++;
                }
                
            }while(result!=resul);      
            break;

            case '3':
            do{
                i++;
                
                if(dcml<=0){
                    alert("Error, debe haber por lo menos un decimal, debe ser mayor de 1.");
                }else{
                    console.log(x0);
                fn=(Math.cos(x0)); //g(x)
                x0=fn;
                redondeo(x0,dcml);
                console.log(i," - ", resul);
        
                fn=(Math.cos(x0)); //g(x)

                var flotante = parseFloat(fn); // Se convierte el numero a un flotante
                var resultado = Math.round(flotante*Math.pow(10,dcml))/Math.pow(10,dcml); // se redondea el flotante 
                var result = resultado;
                console.log(result);

                var eq5 = document.getElementById("mensaje");
                eq5.innerHTML  = "<label align='justify' style='color:black'><h4> Cos(X) raiz = "+ result+" </h4></label> ";
        
                tab=document.getElementById("contenido");
                tab.innerHTML+= "<tr> <th scope='row'>"+i+"</th>"+
                "<td>"+resul+"</td></tr>";
                
                n++;
                }
                
            }while(result!=resul); 
                 
            break;

            case '4':
            do{
                i++;
                
                if(dcml<=0){
                    alert("Error, debe haber por lo menos un decimal, debe ser mayor de 1.");
                }else{
                    console.log(x0);
                fn=(Math.pow(Math.E,-x0)); //g(x)
                x0=fn;
                redondeo(x0,dcml);
                console.log(i," - ", resul);
        
                fn=(Math.pow(Math.E,-x0)); //g(x)

                var flotante = parseFloat(fn); // Se convierte el numero a un flotante
                var resultado = Math.round(flotante*Math.pow(10,dcml))/Math.pow(10,dcml); // se redondea el flotante 
                var result = resultado;
                console.log(result);

                var eq5 = document.getElementById("mensaje");
                eq5.innerHTML  = "<label align='justify' style='color:black'><h4> e<sup>-x</sup> raiz = "+ result+" </h4></label> ";
        
                tab=document.getElementById("contenido");
                tab.innerHTML+= "<tr> <th scope='row'>"+i+"</th>"+
                "<td>"+resul+"</td></tr>";
                
                n++;
                }
                
            }while(result!=resul); 
            break;

            case '5':
            do{
                i++;
                
                if(dcml<=0){
                    alert("Error, debe haber por lo menos un decimal, debe ser mayor de 1.");
                }else{
                    console.log(x0);
                fn=(((-Math.pow(x0,3))+3)/(6)); //g(x)
                
                x0=fn;
                redondeo(x0,dcml);
                console.log(i," - ", resul);
        
                fn=(((-Math.pow(x0,3))+3)/(6)); //g(x)

                var flotante = parseFloat(fn); // Se convierte el numero a un flotante
                var resultado = Math.round(flotante*Math.pow(10,dcml))/Math.pow(10,dcml); // se redondea el flotante 
                var result = resultado;
                console.log(result);
                
                var eq5 = document.getElementById("mensaje");
                eq5.innerHTML  = "<label align='justify' style='color:black'><h4> -x<sup>3</sup>+3 / 6  raiz = "+ result+"</4></label> ";
                
                tab=document.getElementById("contenido");
                tab.innerHTML+= "<tr> <th scope='row'>"+i+"</th>"+
                "<td>"+resul+"</td></tr>";
                
                n++;
                }
                
            }while(result!=resul); 
            break;
            
            case 6:
                // Ecuacion personalizada, aqui podra ingresar la ecuacion que usted desee comprobar.
                do{
                i++;
                
                if(dcml<=0){
                    alert("Error, debe haber por lo menos un decimal, debe ser mayor de 1.");
                }else{
                    console.log(x0);
                /**/ fn=(((-Math.pow(x0,3))+3)/(6)); //g(x) fn sera la funcion con x despejada para ello tendra que escribir la funcion ya despejada 
                //para ello usara Math ya sea para elevar o para usar sen cos o tan    
                /*
                Math.pow(x0,potencia);
                Math.cos(x0);
                la funcion se debe escribir dos veces donde estan los /**/ /* la primera sera para tomar el primer dato, la segunda sera para comprobarlo
                esta funcion no comprueba si tiene solucion la raiz no evalua en la derivada.
                    */    
                x0=fn;
                redondeo(x0,dcml);
                console.log(i," - ", resul);
        
                /**/ fn=(((-Math.pow(x0,3))+3)/(6)); //g(x)

                var flotante = parseFloat(fn); // Se convierte el numero a un flotante
                var resultado = Math.round(flotante*Math.pow(10,dcml))/Math.pow(10,dcml); // se redondea el flotante 
                var result = resultado;
                console.log(result);
                
                var eq5 = document.getElementById("mensaje");
                eq5.innerHTML  = "<label align='justify' style='color:black'><h4> -x<sup>3</sup>+3 / 6  raiz = "+ result+"</4></label> ";
                
                tab=document.getElementById("contenido");
                tab.innerHTML+= "<tr> <th scope='row'>"+i+"</th>"+
                "<td>"+resul+"</td></tr>";
                
                n++;
                }
                
            }while(result!=resul); 
            break;
        }
    }
};

function clean(){
    //x0 = document.getElementById("x0");
   // dcml = document.getElementById("dcml").innerHTML = " ";
    //x0.innerHTML = "";
    tab=document.getElementById("contenido");
    tab.innerHTML  = " ";
    i=0;
}
