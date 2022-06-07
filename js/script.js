let btn = document.querySelector(".header-btn")
btn.addEventListener("click",
    () => {
        document.querySelector(".header-general")
            .style.display = "block"
    })

let btnClose = document.querySelector( ".header-square h1")
btnClose.addEventListener("click", () => {
    document.querySelector(".header-general")
        .style.display ="none"
})