const containerEle=document.querySelector(".container");
const careers=["Web Developer", "Freelancer", "Instructor", "Coder"];
let careersind=0;
let charind=0;
updateText();
function updateText(){
    charind++;
    containerEle.innerHTML=`<h1>I am ${careers[careersind].slice(0,1)==="I" ? "an" : "a"} ${careers[careersind].slice(0,charind)}</h1>`;
    if(charind===careers[careersind].length){
        careersind++;
        charind=0;
    }
    if(careersind===careers.length){
        careersind=0;
    }
    setTimeout(updateText,400);
}