<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p data-test-id="count">{{ count }}</p>
    <button
      @click="count++"
      data-test-id="increment-button"
    >Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
