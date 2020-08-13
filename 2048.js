function Celda(fila,columna) {
    this.fila = fila;
    this.columna = columna;
    this.ficha = null;
}

var celda0_0 = new Celda(0,0)
var celda0_1 = new Celda(0,1)
var celda0_2 = new Celda(0,2)
var celda0_3 = new Celda(0,3)
var celda1_0 = new Celda(1,0)
var celda1_1 = new Celda(1,1)
var celda1_2 = new Celda(1,2)
var celda1_3 = new Celda(1,3)
var celda2_0 = new Celda(2,0)
var celda2_1 = new Celda(2,1)
var celda2_2 = new Celda(2,2)
var celda2_3 = new Celda(2,3)
var celda3_0 = new Celda(3,0)
var celda3_1 = new Celda(3,1)
var celda3_2 = new Celda(3,2)
var celda3_3 = new Celda(3,3)

var grid = [
    [celda0_0,celda0_1,celda0_2,celda0_3],
    [celda1_0,celda1_1,celda1_2,celda1_3],
    [celda2_0,celda2_1,celda2_2,celda2_3],
    [celda3_0,celda3_1,celda3_2,celda3_3]
]

function Ficha(elemento,n) {
    this.elementoHtml = elemento;
    this.numero = n;
}

function fichaAleatoria() {
    var numero = Math.round(Math.random([0,1]))
    var num = 0;
    if (numero == 0) num = 2
    else num = 4

    var disponibles = celdasLibres();
    var celda = disponibles[Math.floor(Math.random()*disponibles.length)];
    agregarFicha(num, celda.fila, celda.columna)
}

function celdasLibres() {
    var disponibles = []
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++){
            if (grid[i][j].ficha == null){
                disponibles.push(grid[i][j])
            }
        }
    } 
    return disponibles
}

function buscarCelda(fila,columna){
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++){
            if (grid[i][j].fila == fila && grid[i][j].columna == columna){
                return grid[i][j]
            }
        }
    } 
}

function agregarFicha(numero, fila, columna){
    var para = document.createElement("DIV");
    var div_ficha_inner = document.createElement("DIV");               
    div_ficha_inner.setAttribute("class",'ficha-inner');
    var clase = 'ficha ficha-' + numero + ' fichaPosicion' + fila + '_' + columna + ' nuevo'

    var div_ficha_numero
    
    switch (numero){
        case 2:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 4:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 8:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 16:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 32:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 64:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 128:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 256:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 512:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 1024:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;  
        case 2048:            
            para.setAttribute("class",clase);        
            div_ficha_numero = document.getElementById('fichas-contenedor').appendChild(para);
            div_ficha_inner.innerText= numero;      
    }

    div_ficha_numero.appendChild(div_ficha_inner)
    var celda = buscarCelda(fila,columna);
    var ficha = new Ficha(div_ficha_numero, numero)
    celda.ficha = ficha;    
}

function moverTodo(direccion){
    var dispo = []
    var ocu = []
    var movimientos = true;
    if (direccion == 37 || direccion == 39){
        for (var i = 0; i < 4; i++){
            var disponibles = celdasLibres();
            for (var j = 0; j < 4; j++){
                if (disponibles.indexOf(grid[i][j]) >= 0){
                    dispo.push(grid[i][j])
                }
                else{
                    ocu.push(grid[i][j])
                }
            }
                //izquierda
                if (direccion == 37){
                    while (ocu.length != 0){
                        if(ocu[0].columna != 0){
                            if(dispo.length != 0 && dispo[0].columna == 0){
                                moverFicha(ocu[0], dispo[0])
                                dispo.shift()
                                dispo.push(ocu[0])
                            }  
                            else if(grid[i][ocu[0].columna-1].ficha != null && grid[i][ocu[0].columna-1].ficha.numero == ocu[0].ficha.numero){
                                fusionar(grid[i][ocu[0].columna-1],ocu[0]);
                                ocu[0].ficha = null;
                                dispo.push(ocu[0]);
                            }
                            else if(dispo.length != 0 && ocu[0].columna > dispo[0].columna){
                                if(grid[i][dispo[0].columna-1].ficha != null && grid[i][dispo[0].columna-1].ficha.numero == ocu[0].ficha.numero){
                                    console.log('ola')
                                    fusionar(grid[i][dispo[0].columna-1],ocu[0]);
                                    ocu[0].ficha = null;
                                    dispo.push(ocu[0]);
                                }
                                else{
                                    moverFicha(ocu[0], dispo[0]) 
                                    dispo.shift()
                                    dispo.push(ocu[0])
                                }   
                            }   
                            
                            dispo.sort(function (a, b) {
                                return (a.columna - b.columna)
                            })
                        }
                        ocu.shift()
                    }
                }
            
                //derecha
                if (direccion == 39){
                    while (ocu.length != 0){
                        if(ocu[ocu.length-1].columna != 3){
                            if(dispo.length != 0 && dispo[dispo.length-1].columna == 3){
                                moverFicha(ocu[ocu.length-1], dispo[dispo.length-1])
                                dispo.pop()
                                dispo.push(ocu[ocu.length-1])
                            }  
                            else if(grid[i][ocu[ocu.length-1].columna+1].ficha != null && grid[i][ocu[ocu.length-1].columna+1].ficha.numero == ocu[ocu.length-1].ficha.numero){
                                fusionar(grid[i][ocu[ocu.length-1].columna+1],ocu[ocu.length-1]);
                                ocu[ocu.length-1].ficha = null;
                                dispo.push(ocu[ocu.length-1]);
                            }
                            else if(dispo.length != 0 && ocu[ocu.length-1].columna < dispo[dispo.length-1].columna){
                                if(grid[i][dispo[dispo.length-1].columna+1].ficha != null && grid[i][dispo[dispo.length-1].columna+1].ficha.numero == ocu[ocu.length-1].ficha.numero){
                                    console.log('ola')
                                    fusionar(grid[i][dispo[dispo.length-1].columna+1],ocu[ocu.length-1]);
                                    ocu[ocu.length-1].ficha = null;
                                    dispo.push(ocu[0]);
                                }
                                else{
                                    moverFicha(ocu[ocu.length-1], dispo[dispo.length-1])
                                    dispo.pop()
                                    dispo.push(ocu[ocu.length-1])
                                }
                                
                            }
                            
                            dispo.sort(function (a, b) {
                                return (a.columna - b.columna)
                            })
                        }
                        ocu.pop()
                    }
                }
            
            ocu=[]
            dispo=[]
        } 
    }

    if (direccion == 38 || direccion == 40){
        for (var i = 0; i < 4; i++){
            var disponibles = celdasLibres();
            for (var j = 0; j < 4; j++){
                if (disponibles.indexOf(grid[j][i]) >= 0){
                    dispo.push(grid[j][i])
                }
                else{
                    ocu.push(grid[j][i])
                }
            }
            
                //arriba
                if (direccion == 38){
                    while (ocu.length != 0){
                        if(ocu[0].fila != 0){
                            if(dispo.length != 0 && dispo[0].fila == 0){
                                moverFicha(ocu[0], dispo[0])
                                dispo.shift()
                                dispo.push(ocu[0])
                            }  
                            else if(grid[ocu[0].fila-1][i].ficha != null && grid[ocu[0].fila-1][i].ficha.numero == ocu[0].ficha.numero){
                                fusionar(grid[ocu[0].fila-1][i],ocu[0]);
                                ocu[0].ficha = null;
                                dispo.push(ocu[0]);
                            }
                            else if(dispo.length != 0 && ocu[0].fila > dispo[0].fila){
                                if(grid[dispo[0].fila-1][i].ficha != null && grid[dispo[0].fila-1][i].ficha.numero == ocu[0].ficha.numero){
                                    fusionar(grid[dispo[0].fila-1][i],ocu[0]);
                                    ocu[0].ficha = null;
                                    dispo.push(ocu[0]);
                                }
                                else{
                                    moverFicha(ocu[0], dispo[0]) 
                                    dispo.shift()
                                    dispo.push(ocu[0])
                                }
                                
                            }   
                            
                            dispo.sort(function (a, b) {
                                return (a.fila - b.fila)
                            })
                        }
                        ocu.shift()
                    }
                }
            
                //abajo
                if (direccion == 40){
                    while (ocu.length != 0){
                        if(ocu[ocu.length-1].fila != 3){
                            if(dispo.length != 0 && dispo[dispo.length-1].fila == 3){
                                moverFicha(ocu[ocu.length-1], dispo[dispo.length-1])
                                dispo.pop()
                                dispo.push(ocu[ocu.length-1])
                            }  
                            else if(grid[ocu[ocu.length-1].fila+1][i].ficha != null && grid[ocu[ocu.length-1].fila+1][i].ficha.numero == ocu[ocu.length-1].ficha.numero){
                                fusionar(grid[ocu[ocu.length-1].fila+1][i],ocu[ocu.length-1]);
                                ocu[ocu.length-1].ficha = null;
                                dispo.push(ocu[ocu.length-1]);
                            }
                            else if(dispo.length != 0 && ocu[ocu.length-1].fila < dispo[dispo.length-1].fila){
                                if(grid[dispo[dispo.length-1].fila+1][i].ficha != null && grid[dispo[dispo.length-1].fila+1][i].ficha.numero == ocu[ocu.length-1].ficha.numero){
                                    fusionar(grid[dispo[dispo.length-1].fila+1][i],ocu[ocu.length-1]);
                                    ocu[ocu.length-1].ficha = null;
                                    dispo.push(ocu[ocu.length-1]);
                                }
                                else{
                                    moverFicha(ocu[ocu.length-1], dispo[dispo.length-1])
                                    dispo.pop()
                                    dispo.push(ocu[ocu.length-1])
                                }
                                
                            }
                            
                            dispo.sort(function (a, b) {
                                return (a.fila - b.fila)
                            })
                        }
                        ocu.pop()
                    }
                }
            
            ocu=[]
            dispo=[]
        } 
    }
    disponibles = celdasLibres()
    if (disponibles.length != 0){
        fichaAleatoria();
    } 
        
}


function moverFicha(mover, disponible){
    var clase = 'ficha ficha-' + mover.ficha.numero + ' fichaPosicion' + disponible.fila + '_' + disponible.columna;
    mover.ficha.elementoHtml.className = clase; 
    disponible.ficha = mover.ficha;
    mover.ficha = null;
}

function fusionar(fusion, eliminar){
    eliminar.ficha.elementoHtml.parentNode.removeChild(eliminar.ficha.elementoHtml);
    var num = fusion.ficha.numero * 2;
    var clase = 'ficha ficha-' + num + ' fichaPosicion' + fusion.fila + '_' + fusion.columna + ' merged';
    fusion.ficha.elementoHtml.className = clase;
    fusion.ficha.elementoHtml.firstChild.innerHTML = num;
    fusion.ficha.numero = num;
}

function restart(){
    var element = document.getElementsById('fichas-contenedor')
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}



