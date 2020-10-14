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


//created filter function
function clickFilter(){
//prevent page refresh
    d3.event.preventDefault() 

    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // date entered used to filter data
    if (date){
    //filter rows where date is the same as the date selected
        filterData = filterData.filter((row) => row.datetime === date);

    }

    displayData(filterData);
}


// button used to filter
d3.selectAll("#filter-btn").on("click", clickFilter);
displayData(tableData);