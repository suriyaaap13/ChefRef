// fetching the dishes from the local Storage
let meals = new Array();
let meals_desearialized = JSON.parse(localStorage.getItem("meals"));
meals = meals_desearialized;

// fetching the favorite boolean array from the local Storage
let favArray = new Array();
console.log(JSON.parse(localStorage.getItem("fav_array")));
favArray = JSON.parse(localStorage.getItem("fav_array"));


// populate the index page with the fetched data
let html = "";
// iterating through the meals and storing the required data
let k = 0;
for (let i of meals) {
    if (favArray[k] == true) {
        html += `
        <div class="col">
            <div class="card shadow-sm">

                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${i.strMealThumb}" alt="">

                <div class="card-body">
                    <h5>${i.strMeal}</h5>
                    <p class="card-text">${i.strInstructions}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            
                            <button type="button" class="btn btn-sm btn-outline-secondary" data-value="${k}">View</button>
                        </div>
                        <small class="text-muted">${i.strArea}</small>
                    </div>
                </div>
            </div>
        </div>`

    }
    k++;
}
// pushing the data to html page
if (html == "") {
    html = `
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-12 col-md-8 mx-auto">
                <h1 class="fw-light">!!Oops, your favourites is empty</h1>
                <p class="lead my-2">Don't panic :) :) just go and add something to your list</p>
                <a href="./index.html" class="btn btn-primary my-2">Home</a>
            </div>
        </div>
    </section>

    `
    document.querySelector('.cards-container').innerHTML = html;
} else {
    document.querySelector('.cards-container').innerHTML = html;
    viewBtnClick();
}



// function that triggers the mealPage
function viewBtnClick() {

    var btns = document.querySelectorAll('.btn');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            var value = this.getAttribute('data-value');
            let value_serialized = JSON.stringify(value);
            localStorage.setItem("displayMealPageValue", value_serialized);
            console.log("value", value);
            location.replace('./meal-page.html');
        });
    }

}
