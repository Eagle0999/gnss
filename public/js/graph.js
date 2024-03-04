
window.onload = function () {

	var rinex = JSON.parse(document.getElementById('content').innerHTML);

	console.log(rinex);

/*
var chart = new CanvasJS.Chart("chartContainer", {
	title: {
		text: "Частотно-фазовая характеристика"
	},
	axisX: {
		valueFormatString: "MMM YYYY"
	},
	axisY2: {
		title: "Median List Price",
		prefix: "$",
		suffix: "K",
		horizontalAlign: "right"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "top",
		horizontalAlign: "center",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"line",
		axisYType: "secondary",
		name: "San Fransisco",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [		
			{ x: new Date(2014, 00, 01), y: 850 },
			{ x: new Date(2014, 01, 01), y: 889 },
			{ x: new Date(2014, 02, 01), y: 890 },
			{ x: new Date(2014, 03, 01), y: 899 },
			{ x: new Date(2014, 04, 01), y: 903 },
			{ x: new Date(2014, 05, 01), y: 925 },
			{ x: new Date(2014, 06, 01), y: 899 },
			{ x: new Date(2014, 07, 01), y: 875 },
			{ x: new Date(2014, 08, 01), y: 927 },
			{ x: new Date(2014, 09, 01), y: 949 },
			{ x: new Date(2014, 10, 01), y: 946 },
			{ x: new Date(2014, 11, 01), y: 927 },
			{ x: new Date(2015, 00, 01), y: 950 },
			{ x: new Date(2015, 01, 01), y: 998 },
			{ x: new Date(2015, 02, 01), y: 998 },
			{ x: new Date(2015, 03, 01), y: 1050 },
			{ x: new Date(2015, 04, 01), y: 1050 },
			{ x: new Date(2015, 05, 01), y: 999 },
			{ x: new Date(2015, 06, 01), y: 998 },
			{ x: new Date(2015, 07, 01), y: 998 },
			{ x: new Date(2015, 08, 01), y: 1050 },
			{ x: new Date(2015, 09, 01), y: 1070 },
			{ x: new Date(2015, 10, 01), y: 1050 },
			{ x: new Date(2015, 11, 01), y: 1050 },
			{ x: new Date(2016, 00, 01), y: 995 },
			{ x: new Date(2016, 01, 01), y: 1090 },
			{ x: new Date(2016, 02, 01), y: 1100 },
			{ x: new Date(2016, 03, 01), y: 1150 },
			{ x: new Date(2016, 04, 01), y: 1150 },
			{ x: new Date(2016, 05, 01), y: 1150 },
			{ x: new Date(2016, 06, 01), y: 1100 },
			{ x: new Date(2016, 07, 01), y: 1100 },
			{ x: new Date(2016, 08, 01), y: 1150 },
			{ x: new Date(2016, 09, 01), y: 1170 },
			{ x: new Date(2016, 10, 01), y: 1150 },
			{ x: new Date(2016, 11, 01), y: 1150 },
			{ x: new Date(2017, 00, 01), y: 1150 },
			{ x: new Date(2017, 01, 01), y: 1200 },
			{ x: new Date(2017, 02, 01), y: 1200 },
			{ x: new Date(2017, 03, 01), y: 1200 },
			{ x: new Date(2017, 04, 01), y: 1190 },
			{ x: new Date(2017, 05, 01), y: 1170 }
		]
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Manhattan",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 1200 },
			{ x: new Date(2014, 01, 01), y: 1200 },
			{ x: new Date(2014, 02, 01), y: 1190 },
			{ x: new Date(2014, 03, 01), y: 1180 },
			{ x: new Date(2014, 04, 01), y: 1250 },
			{ x: new Date(2014, 05, 01), y: 1270 },
			{ x: new Date(2014, 06, 01), y: 1300 },
			{ x: new Date(2014, 07, 01), y: 1300 },
			{ x: new Date(2014, 08, 01), y: 1358 },
			{ x: new Date(2014, 09, 01), y: 1410 },
			{ x: new Date(2014, 10, 01), y: 1480 },
			{ x: new Date(2014, 11, 01), y: 1500 },
			{ x: new Date(2015, 00, 01), y: 1500 },
			{ x: new Date(2015, 01, 01), y: 1550 },
			{ x: new Date(2015, 02, 01), y: 1550 },
			{ x: new Date(2015, 03, 01), y: 1590 },
			{ x: new Date(2015, 04, 01), y: 1600 },
			{ x: new Date(2015, 05, 01), y: 1590 },
			{ x: new Date(2015, 06, 01), y: 1590 },
			{ x: new Date(2015, 07, 01), y: 1620 },
			{ x: new Date(2015, 08, 01), y: 1670 },
			{ x: new Date(2015, 09, 01), y: 1720 },
			{ x: new Date(2015, 10, 01), y: 1750 },
			{ x: new Date(2015, 11, 01), y: 1820 },
			{ x: new Date(2016, 00, 01), y: 2000 },
			{ x: new Date(2016, 01, 01), y: 1920 },
			{ x: new Date(2016, 02, 01), y: 1750 },
			{ x: new Date(2016, 03, 01), y: 1850 },
			{ x: new Date(2016, 04, 01), y: 1750 },
			{ x: new Date(2016, 05, 01), y: 1730 },
			{ x: new Date(2016, 06, 01), y: 1700 },
			{ x: new Date(2016, 07, 01), y: 1730 },
			{ x: new Date(2016, 08, 01), y: 1720 },
			{ x: new Date(2016, 09, 01), y: 1740 },
			{ x: new Date(2016, 10, 01), y: 1750 },
			{ x: new Date(2016, 11, 01), y: 1750 },
			{ x: new Date(2017, 00, 01), y: 1750 },
			{ x: new Date(2017, 01, 01), y: 1770 },
			{ x: new Date(2017, 02, 01), y: 1750 },
			{ x: new Date(2017, 03, 01), y: 1750 },
			{ x: new Date(2017, 04, 01), y: 1730 },
			{ x: new Date(2017, 05, 01), y: 1730 }
		]
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Seatle",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 409 },
			{ x: new Date(2014, 01, 01), y: 415 },
			{ x: new Date(2014, 02, 01), y: 419 },
			{ x: new Date(2014, 03, 01), y: 429 },
			{ x: new Date(2014, 04, 01), y: 429 },
			{ x: new Date(2014, 05, 01), y: 450 },
			{ x: new Date(2014, 06, 01), y: 450 },
			{ x: new Date(2014, 07, 01), y: 445 },
			{ x: new Date(2014, 08, 01), y: 450 },
			{ x: new Date(2014, 09, 01), y: 450 },
			{ x: new Date(2014, 10, 01), y: 440 },
			{ x: new Date(2014, 11, 01), y: 429 },
			{ x: new Date(2015, 00, 01), y: 435 },
			{ x: new Date(2015, 01, 01), y: 450 },
			{ x: new Date(2015, 02, 01), y: 475 },
			{ x: new Date(2015, 03, 01), y: 475 },
			{ x: new Date(2015, 04, 01), y: 475 },
			{ x: new Date(2015, 05, 01), y: 489 },
			{ x: new Date(2015, 06, 01), y: 495 },
			{ x: new Date(2015, 07, 01), y: 495 },
			{ x: new Date(2015, 08, 01), y: 500 },
			{ x: new Date(2015, 09, 01), y: 508 },
			{ x: new Date(2015, 10, 01), y: 520 },
			{ x: new Date(2015, 11, 01), y: 525 },
			{ x: new Date(2016, 00, 01), y: 525 },
			{ x: new Date(2016, 01, 01), y: 529 },
			{ x: new Date(2016, 02, 01), y: 549 },
			{ x: new Date(2016, 03, 01), y: 550 },
			{ x: new Date(2016, 04, 01), y: 568 },
			{ x: new Date(2016, 05, 01), y: 575 },
			{ x: new Date(2016, 06, 01), y: 579 },
			{ x: new Date(2016, 07, 01), y: 575 },
			{ x: new Date(2016, 08, 01), y: 585 },
			{ x: new Date(2016, 09, 01), y: 589 },
			{ x: new Date(2016, 10, 01), y: 595 },
			{ x: new Date(2016, 11, 01), y: 595 },
			{ x: new Date(2017, 00, 01), y: 595 },
			{ x: new Date(2017, 01, 01), y: 600 },
			{ x: new Date(2017, 02, 01), y: 624 },
			{ x: new Date(2017, 03, 01), y: 635 },
			{ x: new Date(2017, 04, 01), y: 650 },
			{ x: new Date(2017, 05, 01), y: 675 }
		]
	},
	{
		type: "line",
		axisYType: "secondary",
		name: "Los Angeles",
		showInLegend: true,
		markerSize: 0,
		yValueFormatString: "$#,###k",
		dataPoints: [
			{ x: new Date(2014, 00, 01), y: 529 },
			{ x: new Date(2014, 01, 01), y: 540 },
			{ x: new Date(2014, 02, 01), y: 539 },
			{ x: new Date(2014, 03, 01), y: 565 },
			{ x: new Date(2014, 04, 01), y: 575 },
			{ x: new Date(2014, 05, 01), y: 579 },
			{ x: new Date(2014, 06, 01), y: 589 },
			{ x: new Date(2014, 07, 01), y: 579 },
			{ x: new Date(2014, 08, 01), y: 579 },
			{ x: new Date(2014, 09, 01), y: 579 },
			{ x: new Date(2014, 10, 01), y: 569 },
			{ x: new Date(2014, 11, 01), y: 525 },
			{ x: new Date(2015, 00, 01), y: 535 },
			{ x: new Date(2015, 01, 01), y: 575 },
			{ x: new Date(2015, 02, 01), y: 599 },
			{ x: new Date(2015, 03, 01), y: 619 },
			{ x: new Date(2015, 04, 01), y: 639 },
			{ x: new Date(2015, 05, 01), y: 648 },
			{ x: new Date(2015, 06, 01), y: 640 },
			{ x: new Date(2015, 07, 01), y: 645 },
			{ x: new Date(2015, 08, 01), y: 648 },
			{ x: new Date(2015, 09, 01), y: 649 },
			{ x: new Date(2015, 10, 01), y: 649 },
			{ x: new Date(2015, 11, 01), y: 649 },
			{ x: new Date(2016, 00, 01), y: 650 },
			{ x: new Date(2016, 01, 01), y: 665 },
			{ x: new Date(2016, 02, 01), y: 675 },
			{ x: new Date(2016, 03, 01), y: 695 },
			{ x: new Date(2016, 04, 01), y: 690 },
			{ x: new Date(2016, 05, 01), y: 699 },
			{ x: new Date(2016, 06, 01), y: 699 },
			{ x: new Date(2016, 07, 01), y: 699 },
			{ x: new Date(2016, 08, 01), y: 699 },
			{ x: new Date(2016, 09, 01), y: 699 },
			{ x: new Date(2016, 10, 01), y: 709 },
			{ x: new Date(2016, 11, 01), y: 699 },
			{ x: new Date(2017, 00, 01), y: 700 },
			{ x: new Date(2017, 01, 01), y: 700 },
			{ x: new Date(2017, 02, 01), y: 724 },
			{ x: new Date(2017, 03, 01), y: 739 },
			{ x: new Date(2017, 04, 01), y: 749 },
			{ x: new Date(2017, 05, 01), y: 740 }
		]
	}]
});*/


const xValues = [100,200,300,400,500,600,700,800,900,1000];
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
		/*data: {
		  labels: xValues,
		  datasets: [{ 
			data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
			borderColor: "red",
			fill: false
		  }, { 
			data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
			borderColor: "green",
			fill: false
		  }, { 
			data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
			borderColor: "blue",
			fill: false
		  }]
		},*/
		data: datas[index],
		options: {
		  legend: {display: true}
		  
		}
	  });
	  index+=1;
}
console.log(datas);


//chart.render();

/*function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}*/

}
