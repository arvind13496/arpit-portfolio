import continental80 from '../assets/closet-continental-80.webp';
import blazerMid77 from '../assets/closet-blazer-mid-77.webp';
import slipstream from '../assets/closet-slipstream.webp';
import vomero5 from '../assets/closet-vomero-5.webp';
import awayDay from '../assets/closet-away-day.webp';
import airMaxDawn from '../assets/closet-air-max-dawn.webp';
import aeonV2 from '../assets/closet-aeon-v2.webp';

// The custody register. Nine lots numbered continuously; seven in custody,
// two disposed. `note` is his one line about each pair and is his to write.
// `verified: false` marks names the brief says to flag, not correct.
export const CUSTODY = [
  { id: 'continental-80', n: '01', brand: 'adidas Originals', model: 'Continental 80', colourway: 'Vegan', state: 'custody', image: { src: continental80, w: 500, h: 400 }, note: '', verified: true },
  { id: 'blazer-mid-77', n: '02', brand: 'Nike', model: "Blazer Mid '77 Pro Club", colourway: 'Light Bone / Sail / Sesame / Pecan', state: 'custody', image: { src: blazerMid77, w: 500, h: 400 }, note: '', verified: true },
  { id: 'slipstream', n: '03', brand: 'Puma', model: 'Slipstream', colourway: '', state: 'custody', image: { src: slipstream, w: 500, h: 400 }, note: '', verified: true },
  { id: 'vomero-5', n: '04', brand: 'Nike', model: 'Zoom Vomero 5', colourway: 'Metallic Silver / University Red', state: 'custody', image: { src: vomero5, w: 500, h: 400 }, note: '', verified: true },
  { id: 'away-day', n: '05', brand: 'echos above', model: 'Away Day', colourway: 'Forest Green', state: 'custody', image: { src: awayDay, w: 500, h: 400 }, note: '', verified: false },
  { id: 'air-max-dawn', n: '06', brand: 'Nike', model: 'Air Max Dawn', colourway: '', state: 'custody', image: { src: airMaxDawn, w: 500, h: 400 }, note: '', verified: true },
  { id: 'aeon-v2', n: '07', brand: 'Comet', model: 'Aeon v2', colourway: 'Mango Chilli', state: 'custody', image: { src: aeonV2, w: 500, h: 400 }, note: '', verified: true },
  { id: 'montana-plus', n: '08', brand: 'Fila', model: 'Montana Plus', colourway: 'Red / Black', state: 'disposed', image: null, note: '', verified: false },
  { id: 'chuck-70', n: '09', brand: 'Converse', model: 'Chuck 70', colourway: '', state: 'disposed', image: null, note: '', verified: true },
];

export const custodyById = Object.fromEntries(CUSTODY.map((p) => [p.id, p]));
