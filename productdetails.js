var data= JSON.parse(localStorage.getItem("zoomin"))
 console.log(data)
  var recent = JSON.parse(localStorage.getItem("recentview")) || [];

    display(data)
    function display(data){
        var picture=document.createElement("img")
        picture.setAttribute("src",data.image)
        document.querySelector("#secondleft",".miniimage").append(picture)
        for(var i=0;i<3;i++){
            var smalldiv= document.createElement("div")
            var minimage=document.createElement("img")
            minimage.setAttribute("src",data.image)
            smalldiv.append(minimage)
            document.querySelector("#firstleft").append(smalldiv)
        }

        // for right section-->


document.querySelector("#brand").innerText=data.brand  
document.querySelector("#name").innerText=data.name  

        var price1=document.createElement("div")
        price1.innerText= "$" +data.original_price
        var price2=document.createElement("div")
  price2.innerText= "$"+data.offer_price
  var discount=(+data.original_price-(+data.offer_price))
  var discount2=Math.ceil((discount/+data.original_price)*100)
  console.log(discount2)
  var discount=document.createElement("div")
  discount.innerText= "Save"+" "+discount2+" "+"%"
  document.querySelector("#pricedetails").append(price1,price2,discount)
var small = document.createElement("img")
small.setAttribute("src",data.image)
document.querySelector("#smallimage").append(small)
document.querySelector("span").innerText=data.color;


recent.push(data);

localStorage.setItem("recentview",JSON.stringify(recent))
 }




    // you may like part

    var maydata =[{
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2104912_1800x1800.jpg?v=1640361167",
    brand:"BROOKS BROTHERS",
    name:"NAVY IP CHECK SHIRT",
    original_price:"89.00",
    offer_price:"49.00",
    color:"blue",
    

},
{   image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2104459_1800x1800.jpg?v=1640361162",
    brand:"BURBERRY",
    name:"WHITE SHIRT",
    original_price:"49.00",
    offer_price:"29.00",
    color:"White",

},
{   image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/301521_1800x1800.jpg?v=1635255089",
    brand:"BURBERRY",
    name:"GEORGE TARTAN SHIRT",
    original_price:"403.00",
    offer_price:"263.53",
    color:"Navy",

},
{    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/339322_1800x1800.jpg?v=1635256946",
    brand:"BURBERRY",
    name:"NAVY IP CHECK SHIRT",
    original_price:"504.00",
    offer_price:"395.17",
    color:"Multicolor",

},
{    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wtlliMyyv3hcuS7RGVS0VZojPouPYfsw-25_1800x1800.jpg?v=1607399172",
    brand:"PAJAR",
    name:"WINTER PUFFER COAT",
    original_price:"499.00",
    offer_price:"248.98",
    color:"Navy",

}]


displaylike(maydata)
function displaylike(maydata){
    maydata.forEach(function(el){
        var div=document.createElement("div");
        div.setAttribute("id","maylike");
    var image=document.createElement("img");
    image.setAttribute("src",el.image);
  var name=el.name;
  var h2=document.createElement("h2")
  h2.setAttribute("id","sectiontitle")
  h2.innerText=name;

var div2= document.createElement("div");
div2.setAttribute("id","likediv")

  var price1=document.createElement("div")
        price1.innerText= "$" +el.original_price
        var price2=document.createElement("div")
  price2.innerText= "$"+el.offer_price
  var discount=(+el.original_price-(+el.offer_price))
  console.log(discount)
  var discount2=Math.ceil((discount/+el.original_price)*100)
  console.log(discount2)
  var discount=document.createElement("div")
  discount.innerText= "Save"+" "+discount2+" "+"%"
  div2.append(price1,price2,discount)
  var hoverdiv = document.createElement("div");
  hoverdiv.setAttribute("id","hoverdiv")
  hoverdiv.innerText="Quick view"
  div.append(image,h2,div2,hoverdiv)
  console.log(image,h2)
  
  document.querySelector("#mid").append(div)
div.addEventListener("click",zoomin)

function zoomin(){
    
    localStorage.setItem("zoomin",JSON.stringify(el))
    window.location.reload();

}
    
    })
}



// for recent items-->



var recentitems = JSON.parse(localStorage.getItem("recentview"))

var recitems=[]

for(var i=recentitems.length-2;i>=recentitems.length-6;i--){
recitems.push(recentitems[i])
}


showreverse(recitems)
function showreverse(recitems){
    recitems.forEach(function(elem){

        var div=document.createElement("div");
        div.setAttribute("class","maylike");
    var image=document.createElement("img");
    image.setAttribute("src",elem.image);
  var name=elem.name;
  var h2=document.createElement("h2")
  h2.setAttribute("id","sectiontitle")
  h2.innerText=name;

var div2= document.createElement("div");
div2.setAttribute("id","likediv")

  var price1=document.createElement("div")
        price1.innerText= "$" +elem.original_price
        var price2=document.createElement("div")
  price2.innerText= "$"+elem.offer_price
  var discount=(+elem.original_price-(+elem.offer_price))
  var discount2=Math.ceil((discount/+elem.original_price)*100)
  console.log(discount2)
  var discount=document.createElement("div")
  discount.innerText= "Save"+" "+discount2+" "+"%"
  div2.append(price1,price2,discount)
  div.append(image,h2,div2)
  console.log(image,h2)
  document.querySelector("#bottom").append(div)
div.addEventListener("click",zoom)

function zoom(){
    localStorage.setItem("zoomin",JSON.stringify(elem))
    window.location.reload();
}

    })
}

// add cart item-->


document.querySelector("#cart").addEventListener("click",cartclick);
function cartclick(){
    document.querySelector("#cart").style.cursor="pointer"
    localStorage.setItem("cartitem",JSON.stringify(data))
}

