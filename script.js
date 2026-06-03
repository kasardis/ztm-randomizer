var stop_data;
fetch("./gtfs/stops.txt")
.then(r=>r.text())
.then(text => stop_data = text.split('\n'))
.then( () => {
    for(var i = 0; i < stop_data.length; i++){
        stop_data[i] = stop_data[i].split(',');
    }
});

var route_data;
fetch("./gtfs/routes.txt")
.then(r=>r.text())
.then(text => route_data = text.split('\n'))
.then( () => {
    for(var i = 0; i < route_data.length; i++){
        route_data[i] = route_data[i].split(',');
    }
});

document.querySelector("#random-stop").addEventListener('click', function(e) {
    var index = Math.floor(Math.random() * stop_data.length - 1);
    document.querySelector("#result").textContent = stop_data[index][2];
    document.querySelector("#result-description").textContent = stop_data[index][3] + ', ' + stop_data[index][4];
});

document.querySelector("#random-route").addEventListener('click', function(e) {
    var index = Math.floor(Math.random() * route_data.length - 1);
    document.querySelector("#result").textContent = route_data[index][2];
    document.querySelector("#result-description").textContent = route_data[index][4];
});