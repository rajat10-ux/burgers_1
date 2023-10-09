let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");
cartIcon.addEventListener("click",()=>{
        cart.classList.add("active");
});
closeCart.addEventListener("click",()=>{
        cart.classList.remove("active");
});
let body=document.querySelector("body");
let dark=document.getElementById("dark_mode");
let blogs=document.querySelectorAll("blogs-content");
dark.addEventListener("click",()=>{
        body.style.backgroundColor="black";
        body.style.color="green";
})
dark.addEventListener("dblclick",()=>{
        body.style.backgroundColor="white";
        body.style.color="black";
})
//cart working
if(document.readyState=='loading'){
        document.addEventListener('DOMContentLoaded',ready)
}else{
        ready();
}
function ready(){
var reomveCartButtons=document.getElementsByClassName('cart-remove');
        console.log(reomveCartButtons);
        for(i=0;i<reomveCartButtons.length;i++){
                var button=reomveCartButtons[i];
                button.addEventListener('click',reomveCartItem);
        }
var quantityInputs=document.getElementsByClassName("cart-quantity");
for(var i=0;i<quantityInputs.length;i++){
      var input=quantityInputs[i];
      input.addEventListener("change",quantityChanged);  
}
var addCart=document.getElementsByClassName("add-cart");
for(var i=0;i<addCart.length;i++){
        var button=addCart[i];
        button.addEventListener("click",addCartClicked);
}
document.getElementsByClassName("btn-buy")[0].addEventListener("click",buyButtonClicked);
}
function buyButtonClicked(){
        alert('your order is been placed');
        var cartContent=document.getElementsByClassName("cart-content")[0];
        while(cartContent.hasChildNodes()){
                cartContent.removeChild(cartContent.firstChild);
        }
        updatetotal();
}
function reomveCartItem(event){
        var buttonClicked=event.target;
        buttonClicked.parentElement.remove();
        updatetotal();
}
function quantityChanged(event){
 var input=event.target;
 if(isNaN(input.value) || input.value<=0){
        input.value=1;
 }
 updatetotal();
}
function addCartClicked(event){
 var button=event.target;
var shopProducts=button.parentElement;
var title=shopProducts.getElementsByClassName("product-title")[0].innerText;
var price=shopProducts.getElementsByClassName("price")[0].innerText;
var productimg=shopProducts.getElementsByClassName("product-img")[0].src;
addProductToCart(title,price,productimg);
updatetotal();
}
function addProductToCart(title,price,productimg){
 var cartShopBox=document.createElement("div");
   cartShopBox.classList.add("cart-box")
 var cartItems=document.getElementsByClassName("cart-content")[0];
var cartItemsNames=cartItems.getElementsByClassName("cart-product-title");
for(var  i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText==title){
     alert("You Have Order This Earlier");   
     return;
}
}
var cartBoxContent=`
<img src="${productimg}" class="cart-img">
<d iv class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  <input type="number" value="1" class="cart-quantity" />
</d>
<i class="bx bxs-trash-alt cart-remove"></i>`;
cartShopBox.innerHTML=cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName("cart-remove")[0]
.addEventListener("click",reomveCartItem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change",quantityChanged);
}
function updatetotal(){
 var cartContent=document.getElementsByClassName("cart-content")[0];
var cartBoxes=cartContent.getElementsByClassName("cart-box");
var total=0;
for(var i=0;i<cartBoxes.length;i++){
var cartBox=cartBoxes[i];
 var priceElement=cartBox.getElementsByClassName("cart-price")[0];
 var quantityElement=cartBox.getElementsByClassName("cart-quantity")[0];
 var price=parseFloat(priceElement.innerText.replace("₹", ""));
 var quantity=quantityElement.value;
 total=total+price*quantity;
 total=Math.round(total*100/100);
}
 document.getElementsByClassName("total-price")[0].innerText="₹"+total;
}
let onebox=document.getElementById("onebox");
let twobox=document.getElementById("twobox");
let threebox=document.getElementById("threebox");
let fourbox=document.getElementById("fourbox");
let fivebox=document.getElementById("fivebox");
let sixbox=document.getElementById("sixbox");
let sevenbox=document.getElementById("sevenbox");
let eightbox=document.getElementById("eightbox");
onebox.addEventListener("click",()=>{
        let div=document.createElement("div");
        div.innerHTML=`<h5 style="color:red">Calories: 350,Fat:14g,Carbs: 35g Protein:17g</h5>`;
        return onebox.appendChild(div);
})
twobox.addEventListener("click",()=>{
        let div=document.createElement("div");
        div.innerHTML=`<h5 style="color:red">Calories: 535,Fat:20g,Carbs: 57g Protein:29g</h5>`;
         return twobox.appendChild(div);
})
threebox.addEventListener("click",()=>{
        let div=document.createElement("div");
        div.innerHTML=`<h5 style="color:red">Calories:170,Fat:9g,Carbs:1g Protein:22g</h5>`;
        return threebox.appendChild(div);
        
})
fourbox.addEventListener("click",()=>{
        let div=document.createElement("div");
        div.innerHTML=`<h5 style="color:red">Calories: 124,Fat:4.4g,Carbs: 10g Protein:11g</h5>`;
        return fourbox.appendChild(div);
        
})
fivebox.addEventListener("click",()=>{
        let div=document.createElement("div");
        div.innerHTML=`<h5 style="color:red">Calories:595,Fat:33g,Carbs: 40g Protein:33g</h5>`;
        return fivebox.appendChild(div);
        
})
sixbox.addEventListener("click",()=>{
        let div=document.createElement("div");
div.innerHTML=`<h5 style="color:red">Calories:354,Fat:15.6g,Carbs: 38.7g Protein:14.9g</h5>`;
       return sixbox.appendChild(div);
})
sevenbox.addEventListener("click",()=>{
        let div=document.createElement("div");
div.innerHTML=`<h5 style="color:red">Calories:563,Fat:29.3g,Carbs:36.3g Protein:24.6g</h5>`;
       return  sevenbox.appendChild(div);
})
eightbox.addEventListener("click",()=>{
        let div=document.createElement("div");
        div.innerHTML=`<h5 style="color:red">Calories:170,Fat:15g,Carbs: 6g Protein:1.5g</h5>`;
        return eightbox.appendChild(div);
})










