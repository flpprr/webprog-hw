
const containerElement = document.querySelector("#container");

containerElement.addEventListener('click', (e) => {
    alert("You can find the clicked colors here (if you look closely)!");
})

function change(circle){
    if(circle.classList.contains("circle")){
        circle.classList.remove("circle");
        circle.classList.add("rectangle");
    }else{
        circle.classList.remove("rectangle");
        circle.classList.add("circle");
    }
}

function addChange(circle){
    circle.addEventListener('click', (e) => {
        e.stopPropagation();
        change(circle);
    })
}


const buttonviolet = document.querySelector(".blueviolet.stylishButton");
buttonviolet.addEventListener('click', (e) => {
    let circle1 = document.createElement('div');
    circle1.classList.add('circle', 'blueviolet');
    addChange(circle1);

    containerElement.append(circle1);
})
const brown = document.querySelector(".brown.stylishButton");
brown.addEventListener('click', (e) => {
    let circle1 = document.createElement('div');
    circle1.classList.add('circle', 'brown');
    addChange(circle1);

    containerElement.append(circle1);
})
const darkgoldenrod = document.querySelector(".darkgoldenrod.stylishButton");
darkgoldenrod.addEventListener('click', (e) => {
    let circle1 = document.createElement('div');
    circle1.classList.add('circle', 'darkgoldenrod');
    addChange(circle1);

    containerElement.append(circle1);
})
const palevioletred = document.querySelector(".palevioletred.stylishButton");
palevioletred.addEventListener('click', (e) => {
    let circle1 = document.createElement('div');
    circle1.classList.add('circle', 'palevioletred');
    addChange(circle1);

    containerElement.append(circle1);
})
const teal = document.querySelector(".teal.stylishButton");
teal.addEventListener('click', (e) => {
    let circle1 = document.createElement('div');
    circle1.classList.add('circle', 'teal');
    addChange(circle1);
    
    containerElement.append(circle1);
})







