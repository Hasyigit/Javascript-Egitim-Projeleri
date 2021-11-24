const darkBtn = document.querySelector(".bg-dark")
const body = document.querySelector("body")

darkBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("dark")
    if(darkBtn.classList.contains("dark")){
        body.style.background = "black";
        body.style.color = "#FFFFFF";
        darkBtn.style.background = "#FFFFFF";
    } else{
        body.style.backgroundColor = "#FFFFFF";
        body.style.color = "black";
        darkBtn.style.background = "black";
    }
})