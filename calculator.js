function dis(val){
    document.getElementById("result").value+=val;
}
function solve(){
    if(document.getElementById("result").value==""){
        alert("Enter a equation first");
    }
    else{
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y ;
    }
}
function one(){
    document.getElementById("result").value=document.getElementById("result").value.substr(0,document.getElementById("result").value.length-1);
}

function clr(){
    temp=document.getElementById("result").value;
    document.getElementById("result").value = "";
}