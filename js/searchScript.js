export class Search {
  constructor(input, container, topic, item) {
    this.input = document.getElementById(input);
    this.container = document.getElementById(container);
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
    const userValue = this.input.value;
    this.items.forEach(e => {
      const topic = e.querySelector(this.topicElement).innerText;
      if(this.changeString(topic) === this.changeString(userValue)) {
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