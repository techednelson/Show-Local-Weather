  /*NavBar*/
$(".dropdown-menu").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});

$(".homeLink").click(function() {
 
       $(".navbar-collapse").collapse("hide");
   
});

/*Weather App*/
$(document).ready(function() {

if (navigator.geolocation.getCurrentPosition) {
    
  navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;  
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&" + "lon=" + longitude, function(responseText,statusText, xhr) { 
                
      if (statusText == "success") {
        
                switch (responseText.weather[0].main) {
                        
                    case "Clear":
                        $('<img src="https://webtechnelson.com/images/icons/clear-day.svg" '+' >').appendTo('#icon');
                        $("html").css("background-image", "url(https://webtechnelson.com/images/clear-day6.jpg)" );
                        break;
                        
                    case "Clear-night":
                         $('<img src="https://webtechnelson.com/images/icons/clear-night.svg" '+' >').appendTo('#icon');
                         $("html").css("background-image", "url(https://webtechnelson.com/images/clear-night.jpg)" );
                        break;
                        
                    case "Rain":
                         $('<img src="https://webtechnelson.com/images/icons/rain.svg" '+' >').appendTo('#icon');
                        $("html").css("background-image", "url(https://webtechnelson.com/images/rain.jpg)" );
                        break;
                        
                    case "Snow":
                         $('<img src="https://webtechnelson.com/images/icons/snow.svg" '+' >').appendTo('#icon');
                         $("html").css("background-image", "url(https://webtechnelson.com/images/snow.jpg)" );
                        break;
                        
                    case "Sleet":
                        $('<img src="https://webtechnelson.com/images/icons/sleet.svg" '+' >').appendTo('#icon');
                        $("html").css("background-image", "url(https://webtechnelson.com/images/sleet.jpg)" );
                        break;
                        
                    case "Wind":
                         $('<img src="https://webtechnelson.com/images/icons/wind.svg" '+' >').appendTo('#icon');
                         $("html").css("background-image", "url(https://webtechnelson.com/images/wind.jpg)" );
                        break;
                        
                    case "Fog":
                         $('<img src="https://webtechnelson.com/images/icons/fog.svg" '+' >').appendTo('#icon');
                         $("html").css("background-image", "url(https://webtechnelson.com/images/fog.jpg)" );
                        break;
                        
                    case "Cloudy":
                        $('<img src="https://webtechnelson.com/images/icons/cloudy.svg" '+' >').appendTo('#icon');
                        $("html").css("background-image", "url(https://webtechnelson.com/images/cloudy.jpg)" );
                        break;
                        
                    case "Partly-cloudy-day":
                        $('<img src="https://webtechnelson.com/images/icons/partly-cloudy-day.svg" '+' >').appendTo('#icon');
                        $("html").css("background-image", "url(https://webtechnelson.com/images/partly-cloudy-day.jpg)" );
                        break;
                        
                    case "Partly-cloudy-night":
                        $('<img src="https://webtechnelson.com/images/icons/partly-cloudy-night.svg" '+' >').appendTo('#icon');
                        $("html").css("background-image", "url(https://webtechnelson.com/images/partly-cloudy-night.jpg)" );
                        break;
                        
                       }
                 var city = responseText.name;
                var country = responseText.sys.country;

                $("#city").html(city + ", " + country);

                /* Change from celsius to Fahrenheit*/
                var changeTemperature = false;
                
                $("#temperature").html(responseText.main.temp + " °C");

                $("#temperature").click(function() {
                    if(!changeTemperature) {
                        var f = Math.round(responseText.main.temp * 9/5 + 32);
                        $("#temperature").html(f + " °F");
                        changeTemperature = true;
                    } else {
                        $("#temperature").html(responseText.main.temp + " °C");
                        changeTemperature = false;
                    }
                }); 
               
      
          } else {
              $("#errorMessage").html("There was an error requesting the weather for your location, please contact me so I can fix it. You can find me on twitter or by email clicking on Contact & Feedback. Thanks");
              }     
                
            });
      
        }); 
    } 
});
   