let header = document.getElementById('header')
let h1 = document.createElement("h1");
h1.style.background = "crimson"
h1.style.color = 'white'
h1.innerText = "Our Products";
h1.style.textAlign = 'center'
header.style.background = "blue";
header.style.width = '100%'

let main = document.getElementById('product-container')
let head = document.createElement("h2")
head.innerText = "OUR PRODUCTS";
head.style.textAlign = 'center';
async function product(){
    let fetchproduct = await fetch("https://fakestoreapi.com/products")
    let data = await fetchproduct.json()
    showdata(data)
   console.log(data)
}
product()
function showdata(data){
    data.map(function(el){
    
        let maindiv = document.createElement("div");
        let img = document.createElement("img");
        console.log(img)
        maindiv.append(img)
        main.append(maindiv)
        img.src = el.image;
        img.style.width = "250px";
        img.style.height = '250px';
        let btn = document.createElement("button")
    
        btn.style.cursor = "pointer"
        btn.innerText = "view detail";
        let title = document.createElement("h4")
        let price = document.createElement("h5")
        title.innerText = el.title
        price.innerText =  "₹" + el.price
        maindiv.append(title,price,btn)
        maindiv.style.textAlign = "center";
        maindiv.style.border = "1psx solid #eee"
        maindiv.style.background = "black"
        maindiv.style.color = "white";
        img.style.borderRadius = '50%'
        maindiv.style.margin = "2px"
        img.style.padding = '20px'

        header.append(h1,main)
      btn.addEventListener('click', function(){
        window.location = 'detail.html';
      })
      
    })
} 




