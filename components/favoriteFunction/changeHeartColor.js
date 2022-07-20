export function changeHeartColor(event) {
  if (event.target.style.color === "salmon") {
    event.target.style.color = "grey";
  } else {
    event.target.style.color = "salmon";
  }
}
