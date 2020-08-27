var vue_weather = new Vue({
    el: '#weather',
    data: {
        enable: true,
        temperature: "",
        state: "",
        unite: "",
        latitude: "",
        longitude: ""
    },
    methods: {
        getIndexForWeather: function () {
            hour = getHour(getTime());
            roundedHour = 0;
            tab = [2, 5, 8, 11, 14, 17, 20, 23];
            tab.forEach(element => {
                if (hour <= element && roundedHour == 0) {
                    roundedHour = element;
                }
            });
            if (roundedHour < 10) {
                roundedHour = '0' + roundedHour;
            }
            roundedHour += ":00:00";
            return getDate() + ' ' + roundedHour
        },
        getWeather: function () {
            fetch("https://www.infoclimat.fr/public-api/gfs/json?_ll=" + this.latitude + "," + this.longitude + "&_auth=ABpRRlMtUHJfclFmDngFLFgwBTBbLVJ1AX0KaQlsVShSOVQ1AWFUMgNtUy5XeAA2WXQCYQw3BDQLYAN7XC4CYwBqUT1TOFA3XzBRNA4hBS5YdgVkW3tSdQFrCm8JelU3UjJUNgF8VDIDZVMvV2UANllrAn0MLAQ9C20DbFw3AmQAYFE3UzJQMF8xUSwOIQU0WD4FbFtkUmIBNApqCTBVMVI4VDgBNlQ1A2lTL1dkADZZbAJiDDEEPAtgA2xcLgJ%2BABpRRlMtUHJfclFmDngFLFg%2BBTtbMA%3D%3D&_c=24054b14d3b37ebf57642f62f4818e88")
                .then(result => {
                    return result.json();
                })
                .then(data => {
                    tempKel = data[this.getIndexForWeather()].temperature["2m"];
                    if (false) {
                        this.temperature = tempKel;
                        this.unite = "K"
                    } else {
                        tempCel = tempKel - 273, 15;
                        tempCel = Math.round(tempCel * 100) / 100;
                        this.temperature = tempCel;
                        this.unite = "°C";
                    }

                    if (data[this.getIndexForWeather()].risque_neige == "oui") { // snow
                        state = "fa-snowflake";
                    } else if (data[this.getIndexForWeather()].pluie >= 20 && (data[this.getIndexForWeather()].nebulosite["totale"] > 0 || data[this.getIndexForWeather()].nebulosite["haute"] > 0)) { // lot of rain and cloud
                        state = "fa-cloud-showers-heavy"; // problème avec cette favicon aussi :o
                    } else if (data[this.getIndexForWeather()].pluie >= 10) { // some rain
                        state = "fa-cloud-rain"; // problème avec cette favicon aussi :o
                    } else if (data[this.getIndexForWeather()].vent_moyen['10m'] >= 55) { // lot of wind
                        state = "fa-wind"; // problème avec cette favicon aussi :o
                    } else if (data[this.getIndexForWeather()].nebulosite["totale"] > 0 || data[this.getIndexForWeather()].nebulosite["haute"] > 0) { // lot of cloud
                        state = "fa-cloud";
                    } else if (data[this.getIndexForWeather()].nebulosite["basse"] > 0 || data[this.getIndexForWeather()].nebulosite["moyenne"] > 0) { // some cloud
                        state = "fa-cloud-sun"; //problème avec cette favicon :o
                    } else { // sun
                        state = "fa-sun";
                    }

                    if (document.getElementById("weatherIcon")) {
                        document.getElementById("weatherIcon").remove();
                    }

                    var icon = document.createElement("i");
                    classes = 'fas ' + state;
                    icon.setAttribute('class', classes);
                    icon.setAttribute('id', 'weatherIcon');
                    var element = document.getElementById("wIcon");
                    element.appendChild(icon);



                })
                .catch(console.error)
        },
        getGPS: function () {
            let gps = WebMenu.getGPS();
            this.latitude = gps[0];
            this.longitude = gps[1];
        },
        onEvent: function (type, data) {
            switch (type) {
                case EventType.WEATHER_TOGGLE:
                    this.enable = data;
                    if (data == true) {
                        this.getWeather();
                    }
                    break;

                case EventType.WEATHER_GPS_CHANGE:
                    let GPS = data;
                    this.latitude = GPS[0];
                    this.longitude = GPS[1];
                    if (this.enable == true) {
                        this.getWeather();
                    }
                    break;
            }
        }
    },
    created() {
        EventManager.subscribe(this);
        this.getGPS();
        if (this.enable == true) {
            this.getWeather();
        }
    }
});