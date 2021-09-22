// array that can store whether the reapective food item is true/false(favourite or not)
let fav = new Array();
// allowing to the user to access the file only through index.html and only once till you clear the browser storage
// if it is allowed multiple times then we will set all the values to false again and again
if(localStorage.getItem("fav_array")==null){
    setTimeout(function(){
        // ccreating a boolean array of length number of meals and initialize false to all the elements
        for(let i=0;i<mealAPIData.length;i++){
            fav[i] = false;
        }
        console.log('I am in displayFav fav length ',fav.length);
        // converting array to string
        let fav_serialized = JSON.stringify(fav);
        // Storing the converted array in localStorage
        localStorage.setItem("fav_array",fav_serialized);
    },850);
}
