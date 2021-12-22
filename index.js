import {CAMPUS_BORDER,CIT_CENTER,DUSTBIN_LOCATIONS,PLACES,CAMPUS_BOUNDS,mapstyles} from './configdata.js'
import getLocation from './Functions/getLocation.js'

document.getElementById("map").innerHTML = "Loading...";
async function initMap() {
    const currentlocation=await getLocation()
    const locationcoords=currentlocation.coords
    const map = new google.maps.Map(document.getElementById("map"), {
        center: CIT_CENTER,
        restriction: {
            latLngBounds: CAMPUS_BOUNDS,
        },
        zoom: 19,
        heading: 320,
        tilt: 47.5,
        styles: mapstyles,

    });
    console.log("locationcoords is ",locationcoords.latitude,locationcoords.longitude)
    
    const campus_border = new google.maps.Polygon({
        paths: CAMPUS_BORDER,
        strokeColor: 'green',
        strokeOpacity: 1,
        strokeWeight: 8,

    });
    campus_border.setMap(map);
    //create markers with labels with PLACES
    for (let i = 0; i < PLACES.length; i++) {
        const marker = new google.maps.Marker({
            position: { lat: PLACES[i].lat, lng: PLACES[i].lng },
            map: map,
            label: {
                text: PLACES[i].label,
                color: 'rgba(255,255,255,.7)',
                fontSize: '12px',
                fontWeight: 'bold',
                fontFamily: 'Roboto'
            },
            icon: {
              url: "Assets/school.png",
              labelOrigin: new google.maps.Point(20, 32),
              size: new google.maps.Size(32,32),
              anchor: new google.maps.Point(3,32)
            },

        });
    }
    
    const infoWindow = new google.maps.InfoWindow();
    const dustbin_locations = DUSTBIN_LOCATIONS.map(dustbin => {
        const marker = new google.maps.Marker({
            position: {
                lat: dustbin.lat,
                lng: dustbin.lng
            },
            map: map,
            title: dustbin.label,
            icon: 'Assets/green-dot.png'
        });
        marker.addListener('click', function () {
            infoWindow.setContent(`<div>
            <h3>${dustbin.name}</h3>
            <p>${dustbin.address}</p>
            </div>`);
            infoWindow.open(map, marker);
        })
        return marker;
    })

    console.log(dustbin_locations);

}
google.maps.event.addDomListener(window, "load", initMap);
