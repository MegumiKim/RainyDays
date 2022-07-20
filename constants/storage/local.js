export function saveToStorage(key, value) {
  const existingItems = JSON.parse(localStorage.getItem(key)) || [];
  const newArray = [...existingItems];

  newArray.push(value);
  localStorage.setItem(key, JSON.stringify(newArray));
}

export function loadFromStorage(key) {
  const storedItems = JSON.parse(localStorage.getItem(key)) || [];
  console.log(storedItems);
  if (!storedItems.length) {
    console.log("nothing here");
  }

  return JSON.parse(localStorage.getItem(key));
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
