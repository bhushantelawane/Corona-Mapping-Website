function updateMap()
{
    console.log("Updating map with realtime data")
    fetch("/data.json")
    .then(response => response.json())
    .then(resp =>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if(cases > 255){
                color = "rgb(255,0,0)";
            }
            else{
                color = 'rgb($(cases),0,0)';
            }

            //Mark on the map
             new mapboxgl.Marker({
                 draggable: false,
                 color: color
             })
            .setLngLat([12.554729, 55.70651])
            .addTo(map);
        });
    })
}

let interval = 20000;
setInterval(updateMap,interval);