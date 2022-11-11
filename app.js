let buttons =  document.querySelectorAll('.btn');
let screen = document.querySelector('input'); 
buttons.forEach((button) => {
  button.addEventListener('click', (e)=>{
    let value = e.target.innerHTML; 
      screen.value += value
  })
});

let clear = document.querySelector('.com1');
clear.addEventListener('click', (e)=>{
  screen.value = "";
})

let equal = document.querySelector('.com-1');
equal.addEventListener('click', (e)=>{
  if(screen.value === ""){
    screen.value = "0";
  }
  else{
    try{
      let ans = eval(screen.value);
      screen.value = ans;
    }catch{
      screen.value = "Error"
    }   
  }
})

let del = document.querySelector('.com2');
del.addEventListener('click', (e) =>{
  screen.value = screen.value.slice(0, -1)
})