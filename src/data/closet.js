import continental80 from '../assets/closet-continental-80.webp';
import blazerMid77 from '../assets/closet-blazer-mid-77.webp';
import slipstream from '../assets/closet-slipstream.webp';
import vomero5 from '../assets/closet-vomero-5.webp';
import awayDay from '../assets/closet-away-day.webp';
import airMaxDawn from '../assets/closet-air-max-dawn.webp';
import aeonV2 from '../assets/closet-aeon-v2.webp';

// The closet — nine pairs, numbered 01–09 continuous. Seven in rotation, then
// two gone (rendered as empty crates). `note` is Arpit's one line about each
// pair and is his to write; empty for now. `image` is a reference product
// image, cut out and duotoned to ink/paper — see the section credit. Names and
// colourways verified against the brands; "Fila Montana Plus" is as supplied by
// the client and could not be verified (likely the Fila Trailblazer) — kept as
// given since it is in the gone list.
export const closet = [
  {
    id: 'continental-80',
    n: '01',
    brand: 'adidas Originals',
    model: 'Continental 80',
    colourway: 'Vegan',
    state: 'rotation',
    image: { src: continental80, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'blazer-mid-77',
    n: '02',
    brand: 'Nike',
    model: "Blazer Mid '77 Pro Club",
    colourway: 'Light Bone / Sail / Sesame / Pecan',
    state: 'rotation',
    image: { src: blazerMid77, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'slipstream',
    n: '03',
    brand: 'Puma',
    model: 'Slipstream',
    colourway: '',
    state: 'rotation',
    image: { src: slipstream, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'vomero-5',
    n: '04',
    brand: 'Nike',
    model: 'Zoom Vomero 5',
    colourway: 'Metallic Silver / University Red',
    state: 'rotation',
    image: { src: vomero5, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'away-day',
    n: '05',
    brand: 'echos above',
    model: 'Away Day',
    colourway: 'Forest Green',
    state: 'rotation',
    image: { src: awayDay, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'air-max-dawn',
    n: '06',
    brand: 'Nike',
    model: 'Air Max Dawn',
    colourway: '',
    state: 'rotation',
    image: { src: airMaxDawn, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'aeon-v2',
    n: '07',
    brand: 'Comet',
    model: 'Aeon v2',
    colourway: 'Mango Chilli',
    state: 'rotation',
    image: { src: aeonV2, w: 500, h: 400 },
    note: '',
  },
  {
    id: 'montana-plus',
    n: '08',
    brand: 'Fila',
    model: 'Montana Plus',
    colourway: 'Red / Black',
    state: 'gone',
    image: null,
    note: '',
  },
  {
    id: 'chuck-70',
    n: '09',
    brand: 'Converse',
    model: 'Chuck 70',
    colourway: '',
    state: 'gone',
    image: null,
    note: '',
  },
];
