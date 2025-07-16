// YOUR CODE HERE

const redBtn = document.querySelector("#btn1")
const output1 = document.querySelector("#output1")

const spanBtn = document.querySelector("#btn2")
const output2 = document.querySelector("#output2")

const removeBtn = document.querySelector("#btn3")
const output3 = document.querySelector(".small-text")

const toRedBtn = document.querySelector("#btn4")
const output4 = document.querySelectorAll("#output4 p")

const consoleLogBtn = document.querySelector("#btn5")
const output5 = document.querySelector("#message")

redBtn.addEventListener("click", () => {
    output1.style.color = "red"
})

spanBtn.addEventListener("click", () => {
    const newSpan = document.createElement("span")
    newSpan.textContent = "Hello World"
    output2.appendChild(newSpan)
})

removeBtn.addEventListener("click", () => {
    output3.classList.remove("small-text")
})

toRedBtn.addEventListener("click", () => {
    output4.forEach(paragragh => {
        paragragh.style.color = "red"
    })
})

consoleLogBtn.addEventListener("click", () => {
    const content = output5.value
    console.log(content)
})