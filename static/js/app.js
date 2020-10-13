// from data.js
var tableData = data;

// YOUR CODE HERE!
// select tbody
var tbody = d3.select('tbody');
console.log('what is up');

//loop through table
function displayData(data){
    tbody.text('')
    data.forEach(function(et_sighting){
    new_tablerow=tbody.append('tr')
    Object.entries(et_sighting).forEach(function([key,value]){
        new_tabledata = new_tablerow.append('td').text(value)

    })
})}

displayData(tableData)
