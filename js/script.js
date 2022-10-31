const item = document.querySelectorAll('.item');
// const array = document.querySelectorAll('h1');
console.log(item);

const input = document.querySelector('input');

input.addEventListener('change', handleChange);
input.addEventListener('keyup', valueNone);

function valueNone() {
  if(input.value === '') {
    item.forEach(e => e.classList.remove('r'));
  }
}

function handleChange() {
  item.forEach(e => e.classList.remove('r'));
  item.forEach(e => {
    const topic = e.querySelector('h1').innerText;
    const value = input.value;
    if(changeString(topic) === changeString(value)) {
      // console.log(input.value);
    } else {
      e.classList.add('r');
    }
  })
}

function changeString(str) {
  return str.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}
