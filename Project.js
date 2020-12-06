$("#logo").animate({
	opacity:'1'
},2000);

$("#featured").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".featured").offset().top
    }, 2000);
});
$("#menu").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".featured2").offset().top
    }, 2000);
});
$("#contct").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#ctc").offset().top
    }, 2000);
});
$("#toloc").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".location").offset().top
    }, 2000);
});



$(".o").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#ctc").offset().top
    }, 2000);
});




$(".uhu").click(function(){
  $("#submited").show();
});
$(".uhu").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".dark").offset().top
    }, 1000);
});

document.getElementById('send').addEventListener('click',function(){
	document.getElementById('fname').value="";
	document.getElementById('lname').value="";
	document.getElementById('fnum').value="";
	document.getElementById('sug').value="";
});
$("#okb").click(function(){
  $("#submited").hide();
});
function initMap(){
var location = {lat:0, lng:0};
var map = new google.maps.Map(document.getElementById("map"),{
zoom:2,
center:location
});
var marker1 = new google.maps.Marker({
position:{lat:48.0196,lng:66.9237},
map:map
});
var infowindow = new google.maps.InfoWindow({
content:'Kazakhstan(Almaty, Nur-Sultan)'
});
marker1.addListener('click', function(){
infowindow.open(map,marker1);
});
var marker2 = new google.maps.Marker({
position:{lat:37.0902,lng:95.7129},
map:map
});
var infowindow2 = new google.maps.InfoWindow({
content:'USA (Hollywood,New-York,California)'
});
marker2.addListener('click', function(){
infowindow2.open(map,marker2);
});

var marker3 = new google.maps.Marker({
position:{lat:38.9637,lng:35.2433},
map:map
});
var infowindow3 = new google.maps.InfoWindow({
content:'Turkey (Stambul,Ankara)'
});
marker3.addListener('click', function(){
infowindow3.open(map,marker3);
});

var marker4 = new google.maps.Marker({
position:{lat:55.3781,lng:3.4360},
map:map
});
var infowindow4 = new google.maps.InfoWindow({
content:'UK (London,Wals)'
});
marker4.addListener('click', function(){
infowindow4.open(map,marker4);
});

var marker5 = new google.maps.Marker({
position:{lat:61.5240,lng:105.3188},
map:map
});
var infowindow5 = new google.maps.InfoWindow({
content:'Russia (Moskva,Tula)'
});
marker5.addListener('click', function(){
infowindow5.open(map,marker5);
});


var marker6 = new google.maps.Marker({
position:{lat:36.2048,lng:138.2529},
map:map
});
var infowindow6 = new google.maps.InfoWindow({
content:'Japan (Tokyo,Osaka)'
});
marker6.addListener('click', function(){
infowindow6.open(map,marker6);
});

var marker7 = new google.maps.Marker({
position:{lat:23.4241,lng:53.8478},
map:map
});
var infowindow7 = new google.maps.InfoWindow({
content:'UAE (Dubai,Emirate)'
});
marker7.addListener('click', function(){
infowindow7.open(map,marker7);
});


 var circle = new google.maps.Circle({
 map: map,
 center:new google.maps.LatLng(43.2379966922751,76.80104255063972),
 radius:1000,
 strokeColor:"blue",
 fillColor:"blue"
 });
  var circle = new google.maps.Circle({
 map: map,
 center:new google.maps.LatLng(51.1605,71.4704),
 radius:1000,
 strokeColor:"blue",
 fillColor:"blue"
 });
 }