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
}, 1000);

function viewBtnClick(){

    var btns = document.querySelectorAll('.btn');
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',function(){
            var value = this.getAttribute('data-value');
            document.querySelector('.my-modal').classList.remove('active');
            getMealPage(value);

            
        });
    }

}


// function to fill the modal
function getMealPage(index) {
    data = meals[index];
    if (data!=null) {
        let ingredient = undefined;
        let a = new Array();
        a[0] = data.strIngredient1;
        a[1] = data.strIngredient2;
        a[2] = data.strIngredient3;
        a[3] = data.strIngredient4;
        a[4] = data.strIngredient5;
        a[5] = data.strIngredient6;
        a[6] = data.strIngredient7;
        a[7] = data.strIngredient8;
        ingredient = a.join();
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
        
        <div class="modal-footer flex-column border-top-0">
            <button type="button" class="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
        </div>
        `;
        document.querySelector('.modal-content').innerHTML = html;
        var close1 = document.querySelector('.btn-close');
        var close2 = document.querySelector('.btn');

        close1.onclick = function(){
            document.querySelector('.my-modal').classList.add('active');
        }
        close2.onclick = function(){
            document.querySelector('.my-modal').classList.add('active');
        }

    }


}





