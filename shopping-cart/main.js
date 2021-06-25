
var removeCartItemButton = document.getElementsByClassName('removeButton');
console.log(removeCartItemButton);
for (let i = 0; i < removeCartItemButton.length; i++) {
    var button = removeCartItemButton[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
    })
    
}


// cross icon event handler
// const removeIcon = document.getElementById("cross1");
// removeIcon.addEventListener("click", function(){
//     //console.log("clicked me");
//     const removeArea = document.getElementById("area1");

//     removeArea.style.display="none";
// })
// const iconRemove = document.getElementById("cross2");
// iconRemove.addEventListener("click", function(){
//     //console.log("clicked me");
//     const areaRemove = document.getElementById("area2");
//     areaRemove.style.display="none";
// })



// area1 increase button
function increaseValue() {
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    mobilevalue();
  }

// area1 decrease button
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

  function mobilevalue(){
    var value = parseInt(document.getElementById('mobileValue').value);
    if(value > 1){
        var price = 1219*value;
        document.getElementById("mobileValue").value = price;
    }
    if(value==0){
        document.getElementById("mobileValue").value = 0;
    }
    
  }
