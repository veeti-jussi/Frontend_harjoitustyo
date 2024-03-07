import { writable } from 'svelte/store';

const kayttaja = writable({
  kayttaja: null,
  show: false,
  logout: false,
  button: 'Kirjaudu',
  bar: false,
});

const customKayttaja = {
  subscribe: kayttaja.subscribe,
  showModal: (s) => {
    kayttaja.set({
      kayttaja: null,
      show: s,
      logout: false,
      button: 'Kirjaudu',
      bar: false,
    });
  },
  peruuta: (s) => {
    s = false;
    kayttaja.set({
      kayttaja: null,
      show: s,
      logout: false,
      button: 'Kirjaudu',
      bar: false,
    });
  },
  kirjaudu: (s, ktun) => {
    s = false;
    kayttaja.set({
      kayttaja: ktun,
      show: s,
      logout: false,
      button: 'Kirjaudu ulos',
      bar: true,
    });
  },
  logout: () => {
    kayttaja.set({
      kayttaja: null,
      show: false,
      logout: false,
      button: 'Kirjaudu',
      bar: false,
    });
  },
  ulos: () => {
    kayttaja.set({
      kayttaja: null,
      show: false,
      logout: true,
      button: 'Kirjaudu ulos',
      bar: false,
    });
  },
  ladattu: (ktun) => {
    kayttaja.set({
      kayttaja: ktun,
      show: false,
      logout: false,
      button: 'Kirjaudu ulos',
      bar: false,
    });
  },
};

export default customKayttaja;
