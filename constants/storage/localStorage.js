export function addToLocalStorage(event, key) {
  const id = parseInt(event.currentTarget.id);
  const name = event.currentTarget.name;
  const src = event.currentTarget.src;
  const price = event.currentTarget.price;

  const currentItems = loadFromStorage(key);
  let numberOfEachItem = 0;
  const product = { id, name, src, price, numberOfEachItem };

  currentItems.push(product);
  saveLocalStorage(key, currentItems);
}

function saveLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function loadFromStorage(key) {
  const existingItems = localStorage.getItem(key);

  if (!existingItems) {
    return [];
  } else {
    return JSON.parse(existingItems);
  }
}

export function removeFromStorage(key, id) {
  const currentItems = loadFromStorage(key);
  const newItems = currentItems.filter((item) => item.id !== id);
  console.log(newItems);
  saveLocalStorage(key, newItems);
}
