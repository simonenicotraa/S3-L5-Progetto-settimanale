let numCal=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArr=[]

 function canc(){
    document.getElementById('display').innerHTML=('')
 } 
 
function valore0(){
    document.getElementById('display').innerHTML=numCal[0]
    newArr.push(numCal[0])
  /*   console.log(newArr) */
}


 function valore1(){
    document.getElementById('display').innerHTML=numCal[1]
    newArr.push(numCal[1])
   /*  console.log(newArr) */
}


function valore2(){

    document.getElementById('display').innerHTML=numCal[2]
    newArr.push(numCal[2])
    /* console.log(newArr) */
}

function valore3(){
    document.getElementById('display').innerHTML=numCal[3]
    newArr.push(numCal[3])
    /* console.log(newArr) */
}

function valore4(){
        document.getElementById('display').innerHTML=numCal[4]
        newArr.push(numCal[4])
       /*  console.log(newArr) */
    }

function valore5(){
   
    document.getElementById('display').innerHTML=numCal[5]
    newArr.push(numCal[5])
    /* console.log(newArr) */
}
function valore6(){
        document.getElementById('display').innerHTML=numCal[6]
        newArr.push(numCal[6])
        /* console.log(newArr) */
    }
function valore7(){  
   document.getElementById('display').innerHTML=numCal[7]
   newArr.push(numCal[7])
   /* console.log(newArr) */
}

function valore8(){
    document.getElementById('display').innerHTML=numCal[8]
    newArr.push(numCal[8])
    /* console.log(newArr) */
}

function valore9(){
    document.getElementById('display').innerHTML=numCal[9]
    newArr.push(numCal[9])
    /* console.log(newArr) */
}

+document.getElementById('display').innerHTML=newArr.toString

function canc(){
    newArr.pop()
}

function somma(){
   document.getElementById('display').innerHTML='+';
}
function sottrazione(){
    document.getElementById('display').innerHTML='-';
}
/* resultsomma=newArr[0]+newArr[1] */

function resultsomma(){
    document.getElementById('display').innerHTML=newArr[0]+newArr[1]
 }
function resultsottrazione(){
    document.getElementById('display').innerHTML=newArr[0]-newArr[1]
}

