
const inputValue = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const main = document.querySelector(".main");

addBtn.addEventListener("click", function () {
    if (inputValue.value == '') {
        alert('Enter a value');
    } else {
        const newPra = document.createElement("p");

        newPra.innerText = inputValue.value;
        main.appendChild(newPra)

        inputValue.value = '';
        newPra.addEventListener("click", function () {
            newPra.style.textDecoration = "line-through"
        })
        newPra.addEventListener("dblclick", function () {
            main.removeChild(newPra)
        })
    }
})