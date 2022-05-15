/* function display(num){
    document.calcolatrice.schermo.value = document.calcolatrice.schermo.value+num
}
function calcola(){
    var numeri = document.calcolatrice.schermo.value;
    if(numeri){
        document.calcolatrice.schermo.value = eval(numeri)
    }
}
function reset(){
     document.calcolatrice.schermo.value = '';
}
function cancella(){
    var numeri = document.calcolatrice.schermo.value;
    document.calcolatrice.schermo.value = numeri.substring(0,numeri.length-1);
}

 */
var num1;
var num2;
var operazione;
var calcolo;
var dot;

function display(cifra){
    //Controlla se abbiamo inserito il punto
    if(dot=='.' && cifra == '.')
    {
        return
    }
    if(cifra == '.'){
        dot = cifra ;
    }

    var a= document.getElementById('schermo').value
    document.getElementById('schermo').innerHTML=a+cifra;
    
}
function annulla(num){
    document.getElementById('schermo').innerHTML=num;
    document.getElementById('schermo2').innerHTML=num;
    num1 ='';
    num2 ='';
    operazione ='';
    calcola ='';
    dot ='';
}

function operazioneTipo(tipo){
    //Controlla se già abbiamo inserito un operazione
    if(operazione == '+'||operazione == '-'||operazione == '*'||operazione == '/')
    {
    return alert('Hai già inserito un operazione')
    }

    operazione = tipo;
    num1= document.getElementById('schermo').value;
    document.getElementById('schermo2').innerHTML=num1+operazione;
    document.getElementById("schermo").value = '';
    dot='';
} 



function result(){
    num2= +document.getElementById('schermo').value
     //Trasforma le stringhe in numeri
     num1 = +(num1)
     num2 = +(num2)
     console.log(typeof num1)
    
    if (operazione=='*'){ 
        calcolo= num1*num2 
    }
    else if (operazione=='+'){
        calcolo= num1+num2;
    }    
    else if (operazione=='-'){
        calcolo= num1-num2;
    }        
    else if (operazione=='/'){
        calcolo= num1/num2;
    }
    else{
        alert('Non hai selezionato nessuna operazione')
        
    }

    document.getElementById('schermo2').innerHTML=num1+operazione+num2+'='+calcolo
    document.getElementById("schermo").value = '';
    }
    

