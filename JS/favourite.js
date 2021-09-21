console.log('I am in fav that is your page is reloading');

let z=0;
function callFavourite(){
    console.log('Hello');
    setTimeout(function(){
        

    },1200);
    
}
setTimeout(function(){
    for(let i of meals){
        favMap.set(i,false);
    }
},1200);

setInterval(function(){
    for(let i of meals){
        if(favMap.get(i)){
            console.log(i.strMeal);
        }
    }
},5000);

