<template>
  <div class="composition-api">
    <p>Count is: {{ state.count }}, double is: {{ state.double }}</p>
    <button @click="increment">Click Me</button>
  </div>
</template>
<script>
import { reactive, computed } from "vue";

// 这和React的Hook也太像了吧 😂
function useCount(defaultVal) {
  const state = reactive({
    count: defaultVal,
    double: computed(() => state.count * 2)
  });

  function increment() {
    state.count++;
  }

  return {
    state,
    increment
  };
}

export default {
  setup() {
    return useCount(1);
  }
};
</script>
