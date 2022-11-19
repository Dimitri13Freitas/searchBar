import { Search } from './searchScript.js';

const searchBar = new Search('input', 'container');
searchBar.init();
searchBar.focusOnLoad();


// const item = document.querySelectorAll('.item');
// const input = document.querySelector('input');

// input.addEventListener('change', handleChange);
// input.addEventListener('keyup', valueNone);

// function valueNone() {
//   if(input.value === '') {
//     item.forEach(e => {
//       e.classList.remove('r');
//       e.classList.add('anim');
//       setTimeout(()=> {
//         e.classList.remove('anim');
//       },300)
//     });
//   }
// }

// function handleChange() {
//   item.forEach(e => e.classList.remove('r'));
//   item.forEach(e => {
//     const topic = e.querySelector('h1').innerText;
//     const value = input.value;
//     if(changeString(topic) === changeString(value)) {
//       e.classList.add('anim');
//       setTimeout(()=> {
//         e.classList.remove('anim');
//       },300)
//     } else {
//       e.classList.add('r');
//     }
//   })
// }

// function changeString(str) {
//   return str.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
// }
