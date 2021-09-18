// setting focus to the search bar
setFocus();
function setFocus(){
    var input = document.getElementById('search-bar');
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
            return '<li>'+data.strMeal+'</li>';
        });
        suggBox.classList.add('active');
        // calling function to show suggestions
        showSuggestions(emptyArray);
        // storing all the li to add event to them
        let allList = suggBox.querySelectorAll('li');
        
        
        
        
    }else{
        // if nothing is in the search bar remove the class and make display none
        suggBox.classList.remove('active');
    }
}

// function that shows suggestions
function showSuggestions(list){
    let listData=undefined;
    console.log('we are in showSuggestions');
    // if length of list is equal to zero
    if(list.length==0){
        listData = '<li>'+ inputBox.value +'</li>'
    }else{
        // create a string from the array elements
        listData = list.join('');

    }
    // push the string in to html
    suggBox.innerHTML = listData;
}
