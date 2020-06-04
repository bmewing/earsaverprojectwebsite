if(typeof Math.roundTo === "undefined") {
  Math.roundTo = function(num, step) {
    return Math.floor((num / step)) * step;
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let content;

function loadTotalCount()
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
            content = textfile.responseText;
        }
    }
    textfile.open("GET", "https://docs.google.com/spreadsheets/d/1KN6tj0Q_L4KU65oRcFO6pFaPspACkLK3Fi2SOreg1F4/export?format=csv&gid=513830430", false);
    textfile.send();
}
loadTotalCount();
content = content.split(',')
document.getElementById("value_delivered").innerText = numberWithCommas(Math.roundTo(content[0] *= 1, 1000) * 2);
document.getElementById("locations_delivered").innerText = numberWithCommas(Math.roundTo(content[1] *= 1, 10));
document.getElementById("state_count").innerText = content[2];
