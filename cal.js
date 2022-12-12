let btn = document.querySelectorAll("button");
// console.log(btn)
let value = document.getElementById("value");
// console.log(value);


for (let i=0; i<btn.length ; i++) {
  btn[i].addEventListener("click",function(){
    
    if(btn[i].innerHTML.trim()==="="){
      value.innerHTML = eval(value.innerHTML)
    }else{
      if(btn[i].innerHTML.trim()==="AC"){
        value.innerHTML = "";
      }
      else{
        value.innerHTML += btn[i].innerHTML.trim() 
        // console.log(btn[i].innerHTML)
      }
    }
  })
 

}