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
  inputEmpty(e) {
    if(e.code === 'Backspace') {
      this.items.forEach(e => {
        e.removeAttribute('style');
        e.classList.remove(this.animClass);
      })
      this.handleEvent();
    }
  }
  handleEvent() {
    let inputValue =  this.changeString(this.input.value);
    this.items.forEach(e => {
      let topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;
      topic = this.changeString(topic);
      topic = topic.slice(0,inputValue.length);
      if(topic === inputValue) {
        if(this.animClass) {
          this.animaFunc();
        }
        if(this.loadElement) {
          this.loadEffectFunc();
        }
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
  anima(animClass) {
    this.animClass = animClass;
  }
  animaFunc() {
    this.items.forEach(e => {
      e.classList.add(this.animClass);
      e.addEventListener('animationend', () => e.classList.remove(this.animClass));
    });
  }
  loadEffect(loadElement) {
    this.loadElement = document.querySelector(loadElement);
  }
  loadEffectFunc() {
    const time = +(Math.random() * 2).toFixed(2);
    this.items.forEach(e => e.style.opacity = '0');
    this.loadElement.style.animationDuration = `${time}s`
    this.loadElement.style.display = 'block';
    this.loadElement.addEventListener('animationend', () => {
      this.items.forEach(e => e.style.opacity = '1');
      this.loadElement.style.display = 'none';
      if(this.animClass) {
        this.animaFunc();
      }
    })
  }
}

export class SearchOnKeyDown extends SearchOnChange {
  addEventsInput() {
    document.addEventListener('keyup', (e) => {
      if(e.code === 'Backspace' || this.input.value === '') {
        this.inputEmpty();
      } else {
        this.handleEvent();
      }
    });
  }
  inputEmpty() {
    this.items.forEach(e => {
      e.removeAttribute('style');
      e.classList.remove(this.animClass);
    })
    this.handleEvent();
  }
  handleEvent() {
    let inputValue =  this.changeString(this.input.value);
    this.items.forEach(e => { 
      let topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;
      topic = this.changeString(topic);
      topic = topic.slice(0,inputValue.length);
      if(topic === inputValue) {
        if(this.animClass) {
          this.animaFunc();
        }
        if(this.loadElement) {
          this.loadEffectFunc();
        }
      } else {
        e.style.display = 'none';
      }
    })
  }
}