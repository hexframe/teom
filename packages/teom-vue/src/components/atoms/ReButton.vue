<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import {
  buttonVariant,
  type ReButtonBaseProps,
} from "@hexframe/teom-shared";

export type ReButtonProps = ReButtonBaseProps
  & /* @vue-ignore */ ButtonHTMLAttributes;

const {
  color = "primary",
  size = "base",
  ...props
} = defineProps<ReButtonProps>();
const variant = buttonVariant({ color, size });
</script>

<template>
  <button
    v-bind="props"
    :class="variant({ classes: props.class })"
  >
    <slot />
  </button>
</template>
