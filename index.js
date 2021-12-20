//source for this code: 'https://www.d3-graph-gallery.com/graph/line_basic.html',

// Determine the size of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// add an svg to the element in the html with the class = "lineGraph"
var svg = d3.select("#lineGraph")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

//Read the data from the raw file uploaded on github in order to circumvent needing a server to run the website. I changed the format of the data from YYYY to YYYY-MM-DD in order to make it easier to manipulate, I also shortened the dataset.
d3.csv("https://raw.githubusercontent.com/kfewatt/digitalFashion/main/data.csv",

// This is a function that formats the date variable, it parses the date.
function(d){
return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
},

function(data) {

// Append an X axis, a time based axis

var x = d3.scaleTime()
  .domain(d3.extent(data, function(d) { return d.date; })) // scale begins at the first entry
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x)); //draw the x axis, without this line it would just be the y and a line

// Add a Y axis, 
var y = d3.scaleLinear()
  .domain([420, d3.max(data, function(d) { return +d.value; })]) //this scale begins at 420 in order to scale the line graph better on the page.
  .range([ height, 0 ]);
svg.append("g")
  .call(d3.axisLeft(y)); //draw the y axis, without this line it would just be the x and a line

// Draw the line
svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "green") //choose colour
  .attr("stroke-width", 3) //choose the thickness of the line
  .attr("d", d3.line()
    .x(function(d) { return x(d.date) })
    .y(function(d) { return y(d.value) }) //these plot each data value. 
    )

})