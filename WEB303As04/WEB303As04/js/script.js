/*
    Assignment #4
    Christian D'Antonio
*/

$(function () {

        let old_lat = localStorage.getItem("location.lat");
        let old_long = localStorage.getItem("location.lon");

        if(old_lat == null || old_long == null)
        {
    
            navigator.geolocation.getCurrentPosition((position) =>{
            $('div#locationhere').eq(0).html(str + "Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude);
            localStorage.setItem("location_lat", position.coords.latitude);
            localStorage.setItem("location_lon", position.coords.latitude);

            }, () => {
            $('div#locationhere').text("You need to display your location in order for us show the coordinates");
            });
            
        }
        else{
            let str;
            str = "Older latitude: " + old_lat + "Older longitude: " + old_long;
            console.log("In localStorage already");

            navigator.geolocation.getCurrentPosition((position) => {
                str = str + "<br> The new latitude: " + position.coords.latitude + "<br> The new longitude:" + position.coords.longitude + "The updated data in localStorage";
                localStorage.setItem("location_lat", position.coords.latitude);
                localStorage.setItem("location_lon", position.coords.longitude);
                let distance = callDistanceBetweenPoints(position.coords.latitude, position.coords.longitude, old_lat, old_lon);
                str = str + "New-old distance:" + distance + "km";
                $('div#locationhere').html(str);
                console.log(str)
                }, () => {
                str = str + "<br>Location: ";
                $('div#locationhere').html(str);
            });
        }



    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


