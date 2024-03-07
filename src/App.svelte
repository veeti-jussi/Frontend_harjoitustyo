<script>
  import Modal from './lib/Modal.svelte';
  import cKayttaja from './lib/customStore.js';
  import cStore from './lib/cStore.js';
  import maat from './lib/maatStore.js';
  import oikeat from './lib/oikeatStore.js';
  import Tulostus from './lib/Tulostus.svelte';
  import { tweened } from 'svelte/motion';
  import { quartIn } from 'svelte/easing';
  import { fly, blur } from 'svelte/transition';
  let x = 15;
  let i = Math.floor(Math.random() * x);
  function rand() {
    i = Math.floor(Math.random() * x);
  }
  let arvaus = '';
  let disabled = false;
  let showO = false;
  let showV = false;
  let väärin = 0;
  $: maanumero = $maat[i];
  let loggedout = 'Kirjauduttu ulos';
  let show = true;
  let ktun = '';
  let salasana = '';
  $: tulos = 0;
  let highscore;
  $: validusr = ktun.length > 2;
  $: validpass = salasana.length > 5 && salasana.includes('!');
  $: valid = validusr && validpass;
  const showModal = () => cKayttaja.showModal(show); //Store funktiot
  const peruuta = () => cKayttaja.peruuta(show);
  const kirjaudu = () => cKayttaja.kirjaudu(show, ktun);
  const ulos = () => cKayttaja.ulos();
  const ladattu = () => cKayttaja.ladattu(ktun);
  const showoikein = () => cStore.show();
  const showväärin = () => cStore.showväärin();

  function peruutus() {
    ktun = '';
    salasana = '';
    isFocused = true;
  }
  $: if ($cKayttaja.logout) {
    peruutus();
  }
  let isFocused = true;
  const onFocus = () => (isFocused = true);
  const onBlur = () => (isFocused = false);
  const bar = tweened(0, {
    duration: 3000,
    easing: quartIn,
  });
  $: if ($cKayttaja.bar) {
    setTimeout(() => {
      ladattu();
      bar.set(0);
    }, 3000);
  }
  function alusta() {
    tulos = 0;
    väärin = 0;
    x = 15;
    maat.subscribe;
    oikeat.subscribe;
    maat.set([
      'aj',
      'fi',
      'au',
      'bx',
      'by',
      'ar',
      'bb',
      'fj',
      'kr',
      'mg',
      'ps',
      'us',
      'ym',
      'si',
      'ws',
    ]);
    oikeat.set([]);
    disabled = false;
  }
  // Arvauksen käsittely funktio
  function käsittely() {
    arvaus = arvaus.toUpperCase();
    if (arvaus.includes('AZERBAIDZAN') && maanumero.includes('aj')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'aj');
      $oikeat.push('Azerbaidzan');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('SUOMI') && maanumero.includes('fi')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'fi');
      $oikeat.push('Suomi');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('ITÄVALTA') && maanumero.includes('au')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'au');
      $oikeat.push('Itävalta');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('BRUNEI') && maanumero.includes('bx')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'bx');
      $oikeat.push('Brunei');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('BURUNDI') && maanumero.includes('by')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'by');
      $oikeat.push('Burundi');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('ARGENTIINA') && maanumero.includes('ar')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'ar');
      $oikeat.push('Argentiina');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('BARBADOS') && maanumero.includes('bb')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'bb');
      $oikeat.push('Barbados');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('FIJI') && maanumero.includes('fj')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'fj');
      $oikeat.push('Fiji');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('KIRIBATI') && maanumero.includes('kr')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'kr');
      $oikeat.push('Kiribati');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('MONGOLIA') && maanumero.includes('mg')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'mg');
      $oikeat.push('Mongolia');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('PALAU') && maanumero.includes('ps')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'ps');
      $oikeat.push('Palau');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('USA') && maanumero.includes('us')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'us');
      $oikeat.push('USA');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('YEMEN') && maanumero.includes('ym')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'ym');
      $oikeat.push('Yemen');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('SLOVENIA') && maanumero.includes('si')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'si');
      $oikeat.push('Slovenia');
      $oikeat = $oikeat;
      --x;
      rand();
    } else if (arvaus.includes('SAMOA') && maanumero.includes('ws')) {
      showO = true;
      tulos++;
      $maat = $maat.filter((taul) => taul != 'ws');
      $oikeat.push('Samoa');
      $oikeat = $oikeat;
      --x;
      rand();
    } else {
      showV = true;
      väärin++;
    }
    if (väärin === 3) {
      highscore = tulos;
      showväärin();
      alusta();
      rand();
    }
    if ($maat.length === 0) {
      showoikein();
    }
    arvaus = '';
  }
  function skip() {
    rand();
  }
  $: if (showO || showV) {
    setTimeout(() => {
      showO = false;
      showV = false;
    }, 2000);
  }
  $: if ($cStore.kaikkioikein) {
    disabled = true;
  }
</script>

{#if $cKayttaja.button.includes('Kirjaudu ulos')}
  <button class="kirjaudu" on:click={ulos}>{$cKayttaja.button}</button>
{:else}
  <button class="kirjaudu" on:click={showModal}>{$cKayttaja.button}</button
  >{/if}
{#if $cKayttaja.show}
  <Modal
    on:peruuta={peruuta}
    on:peruuta={peruutus}
    on:kirjaudu={kirjaudu}
    {valid}
  >
    <p>Käyttäjätunnus *</p>
    <input
      on:focus={onFocus}
      on:blur={onBlur}
      bind:value={ktun}
      type="text"
    /><br />
    {#if !isFocused && !validusr}
      <p class="error">Käyttäjätunnus pitää olla vähintään 3 merkkiä pitkä</p>
    {/if}
    <p>Salasana *</p>
    <input
      bind:value={salasana}
      on:focus={onFocus}
      on:blur={onBlur}
      type="text"
    /><br /><br />
    {#if !isFocused && !validpass}
      <p class="error">
        Salasana pitää olla vähintään 6 merkkiä pitkä ja siinä pitää olla !
        merkki
      </p>
    {/if}
  </Modal>
{/if}
{#if $cKayttaja.logout}
  <Modal>{loggedout}</Modal>
{/if}
{#if $cKayttaja.bar}
  <Modal
    ><h3>Ladataan</h3>
    <br /><progress value={$bar} max="100"></progress><span class="hide"
      >{bar.set(100)}</span
    ></Modal
  >
{/if}
<p class="board">
  Käyttäjä: {$cKayttaja.kayttaja}<br /> Tulos: {tulos}<br /> Väärin: {väärin}
</p>
<!--Peli-->
{#key $maat[i]}<img
    class="flags"
    in:fly={{ x: -500, duration: 2000, delay: 1000 }}
    out:blur={{ duration: 1000 }}
    src="https://www.worldometers.info/img/flags/{$maat[i]}-flag.gif"
    alt=""
  />{/key}<br />
<input class="syöte" bind:value={arvaus} />
<button on:click={käsittely} {disabled}>Arvaa</button>
<button on:click={alusta}>Alusta</button>
<button on:click={skip} {disabled}>Skip</button><br />
{#if showO}
  <h1 class="right">Oikein!</h1>{/if}
{#if showV}
  <h1 class="wrong">Väärin!</h1>{/if}
<p class="note">Tulos alkaa alusta, jos menee 3 väärin</p>
{#if $cStore.kaikkioikein}
  <Modal><h1 class="oikein">Kaikki oikein!</h1></Modal>
{/if}
{#if $cStore.kolmeväärin}
  <Modal
    ><h2 class="väärin">Peli loppui</h2>
    <h3 class="väärin">3 Väärin</h3>
    <p>Tulos: {highscore}</p></Modal
  >
{/if}
<div class="tulostus">
  <Tulostus />
</div>

<style>
  .flags {
    width: 500px;
    height: 300px;
    position: absolute;
    left: 36.5vw;
    top: 5.5vw;
  }
  .syöte {
    width: 20vw;
    height: 2vw;
    font-size: 15px;
  }
  .oikein {
    color: green;
  }
  .väärin {
    color: red;
  }
  .right {
    color: green;
    position: fixed;
    top: 30vh;
    right: 6vw;
  }
  .wrong {
    color: red;
    position: fixed;
    top: 30vh;
    right: 6vw;
  }
  .tulostus {
    position: fixed;
    top: 57vh;
    left: 2vw;
    width: 20vw;
    height: 22vw;
  }
  .note {
    position: fixed;
    top: 40vh;
    left: 2vw;
    width: 15vw;
    padding: 1em;
    height: 3vw;
    background-color: lightgray;
    color: red;
    text-align: left;
    font-size: 18px;
  }
  .kirjaudu {
    position: fixed;
    top: 1vh;
    right: 2vw;
    width: 15vw;
    padding: 1em;
    height: 3vw;
  }
  button {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.734);
  }
  .board {
    position: fixed;
    top: 1vh;
    left: 2vw;
    width: 15vw;
    padding: 1em;
    height: 4vw;
    background-color: lightgray;
    text-align: left;
    font-size: 18px;
  }
  .error {
    color: red;
  }
  .hide {
    visibility: hidden;
  }
  progress {
    background: gray;
    width: 18vw;
    margin-left: 5.5vw;
  }
  progress::-moz-progress-bar {
    background: green;
  }
</style>
