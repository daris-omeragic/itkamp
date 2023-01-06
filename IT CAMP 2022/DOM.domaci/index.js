

const inputText = document.querySelector('#text');
const Button = document.querySelector('#button');
const myList = document.querySelector('.conteiner ul')

Button.addEventListener('click',(s)=>{
    if (inputText.value != ""){
        s.preventDefault();
        // create li
        const Li = document.createElement('li');
        Li.innerHTML = inputText.value;
        myList.appendChild(Li);
        // create span
        const Span = document.createElement('span');
        Span.innerHTML = "X";
        Li.appendChild(Span);
    }
    const exit = document.querySelectorAll('span');
    for (let i = 0; i < exit.length; i++) {
        exit[i].addEventListener('click',()=>{
            exit[i].parentElement.style.display = "none";
            exit[i].parentElement.remove();
        })
    }
    inputText.value = "";
})