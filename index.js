// populate the index page with the fetched data
setTimeout(function () {
    let html = "";
    // iterating through the meals and storing the required data
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
                            
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                        <small class="text-muted">${i.strArea}</small>
                    </div>
                </div>
            </div>
        </div>`
    }
    

    // pushing the data to html page
    document.querySelector('.cards-container').innerHTML= html;
}, 1000);


