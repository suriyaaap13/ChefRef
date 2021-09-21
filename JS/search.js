// importing audio files
let failed = document.getElementById("wrong-one");
// setting focus to the search bar
var input = document.getElementById('search-bar');
setFocus();
function setFocus(){
    input.focus();
}
// directing to index.html on clicking the close button
var close = document.querySelector('.close');
close.onclick = function(){
    location.replace("./index.html");
}

//accessing the meals array
const inputBox = document.querySelector('input');
const suggBox = document.querySelector('.autocom-Box');
inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        // fetching the meals array and matching it with input
        emptyArray = meals.filter((data)=>{
            console.log(data.strMeal.toLowerCase().startsWith(userData.toLowerCase()));
            return data.strMeal.toLowerCase().startsWith(userData.toLowerCase());
        });
        // storing the name of meals which mathes with the input value in the empty array.
        emptyArray = emptyArray.map((data)=>{
            return `<li>${data.strMeal}</li>`
        });
        suggBox.classList.add('sugg-active');
        // calling function to show suggestions
        showSuggestions(emptyArray);
        // storing all the li to add event to them
        let allList = suggBox.querySelectorAll('li');
        for(let i=0;i<allList.length;i++){
            // adding event listener to all the li tags
            allList[i].setAttribute("onclick","select(this)");
        }
        
        
        
    }else{
        // if nothing is in the search bar remove the class and make display none
        suggBox.classList.remove('sugg-active');
    }
}

// function to change the input value to the clicked text content value in suggestion Box
function select(element){
    console.log(element);
    inputBox.value = element.textContent;
    // call to display modal
    makehash(element.textContent.toLowerCase());
    // bringing the cursor to the inputBox again
    input.focus();
    inputBox.value="";
    suggBox.classList.remove('sugg-active');
}

// function that shows suggestions
function showSuggestions(list){
    let listData=undefined;
    console.log('we are in showSuggestions');
    // if length of list is equal to zero
    if(list.length==0){
        listData = '<li>'+ inputBox.value +'</li>'
        // suggBox.innerHTML = listData;
        // alert('There is not such dish in our database');
        // location.replace("./search.html");
        // return;
    }else{
        // create a string from the array elements
        listData = list.join('');

    }
    // push the string in to html
    suggBox.innerHTML = listData;
}
// function to add event Listener for input box 
inputBox.onkeydown = function(event){
    // once the user press enter function have been called to bring the modal 
    if(event.code=="Enter"){
        
        let string = inputBox.value;
        string = string.toLocaleLowerCase();
        // after enter key press the inputBox is value is set to ""
        inputBox.value = "";
        console.log(string);
        makehash(string);
        
    }
};

var map = new Map();
function makehash(str){
    
    let k=0;
    // storing all the meal name in map against a number
    for(let i of meals){
        let m = i.strMeal;
        m = m.toLowerCase();
        map.set(m,k);
        k++;
    }
    // function to open the modal
    if(map.has(str)){
        getMealPage(map.get(str));
    }else{
        failed.play();
        setTimeout(function(){
            alert('404 ERROR: DISH NOT FOUND');
            location.replace("./search.html");
            return;
        },600)
        
    }
    

}

// function to fill the modal
function getMealPage(index) {
    // the integer has been catched and data has been extracted
    data = meals[index];
    document.querySelector('.my-modal').classList.remove('active');
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
            <button type="button" class="btn btn-lg btn-light w-100 mx-0" data-bs-dismiss="modal">Close</button>
        </div>
        `;
        // pushing the changes to html
        document.querySelector('.modal-content').innerHTML = html;
        var close1 = document.querySelector('.btn-close');
        var close2 = document.querySelector('.btn');
        // function to redirect to back on click of close
        close1.onclick = function(){
            document.querySelector('.my-modal').classList.add('active');
        }
        close2.onclick = function(){
            document.querySelector('.my-modal').classList.add('active');
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
        if(favMap.get(meals[index])){
            z.classList.add("btn-danger");
            z.innerHTML = "Remove from Favourites"
            document.getElementById('show-fav-status').appendChild(z);
        }else{
            z.classList.add("btn-primary");
            z.innerHTML = "Add to Favourites"
            document.getElementById('show-fav-status').appendChild(z);
        }

        

        //adding function to Add to Favorite btn
        var fav = document.querySelector('#fav-btn') 
        console.log(fav);
        fav.onclick = function(){
            document.getElementById('fav-btn').classList.toggle('btn-danger');
            if(fav.classList.contains('btn-danger')){
                fav.innerHTML = "Remove from Favourites";
                favMap.set(meals[index],true);
            }else{
                fav.innerHTML = "Add to Favourites";
                favMap.set(meals[index],false);
                
            }
        }


    }


}



