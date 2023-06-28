# Random Color Picker
<img width="1428" alt="image" src="https://github.com/burcuicen/RandomColorPicker/assets/45922116/e5e8f8db-cf2c-4f98-a119-ebe91bc251b8">

This is a small project that implements a random color picker. When you click the button, the background color of the page changes to a random color, and the generated color is displayed as text.

## Usage

1. Open the `index.html` file in your web browser.
2. Click the button to generate a random color.
3. The background color will change to the generated color, and the color value will be displayed as text.

## Implementation Details

The functionality of the random color picker is implemented in the `app.js` file. Here is a breakdown of the script:

```javascript
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function() {
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
```
The script uses JavaScript to manipulate the DOM and generate random colors. When the button is clicked, the click event listener calls the makeRandColor function to generate a random color. The generated color is then applied as the background color of the document.body.

The makeRandColor function uses the Math.random() method to generate random values for the red, green, and blue components of the color. These values are then formatted into an RGB color string (rgb(r, g, b)) and returned.

The changeTextColor function sets the text color of the h1 element to white.

Feel free to explore and modify the code according to your needs. Enjoy experimenting with random colors!
