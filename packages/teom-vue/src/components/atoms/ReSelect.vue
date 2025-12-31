<script setup lang="ts">
import type { SelectHTMLAttributes } from "vue";

export type ReSelectProps = /* @vue-ignore */ SelectHTMLAttributes;

const value = defineModel<string>();
const props = defineProps<ReSelectProps>();
</script>

<template>
  <select
    v-bind="props"
    v-model="value"
    :class="['sct focus-primary', props.class]"
  >
    <slot />
  </select>
</template>
