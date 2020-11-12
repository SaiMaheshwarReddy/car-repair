const hamburger = document.querySelector(".bars__icon")
const hamburgerMenu = document.querySelector(".hamburger__menu")
const mobNavlist = document.querySelectorAll(".toggle")
hamburger.addEventListener("click", (e)=> {
    e.preventDefault()
    hamburgerMenu.classList.toggle("active")
    hamburger.classList.toggle("icon__active")

})
console.log(mobNavlist)

mobNavlist.forEach((item)=> {
    item.addEventListener("click", ()=>{
        hamburgerMenu.classList.remove("active")
        hamburger.classList.remove("icon__active")


    })
})

