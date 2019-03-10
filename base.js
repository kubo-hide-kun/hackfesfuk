var data = [
 {
  value: 300,
  color:"#000066",
  highlight: "#000066",
  label: "Red"
 },
 {
  value: 50,
  color: "#FFBBFF",
  highlight: "#FFBBFF",
  label: "Green"
 },
 {
  value: 100,
  color: "#BB0000",
  highlight: "#BB0000",
  label: "Yellow"
 }
];

var data1 = [
 {
  value: 100,
  color:"#BB0000",
  highlight: "#BB0000",
  label: "Red"
 },
 {
  value: 150,
  color: "#FFBBFF",
  highlight: "#FFBBFF",
  label: "Green"
 },
 {
  value: 200,
  color: "#000066",
  highlight: "#000066",
  label: "Yellow"
 }
];

var data2 = [
 {
  value: 150,
  color:"#000066",
  highlight: "#000066",
  label: "Red"
 },
 {
  value: 100,
  color: "#46BFBD",
  highlight: "#5AD3D1",
  label: "Green"
 },
 {
  value: 200,
  color: "#FDB45C",
  highlight: "#FFC870",
  label: "Yellow"
 }
];

//最初にページを開けたときに最初に開かれるページ//
var myChart = new Chart(document.getElementById("mycanvas").getContext("2d")).Doughnut(data)
var myChart1 = new Chart(document.getElementById("mycanvas1").getContext("2d")).Doughnut(data1)
var myChart2 = new Chart(document.getElementById("mycanvas2").getContext("2d")).Doughnut(data2)



// 1 //


