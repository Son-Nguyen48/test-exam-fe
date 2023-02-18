<template>
  <div id="app">
    <!-- <div class="mx-auto w-11/12 md:w-10/12 mt-24108">
      <router-view />
      <nav class="flex justify-center items-center mt-30" style="gap: 15px">
        <router-link
          class="dot-nav w-3.515 h-3.515 block p-px rounded-full bg-dotGray mb-2090"
          to="/"
          exact
        ></router-link>
        <router-link
          class="dot-nav w-3.515 h-3.515 block p-px rounded-full bg-dotGray mb-2090"
          to="/gallery"
        ></router-link>
      </nav>
    </div> -->
    <slide-view></slide-view>
  </div>
</template>

<script>
import SlideView from "./components/SlideView.vue";
export default {
  components: { SlideView }
};
</script>

<style>
.dot-nav.router-link-active,
.dot-nav.router-link-exact-active {
  background-color: #000000;
  cursor: pointer;
}
</style>
