var Orders=[];
function submit(){
var order_1=document.getElementById("pizza_1").value;
var order_2=document.getElementById("pizza_2").value;
var order_3=document.getElementById("pizza_3").value;
var order_4=document.getElementById("pizza_4").value;



Orders.push(order_1);
Orders.push(order_2);
Orders.push(order_3);
Orders.push(order_4);
console.log(Orders);
document.getElementById("display_name").innerHTML=Orders;
document.getElementById("submit_button").style.display="none";
document.getElementById("sorting_button").style.display="inline-block";
}
function sorting() { Orders.sort();
console.log(Orders);
document.getElementById("display_name").innerHTML = Orders; }