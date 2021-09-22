// fetching the dishes from the local Storage
let meals = new Array();
let meals_desearialized = JSON.parse(localStorage.getItem("meals"));
console.log(meals_desearialized);
meals = meals_desearialized;

// fetching the favorite boolean array from the local Storage
let favArray = new Array();
console.log(JSON.parse(localStorage.getItem("fav_array")));
favArray = JSON.parse(localStorage.getItem("fav_array"));

window.onload = function(){
    console.log('hello');
    console.log('hello2');
    console.log(localStorage.getItem("displayMealPageValue"));
    var n = JSON.parse(localStorage.getItem("displayMealPageValue"));
    console.log(meals[n].strMeal);
    document.title = meals[n].strMeal+" - Meal Page";
    getMealPage(JSON.parse(localStorage.getItem("displayMealPageValue")));
}


// function to fill the modal
function getMealPage(index) {
    console.log('Hey I am in');
    data = meals[index];
    if (data!=null) {
        let ingredient = undefined;
        let a = new Array();
        // fetch ingredient from the data and storing in an array
        a[0] = data.strIngredient1;
        a[1] = data.strIngredient2;
        a[2] = data.strIngredient3;
        a[3] = data.strIngredient4;
        a[4] = data.strIngredient5;
        a[5] = data.strIngredient6;
        a[6] = data.strIngredient7;
        a[7] = data.strIngredient8;
        // joining the array to form a string
        ingredient = a.join();
        // changing some html so that it can change value for the requested meal.
        let html = "";
        html = `
        <div class="modal-header border-bottom-0">
            <h3 class="modal-title">${data.strMeal}</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="category-container">
            <h5>Area: </h5>
            <p>
                ${data.strArea}
            </p>
        </div>
        <div class="category-container">
            <h5>Category: </h5>
            <p>
                ${data.strCategory}
            </p>
        </div>
        <div class="ingredients-container">
            <h5>Ingredients</h5>
            <p class="ingredients py-0">
                ${ingredient}
            </p>
        </div>
        <div class="dish-img">
            <img id="meal-img" src="${data.strMealThumb}" alt="Dish Image" width="150px" height="150px">
        </div>
        
        <div class="instruction-container">
            <h5 id="instruction-heading">Instructions</h5>
            <div class="modal-body py-0">
                <p>${data.strInstructions}</p>
            </div>
        </div>
        <div class="video-link my-3">
            <a href="${data.strYoutube}" target="_blank">
                Click here for video tutorial
            </a>
        </div>
        
        <div id="show-fav-status" class="modal-footer flex-column border-top-0">
            <button type="button" class="close-btn btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
            
        </div>
        `;

        
        
        // pushing the changes to html
        document.querySelector('.modal-content').innerHTML = html;

        var close1 = document.querySelector('.btn-close');
        var close2 = document.querySelector('.close-btn');
        // function to redirect to back on click of close
        close1.onclick = function(){
            location.replace('./index.html');
        }
        close2.onclick = function(){
            location.replace('./index.html');
        }

        // creating button Node  
        var z = document.createElement('button');
        // setting all the class and attributes as in bootstrap button
        z.classList.add("btn");
        z.classList.add("btn-lg");
        z.classList.add("btn-primary");
        z.classList.add("w-100");
        z.classList.add("mx-0");
        z.setAttribute("data-bs-dismiss","modal");
        z.setAttribute("id","fav-btn");
        console.log(z);
        // if the respective meal is set to true then show remove from fav/ show add to fav
        console.log(index, favArray[index]);
        if(favArray[index]){
            console.log('fav');
            z.classList.add("btn-danger");
            z.innerHTML = "Remove from Favourites"
            document.getElementById('show-fav-status').appendChild(z);
        }else{
            console.log('not fav');
            z.classList.add("btn-primary");
            z.innerHTML = "Add to Favourites"
            document.getElementById('show-fav-status').appendChild(z);
        }

        

        //adding function to Add to toggle Favorite btn on click
        var fav = document.querySelector('#fav-btn') 
        // console.log(fav);
        fav.onclick = function(){
            document.getElementById('fav-btn').classList.toggle('btn-danger');
            if(fav.classList.contains('btn-danger')){
                fav.innerHTML = "Remove from Favourites";
                favArray[index] = true;
                
            }else{
                fav.innerHTML = "Add to Favourites";
                favArray[index] = false;
                
            }
            let serialized = JSON.stringify(favArray);
            localStorage.setItem("fav_array",serialized);
        }

    }


}