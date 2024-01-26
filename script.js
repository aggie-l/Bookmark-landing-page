const tabcontent = document.querySelectorAll(".tabcontent")
const tabElements = document.querySelectorAll(".tablink")
let activeIndex = 0

const accordions = document.querySelectorAll(".accordion-container")



tabElements.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        setActiveTab(index)
    })
})


const setActiveTab = (index) => {
    tabElements[activeIndex].setAttribute("aria-selected", "false")
    tabElements[index].setAttribute("aria-selected", "true")
    setActiveContent(index)
    activeIndex = index
}


const setActiveContent = (index) => {
    tabcontent[activeIndex].setAttribute("hidden", "")
    tabcontent[activeIndex].classList.add("hidden")
    tabcontent[index].removeAttribute("hidden")
    tabcontent[index].classList.remove("hidden")
    tabElements[activeIndex].classList.remove("active")
    tabElements[index].classList.add("active")
}


accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active")
    })
})