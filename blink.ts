import { Board } from 'johnny-five';
import * as five from 'johnny-five';
import { RaspiIO } from 'raspi-io';

const board = new Board({
  io: new RaspiIO(),
});

export default (ledPins: string[]) => {
  const leds = new (five as any).Leds(ledPins);

  board.on('ready', () => {
    leds.blink(500);
  });

  board.on('exit', () => {
    leds.off();
  });
};
