<script setup lang="ts">
import { type InputHTMLAttributes } from "vue";
import { checkboxVariant } from "@hexframe/teom-shared";

export type ReCheckboxProps = /* @vue-ignore */ InputHTMLAttributes;

const value = defineModel<boolean>();
const props = defineProps<ReCheckboxProps>();
const variant = checkboxVariant();
</script>

<template>
  <input
    v-bind="props"
    v-model="value"
    type="checkbox"
    :class="variant({ classes: props.class })"
  >
</template>
