let elm = document.querySelectorAll(".text,.img")

console.log(elm)
window.addEventListener('scroll',()=>{
    elm.forEach(item=>{
        if(this.pageYOffset >= item.getBoundingClientRect().top - 400){
            item.classList.add("reveal")
        }
    })
})

elm.forEach(item=>{
    if(this.pageYOffset >= item.getBoundingClientRect().top -400){
        item.classList.add("reveal")
    }
})