<!-- <style lang="css" scoped>
.input {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  min-width: 305px;
  color: var(--color-fg);
  font-size: 18px;
  background: transparent;
  padding: 10px;
}

.input::placeholder {
  color: var(--color-placeholder);
}
</style> -->

<script lang="ts" setup>
const data = defineModel<string>();
</script>

<template>
  <input class="input" v-model="data" />
</template>

<style lang="css" scoped>
.input {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  background: transparent;
  color: var(--color-fg);
  font-size: 18px;
  padding: 10px 0;
  min-width: 305px;

  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.input::placeholder {
  color: var(--color-placeholder);
  transition: color 0.3s ease;
}

.input:focus {
  outline: none;
}

.input:focus-visible {
  box-shadow: inset 0 -2px 0 0 var(--color-accent);
}

.input:focus:not(:focus-visible)::placeholder {
  color: var(--color-fg);
}
</style>
