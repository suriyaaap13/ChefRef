// fetching the dishes from the local Storage
let meals = new Array();
setTimeout(function(){
    let meals_desearialized = JSON.parse(localStorage.getItem("meals"));
    console.log(meals_desearialized);
    meals = meals_desearialized;
},850);


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
        let value_serialized = JSON.stringify(map.get(str));
        localStorage.setItem("displayMealPageValue",value_serialized);
        location.replace('./meal-page.html');
        // getMealPage(map.get(str));
    }else{
        failed.play();
        setTimeout(function(){
            alert('404 ERROR: DISH NOT FOUND');
            location.replace("./search.html");
            return;
        },600)
        
    }
    

}