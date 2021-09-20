console.log('I am in display');
setTimeout(function(){
    console.log('I am in disply seTimeout');
    for(let i of favMap){
        console.log(i[0], i[1]);
    }
},3000);