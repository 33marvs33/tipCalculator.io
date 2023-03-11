const usertTip = document.querySelector(".total-bill");
const allTipsPercent = document.querySelectorAll(".percent");
const NumOfPeople = document.querySelector(".people");
const customTip = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
let bill;
let tips = 0;
let people = 1;
let tipAmount;
let totalPerPerson;

window.addEventListener(
  "DOMContentLoaded",
  () => bill,
  (tips = 0),
  (people = 1),
  (usertTip.value = ""),
  (customTip.value = ""),
  (NumOfPeople.value = "")
);

usertTip.addEventListener("input", () => {
  let userValue = usertTip.value;
  userValue == "" ? (bill = 0) : (bill = userValue);
  calculate();

  // you cant chose specific tip if your bill is empty//
  allTipsPercent.forEach((tips) => tips.addEventListener("click", chosenTip));
  function chosenTip() {
    customTip.value = "";
    const currentTip = this;
    tips = Number(currentTip.id);
    calculate();

    allTipsPercent.forEach((tips) =>
      currentTip.id !== tips.id
        ? tips.classList.remove("active__tip")
        : tips.classList.add("active__tip")
    );
  }

  NumOfPeople.addEventListener("input", () => {
    let numValue = Number(NumOfPeople.value);
    numValue == "" && numValue <= 0 ? (people = 1) : (people = numValue);
    calculate();
  });

  customTip.addEventListener("input", () => {
    let cusTip = Number(customTip.value);
    if(cusTip == 100) {
      tips = 1
    }else {
      tips = Number("0" + "." + cusTip);
    }

    allTipsPercent.forEach((tips) => tips.classList.remove("active__tip"));
    calculate();

  });

  function calculate() {
    tipAmount = (bill * tips) / people;
    totalPerPerson = bill / people + tipAmount;
    display();
  }

  function display() {
    const tipAmountText = document.getElementById("tip");
    const totalPerPersonText = document.getElementById("total");
    tipAmountText.innerText = tipAmount.toFixed(2);
    totalPerPersonText.innerText = totalPerPerson.toFixed(2);
    console.log(tips)
  }

  resetBtn.addEventListener("click", reset);

  function reset(e) {
    e.preventDefault();
    bill = 0;
    tips = 0;
    people = 1;
    usertTip.value = ""
    NumOfPeople.value = ""
    customTip.value = "";
    totalPerPerson = 0
    tipAmount = 0
    display();
  }
});


