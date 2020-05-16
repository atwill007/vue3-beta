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
  </div>
</template>
<script>
import { useCount } from "@/hooks/useCount";
import { useMousePosition } from "@/hooks/useMousePosition";

export default {
  setup() {
    const countState = useCount(1);
    const mousePosition = useMousePosition();
    return {
      countState,
      mousePosition
    };
  }
};
</script>
