export const displayMessage = (type = "error", message = "error") =>
  `<div class="${type}">${message}</div>`;
