function initMap(){
    var location = navigator.geolocation.getCurrentPosition(function(position){
        $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng" + position.corrds.latitude + "," + position.coords.longitude + "$sensor=false", function(data){
            console.log(data);
        })
    });

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8
    });

    addMarker(location);

    function addMarker(coords){
        var marker = new google.maps.Marker({
            position: coords,
            map: map,
        });
    }
}
