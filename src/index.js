import { CountBottle, final } from './helpers.js';

const song = (n) => {
  console.log(`${CountBottle(n)} пива на стене!`);
  console.log(`${CountBottle(n)} пива!`);
  console.log('Возьми одну, пусти по кругу');
  if (n === 1) {
    return final();
  }

  console.log(`${CountBottle(n - 1)} пива на стене!\n`);
  return song(n - 1);
};
export default song;
