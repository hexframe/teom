<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";
import { radioVariant } from "@hexframe/teom-shared";

export type ReRadioProps = /* @vue-ignore */ InputHTMLAttributes;

const props = defineProps<ReRadioProps>();
const variant = radioVariant();
</script>

<template>
  <input
    v-bind="props"
    type="radio"
    :class="variant({ classes: props.class })"
  >
</template>
