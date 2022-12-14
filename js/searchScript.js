export class SearchOnChange {
  constructor(input, item, topic) {
    this.input = document.querySelector(input);
    this.items = document.querySelectorAll(item);
    this.topicElement = topic ? topic : item;
    this.switch = item === this.topicElement ? true : false;
  }
  addEventsInput() {
    this.input.addEventListener('change', this.handleEvent);
    this.input.addEventListener('keyup', this.inputEmpty);
  }
  inputEmpty() {
    if(this.input.value === '') {
      this.items.forEach(e => {
        e.style.display = 'block';
      })
    }
  }
  handleEvent() {
    const inputValue = this.input.value;
    this.items.forEach(e => {
      const topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;
      if(this.changeString(topic) === this.changeString(inputValue)) {

      } else {
        e.style.display = 'none';
      }
    });
  }
  changeString(str) {
    return str.toLowerCase().normalize('NFD').replace(/[^a-zA-Z\s]/g, '');
  }
  bind() {
    this.handleEvent = this.handleEvent.bind(this);
    this.inputEmpty = this.inputEmpty.bind(this);
    this.changeString = this.changeString.bind(this);
  }
  init() {
    this.bind();
    this.addEventsInput();
  }
  focusOnLoad() {
    window.onload = () => this.input.focus();
  }
  anime(animClass) {
    this.animElement = [];
    // this.animElement = document.querySelectorAll(animElement);
    // this.animElement.forEach(e => e.style.opacity = 0);
    
    this.animClass = animClass;
  }
  animeFunc() {
    this.animElement.forEach(e => e.style.opacity = 0);
    this.animElement.forEach((e, i) => {
      this.animElement[0].classList.add(this.animClass);
      this.animElement[0].style.opacity = 1;
      if(this.animElement.length > 1) {
        e.addEventListener('animationend', () => {
          e.classList.remove(this.animClass);
          if(i != this.animElement.length - 1) {
            e.nextElementSibling.classList.add(this.animClass);
            e.nextElementSibling.style.opacity = 1;
          }
        })
      }
    })
  }
}

export class SearchOnKeyDown extends SearchOnChange {
  addEventsInput() {
    this.input.addEventListener('keyup', (e) => {
      this.handleEvent();
      this.inputEmpty(e);
    });
  }
  inputEmpty(e) {
    if(e.keyCode === 8) {
      this.items.forEach(e => {
        e.style.display = 'block';
      })
      this.handleEvent();
    }
  }

  handleEvent() {
    let inputValue = this.input.value;
    inputValue = this.changeString(inputValue);
    this.items.forEach(e => {
      let topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;
      topic = this.changeString(topic);
      topic = topic.slice(0,inputValue.length);
      if(topic === inputValue) {
        if(this.animClass) {
          this.animElement.push(e);
          if(this.animElement.length === 5) {
            this.animeFunc();
          }
        }
      } else {
        e.style.display = 'none';
      }
    })
  }
}