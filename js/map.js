let map_content;

function loadMapData()
{
    let textfile;
    if (window.XMLHttpRequest)
    {
        textfile = new XMLHttpRequest();
    }
    textfile.onreadystatechange = function ()
    {
        if (textfile.readyState == 4 && textfile.status == 200)
        {
            map_content = textfile.responseText;
        }
    }
    textfile.open("GET", "http://earsaverproject.com/data/map_data.csv", false);
    textfile.send();
}
loadMapData();

map_content = map_content.split('\n')


let mymap = L.map('mapid').setView([50, -100], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?' +
  'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

let this_marker;
for (let i = 1; i < map_content.length-1; i++){
  this_marker = map_content[i].split(',')
  console.log(this_marker)
  L.marker([this_marker[0], this_marker[1]]).addTo(mymap).bindPopup(this_marker[2]+', '+this_marker[3]+', '+this_marker[4])
}

var popup = L.popup();
