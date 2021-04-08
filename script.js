// Slider and Payment Toggle

// Objects
var slider_obj = document.getElementById("montly-price-slider");
var prices_obj = document.getElementById("price");
var pageviews_obj = document.getElementById("pageviews");
var toggle_obj = document.getElementById("payment-toggle")

console.log(toggle_obj)

// Arrays with pageviews and corresponding prices
var prices = [8, 12, 16, 24, 36]
var pageviews = ["10K", "15K", "100K", "500K", "1M"]

// Display default slider values
prices_obj.textContent = "$" + (prices[slider_obj.value]).toString();
pageviews_obj.textContent = pageviews[slider_obj.value];

// Update the current slider value
slider_obj.oninput = function() {
    
    if (toggle_obj.checked) {
        prices_obj.textContent = "$" + (prices[this.value] * 0.75).toString();
    } else {
        prices_obj.textContent = "$" + (prices[this.value]).toString();
    }

    pageviews_obj.textContent = pageviews[this.value];

}

toggle_obj.oninput = function() {

    if (toggle_obj.checked) {

        prices_obj.textContent = "$" + (prices[slider_obj.value] * 0.75).toString();

    } else {
        prices_obj.textContent = "$" + (prices[slider_obj.value]).toString();
    }

}

