import blink from './blink';

(async () => {
  // blink the LEDs
  blink(['GPIO23', 'GPIO25']);
})();

