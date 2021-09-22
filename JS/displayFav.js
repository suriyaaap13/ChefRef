console.log('I am in fav1');
let map = new Map();
let fav = new Array();
console.log('I am in display');
if(localStorage.getItem("fav_array")==null){
    setTimeout(function(){
        for(let i=0;i<meals.length;i++){
            fav[i] = false;
        }
        setTimeout(function(){
            console.log(map);
            let fav_serialized = JSON.stringify(fav);
            console.log(fav_serialized);
            localStorage.setItem("fav_array",fav_serialized);
        },1250);
        
    
    },1200);
}
