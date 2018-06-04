var addButton = document.getElementById("addButton")

addButton.addEventListener('click', function(){
    addRow()
})



function addRow() {
    // Create table.
    var row1 = document.createElement('tr');
    
    var row1col2 = row1.insertCell(0);
    row1col2.innerHTML = '<input type="text" class="form-control" />';
    var row1col3 = row1.insertCell(1);
    row1col3.innerHTML = '<input type="text" class="form-control" />';
    var row1col4 = row1.insertCell(2);
    row1col4.innerHTML = '<input type="text" class="form-control" />';
    var row1col5 = row1.insertCell(3);
    row1col5.innerHTML = '<input type="text" class="form-control" />';
    var row1col6 = row1.insertCell(4);
    row1col6.innerHTML = '<input type="text" class="form-control" />';
    var row1col7 = row1.insertCell(5);
    row1col7.innerHTML = '<button class="btn btn-danger" type="button">Remove</button>';
    
    
    var div = document.getElementById('productBillTable');


    div.appendChild(row1)
    row1col7.firstChild.addEventListener('click', function(e){removeRow(e)})


}



function removeRow(element) {
    
    element.srcElement.parentNode.parentNode.remove();
}