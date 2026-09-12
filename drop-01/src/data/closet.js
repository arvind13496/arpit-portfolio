import continental80 from '../assets/closet-continental-80.webp';
import blazerMid77 from '../assets/closet-blazer-mid-77.webp';
import slipstream from '../assets/closet-slipstream.webp';
import vomero5 from '../assets/closet-vomero-5.webp';
import awayDay from '../assets/closet-away-day.webp';
import airMaxDawn from '../assets/closet-air-max-dawn.webp';
import aeonV2 from '../assets/closet-aeon-v2.webp';

// The custody register: seven pairs in rotation. Every image is a lateral
// view facing right — four were flipped at build time so the row reads as
// one set. `verified: false` marks a name the brief says to flag, not correct.
export const CUSTODY = [
  { id: 'continental-80', n: '01', brand: 'adidas Originals', model: 'Continental 80', colourway: 'Vegan', image: { src: continental80, w: 500, h: 400 }, verified: true },
  { id: 'blazer-mid-77', n: '02', brand: 'Nike', model: "Blazer Mid '77 Pro Club", colourway: 'Light Bone / Sail / Sesame / Pecan', image: { src: blazerMid77, w: 500, h: 400 }, verified: true },
  { id: 'slipstream', n: '03', brand: 'Puma', model: 'Slipstream', colourway: '', image: { src: slipstream, w: 500, h: 400 }, verified: true },
  { id: 'vomero-5', n: '04', brand: 'Nike', model: 'Zoom Vomero 5', colourway: 'Metallic Silver / University Red', image: { src: vomero5, w: 500, h: 400 }, verified: true },
  { id: 'away-day', n: '05', brand: 'echos above', model: 'Away Day', colourway: 'Forest Green', image: { src: awayDay, w: 500, h: 400 }, verified: false },
  { id: 'air-max-dawn', n: '06', brand: 'Nike', model: 'Air Max Dawn', colourway: '', image: { src: airMaxDawn, w: 500, h: 400 }, verified: true },
  { id: 'aeon-v2', n: '07', brand: 'Comet', model: 'Aeon v2', colourway: 'Mango Chilli', image: { src: aeonV2, w: 500, h: 400 }, verified: true },
];
