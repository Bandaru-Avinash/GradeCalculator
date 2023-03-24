function grade(){
    let eng=document.getElementById("eng").value;
    let math=document.getElementById("math").value;
    let phy=document.getElementById("phy").value;
    let chem=document.getElementById("chem").value;
    let comp=document.getElementById("comp").value;
    let total=parseInt(eng)+parseInt(math)+parseInt(phy)+parseInt(chem)+parseInt(comp);
    let average=total/5;
    document.getElementById("tot").innerText=`Total Marks: ${total}`;
    document.getElementById("avg").innerText=`Your average marks are: ${average}`;
    let grade=document.getElementById("grade")
    if(eng<35||math<35||phy<35||chem<35||comp<35||average<60){
        grade.innerText=`You got F grade`
    }
    else if(average>=90&&average<=100){
        grade.innerText=`You got A grade`
    }
    else if(average>=80&&average<=89){
        grade.innerText=`You got B grade`
    }
    else if(average>=70&&average<=79){
        grade.innerText=`You got C grade`
    }
    else if(average>=60&&average<=69){
        grade.innerText=`You got D grade`
    }
}