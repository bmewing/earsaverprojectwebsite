if(typeof Math.roundTo === "undefined") {
  Math.roundTo = function(num, step) {
    return Math.floor((num / step)) * step;
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function processAndDisplay(content) {
  content = content.split('\n')[1].split(',');
  document.getElementById("value_delivered").innerText = "$"+numberWithCommas(Math.roundTo(content[0] *= 1, 1000));
  document.getElementById("locations_delivered").innerText = numberWithCommas(Math.roundTo(content[1] *= 1, 10)) + "+";
  document.getElementById("state_count").innerText = content[2];
}

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
            let values = textfile.responseText;
            processAndDisplay(values);
        }
    }
    textfile.open("GET", "http://earsaverproject.com/data/count_data.csv", true);
    textfile.send();
}
loadTotalCount();
