let outputScreen=document.getElementById("outputscreen");

function display(num){
    outputScreen.value +=num;
}
 function Calculate(){
    try{
      outputScreen.value= eval(outputScreen.value);
    }
   catch
   {
    alert("invalid")
   }
 }

 function Clear(){
  outputScreen.value=0;
 }
function del(){
  outputScreen.value=outputScreen.value.slice(0,-1);
}

