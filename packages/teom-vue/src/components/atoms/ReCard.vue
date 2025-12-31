<script setup lang="ts">
import { cardVariant } from "@hexframe/teom-shared";
import type { HTMLAttributes } from "vue";

export type ReCardProps = /* @vue-ignore */ HTMLAttributes;

const props = defineProps<ReCardProps>();
const variant = cardVariant();
</script>

<template>
  <div
    v-bind="props"
    :class="variant({ classes: props.class })"
  >
    <slot />
  </div>
</template>
