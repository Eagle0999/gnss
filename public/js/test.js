
window.onload = function () {
    var rinex = JSON.parse(document.getElementById('content').innerHTML);
    //var rinex = document.getElementById('content').innerHTML;
    console.log(rinex);
    
    let ctx; //= document.getElementById('chartContainer');
let datas = [];

let epoch_date = rinex.epoch_date
delete rinex.epoch_date;

//let colors = ["red", "green", "blue", "black"]
console.log(datas);
let index = 0;
let canvas = [];
//document.createElement("canvas");


for (let item in rinex) {
	datas.push({
		'labels': epoch_date,
		'datasets':[]
	})
	//datas[index]['labels'] = rinex.epoch_date;
	//datas[index]['datasets'] = []
	canvas.push(document.createElement("canvas"))
	canvas[index].setAttribute("id", item);
	canvas[index].setAttribute("style", "height: 400px; width: 100%;")
	let currentP = document.getElementById("par");
	document.body.insertBefore(canvas[index], currentP);
	let h2 = document.createElement("h2");
	h2.innerHTML=`График по космическому аппарату <u style='font-size:24px;'>" ${item} "</u>`
	h2.setAttribute("style", 'text-align: center; margin:100px;');
	document.body.insertBefore(h2, canvas[index]);
	for (let item2 in rinex[item])
	{
		datas[index]['datasets'].push({
			data: rinex[item][item2],
			//borderColor:colors[index],
			fill: false,
			label: item2
		})
		
	}
	ctx = document.getElementById(item)
	new Chart(ctx, {
		type: "line",

		data: datas[index],
		options: {
		  legend: {display: true}
		  
		}
	  });
	  index+=1;
}
console.log(datas);

}