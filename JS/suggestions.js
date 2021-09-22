//creating meals array to capture all the data from API
let mealAPIData = new Array();
var k=0;
// calling the function getMeals to fetch the data
getMeals();
// getMeals function
function getMeals(){
    //fetch the data from API
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then(response => response.json())
    .then(data=>{
        // storing the data in meals array
        for(let i of data.meals){
            mealAPIData[k++] = i;
        }
    });
    
}

// storing the fetched array in local storage
setTimeout(function(){
    console.log('I am in', mealAPIData.length);
    let meals_searialized = JSON.stringify(mealAPIData);
    localStorage.setItem("meals",meals_searialized);
    let meals_desearialized = JSON.parse(meals_searialized);
    console.log(meals_desearialized);

},850);





    
