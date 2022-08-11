export function addToLocalStorage(event, key) {
  const id = event.currentTarget.id;
  const name = event.currentTarget.name;
  const src = event.currentTarget.src;
  const price = event.currentTarget.price;

  const currentItems = loadFromStorage(key);
  const product = { id, name, src, price };
  currentItems.push(product);
  saveLocalStorage(key, currentItems);
}

function saveLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
