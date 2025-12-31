<script setup lang="ts">
import {
  progressVariant,
  type ReProgressBaseProps,
} from "@hexframe/teom-shared";
import { computed, type HTMLAttributes } from "vue";

export type ReProgressProps = ReProgressBaseProps
  & /* @vue-ignore */ HTMLAttributes;

const {
  min = 0,
  max = 100,
  value = 0,
  ...props
} = defineProps<ReProgressProps>();
const indicatorWidth = computed<number>(
  () => {
    const result = value / (max - min) * 100;
    if(result > max) return max;
    if(result < min) return min;
    return result;
  },
);
const variant = progressVariant();
</script>

<template>
  <div
    v-bind="props"
    role="progressbar"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="value"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <div
      :class="variant({ slot: 'indicator' })"
    />
  </div>
</template>
