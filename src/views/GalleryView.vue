<template>
  <div>
    <div class="pt-2.5 pl-24 pr-36 pb-1250 hidden md:block">
      <h1 class="mb-10 text-center font-bold text-945 leading-1268 uppercase">
        Packer pen Gallery
      </h1>
      <div class="gap-418 flex">
        <div class="mt-1250 flex flex-col gap-418">
          <img src="../assets/Rectangle_23.jpg" alt="img1" />
          <img src="../assets/Rectangle_27.jpg" alt="img2" />
        </div>
        <div class="flex flex-col gap-418">
          <img src="../assets/Rectangle_25.jpg" alt="img3" />
          <img src="../assets/Rectangle_24.jpg" alt="img4" />
        </div>
        <div class="mt-1250 flex flex-col gap-418">
          <img src="../assets/Rectangle_21.jpg" alt="img5" />
          <img src="../assets/Rectangle_28.jpg" alt="img6" />
          <img src="../assets/Rectangle_26.jpg" alt="img7" />
        </div>
      </div>
    </div>

    <div class="pt-7 px-auto pb-730 md:hidden">
      <h1 class="mb-10 text-center font-bold text-t30 leading-44 uppercase">
        Packer pen Gallery
      </h1>
      <div>
        <div class="flex gap-295">
          <div class="flex flex-col gap-295 w-1/2 mb-295">
            <img class="h-1/2" src="../assets/img1.jpg" alt="img1" />
            <img class="h-1/2" src="../assets/img2.jpg" alt="img2" />
          </div>
          <div class="w-1/2">
            <img src="../assets/img3.jpg" alt="img3" />
          </div>
        </div>
        <div class="w-full mb-295">
          <img src="../assets/img4.jpg" alt="img4" />
        </div>
        <div class="w-full mb-295">
          <img src="../assets/img5.jpg" alt="img5" />
        </div>
        <div class="w-full flex gap-295">
          <div>
            <img class="w-1/2" src="../assets/img6.jpg" alt="img6" />
          </div>
          <div>
            <img class="w-1/2" src="../assets/img7.jpg" alt="img7" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["idScreen"]
};
</script>

