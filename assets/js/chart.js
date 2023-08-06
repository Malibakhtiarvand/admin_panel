const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("Bar_Charts", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

$("#show_Bar_Charts_Code").on(
    "click",
    () => {
        $("#Bar_Charts_Code").slideToggle()
    }
)




// line bars
const xValues1 = [50,60,70,80,90,100,110,120,130,140,150];
const yValues1 = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("line_charts", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

$("#show_line_Charts_Code").on(
    "click",
    () => {
        $("#line_Charts_Code").slideToggle()
    }
)

