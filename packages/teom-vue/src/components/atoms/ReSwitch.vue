<script setup lang="ts">
import { switchVariant } from "@hexframe/teom-shared";
import type { InputHTMLAttributes } from "vue";

export type ReSwitchProps = /* @vue-ignore */ InputHTMLAttributes;

const value = defineModel<boolean>();
const props = defineProps<ReSwitchProps>();
const variant = switchVariant();
</script>

<template>
  <input
    v-bind="props"
    v-model="value"
    type="checkbox"
    :class="variant({ classes: props.class })"
  >
</template>
