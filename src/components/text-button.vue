<template>
  <button class="text-button">
    <slot />
  </button>
</template>

<style scoped>
.text-button {
  font-family: Alegreya Sans;
  font-weight: 500;
  font-size: 25px;

  color: var(--color-fg);

  background-color: var(--color-text-btn);

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 321px;
  padding: 16px 0;
  border: none;
  border-radius: 10px;

  transition: all 0.3s ease-in;
}

.text-button:hover {
  background-color: var(--color-text-btn-hover);
}
</style>
