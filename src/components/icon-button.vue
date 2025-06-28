<template>
  <div class="icon-button">
    <button class="icon-button__btn">
      <slot />
    </button>
    <div class="icon-button__title">
      <slot name="title" />
    </div>
  </div>
</template>

<style scoped>
.icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.icon-button__btn {
  width: 62px;
  height: 65px;
  border: none;
  border-radius: 20px;
  background-color: var(--color-card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-button__btn:hover {
  background-color: var(--color-card-bg-hover);
}

.icon-button__title {
  margin-top: 8px;
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 14px;
  color: var(--color-fg);
  text-align: center;
}
</style>
