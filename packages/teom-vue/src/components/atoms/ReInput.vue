<script setup lang="ts">
import { inputVariant } from "@hexframe/teom-shared";
import type { InputHTMLAttributes } from "vue";

export type ReInputProps = /* @vue-ignore */ InputHTMLAttributes;

const value = defineModel<string>();
const props = defineProps<ReInputProps>();
const variant = inputVariant();
</script>
<template>
  <input
    v-bind="props"
    v-model="value"
    :class="variant({ classes: props.class })"
  >
</template>
