<script setup lang="ts">
import type { HTMLAttributes } from "vue";

export type ReTextAs =
  "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p";
export type ReTextColor =
  "primary"
  | "secondary";
export type ReTextSize = 
  "huge"
  | "large"
  | "base"
  | "small"
  | "tiny";
export interface ReTextProps extends /* @vue-ignore */ HTMLAttributes {
  as?: ReTextAs;
  color?: ReTextColor;
  size?: ReTextSize;
}

const {
  as = "p",
  color = "primary",
  size = "base",
  ...props
} = defineProps<ReTextProps>();
</script>

<template>
  <component
    v-bind="props"
    :is="as"
    :class="[
      {
        'fnt-base': size === 'base',
        'fnt-huge': size === 'huge',
        'fnt-large': size === 'large',
        'fnt-small': size === 'small',
        'fnt-tiny': size === 'tiny',
      },
      {
        'txt-primary': color === 'primary',
        'txt-secondary': color === 'secondary',
      },
    ]"
  >
    <slot />
  </component>
</template>
