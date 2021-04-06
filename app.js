//this script changes the background color randomly.
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {

    //to generate random colors, i will use rgb(r,g,b) and r,g and b are the values between 0-256;
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    changeTextColor();

});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;

}
const changeTextColor = () => {
    h1.style.color = "white";
}