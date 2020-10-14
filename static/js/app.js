// from data.js
var tableData = data;

// YOUR CODE HERE!
// select tbody
var tbody = d3.select('tbody');
console.log('what is up');

//loop through table
function displayData(data){
    tbody.text('')
    data.forEach(function(sighting){
    new_tablerow=tbody.append('tr')
    Object.entries(sighting).forEach(function([key,value]){
        new_tabledata = new_tablerow.append('td').text(value)

    })
})}

displayData(tableData)

//select input and button
var input = d3.select('#datetime')
var button = d3.select("filter-btn")