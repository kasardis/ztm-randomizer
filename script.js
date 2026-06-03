var stop_data = "";

fetch("./gtfs/stops.txt")
.then(r=>r.text())
.then(text => stop_data = text);

document.querySelector("#random-stop").addEventListener('click', function(e) {
    document.querySelector("#result").textContent = "hello world";
    document.querySelector("#result-description").textContent = "hello world 2";
});

document.querySelector("#random-route").addEventListener('click', function(e) {
    console.log("hello random route");
});