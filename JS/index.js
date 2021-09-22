let meals = new Array();
setTimeout(function(){
    let meals_desearialized = JSON.parse(localStorage.getItem("meals"));
    console.log(meals_desearialized);
    meals = meals_desearialized;
},1200);

// populate the index page with the fetched data

setTimeout(function () {
    let html = "";
    // iterating through the meals and storing the required data
    let k=0;
    for (let i of meals) {
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
        k++;
        
    }
    // pushing the data to html page
    document.querySelector('.cards-container').innerHTML= html;
    viewBtnClick();
    
}, 1200);

// function that triggers the mealPage
function viewBtnClick(){

    var btns = document.querySelectorAll('.btn');
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',function(){
            var value = this.getAttribute('data-value');
            // document.querySelector('.my-modal').classList.remove('active');
            let value_serialized = JSON.stringify(value);
            localStorage.setItem("displayMealPageValue",value_serialized);
            console.log("value",value);
            location.replace('./meal-page.html');

            
            
        });
    }

}