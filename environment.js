//source for this code: 'http://www.java2s.com/example/javascript/chart.js/chart-js-to-update-line-chart-having-two-data-sets.html'
//source for the two data sets used that were embedded in this code: "https://www.statista.com/statistics/1090566/textile-waste-generated-in-the-european-union-per-person/", "https://www.statista.com/statistics/1091473/incinerated-textile-waste-in-the-european-union-per-person/"

//identify the correct element in the HTML by using .getElementByID
var ctx = document.getElementById("myChart").getContext('2d');
//giving the new variable myChart various properties
var myChart = new Chart(ctx, {
  type: 'bar', //declaring as a bar chart
  data: {
    //here is the embedded data from the datasets
    labels: ["Belgium", "Czechia", "Portugal", "Italy", "Austria", "Netherlands", "Germany", "Ireland", "UK", "Denmark", "France", "Finland", "Poland", "Hungary", "Spain"],
    datasets: [{
      label: 'kg of consumed textiles',
      data: [14.8, 10.2, 8, 7.7, 7, 5.9, 4.7, 4.7, 3.1, 3.1, 3.1, 2.7, 2.7, 2.4, 2.1],
      backgroundColor: 'pink', //setting the colour of the bars
    }]
  },
  //this block ensures that all the scales begin at zero
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//this is a function that is called when the button 'add incinerated data' is clicked. 

function clearAndAddNewDataSets() {
  myChart.config.data.datasets = [];
  myChart.config.data.labels = [];
  var labels = ["Belgium", "Czechia", "Portugal", "Italy", "Austria", "Netherlands", "Germany", "Ireland", "UK", "Denmark", "France", "Finland", "Poland", "Hungary", "Spain"];
  var data = [
    [14.8, 10.2, 8, 7.7, 7, 5.9, 4.7, 4.7, 3.1, 3.1, 3.1, 2.7, 2.7, 2.4, 2.1],
    [3.70, 2.50, 2, 1.90, 1.70, 1.50, 1.20, 1.20, 0.80, 0.80, 0.80, 0.70, 0.70, 0.60, 0.50] //if the function is called the chart is updated with this new embedded set of data alongside the original
]
  var colors = ['pink', 'red']; 
  var title = ["consumed", "incinerated"]//arrays to be chosen from later based on the index of the elements
  myChart.config.data.labels = labels;

  
  for (i = 0; i < data.length; i++) { //for loop to cycle through the two different datasets
        var dataSet = {   
       label: "kg of " + title[i] + ' textiles', //assigning the correct label
      data: data[i],                                // and data to the label that appears when hovered over
      backgroundColor: colors[i]                
    }
    myChart.config.data.datasets.push(dataSet);
  }
  myChart.update(); //update the chart.
}