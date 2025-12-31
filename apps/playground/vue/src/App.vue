<script setup lang="ts">
import "@fontsource-variable/geist";
import "@hexframe/teom-shared/style.css";
import "@hexframe/teom-shared/themes/neutral.css";

import {
  ReButton,
  ReCheckbox,
  ReInput,
  ReRadio,
  ReSwitch,
} from "@hexframe/teom-vue";
import { useColorMode } from "@vueuse/core";

import TablerX from "virtual:icons/tabler/x";

const mode = useColorMode({
  attribute: "class",
});
</script>

<template>
  <div class="w-108 mx-auto flex flex-col gap-3 p-3">
    <div class="flex gap-3 *:basis-0 *:grow">
      <ReButton color="primary">
        Далее
      </ReButton>
      <ReButton color="secondary">
        Отмена
      </ReButton>
      <ReButton color="danger">
        Удалить
      </ReButton>
    </div>
    <div class="flex gap-3">
      <ReButton
        color="danger"
        size="icon"
        @click="mode = 'light'"
      >
        <TablerX class="w-full h-full" />
      </ReButton>
      <ReButton disabled class="grow">
        Отключено
      </ReButton>
      <ReButton size="icon" @click="mode = 'dark'">
        I
      </ReButton>
    </div>
    <div class="flex gap-3">
      <ReCheckbox />
      <ReCheckbox required />
      <ReCheckbox disabled />
      <ReCheckbox disabled :model-value="true" />
    </div>
    <div class="flex gap-3">
      <ReSwitch />
      <ReSwitch required />
      <ReSwitch disabled />
      <ReSwitch disabled :model-value="true" />
    </div>
    <div class="flex gap-3">
      <ReRadio name="grouped" />
      <ReRadio name="grouped" />
      <ReRadio name="grouped" />
      <ReRadio
        name="foreigner"
        disabled
        checked
      />
    </div>
    <ReInput placeholder="Введите текст" />
    <div class="flex gap-3">
      <ReInput
        type="email"
        placeholder="Введите E-Mail"
        model-value="Некорректно"
      />
      <ReInput disabled model-value="Отключено" />
    </div>
    <ReInput type="file" accept=".docx" />
  </div>
</template>
