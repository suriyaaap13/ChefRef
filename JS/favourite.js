let favMap = new Map();
let z=0;
function heyyo(){
    console.log('Hello');
    setTimeout(function(){
        for(let i of meals){
            favMap.set(i,false);
        }

    },2000);
    
}

