const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const saveButton = document.getElementById('saveButton')

const adapter = new FileSync('./src/database/products.json')
const Product = low(adapter)

Product.defaults({ products: [] }).write()

var result = Product.get('products').write()
let data =  result
  

function showExistingProducts(data, resultString){
    var el = document.getElementById('productTable')
    var productString = ""
    data.forEach(product => {
        productString += `<tr ><td><input class="form-control" value="${product.name}" type="text" /></td><td><input class="form-control" value="${product.price}" type="text" /></td><td><input class="form-control" value="${product.stock}" type="text" /></td><td><input class="form-control" value="${product.discount}" type="text" /></td><td><button class="btn btn-danger" type="button">Remove</button></td></tr>`
    })  
    
    el.innerHTML += productString;
  
}
  
  
showExistingProducts(data)

saveButton.addEventListener('click', function(e){
    e.preventDefault();
    console.log("saved")
})

// // TEST 
// console.log(Product.getState())
// Product.setState({"elephants": []}).write()
// console.log(Product.getState())
// // TEST END