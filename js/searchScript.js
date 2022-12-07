export class SearchOnChange {
  constructor(input, container, item, topic) {
    this.input = document.querySelector(input);
    this.container = document.querySelector(container);
    this.items = item ? this.container.querySelectorAll(item) : this.container.querySelectorAll('div');
    this.topicElement = topic ? topic : item;
    this.class = 'r';
    this.teste = item === this.topicElement ? true : false;
  }
  addEventsInput() {
    this.input.addEventListener('change', this.handleChange);
    this.input.addEventListener('keyup', this.inputEmpty);
  }
  inputEmpty() {
    if(this.input.value === '') {
      this.items.forEach(e => {
        e.classList.remove(this.class);
      })
    }
  }
  handleChange() {
    const inputValue = this.input.value;
    this.items.forEach(e => {
      const topic = this.teste ? e.innerText : e.querySelector(this.topicElement).innerText;
      if(this.changeString(topic) === this.changeString(inputValue)) {
        // Implementar Animação
      } else {
        e.classList.add(this.class);
      }
    });
  }
  changeString(str) {
    return str.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  }
  bind() {
    this.handleChange = this.handleChange.bind(this);
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
}

export class SearchOnKeyDown extends SearchOnChange {
  constructor(input, container, topic, item){
    super(input, container, topic, item)
  }
  addEventsInput() {
    this.input.addEventListener('keyup', this.handleChange);
  }
  handleChange() {
    this.inputEmpty();
    let inputValue = this.input.value;
    inputValue = this.changeString(inputValue);
    this.items.forEach(e => {
      let topic = this.teste ? e.innerText : e.querySelector(this.topicElement).innerText;;
      topic = this.changeString(topic);
      if(topic[inputValue.length - 1] === inputValue[inputValue.length - 1]) {
        // Animação Implementar isto depois
      } else {
        e.classList.add(this.class)
      }
    })
  }
}