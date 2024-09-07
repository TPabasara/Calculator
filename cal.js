let flag = 0;

document.getElementById("seven").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}7`;
}
document.getElementById("eight").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}8`;
}
document.getElementById("nine").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}9`;
}
document.getElementById("plus").onclick = function(){
    num = document.getElementById("display").value;
    document.getElementById("display").value = `${num}+`;
    flag = 1;
}
document.getElementById("four").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}4`;
}
document.getElementById("five").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}5`;
}
document.getElementById("six").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}6`;
}
document.getElementById("minus").onclick = function(){
    num = document.getElementById("display").value;
    document.getElementById("display").value = `${num}-`;
    flag = 2;
}
document.getElementById("one").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}1`;
}
document.getElementById("two").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}2`;
}
document.getElementById("three").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}3`;
}
document.getElementById("multi").onclick = function(){
    num = document.getElementById("display").value;
    document.getElementById("display").value = `${num}×`;
    flag = 3;
}
document.getElementById("zero").onclick = function(){
    num = document.getElementById("display").value
    document.getElementById("display").value = `${num}0`;
}
document.getElementById("divition").onclick = function(){
    num = document.getElementById("display").value;
    document.getElementById("display").value = `${num}/`;
    flag = 4;
}
document.getElementById("cButton").onclick = function(){
    num = document.getElementById("display").value;
    document.getElementById("display").value = ``;
}
document.getElementById("equal").onclick = function(){
    content = document.getElementById("display").value;
    contArray1 = [...content];
    contArray2 = [];
    contArray3 = [];

    switch(flag){
        case 1 :
            index = contArray1.indexOf('+');
            break;
        case 2 :
            index = contArray1.indexOf('-');
            break;
        case 3 :
            index = contArray1.indexOf('×');
            break;
        default :
            index = contArray1.indexOf('/');
    }
    
    for(let i=0; i<contArray1.length; i++){
        if(i < index){
            contArray2[i] = contArray1[i];
        }
        else if(i > index){
            contArray3[i] = contArray1[i];
        }
    }

    num1 = contArray2.join("");
    num2 = Number(num1.trim());
    num3 = contArray3.join("");
    num4 = Number(num3.trim());

    if(num4 === 0 & flag === 4){
        flag = 5;
    }

    switch(flag){
        case 1 :
            num5 = String(num2 + num4);
            document.getElementById("display").value = num5;
            flag = 0;
            break;
        case 2 :
            num5 = String(num2 - num4);
            document.getElementById("display").value = num5;
            flag = 0;
            break;
        case 3 :
            num5 = String(num2 * num4);
            document.getElementById("display").value = num5;
            flag = 0;
            break;
        case 4 :
            num5 = String(num2 / num4);
            document.getElementById("display").value = num5;
            flag = 0;
            break;
        case 5 :
            document.getElementById("display").value = "can't divided by zero.";
            flag = 0;
            break;
        default :
            document.getElementById("display").value = "There's something wrong.";
            flag = 0;
    }
}