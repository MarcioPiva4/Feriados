const container = document.querySelectorAll(".swiper-slide")
const img = document.querySelectorAll(".img_perfil")
const btn = document.querySelectorAll(".btn_mais")

container[0].addEventListener("mouseover", () => {
    img[0].classList.add("img_perfil_zoom")
    btn[0].classList.add("btn_mais_hover")
})

container[0].addEventListener("mouseout", () => {
    img[0].classList.remove("img_perfil_zoom")
    btn[0].classList.remove("btn_mais_hover")
})

container[1].addEventListener("mouseover", () => {
    img[1].classList.add("img_perfil_zoom")
    btn[1].classList.add("btn_mais_hover")
})

container[1].addEventListener("mouseout", () => {
    img[1].classList.remove("img_perfil_zoom")
    btn[1].classList.remove("btn_mais_hover")
})

container[2].addEventListener("mouseover", () => {
    img[2].classList.add("img_perfil_zoom")
    btn[2].classList.add("btn_mais_hover")
})

container[2].addEventListener("mouseout", () => {
    img[2].classList.remove("img_perfil_zoom")
    btn[2].classList.remove("btn_mais_hover")
})

container[3].addEventListener("mouseover", () => {
    img[3].classList.add("img_perfil_zoom")
    btn[3].classList.add("btn_mais_hover")
})

container[3].addEventListener("mouseout", () => {
    img[3].classList.remove("img_perfil_zoom")
    btn[3].classList.remove("btn_mais_hover")
})


//LOOP FOR?