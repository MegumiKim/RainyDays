import { makeOrderSummary } from "./utils/makeOrderSummary.js";
const tel = document.querySelector("#tel");

makeOrderSummary();

tel.addEventListener("keyup", function (tel) {
  const regEx = /^\d+$/;
  const patternMach = regEx.test(tel.value);
  if (patternMach) {
    console.log("good number");
    return true;
  } else {
    console.log("bad number");
    return false;
  }
});
