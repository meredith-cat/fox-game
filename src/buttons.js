import { ICONS } from "./constants";

//like the functions in ui
const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList[show ? "add" : "remove"]("highlighted");

export default function initButtons(handleUserAction) {
  //either moves round the three buttons or selects an icon
  let selectedIcon = 0;

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
      //if not left or right, centre button clicked so selection made
      //pass in the selected icon from the Icons arry in consts
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }

  //when game initialised add the event listener for future button clicks to call the function
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
