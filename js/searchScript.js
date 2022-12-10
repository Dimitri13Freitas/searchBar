export class SearchOnChange {
  constructor(input, container, item, topic) {
    this.input = document.querySelector(input);
    this.container = document.querySelector(container);
    this.items = this.container.querySelectorAll(item);
    this.topicElement = topic ? topic : item;
    this.class = 'r';
    this.switch = item === this.topicElement ? true : false;
  }
  addEventsInput() {
    this.input.addEventListener('change', this.handleEvent);
    this.input.addEventListener('keyup', this.inputEmpty);
  }
  inputEmpty() {
    if(this.input.value === '') {
      this.items.forEach(e => {
        e.classList.remove(this.class);
      })
    }
  }
  handleEvent() {
    const inputValue = this.input.value;
    this.items.forEach(e => {
      const topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;
      if(this.changeString(topic) === this.changeString(inputValue)) {
        // Implementar Animação
      } else {
        e.classList.add(this.class);
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
  animContainer() {
    this.container.style.backgroundColor = '#2c2c2c'
  }
}

export class SearchOnKeyDown extends SearchOnChange {
  addEventsInput() {
    this.input.addEventListener('keyup', (e) => {
      this.handleEvent(e);
      this.inputEmpty(e);
    });
  }
  inputEmpty(e) {
    if(e.keyCode === 8) {
      this.items.forEach(e => {
        e.classList.remove(this.class);
      })
      this.handleEvent();
    }
  }
  handleEvent() {
      let inputValue = this.input.value;
      inputValue = this.changeString(inputValue);
      this.items.forEach(e => {
        let topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;;
        topic = this.changeString(topic);
        if(topic[inputValue.length - 1] === inputValue[inputValue.length - 1]) {
          // Animação Implementar isto depois
        } else {
          e.classList.add(this.class);
        }
      })
  }
}