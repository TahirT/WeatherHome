    

    document.getElementById('lastSearch').addEventListener('click',lastSearch);

    function lastSearch(){
        input = localStorage.getItem('LastSearch');
        data();
    }
    document.getElementById('lastSearch1').addEventListener('click',lastSearch1);

    function lastSearch1(){
        input = localStorage.getItem('LastSearch1');
        data();
    }
    document.getElementById('lastSearch2').addEventListener('click',lastSearch2);

    function lastSearch2(){
        input = localStorage.getItem('LastSearch2');
        data();
    }


    var x = document.getElementById("demo");

    var d = new Date();
                var n = d.getHours();
                var m = d.getMinutes();
                if( m < 10){
                    m = '0' + m;
                }

    navigator.geolocation.getCurrentPosition(showPosition);
    
    

    function showPosition(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=bcc6465a4253d6f2280d94f61f6dc900')
        .then((res) => res.json())
        .then((data) => {
        
            var name = data.name;
            var weather = data.weather[0].main;
            var temp = data.main.temp;
            temp = temp - 273.15;
            temp = temp.toFixed(2);
            var humidity = data.main.humidity;
            var feel = data.main.feels_like;
            feel = feel - 273.15;
            feel = feel.toFixed(2);
            var pressure = data.main.pressure;
            var pressure = pressure * 1/750;
            pressure = pressure.toFixed(2);
            var min = data.main.temp_min;
            min = min - 273.15;
            min = min.toFixed(2);
            var max = data.main.temp_max;
            max = max - 273.15;
            max = max.toFixed(2);
            var visibility = data.visibility;
            visibility = visibility / 1000;
            var description = data.weather[0].description;
            var windSpeed = data.wind.speed;

        
                
            var image = document.getElementById('myImage');
                if(weather == 'Clear'){
                image.src = 'Images/sun.jpg';

                 }
                else if(weather == 'Clouds'){
                image.src = 'Images/cloud.jpg';
                }
                else if(weather == 'Rain'){
                image.src = 'Images/rain.jpg';
                }
                else if(weather == 'Snow'){
                    image.src = 'Images/snow.jpg';
                }
                else{
                    image.src = 'Images/sun.jpg';
                }

            document.getElementById('demo').innerHTML = name + ': ' + weather ;
            document.getElementById('temp').innerHTML = '🌡'+ temp + '°C';
            document.getElementById('head1').innerHTML = 'Weather today in ' + name;
            document.getElementById('data3').innerHTML = '🌡High / Low: ' + min + '°C' +" /" + max + '°C';
            document.getElementById('data4').innerHTML ='💧 Humidity: ' + humidity + ' %'; 
            document.getElementById('data5').innerHTML ='💨 Pressure: ' + pressure + ' AVG Pressure';
            document.getElementById('data6').innerHTML = '🌫️ Visibility: ' + visibility + ' KM';
            document.getElementById('data7').innerHTML ='🌬 Wind: ' + windSpeed;
            document.getElementById('data8').innerHTML ='Description: ' + description;
            document.getElementById('data1').innerHTML ='Feels Like: ' + feel + ' °C';
            document.getElementById('data2').innerHTML = name;
            


    })}

    
    function data(){
        
        var city = input;

// <------------------ the Last searched Cities ---------------------->
        var x = localStorage.getItem('LastSearch');
        var y = localStorage.getItem('LastSearch1');
        var z = localStorage.getItem('LastSearch2');

        
          z=y;
          localStorage.setItem("LastSearch2", z);
          y = x;
          localStorage.setItem("LastSearch1", y);
          x = city;
          localStorage.setItem("LastSearch", x);

          document.getElementById('lastSearch').innerHTML = localStorage.getItem('LastSearch');
          document.getElementById('lastSearch1').innerHTML = localStorage.getItem('LastSearch1');
          document.getElementById('lastSearch2').innerHTML = localStorage.getItem('LastSearch2');

      
  // <------------------------------------------------------------------------------------>     
       
         
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=bcc6465a4253d6f2280d94f61f6dc900')
         .then((res) => res.json())
         .then((data) => {

         try{
           
         var name = data.name;
         var weather = data.weather[0].main;
         var temp = data.main.temp;
         weather = weather.toString();
         temp = temp - 273.15;
         temp = temp.toFixed(2);
         var humidity = data.main.humidity;
         var feel = data.main.feels_like;
         feel = feel - 273.15;
         feel = feel.toFixed(2);
         var pressure = data.main.pressure;
         var pressure = pressure * 1/750;
         pressure = pressure.toFixed(2);
         var min = data.main.temp_min;
         min = min - 273.15;
         min = min.toFixed(2);
         var max = data.main.temp_max;
         max = max - 273.15;
         max = max.toFixed(2);
         var visibility = data.visibility;
         visibility = visibility / 1000;
         var description = data.weather[0].description;
         var windSpeed = data.wind.speed;
         var datTime = data.datetime;

         

         }
         catch(err){
            
             var name,temp ,weather,min,max,humidity,pressure,visibility,description,feel;
             name = 'name';
             temp = 'temp';
             weather = 'weather';
             min = 'min';
             max = 'max';
             humidity = 'humidity';
             pressure = 'pressure';
             visibility = 'visibility';
             description = 'description';
             feel = 'feel';
             x = document.getElementById('alertbox').style.display = 'block';

             var close = document.getElementsByClassName("closebtn");
             var i;

             for (i = 0; i < close.length; i++) {
                 close[i].onclick = function(){
                 var div = this.parentElement;
                 div.style.opacity = "1";
                 setTimeout(function(){ div.style.display = "none"; });
                 }
                 }
    
         }

     

         var image = document.getElementById('myImage');
         if(weather == 'Clear'){
         image.src = 'Images/sun.jpg';

          }
         else if(weather == 'Clouds'){
         image.src = 'Images/cloud.jpg';
         }
         else if(weather == 'Rain'){
         image.src = 'Images/rain.jpg';
         }
         else{
             image.src = 'Images/sun.jpg';
         }
         

     document.getElementById('demo').innerHTML = name + ': ' + weather ;
     document.getElementById('temp').innerHTML = '🌡'+ temp + '°C';
     document.getElementById('demo').innerHTML = name + ': ' + weather ;
     document.getElementById('temp').innerHTML = '🌡'+ temp + '°C';
     document.getElementById('head1').innerHTML = 'Weather today in ' + name;
     document.getElementById('data3').innerHTML = '🌡High / Low: ' + min + '°C' +" /" + max + '°C';
     document.getElementById('data4').innerHTML ='💧 Humidity: ' + humidity + '%'; 
     document.getElementById('data5').innerHTML ='💨 Pressure: ' + pressure + ' AVG Pressure';
     document.getElementById('data6').innerHTML = '🌫️ Visibility: ' + visibility + ' KM';
     document.getElementById('data7').innerHTML ='🌬 Wind: ' + windSpeed;
     document.getElementById('data8').innerHTML ='Description: ' + description;
     document.getElementById('data1').innerHTML ='Feels Like: ' + feel + ' °C';
     document.getElementById('data2').innerHTML =name;
     
   
})
try{
fetch('https://timezone.abstractapi.com/v1/current_time/?api_key=a22525409382470d849e9229e2a08445&location='+city)
 .then((res) => res.json())
 .then((data) => {
     
     var dateTime = data.datetime;
     var location = data.requested_location;
     document.getElementById('locationTime').innerHTML = location + '<br>🕒<br>' + dateTime;
     
 })}
 catch{
     alert('Wrong Input');
 }}
    
    document.getElementById('getData').addEventListener('click',getText);
           
           function getText(){
               
               input = document.getElementById("Search");
               input = input.value;
               data();
               
    }
    document.getElementById('guest').addEventListener('click',getStorage);

function getStorage(){
if (typeof(Storage) !== "undefined") {

  localStorage.setItem("Guest", "guest1");
  
} else { 
  document.getElementsByClassName("signinwith").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}


// ----------------------------------------------------------------------------
   

var firebaseConfig = {
    apiKey: "AIzaSyBTxS1E7xs1MCV2cImmlcRqYiOhvJSfsfI",
    authDomain: "weatherhomedat.firebaseapp.com",
    projectId: "weatherhomedat",
    storageBucket: "weatherhomedat.appspot.com",
    messagingSenderId: "205590446345",
    appId: "1:205590446345:web:85ab4dd75c09a7243a13d8",
    measurementId: "G-F5BLL13WSK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
 

  document.getElementById('go').addEventListener('click',getFirst);
  function getFirst(){

      document.getElementById('div1').style.display='block';
      document.getElementById('div2').style.display='block';
      document.getElementById('div3').style.display='block';
      document.getElementById('div4').style.display='block';

    document.getElementById("closestCity").scrollIntoView({behavior: 'smooth'});
    const inputTextField = document.querySelector('#email');


    
  
    var emailField = inputTextField.value;
    emailField = emailField.split('@');
    if (emailField == null){
        alert('Please write as example shows')
    }
    var emailName = emailField[0];
    name1 = emailName.toString();

    var docRef = firestore.collection('samples').doc(name1);
    const textToSave = inputTextField.value;
    console.log('I am going to save '+ textToSave + ' to Firestore');
    var locationCity = 'prizren';

    docRef.set({
      Email: textToSave ,
      Location: locationCity,
      LastSearch: null,
      ClosestCity1:{cityName: 'city', temp:'temp',weather: 'weather'},
      ClosestCity2:{cityName: 'city', temp:'temp',weather: 'weather'},
      ClosestCity3:{cityName: 'city', temp:'temp',weather: 'weather'},
      ClosestCity4:{cityName: 'city', temp:'temp',weather: 'weather'}
      
    })
    .then(function(){
      console.log('Status saved! ');
    })
    .catch(function(error){
      console.log('got an error: ', error);
    });

    navigator.geolocation.getCurrentPosition(showPosition1);

    function showPosition1(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    lat = lat + 0.1; 
    
    
   
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=bcc6465a4253d6f2280d94f61f6dc900')
        .then((res) => res.json())
        .then((data) => {
        
            var name = data.name;
            var weather = data.weather[0].main;
            var temp = data.main.temp;
            temp = temp - 273.15;
            temp = temp.toFixed(2);

            docRef.update({
              ClosestCity1:{
                cityName: name,
                weather: weather,
                temp: temp
              }
            })
            
            document.getElementById('div1').innerHTML = name +'<br>'+weather +'<br>'+ temp + '°C';
      
  })
  lat = lat - 0.2;
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=bcc6465a4253d6f2280d94f61f6dc900')
        .then((res) => res.json())
        .then((data) => {
        
            var name = data.name;
            var weather = data.weather[0].main;
            var temp = data.main.temp;
            temp = temp - 273.15;
            temp = temp.toFixed(2);

            docRef.update({
              ClosestCity2:{
                cityName: name,
                weather: weather,
                temp: temp
              }
            })
            document.getElementById('div2').innerHTML = name+'<br>'+weather +'<br>'+ temp + '°C';
      
  })
  lat= lat + 0.2;
  lon = lon + 0.1;
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=bcc6465a4253d6f2280d94f61f6dc900')
        .then((res) => res.json())
        .then((data) => {
        
            var name = data.name;
            var weather = data.weather[0].main;
            var temp = data.main.temp;
            temp = temp - 273.15;
            temp = temp.toFixed(2);

            docRef.update({
              ClosestCity3:{
                cityName: name,
                weather: weather,
                temp: temp
              }
            })
            document.getElementById('div3').innerHTML = name+'<br>'+weather +'<br>'+ temp + '°C';
      
  })
  lon = lon - 0.2;
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=bcc6465a4253d6f2280d94f61f6dc900')
        .then((res) => res.json())
        .then((data) => {
        
            var name = data.name;
            var weather = data.weather[0].main;
            var temp = data.main.temp;
            temp = temp - 273.15;
            temp = temp.toFixed(2);

            docRef.update({
              ClosestCity4:{
                cityName: name,
                weather: weather,
                temp: temp
              }
            })
            document.getElementById('div4').innerHTML = name+'<br>'+weather +'<br>'+ temp + '°C';
      
  })
  


  }
}
  
//<----- Update the last Search on the Firestore database ------>

//   const lastsearch = document.querySelector('#Search');

//   document.getElementById('getData').addEventListener('click',getLast);
//   function getLast(){
//       var lastsearch1= lastsearch.value;

//       docRef.update({
//         LastSearch: lastsearch1
//       })
      
  
// }

  document.getElementById('delete').addEventListener('click',Delete);
  function Delete(){
      
      search = document.getElementById('email');
      search = search.value;
      search = search.split('@');
      search1 = search[0];
      
      firestore.collection('samples').doc(search1).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
      
  
}

var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");

var btn = document.getElementById("data1");
var btn1 = document.getElementById("data2");
var btn2 = document.getElementById("data3");
var btn3 = document.getElementById("data4");
var btn4 = document.getElementById("data5");
var btn5 = document.getElementById("data6");
var btn6 = document.getElementById("data7");
var btn7 = document.getElementById("data8");
var btn8 = document.getElementById('head1');

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];


btn.onclick = function() {
  modal.style.display = 'block';
  var feel = document.getElementById('data1').innerHTML;
  feel = feel.split(':');
  feel1 = feel[1];
  document.getElementById('innertext').innerHTML = feel1;
  footer1 = document.getElementById('mfooter');
  feel2 = feel1.split('°');
  var f = parseInt(feel2[0]);
  if(f <= 20 && f >=10 ){
    footer1.innerHTML = 'Cold weather today 😰';
    footer1.style = "background-color:lightblue; width:100%; height:auto; border-radius:5px; color:black; font-family:Impcat; font-size:20px; boder:3px solid black;"
  }
  else if(f < 10 ){
    footer1.innerHTML = 'Very Cold weather 🥶';
    footer1.style = "background-color:darkcyan; width:100%; height:auto; border-radius:5px; color:black; font-family:Impcat; font-size:20px; boder:3px solid black;"
  
  }
  else if(f > 20 ){
    footer1.innerHTML = 'Hot weather 🔥';
    footer1.style = "background-color:rgb(190, 85, 36); width:100%; height:auto; border-radius:5px; color:black; font-family:Impcat; font-size:20px; boder:3px solid black;"
  
  }
  

}
btn1.onclick = function() {
  modal1.style.display = "block";
  var txt = document.getElementById('data2').innerHTML;
  document.getElementById('innertext1').innerHTML = txt;
}
btn2.onclick = function() {
  modal2.style.display = "block";
  var txt1 = document.getElementById('data3').innerHTML;
  txt1 = txt1.split('/');
  txt12 = txt1[1].split(':');
  document.getElementById('innertext2').innerHTML = '🌡Heighest: ' + txt12[1] + '<br>' + '🌡Lowest: ' + txt1[2];
}
btn3.onclick = function() {
  modal3.style.display = "block";
  var txt2 = document.getElementById('data4').innerHTML;
  txt2 = txt2.split(':');
  document.getElementById('innertext3').innerHTML = "💧" + txt2[1] + '💧';
}
btn4.onclick = function() {
  modal4.style.display = "block";
  var txt3 = document.getElementById('data5').innerHTML;
  document.getElementById('innertext4').innerHTML = txt3;
}
btn5.onclick = function() {
  modal5.style.display = "block";
  var txt4 = document.getElementById('data6').innerHTML;
  txt4 = txt4.split(':');
  document.getElementById('innertext5').innerHTML = '🌫️ ' + txt4[1];
}
btn6.onclick = function() {
  modal6.style.display = "block";
  var txt5 = document.getElementById('data7').innerHTML;
  document.getElementById('innertext6').innerHTML =  txt5 + ' Km/H';
}
btn7.onclick = function() {
  modal7.style.display = "block";
  var txt6 = document.getElementById('data8').innerHTML;
  document.getElementById('innertext7').innerHTML = txt6;
}
 btn8.onclick = function(){

  modal.style = "display:block; transition:1s;";
  
  var feel = document.getElementById('data1').innerHTML;
  feel = feel.split(':');
  feel1 = feel[1];
  document.getElementById('innertext').innerHTML = feel1;
  footer1 = document.getElementById('mfooter');
  feel2 = feel1.split('°');
  var f = parseInt(feel2[0]);
  if(f <= 20 && f >=10 ){
    footer1.innerHTML = 'Cold weather today 😰';
    footer1.style = "background-color:lightblue; width:100%; height:auto; border-radius:5px; color:black; font-family:Impcat; font-size:20px; boder:3px solid black;"
    document.getElementById('respond').innerHTML = 'Yeah!🙁'
  }
  else if(f < 10 ){
    footer1.innerHTML = 'Very Cold weather 🥶';
    footer1.style = "background-color:darkcyan; width:100%; height:auto; border-radius:5px; color:black; font-family:Impcat; font-size:20px; boder:3px solid black;"
  
  }
  else if(f > 20 ){
    footer1.innerHTML = 'Hot weather 🔥';
    footer1.style = "background-color:rgb(190, 85, 36); width:100%; height:auto; border-radius:5px; color:black; font-family:Impcat; font-size:20px; boder:3px solid black;"
  
  }

  var txt = document.getElementById('data2').innerHTML;
  document.getElementById('innertext1').innerHTML = 'City: ' + txt;

  var txt1 = document.getElementById('data3').innerHTML;
  txt1 = txt1.split('/');
  txt12 = txt1[1].split(':');
  document.getElementById('innertext2').innerHTML = '🌡Heighest: ' + txt12[1] + '<br>' + '🌡Lowest: ' + txt1[2];

  var txt2 = document.getElementById('data4').innerHTML;
  txt2 = txt2.split(':');
  document.getElementById('innertext3').innerHTML = "💧" + txt2[1] + '💧';

  var txt3 = document.getElementById('data5').innerHTML;
  document.getElementById('innertext4').innerHTML = txt3;

  
  var txt4 = document.getElementById('data6').innerHTML;
  txt4 = txt4.split(':');
  document.getElementById('innertext5').innerHTML = '🌫️ ' + txt4[1];

  var txt5 = document.getElementById('data7').innerHTML;
  document.getElementById('innertext6').innerHTML =  txt5 + ' Km/H';

  var txt6 = document.getElementById('data8').innerHTML;
  document.getElementById('innertext7').innerHTML = txt6;

  modal.style.display = "block";
  modal1.style.display = "block";
  modal2.style.display = "block";
  modal3.style.display = "block";
  modal4.style.display = "block";
  modal5.style.display = "block";
  modal6.style.display = "block";
  modal7.style.display = "block";
 }

span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
span7.onclick = function() {
  modal7.style.display = "none";
  
}

window.onclick = function(event) {
  if (event.target == modal  || event.target == modal1  || event.target == modal2  || event.target == modal3 
    || event.target == modal4  || event.target == modal5  || event.target == modal6  || event.target == modal7 ) {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
  }
}
        
function clock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var phase = document.getElementById("phase");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var am = "AM";

  if (h > 12) {
      h = h - 12;
      var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  phase.innerHTML = am;
}

var interval = setInterval(clock, 1000);   
   