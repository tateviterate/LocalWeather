$(document).ready(function() {
  // var lat;
  // var lon;
  var api;
  var key = '1c29115c289fc8bc6ea1811855978236';
  var temp;
  var farTemp;
  var icon;
// lat = position.coords.latitude;
      // lon = position.coords.longitude;

if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {

      getWeather(position.coords.latitude, position.coords.longitude);
        
    // api ='https://fcc-weather-api.glitch.me/api/current?lat='+lat+'&lon='+lon;
    // api= 'https://api.wunderground.com/api/35d9c39ec27c86b6/geolookup/conditions/q/autoip.json';
      
      // api="https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyCrTwmvBdez8KIplFv7v6CcBHSFYB96WFs";
 
  });   
  } 
  else{
     console.log('hgjgjh');
  }

  function getWeather(lat, lon){
    api ='https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lon + '&appid=' + key + '&units=metric';
    $('#content').addClass('invisible');
    $('.weather').removeClass('invisible');

    $.getJSON(api, function(data) {
      
      $('#city').append(data.name + ". " + data.sys.country);
      temp = data.main.temp;
      icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

      $('#temp').append(temp + ' °C');
      $('#icon').attr('src', icon);
      $('#humidity').append(data.main.humidity + '%');
      $('#wind').append(data.wind.speed + 'm/sec'); 

      });

      $('#cels').click(function(){
        $('#temp').html(temp + ' °C');
      });

      $('#far').click(function(){
        farTemp = 1.8*temp + 32;
        $('#temp').html(farTemp.toFixed(1) + ' °F');
      });
    }
});