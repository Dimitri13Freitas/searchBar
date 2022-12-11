export class SearchOnChange {
  constructor(input, container, item, topic) {
    this.input = document.querySelector(input);
    this.container = document.querySelector(container);
    this.items = this.container.querySelectorAll(item);
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
        // Implementar Animação
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
  animContainer(time, pixels, side) {
    const tim = time;
    const pixel = pixels;
    const sid = side;
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
      topic =  topic.slice(0,inputValue.length);
      if(topic === inputValue) {
        // Animação Implementar isto depois
      } else {
        e.style.display = 'none';
      }
    })
  }
}