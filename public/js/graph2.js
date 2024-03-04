function buildSelects(select, rinexData) {
    var Selects = document.getElementById(select);
    for (let item in rinexData) 
    {
        Selects.innerHTML += `<option>${rinexData[item]}</option>`;
        Selects.loadOptions();
    }
  }
function buildGraph()   {

}
window.onload = function() {
    var rinex = JSON.parse(document.getElementById('content').innerHTML);
	console.log(rinex);
    buildSelects('satelite', rinex.satelites);
    buildSelects('signals', rinex.signals);
    buildSelects('times', rinex.times);
}