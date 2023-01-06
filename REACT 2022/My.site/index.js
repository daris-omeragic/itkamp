






const button = document.querySelector(".button")

button.addEventListener("click", () => {
        button.innerHTML = 
        "<div class='div'></div> " +
        "<div class='div'></div> " +
        "<div class='div'></div> " +
        "<div class='div'></div> " +
        "<div class='div'></div> " +
        "<div class='div'></div> " +
        "<div class='div'></div>";
    });
  
    divs.forEach(div => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = getRandomColor();
      });
    });
  
    setInterval(() => {
      divs.forEach(div => {
        div.style.backgroundColor = getRandomColor();
      });
      button.style.display = "none"
    }, 5000);
  
  