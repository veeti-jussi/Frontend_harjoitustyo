import { writable } from 'svelte/store';

const oikein = writable({
  kaikkioikein: false,
  kolmeväärin: false,
});

const customStore = {
  subscribe: oikein.subscribe,
  show: () => {
    oikein.set({
      kaikkioikein: true,
      kolmeväärin: false,
    });
  },
  hide: () => {
    oikein.set({
      kaikkioikein: false,
      kolmeväärin: false,
    });
  },
  showväärin: () => {
    oikein.set({
      kaikkioikein: false,
      kolmeväärin: true,
    });
  },
};

export default customStore;
