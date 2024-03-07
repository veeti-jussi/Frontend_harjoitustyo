<script>
  import cKayttaja from './customStore.js';
  import cStore from './cStore.js';
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let valid = false;

  const logout = () => cKayttaja.logout();
  const hide = () => cStore.hide();
  function dis() {
    dispatch('peruuta');
  }
  function dis2() {
    dispatch('kirjaudu');
  }
  if ($cKayttaja.logout) {
    setTimeout(() => {
      logout();
    }, 2000);
  }
  if ($cStore.kaikkioikein) {
    setTimeout(() => {
      hide();
    }, 2000);
  }
  if ($cStore.kolmeväärin) {
    setTimeout(() => {
      hide();
    }, 3000);
  }
</script>

<div class="backdrop"></div>
<div class="modal">
  <slot />
  {#if !$cKayttaja.bar && !$cKayttaja.logout && !$cStore.kaikkioikein && !$cStore.kolmeväärin}
    <button on:click={dis}>Peruuta</button>
    <button on:click={dis2} disabled={!valid}>Kirjaudu</button>
  {/if}
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    padding: 1rem;
    position: fixed;
    top: 10vh;
    left: 10vw;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
    color: black;
  }
  button {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.734);
  }
</style>
