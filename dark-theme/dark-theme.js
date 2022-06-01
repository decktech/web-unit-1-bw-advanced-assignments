// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on
let btn = document.querySelector("button");
let box = document.querySelector("div");

btn.addEventListener('click', function(){
    if(box.className == ""){
        box.className == "dark-bg"
    } else{
        box.className = "";
    }
})
// console.log(box)