function saveins(value) {
  const storedValue = loadins(2);

  !storedValue.includes(value) &&
    localStorage.setItem(2, JSON.stringify([...storedValue, value]));

  console.log("in save", value);
}

function removeins(value) {
  const storedValue = loadins(2);
  if (storedValue) {
    storedValue.includes(value) &&
      localStorage.setItem(
        2,
        JSON.stringify(storedValue.filter((a) => a != value))
      );
  }
}

function loadins(id) {
  const storedValue = localStorage.getItem(id);
  if (storedValue) {
    const a = JSON.parse(storedValue);
    return a;
  } else {
    return [];
  }
}

export default { saveins, loadins, removeins };
