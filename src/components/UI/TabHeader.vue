<template>
  <div>
    <div
      class="p-2.5 md:p-8 bg-iconGray md:w-full md:h-32200 md:min-w-min"
      :class="
        tab.isActive
          ? 'md:bg-iconGray rounded-t-10br'
          : 'md:bg-white rounded-10br'
      "
    >
      <div
        class="flex items-center bg-white pr-7 pl-730 pt-213 pb-3.517 rounded-2.5xl md:block md:text-center w-full h-full"
      >
        <div
          class="bg-iconGray rounded-full mr-5 md:w-1258 md:h-1258 md:flex md:items-center md:justify-center md:mx-auto md:mt-523 md:mb-1"
        >
          <img
            class="mt-3 ml-3 mr-211 mb-211 md:w-9 md:h-9 md:m-2.5"
            :src="require(`/src/assets/${tab.img}`)"
            alt="img"
          />
        </div>
        <div>
          <p class="font-bold text-521 leading-8">
            {{ tab.title }}
          </p>
        </div>
        <div class="flex justify-end items-center flex-1 md:hidden">
          <img :src="require(`/src/assets/${tab.icon}`)" alt="img" style="" />
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["tab"]
};
</script>

<style></style>
