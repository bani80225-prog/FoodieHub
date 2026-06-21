function searchFood(){
let location =
document.getElementById("location").value;
    if(location === ""){
        alert("Please enter your location");
    }
    else{
        alert("Searching restaurants near " + location);
    }
}

let buttons = document.querySelectorAll(".card button");

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        alert("Item Added To Cart 🛒");
    });
});
function checkout()
{
    alert("Order Placed Successfully 🎉");
}