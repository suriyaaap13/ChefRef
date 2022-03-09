// declaring arrays
let meals = new Array();
let favArray = new Array();

// fetching the dishes from the local Storage
function fetchData() {
    let meals_desearialized = JSON.parse(localStorage.getItem("meals"));
    console.log(meals_desearialized);
    meals = meals_desearialized;
    fetchfav();
}

// fetching the favorite boolean array from the local Storage

let fetchfav = function () {
    // array that can store whether the respective food item is true/false(favourite or not)
    let fav = new Array();
    // allowing to the user to access the file only through index.html and only once till you clear the browser storage
    // if it is allowed multiple times then we will set all the values to false again and again
    if(localStorage.getItem("fav_array")==null){
        // ccreating a boolean array of length number of meals and initialize false to all the elements
        for(let i=0;i<mealAPIData.length;i++){
            fav[i] = false;
        }
        console.log('I am in displayFav fav length ',fav.length);
        // converting array to string
        let fav_serialized = JSON.stringify(fav);
        // Storing the converted array in localStorage
        localStorage.setItem("fav_array",fav_serialized);
    }
    console.log(JSON.parse(localStorage.getItem("fav_array")));
    favArray = JSON.parse(localStorage.getItem("fav_array"));
    renderPage();
}

// populate the index page with the fetched data

let renderPage = function () {
    let html = "";
    // iterating through the meals and storing the required data
    let k = 0;
    for (let i of meals) {
        html += `
        <div class="col">
            <div class="card shadow-sm">

                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${i.strMealThumb}" alt="">

                <div class="card-body">
                    <h5>${i.strMeal}</h5>
                    <p class="card-text">${i.strInstructions}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div  class="btn-group">
                            
                            <button type="button" class="view-btn btn-sm btn-outline-secondary" data-value="${k}">View</button>
                            <button type="button"  class="active btn btn-sm btn-outline-primary mx-1" data-value="${k}">Favourite</button>
                        </div>
                        <small class="text-muted">${i.strArea}</small>
                    </div>
                </div>
            </div>
        </div>`
        k++;

    }
    // pushing the data to html page
    document.querySelector('.cards-container').innerHTML = html;
    let v = document.querySelectorAll('.active');
    console.log(meals.length);
    for(let i=0;i<meals.length;i++){
        console.log('Hello', favArray[i]);
        if (favArray[i]) {
            v[i].classList.add('btn-outline-danger');
        }
        v[i].onclick = function(){
            v[i].classList.toggle('btn-outline-danger');
            if(favArray[i]){
                favArray[i] = false;
                let serialized = JSON.stringify(favArray);
                localStorage.setItem("fav_array",serialized);
            }else{
                console.log('changed you are now a fav');
                favArray[i] = true;
                let serialized = JSON.stringify(favArray);
                localStorage.setItem("fav_array",serialized);
            }
        };
    }
    viewBtnClick();

}

var myTimer = setInterval(function(){
    if(localStorage.getItem("meals")!=null){
        fetchData();
        clearInterval(myTimer);
    }
},10)



// function that triggers the mealPage
function viewBtnClick() {

    var btns = document.querySelectorAll('.view-btn');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            var value = this.getAttribute('data-value');
            // document.querySelector('.my-modal').classList.remove('active');
            let value_serialized = JSON.stringify(value);
            localStorage.setItem("displayMealPageValue", value_serialized);
            console.log("value", value);
            location.replace('./meal-page.html');
        });
    }

}
