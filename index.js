const cell=document.querySelectorAll('.square')



let PLAYER_X='x';
let PLAYER_O='o';
let bollean=true





// function for displaying the x cells and the o cells 

function displayCells(){
    cell.forEach((e)=>{

        e.addEventListener('click',()=>{

            if(bollean){
            e.innerHTML=PLAYER_X
            bollean=false
            e.style.pointerEvents = "none"
            }    
            else{
                e.innerHTML=PLAYER_O
                bollean=true
                e.style.pointerEvents = "none"
            }
            setWinner()
            
            })    })
    
    

}
displayCells()
// set winner function that decide who is the winner






function setWinner(){
 let square=[]
 for(let i=1;i<10;i++){square[i]=document.getElementById('item'+[i]).innerHTML}

 if (square[1]===square[2]&&square[2]===square[3]&& square[1]!=''){
   
setLogicResult(1,2,3,square[1])
}else if (square[4]===square[5]&&square[5]===square[6]&& square[4]!=''){
    setLogicResult(4,5,6,square[4])
}
else if (square[7]===square[8]&&square[8]===square[9]&& square[7]!=''){
    setLogicResult(7,8,9,square[7])
}else if (square[1]===square[4]&&square[4]===square[7]&& square[7]!=''){
    setLogicResult(1,4,7,square[1])
}else if (square[2]===square[5]&&square[5]===square[8]&& square[8]!=''){
    setLogicResult(2,5,8,square[2])
}else if (square[3]===square[6]&&square[6]===square[9]&& square[9]!=''){
    setLogicResult(3,6,9,square[3])
}else if (square[1]===square[5]&&square[5]===square[9]&& square[9]!=''){
    setLogicResult(1,5,9,square[5])
}else if (square[3]===square[5]&&square[5]===square[7]&& square[7]!=''){
    setLogicResult(3,5,7,square[3])
}else{restGame(square)}
}



//function that decide if there is no winner then the game will restart 

function restGame(square){
if(square[1]!=''&&square[2]!=''&&square[3]!=''&&square[4]!=''&&square[5]!=''&&square[6]!=''&&square[7]!=''&&square[8]!=''&&square[9]!=''){
    document.querySelector('.result').innerHTML=` Try Again`
    setTimeout(() => {
        window.location.reload()
    }, 3000);
}
}


function setLogicResult (num,num1,num3,index){

document.getElementById('item'+num).style.backgroundColor='rgb(87, 87, 170)'
document.getElementById('item'+num1).style.backgroundColor='rgb(87, 87, 170)'
document.getElementById('item'+num3).style.backgroundColor='rgb(87, 87, 170)'

    document.querySelector('.result').innerHTML=`<span>${index}</span> wins`
cell.forEach(e=>{e.style.pointerEvents = "none"})
setTimeout(() => {
    window.location.reload()
}, 3000);


}