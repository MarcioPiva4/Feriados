const t1 = document.getElementById("text1")
const t2 = document.getElementById("text2")
const t3 = document.getElementById("text3")
const t4 = document.getElementById("text4")

const arrows = document.querySelectorAll(".fa-solid")

const c1 = document.querySelector(".carnaval")
const c2 = document.querySelector(".pascoa")
const c3 = document.querySelector(".diasdasmaes")
const c4 = document.querySelector(".festajunina")


t1.addEventListener("click", () => {
    arrows[0].classList.toggle("virar")
    c1.classList.toggle("container_feriados_open")
})
t2.addEventListener("click", () => {
    arrows[1].classList.toggle("virar")
    c2.classList.toggle("container_feriados_open")
})
t3.addEventListener("click", () => {
    arrows[2].classList.toggle("virar")
    c3.classList.toggle("container_feriados_open")
})
t4.addEventListener("click", () => {
    arrows[3].classList.toggle("virar")
    c4.classList.toggle("container_feriados_open")
})