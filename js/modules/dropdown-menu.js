import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus =document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], ()=> {
      this.classList.remove('active') // toda vez que o handleclick ocorrer a outsideclick tbm ocorre
    });
  };

  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    });
  });


}
