const saveButton = document.getElementById('saveButton')

var Datastore = require('nedb')
  , db = new Datastore({ filename: './src/database2/products' });
    db.loadDatabase(function (err) {    
  console.log('nedb conncted!!')
});


var doc = {
    name:"Jaljeera",
    price:100,
    stock: 50,
    discount: 20
}


function showExistingProducts(){
    db.find({}, function(err, data){
        var el = document.getElementById('productTable')
        var productString = ""
        data.forEach(product => {
            productString += `<tr ><td><input class="form-control" value="${product.name}" type="text" /></td><td><input class="form-control" value="${product.price}" type="text" /></td><td><input class="form-control" value="${product.stock}" type="text" /></td><td><input class="form-control" value="${product.discount}" type="text" /></td><td><button class="btn btn-danger" type="button">Remove</button></td></tr>`
        })  
        
        el.innerHTML += productString;  
    })
}
  
  
showExistingProducts() //load the page with all existing products in db


saveButton.addEventListener('click', function(e){
    // Save button functioning
    e.preventDefault();

    var tableBody =  document.querySelector('tbody');
    var tableRows = document.querySelectorAll('tbody tr')

    var allNewProducts = []
    tableRows.forEach(row => {
        var product = {
            name: null,
            price: null,
            stock: null,
            discount: null
            }   

        product.name = row.children[0].firstChild.value
        product.price = Number(row.children[1].firstChild.value)
        product.stock = Number(row.children[2].firstChild.value)
        product.discount = Number(row.children[3].firstChild.value)
        
        allNewProducts.unshift(product)
    })
    console.log(allNewProducts)

    db.remove({}, { multi: true }, function (err, numRemoved) {
    });
    db.insert(allNewProducts, function (err, newDocs) {
        console.log('inserted all again!')
      });

})
