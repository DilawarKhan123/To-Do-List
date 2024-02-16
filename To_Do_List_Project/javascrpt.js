const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const submitBtn = document.querySelector("#submitBtn");
const optionSelect = document.querySelector("#option_select");
const priceRate = document.querySelector("#price");
const showT = document.querySelector(".table");

item.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addToDo(item.value, priceRate.value);
        item.value = "";
    }
});

submitBtn.addEventListener("click", function () {
    addToDo(item.value, priceRate.value);
    item.value = "";
});

const addToDo = (itemValue, priceValue) => {
    const multia = priceValue * itemValue;
    console.log(multia);
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${optionSelect.value}&emsp;&emsp;|&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${itemValue}&emsp;&emsp;|&emsp;&emsp;&emsp;&emsp; Rs.${priceValue}&emsp;&emsp;| Total Amount: ${multia}
        <i class="fa-sharp fa-solid fa-circle-xmark"></i>
    `;
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });
    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });
    toDoBox.appendChild(listItem);
};
