function allCalculator(para1, para2, para3, para4) {
  //base
  let base = document.getElementById(para1);
  let text = base.value;
  let baseNumber = parseFloat(text);
  //height
  let height = document.getElementById(para2);
  let numb = height.value;
  let heightNumber = parseFloat(numb);
  // calculate

  if (para4 === "triangle") {
    triangleCalculate(baseNumber, heightNumber, para3);
  } else if (para4 === "rectangl") {
    rectangle(baseNumber, heightNumber, para3);
  } else if (para4 === "parallogram") {
    parallogram(baseNumber, heightNumber, para3);
  }else if(para4 === "rombosh"){
    rombosh(baseNumber, heightNumber, para3)
  }else if(para4 === "pentagon"){
    pentagon(baseNumber, heightNumber, para3)
  }
}

function triangleCalculate(num1, num2, textId) {
  let area = 0.5 * num1 * num2;
  let testx = displays(textId, area);
  liCreate(testx)
}
function rectangle(num1, num2, textId) {
  let area = num1 * num2;
  let testx = displays(textId, area);
  liCreate(testx)
}
function parallogram(num1, num2, textId) {
  let area = num1 * num2;
  let testx = displays(textId, area);
  liCreate(testx)
}
function rombosh(num1, num2, textId){
    let area = 0.5 * num1 * num2;
    let testx = displays(textId, area);
    liCreate(testx)
}
function pentagon(num1, num2, textId){
    let area = 0.5 * num1 * num2;
    let testx = displays(textId, area);
    liCreate(testx)
}



function displays(textId, val) {
  let display = document.getElementById(textId);
  return (display.innerText = val);
}

function liCreate(text){
    let num = 0;
    let ul = document.getElementById("container-set");
    let li = document.createElement("li");
    li.textContent = `This Result ${text}` 
    ul.appendChild(li)
}














// random color generator
var allClass = document.querySelectorAll(".card");
let colorset = ''
allClass.forEach((items)=>{
    items.addEventListener("mouseenter", function(){
        colorset = items.style.background = `${getRandomColor()}`
    })
    items.addEventListener("mousemove", function(){
        items.style.background = colorset;
    })
    items.addEventListener("mouseout", function(){
        console.log(items.style.background = '')
    })
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
