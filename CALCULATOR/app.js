var display = document.getElementById("display");

function getvalue(num){
    console.log (num)
    display.value += num;
}

function calculatevalue(){
var ans = eval(display.value);
display.value = ans;
}

function clearall(){
display.value = ""
}