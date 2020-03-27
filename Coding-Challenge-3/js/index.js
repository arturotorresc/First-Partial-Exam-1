function getFizzBuzzText(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return "fizzbuzz";
  } else if (val % 5 === 0) {
    return "buzz";
  } else if (val % 3 === 0) {
    return "fizz";
  } else {
    return val.toString();
  }
}

function handleFizzBuzz(val) {
  const list = document.getElementById("results-section");
  for (let i = 1; i < val; ++i) {
    const li = `
    <li class="item-fizz">
    ${getFizzBuzzText(i)}
    </li>
    `;
    list.innerHTML += li;
  }
}

function handleClick() {
  const button = document.getElementById("submitBtn");
  const inputNumber = document.getElementById("inputNum");

  button.addEventListener("click", event => {
    const val = Number(inputNumber.value);
    const list = document.getElementById("results-section");
    if (isNaN(val)) {
      window.alert("Not a number");
    } else if (val < 0) {
      window.alert("Number must be positive");
    } else {
      list.innerHTML = "";
      handleFizzBuzz(val);
    }
    event.preventDefault();
  });
}

function handleDelete() {
  const list = document.getElementById("results-section");
  list.addEventListener("click", event => {
    if (event.target && event.target.className === "item-fizz") {
      console.log("li");
      event.target.parentElement.removeChild(event.target);
    }
  });
}

function init() {
  handleClick();
  handleDelete();
}

window.onload = () => {
  init();
};
