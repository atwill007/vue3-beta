import { customRef } from "vue";
// customRef 用于自定义一个 ref，可以显式地控制依赖追踪和触发响应，接受一个工厂函数，两个参数分别是用于追踪的 track 与用于触发响应的 trigger，并返回一个一个带有 get 和 set 属性的对象
// https://composition-api.vuejs.org/zh/api.html#customref

// 使用自定义 ref 实现带防抖功能的 v-model
export function useDebouncedRef(value, delay = 300) {
  let timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        console.log("debug get vaule", value);
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          console.log("debug set value: ", value, " newValue: ", newValue);
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}
