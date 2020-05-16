<template>
  <div class="composition-api">
    <h3>useCount Display</h3>
    <p>
      Count is: {{ countState.state.count }}, double is:
      {{ countState.state.double }}
    </p>
    <button @click="countState.increment">Click Me</button>

    <h3>useMousePosition Display</h3>
    <p>
      x: <span>{{ mousePosition.x }}</span> y:
      <span>{{ mousePosition.y }}</span>
    </p>

    <h3>customRef 使用自定义 ref 实现带防抖功能的 v-model</h3>
    <input v-model="text" />
  </div>
</template>
<script>
import { useCount } from "@/hooks/useCount";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useDebouncedRef } from "@/hooks/useDebouncedRef";

export default {
  setup() {
    const countState = useCount(1);
    const mousePosition = useMousePosition();
    return {
      countState,
      mousePosition,
      text: useDebouncedRef("hello", 1000)
    };
  }
};
</script>
