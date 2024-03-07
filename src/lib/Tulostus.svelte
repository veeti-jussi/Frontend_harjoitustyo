<script>
  import oikeat from './oikeatStore.js';
  import { fly, blur } from 'svelte/transition';
</script>

{#each $oikeat as oikea}
  <div class="display">
    <h3 in:fly={{ x: -500, duration: 2000 }} out:blur={{ duration: 1000 }}>
      {oikea}<span class="hide">sss</span>
    </h3>
  </div>
{/each}

<style>
  .display {
    display: inline-block;
  }
  .hide {
    visibility: hidden;
  }
</style>
