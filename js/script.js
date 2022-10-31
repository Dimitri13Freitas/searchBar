const item = document.querySelectorAll('.item');
// const array = document.querySelectorAll('h1');
console.log(item);

const input = document.querySelector('input');

input.addEventListener('change', handleChange)

function handleChange() {
  item.forEach(e => {
    e.classList.remove('s');
    const topic = e.querySelector('h1').innerText;
    if (topic === input.value) {
      // console.log(e);
    } else {
      e.classList.add('r');
    }
  })
}

