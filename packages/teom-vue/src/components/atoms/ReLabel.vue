<script setup lang="ts">
import { labelVariant } from "@hexframe/teom-shared";
import type { LabelHTMLAttributes } from "vue";

export type ReLabelProps = /* @vue-ignore */ LabelHTMLAttributes;

const props = defineProps<ReLabelProps>();
const variant = labelVariant();
</script>

<template>
  <label v-bind="props" :class="variant({ classes: props.class })">
    <slot />
  </label>
</template>
