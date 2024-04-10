var inputs = document.querySelectorAll(".controls input")
console.log(inputs)

function handleValue() {

    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}



inputs.forEach(input => input.addEventListener("change",handleValue))
inputs.forEach(input => input.addEventListener("mousemove",handleValue))