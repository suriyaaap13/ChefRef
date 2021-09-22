console.log('I am in fav1');
let fav = new Array();

if(localStorage.getItem("fav_array")==null){
    setTimeout(function(){
        console.log('I am in displayFav meals length ',mealAPIData.length);
        for(let i=0;i<mealAPIData.length;i++){
            fav[i] = false;
        }
        console.log('I am in displayFav fav length ',fav.length);
        console.log('I am in display');
        let fav_serialized = JSON.stringify(fav);
        console.log(fav_serialized);
        localStorage.setItem("fav_array",fav_serialized);
        
    
    },850);
}
