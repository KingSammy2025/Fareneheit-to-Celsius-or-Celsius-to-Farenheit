// Input
var farenheit = document.getElementById("Farenheit");
var convertBtn = document.getElementById("btn");
var resultBtn = document.getElementById("result");
convertBtn.addEventListener("click", convert);
var tempMenu = document.getElementById("which-of-them");

// Functions and Variables
function convert() {
  let choice = tempMenu.value;
  let temp = farenheit.value;

  // If statements
  if (choice == "C") {
    console.log("User picked F to C");

    // Process - Calculate conversion from F to C
    let convertion = ((temp - 32) * 5) / 9;
    convertion = Math.round(convertion);

    // Output to site
    resultBtn.innerHTML = convertion;
  } else {
    console.log("User picked C to F");

    // Process - Calc C to F
    let convertion2 = temp * 1.8 + 32;
    convertion2 = Math.round(convertion2);

    // Output to site
    resultBtn.innerHTML = convertion2;
  }

  //   Clear inputs
  farenheit.value = "";
  document.getElementById("pic-container").innerHTML = "";

  //   Change backgrounds of inputs
  convertBtn.style.backgroundColor = " #26d978";
  resultBtn.style.border = "2px dashed darkblue";
  resultBtn.style.padding = "5px 10px";
  resultBtn.style.backgroundColor = "yellow";
}
var picbtn = document.getElementById("btn");
var piccontainer = document.getElementById("pic-container");
picbtn.addEventListener("click", showPicture);
function showPicture() {
  piccontainer.innerHTML +=
    "<img src = 'images/thermometer image.webp' width = 50px height = 100px>";
}

// Change an image source
// document.getElementById("the-img").src = "images/newimg.jpg";

// Change a hyperlink href
document.getElementById("the-hyperlink").href = "www.google.com";
