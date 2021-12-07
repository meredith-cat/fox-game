import game, { handleUserAction } from "./gameState";
import initButtons from "./buttons";
import { TICK_RATE } from "./constants";

//Called on initialisation
async function init() {
  //setup the buttons which initialises game state

  //handleUserAction gets done in gameState
  initButtons(handleUserAction);

  //set ntttt to now
  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      //move the clock along
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    //built in function to browser for animation
    requestAnimationFrame(nextAnimationFrame);
  }

  //get the next frame
  nextAnimationFrame();
}

//call yourself
init();
