//   var inputq = document.getElementById("todoInput");
//   var list = document.getElementById("todoList");
// var btn=document.getElementById("delete")
// btn.addEventListener("click",main)

// function main() {

//     var li= document.createElement("li")
//     li.innerText=inputq.value
// inputq.value=""


// list.addEventListener("click",function () {
//     if (list.style.textDecoration==="line-through") {
//     list.style.textDecoration="none"
        
//     } else {
//     list.style.textDecoration="line-through"
        
//     }
    
    
// })

// var delet=document.createElement("button")
// delet.innerText="x"
// delet.addEventListener("click",function(){
//         li.remove();
// })
// li.appendChild(delet)
// list.appendChild(li)

    
// }
var counter=document.getElementById("count")
var counter = 0;
const button = document.getElementById("myButton");
const buttond = document.getElementById("Button");
const reset= document.getElementById("reset");
button.addEventListener("click", () => {
    counter++;
    if (counter>10) {
        alert("bas mere bhai")
        
    }
       
    console.log(counter)

});
buttond.addEventListener("click",function () {
    counter--;
if (counter<=-1) {
    alert("or neche gane ki zarorat nhi hai ")
    
}

    console.log(counter)


})
reset.addEventListener("click",function () {
    counter=0
    console.log(counter)

})




 <!-- <button onclick="alert('orr suna'); console.log('gand mai keera hai')">click me!</button>
    <button ondblclick=" console.log('or bhai')">click me 2 time</button> -->
<!-- <div style="width: 50px;height: 50px; border: 2px solid black;" onmouseover="alert('or abhi aa na ')">or abhi aa na </div> -->
<!-- <a onclick="var message='hello'; alert(message);">Facebook</a> -->
<!-- 
<a onclick="test('hello')">click me</a>
<script>
    function test(message) {
        alert(message);
    }
</script>
<img src="https://www.bmwgroup.com/en/company/_jcr_content/main/layoutcontainer_1988/columncontrol/columncontrolparsys/globalimage.coreimg.jpeg/1758537295862/720x720-i5er.jpeg" width="200px" alt="" onmouseover="src='https://www.usnews.com/object/image/00000195-f89c-d9b4-add5-fadd38740000/img-9805.jpeg?update-time=1743632742453&size=responsiveGallery&format=webp' "> -->

<!-- <p id="para" onclick="showfull()"> click for more information....</p> -->

<!-- <input id="para" type="text" placeholder="enter tour name" onfocus="showfull()" > -->


<!-- <input type="text" placeholder="enter your name" onfocus="nisar()" id="para"> -->
<!-- <form   onsubmit="nisar(event)">
    
    <input type="text" id="jaha">
    <input type="submit" value="send">
</form> -->
<!-- <input placeholder="enter your name"id="para">
<ul id="demo"></ul> 
<button onclick="todo()" id="click">Show Name</button> -->

<!-- <button id="click">click</button> -->


<!-- <div id="nisa">
<div><input id="input" placeholder="enter a item"></div>
    
<div><button id="add">Button</button></div>
<div><ul id="ul"></ul></div>

    
</div> -->