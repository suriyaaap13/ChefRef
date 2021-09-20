console.log('I am in fav');
let favMap = new Map();
let z=0;
function callFavourite(){
    console.log('Hello');
    setTimeout(function(){
        for(let i of meals){
            favMap.set(i,false);
        }

    },1200);
    
}

