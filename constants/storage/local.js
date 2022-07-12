export function saveToStorage(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

export function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
