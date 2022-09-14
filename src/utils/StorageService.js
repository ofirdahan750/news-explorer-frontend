export function getFromStorage(key) {
  const val = localStorage.getItem(key);
  return JSON.parse(val);
}
export function removeFromStorage(key) {
  localStorage.removeItem(key);
}

export function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
export function clearLocalStorage() {
  localStorage.clear();
  window.localStorage.clear();
  const allKeys = Object.keys(localStorage);
  allKeys.forEach((key) => {
    removeFromStorage(key);
  });
}
