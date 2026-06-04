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

document.querySelector("#random-stop").addEventListener('click', async function(e) {
    var index = Math.floor(Math.random() * (stop_data.length - 2) + 1);
    var stop_text = stop_data[index][2].replace(/"/g, '');
    var url = `https://nominatim.openstreetmap.org/reverse?lat=${stop_data[index][3]}&lon=${stop_data[index][4]}&format=jsonv2`;
    const response = await fetch(url, {headers: {'User-Agent': 'ZTMRandomizer'}});
    if(!response.ok) throw new Error(`HTTPS error: ${response.status}`);
    const data = await response.json();
    var location = data.address.city || data.address.town || data.address.village;
    if(location == "Warszawa"){
        location = data.address.suburb;
    }
    document.querySelector("#result").textContent = stop_text;
    document.querySelector("#result-description").textContent = location;
});

document.querySelector("#random-route").addEventListener('click', function(e) {
    var index = Math.floor(Math.random() * (route_data.length - 2) + 1);
    document.querySelector("#result").textContent = route_data[index][2].replace(/"/g, '');
    document.querySelector("#result-description").textContent = route_data[index][4].replace(/"/g, '');
});