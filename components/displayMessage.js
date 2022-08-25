export const displayMessage = (type = "error", message = "error") =>
  `<div class="${type}">${message}</div>`;

// export function displayUserFeedback(parent, type, message) {
//   console.log("working");
//   parent.innerHtml = "";
//   parent.innerHtml = `<div class="${type}">${message}</div>`;
// }
const userMessage = document.querySelector(".user-message");
export function disappearMessage() {
  userMessage.innerHTML = "";
}
