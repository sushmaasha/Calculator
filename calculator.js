let history=[];

function dis(val){
    input=document.getElementById("inp");
    input.value+=val;
}
function backspace() {
    let display = document.getElementById("inp");
    display.value = display.value.slice(0, -1)
}
function output(){
    let x=document.getElementById("inp").value;
    let out;
    try {
        out = eval(x);
        document.getElementById("inp").value = out;
    } catch (error) {
        document.getElementById("inp").value = "Error";
    }
    document.getElementById("inp").value = out;
    history.unshift(x+'='+out);

}

function clc(){
    document.getElementById("inp").value='';
}

function hist(){
    let h=document.getElementById("hist-2");

    
    
    for(i=0;i<=history.length;i++){
        const para = document.createElement("p");
        para.textContent=history[i];
        h.appendChild(para);
    }
}
function tanr(){
    let a=document.getElementById("inp").value;
    let z=Math.tan(a);
    document.getElementById("inp").value='';
    document.getElementById("inp").value+='tan('+z+')';
    history.unshift('tan('+a+')'+'='+z);
}
function sin(){
    let a=document.getElementById("inp").value;
    let z=Math.sin(a);
    document.getElementById("inp").value='';
    document.getElementById("inp").value+='sin('+z+')';
    history.unshift('sin('+a+')'+'='+z);
}
function cos(){
    let a=document.getElementById("inp").value;
    let z=Math.cos(a);
    document.getElementById("inp").value='';
    document.getElementById("inp").value+='cos('+z+')';
    history.unshift('cos('+a+')'+'='+z);
}
function cot(){
    let a=document.getElementById("inp").value;
    let z=Math.tan(a);
    let r=1/z;
    document.getElementById("inp").value='';
    document.getElementById("inp").value+='cot('+a+')'+'='+r;
    history.unshift('cot('+a+')'+'='+r);
}
function clrh(){
    history=[];
    document.getElementById("hist-2").innerHTML='';
    
}