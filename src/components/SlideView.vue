<template>
  <div>
    <transition name="next">
      <tab-view v-if="idScreen === 'tab'"></tab-view>
    </transition>
    <transition name="prev">
      <gallery-view v-if="idScreen === 'gallery'"></gallery-view>
    </transition>
    <nav class="flex justify-center items-center mt-30 gap-3.515">
      <div
        class="dot-nav w-3.515 h-3.515 block p-px rounded-full mb-2090 cursor-pointer"
        @click="setId"
        :class="idScreen === 'tab' ? 'bg-black' : 'bg-dotGray'"
      ></div>
      <div
        class="dot-nav w-3.515 h-3.515 block p-px rounded-full mb-2090 cursor-pointer"
        @click="setId"
        :class="idScreen === 'gallery' ? 'bg-black' : 'bg-dotGray'"
      ></div>
    </nav>
  </div>
</template>

<script>
import TabView from "../views/TabView.vue";
import GalleryView from "../views/GalleryView.vue";
export default {
  data() {
    return {
      idScreen: "tab"
    };
  },
  components: {
    TabView,
    GalleryView
  },
  methods: {
    setId() {
      if (this.idScreen === "tab") {
        this.idScreen = "gallery";
      } else this.idScreen = "tab";
    }
  },
  mounted() {
    console.log(this.isTabView, this.isGalleryView);
  }
};
</script>

<style>
.next-enter-active,
.next-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.next-enter,
.next-leave-to {
  transform: translateX(100%);
}
.prev-enter-active,
.prev-leave-enter {
  transform: translateX(0);
  transition: all 0.3s linear;
}
.prev-enter,
.prev-leave-to {
  transform: translateX(-100%);
}
</style>
