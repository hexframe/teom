<script setup lang="ts">
import { sliderVariant } from "@hexframe/teom-shared";
import type { InputHTMLAttributes } from "vue";

export type ReSliderColor = "primary" | "accent";
export type ReSliderProps = /* @vue-ignore */ InputHTMLAttributes;

const value = defineModel<number>();
const props = defineProps<ReSliderProps>();
const variant = sliderVariant();
</script>

<template>
  <input
    v-bind="props"
    v-model="value"
    type="range"
    :class="variant({ classes: props.class })"
  >
</template>
