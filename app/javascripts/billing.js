var addButton = document.getElementById("addButton")
var calculateButton = document.getElementById("calculateButton")
var checkoutButton = document.getElementById("checkoutButton")
var customerName = document.getElementById("customerName")

var initRow = document.querySelector('tbody tr')
var initQuantity = initRow.children[1].firstChild
var initUnitPrice = initRow.children[2].firstChild
var initDiscout = initRow.children[3].firstChild
var initNetPrice = initRow.children[4].firstChild

var initInputs = [initQuantity, initUnitPrice, initDiscout]

initInputs.forEach(input => {
    
    input.addEventListener('input', function(e){
        calculateRowPrice(e)
    })
})


function calculateRowPrice(e){
    var quantity = e.srcElement.parentNode.parentNode.children[1].firstChild.value
    var unitPrice = e.srcElement.parentNode.parentNode.children[2].firstChild.value
    var discount = e.srcElement.parentNode.parentNode.children[3].firstChild.value
    var netPrice = e.srcElement.parentNode.parentNode.children[4].firstChild

    var rowTotal = unitPrice*(1-discount/100)*quantity  //to round off
    netPrice.value = Math.round(rowTotal * 100) / 100  
}



calculateButton.addEventListener('click', function(){
    calculateTotal()
})



var initRemoveButton = document.querySelector('.btn-danger')
initRemoveButton.addEventListener('click', function(event) {
    if (confirm("Do you really want to delete?")) {
        removeRow(event)
    }
})




// ADD BUTTON 
addButton.addEventListener('click', function(){
    addRow()
})


function addRow() {
    // Create table.
    var row1 = document.createElement('tr');
    
    var row1col2 = row1.insertCell(0);
    row1col2.innerHTML = '<input type="text" class="form-control" />';
    var row1col3 = row1.insertCell(1);
    row1col3.innerHTML = '<input class="form-control" type="number" value="1"/>';
    var row1col4 = row1.insertCell(2);
    row1col4.innerHTML = '<input type="number" class="form-control" />';
    var row1col5 = row1.insertCell(3);
    row1col5.innerHTML = '<input type="number" class="form-control" />';
    var row1col6 = row1.insertCell(4);
    row1col6.innerHTML = '<input type="number" class="form-control" />';
    var row1col7 = row1.insertCell(5);
    row1col7.innerHTML = '<button class="btn btn-danger" type="button">Remove</button>';
    
    // APPEND
    var div = document.getElementById('productBillTable');
    div.appendChild(row1)


    // NUMBER ELEMENTS EVENT LISTENER
    var addedRow = row1.children
    for(var i=1; i<=3; i++){
        addedRow[i].firstChild.addEventListener('input', function(e){
            calculateRowPrice(e)
        })
    }

    // REMOVE BUTTON
    row1col7.firstChild.addEventListener('click', function(e){ 
        if (confirm("Sure u want to delete ")) {
            removeRow(e)
        }
    })
}
// ADD BUTTON END





// REMOVE ROW
function removeRow(element) {    
    element.srcElement.parentNode.parentNode.remove();
}
// REMOVE ROW END





// CALCULATE TOTAL AND CHECKOUT BUTTON

function calculateTotal(){
    var tableBody =  document.querySelector('tbody');
    var tableRows = document.querySelectorAll('tbody tr')

    var currentTransaction = {
        customerName: "",
        products : [
            
        ]
    }

    tableRows.forEach(row => {
        var product = {
            "name": "",
            "quantity": null,
            "price": null,
            "discount": null,
            "rowTotal": null 
            }

        product.name = row.children[0].firstChild.value
        product.quantity = Number(row.children[1].firstChild.value)
        product.price = Number(row.children[2].firstChild.value)
        product.discount = Number(row.children[3].firstChild.value)
        product.rowTotal = Number(row.children[4].firstChild.value)

        currentTransaction.products.push(product)
    })

    var totalAmountText = document.getElementById("totalAmount")
    var totalAmount = 0;
    currentTransaction.products.forEach(product => {totalAmount+= product.rowTotal; console.log(product.rowTotal)})
    totalAmount = Math.ceil(totalAmount)
    totalAmountText.innerText = totalAmount

    checkoutButton.addEventListener('click', function(e){
        e.preventDefault()
        console.log("worked")
    })
}