function f1(){
    var n =document.getElementById("v1").value;
    var arr =new Array();

if(n < 1 || n > 19){
    document.getElementById("alert1").style="display: block; color: red ;";
    return;
}
else{
    document.getElementById("alert1").style = "display : none;";

}

for(var i = 1; i<=19 ; i++){
    arr[i-1] = n * i;
}
document.getElementById("res1").innerHTML = "";
for(var x of arr){
    document.getElementById("res1").innerHTML += x +"<br>";
}
}