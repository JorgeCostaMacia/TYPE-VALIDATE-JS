"use strict";

function esTexto(dato){
    let controlLetra = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i])){ controlLetra = false; i = dato.length; }
        }
    } else { controlLetra = false; }
    return controlLetra;
}

function esTextoNumero(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i]) && !esNumeros(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}

function esTextoEspacio(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esLetra(dato[i]) && !esEspacio(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}
function esNumeroMas(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esNumero(dato[i]) && !esMas(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}

function esNumeroGuion(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esNumero(dato[i]) && !esGuion(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}

function esNumeros(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esNumero(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}

function esNumeroDecimal(dato){
    let nums = dato.split('.');
    return nums.length === 2 && (nums[0] === "0" || parseInt(nums[0])) && (nums[1] === "0" || parseInt(nums[1]));
}

function esTextoEspacioPuntoComaBarraNumero(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esTexto(dato[i]) && !esEspacio(dato[i]) && !esPunto(dato[i]) && !esComa(dato[i]) && !esNumero(dato[i]) && !esBarra(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}

function esTextoPunto(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esTexto(dato[i]) && !esPunto(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}

function esTextoBarra(dato){
    let controlDato = true;
    if(dato !== "" && dato !== null){
        for(let i = 0; i < dato.length; i++){
            if(!esTexto(dato[i]) && !esPunto(dato[i])){ controlDato = false; i = dato.length; }
        }
    } else { controlDato = false; }
    return controlDato;
}


function esNumeroPositivoEntero(dato){
    return parseInt(dato) && esPositivo(dato) && esEntero(dato);
}

function esLetra(dato) {
    return (dato.charCodeAt() > 64 && dato.charCodeAt() < 91) || dato.charCodeAt() === 165 || dato.charCodeAt() === 164 ||
        (dato.charCodeAt() > 96 && dato.charCodeAt() < 123);
}

function esEspacio(dato){
    return dato.charCodeAt() === 32;
}
function esNumero(dato){
    return dato.charCodeAt() > 47 && dato.charCodeAt() < 58;
}

function esPositivo(dato){
    return 1 * dato > 0;
}
function esEntero(dato){
    return 1 * dato % 1 === 0;
}

function esGuion(dato){
    return dato.charCodeAt() === 45;
}

function esPunto(dato){
    return dato.charCodeAt() === 46;
}

function esComa(dato){
    return dato.charCodeAt() === 44;
}

function esContBarra(dato){
    return dato.charCodeAt() === 47;
}

function esBarra(dato){
    return dato.charCodeAt() === 92;
}

function esMas(dato){
    return dato.charCodeAt() === 43;
}

function dosDecimales(dato){
    if(dato.split(".").length > 1){
        if(dato.split(".")[1].length <= 2){
            return true;
        }
        else{ return false};
    }
    else{ return false};
}