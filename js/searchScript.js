export class SearchOnChange {
  constructor(input, container, topic, item) {
    this.input = document.querySelector(input);
    this.container = document.querySelector(container);
    this.items = item ? this.container.querySelectorAll(item) : this.container.querySelectorAll('div');
    this.topicElement = topic ? topic : 'h1';
    this.removeClass = 'r';
  }
  addEventsInput() {
    this.input.addEventListener('change', this.handleChange);
    this.input.addEventListener('keyup', this.inputEmpty);
  }
  inputEmpty() {
    if(this.input.value === '') {
      this.items.forEach(e => {
        e.classList.remove(this.removeClass);
      })
    }
  }
  handleChange() {
    const inputValue = this.input.value;
    this.items.forEach(e => {
      const topic = e.querySelector(this.topicElement).innerText;
      if(this.changeString(topic) === this.changeString(inputValue)) {
        // Animção Implementar isto depois
      } else {
        e.classList.add(this.removeClass);
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
    window.onload = () => {this.input.focus()}
  }
}

export class SearchOnKeyDown extends SearchOnChange {
  constructor(input, container, topic, item){
    super(input, container, topic, item)
  }
  addEventsInput() {
    this.input.addEventListener('keyup', this.handleChange);
    // this.input.addEventListener('keyup', this.inputEmpty);
  }
  handleChange() {
    this.inputEmpty();
    let inputValue = this.input.value;
    inputValue = this.changeString(inputValue);
    this.items.forEach(e => {
      let topic = e.querySelector(this.topicElement).innerText;
      topic = this.changeString(topic);
      if(topic[inputValue.length - 1] === inputValue[inputValue.length - 1]) {
        // Animção Implementar isto depois
      } else {
        e.classList.add(this.removeClass)
      }
    })


  }

}