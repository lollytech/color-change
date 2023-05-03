document.title = "COUNTER | APP"

const count = document.getElementById("count")
const err = document.getElementById("err")

let counter = 0;

const increment = () =>{
    if (counter < 10) {
        counter += 1;
        count.textContent = counter;
        count.style.color = "black"
        
    
    }else {
        counter = 10;
        err.textContent = "counter cannot be greater than 10";
        count.style.color = "red"
        err.color = "red"
    }
}

const decrement = ()=> {
    if(counter > 0){
        counter -= 1;
        count.textContent = counter;
     
    }else{
        counter = 0;
        err.textContent = "counter cannot be less than 0";
    }
}