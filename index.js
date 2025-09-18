let text=document.getElementById("text")
let char=document.getElementById("char")
let words=document.getElementById("words")
function Btn(){
    let a=text.value;
    char.textContent="No.of Characters is: "+a.length;
    char.style.color="navy"
    let b=a.split(" ");
    words.textContent="No.of Words is: "+b.length;
    words.style.color="red"
}