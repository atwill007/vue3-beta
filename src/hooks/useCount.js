import { reactive, computed } from "vue";

export function useCount(defaultVal) {
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
