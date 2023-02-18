<template>
  <div>
    <div class="mx-auto w-11/12 md:w-10/12 md:mt-24108 mt-0">
      <div class="mb-1250">
        <div class="md:flex w-full">
          <tab-header
            v-for="(tab, index) in tabs"
            :key="tab.id"
            :tab="tab"
            @click.native="selectTab(index)"
            class="cursor-pointer pb-2.5 md:pb-0 w-full md:w-1/4"
          >
            <tab-content v-show="tab.isActive" class="mx-auto md:hidden">
              <div
                class="bg-iconGray rounded-b-3.5xl py-3 px-5 flex gap-10 flex-col"
              >
                <div>
                  <p class="font-normal leading-627">
                    Graphite Artist Quality Fine Art Drawing, Sketching and
                    Replaceable Nib Pencils.
                  </p>

                  <!-- ---------------------------------------- -->

                  <div class="mt-5">
                    <ul class="grid grid-cols-2 gap-1">
                      <li class="list-inside list-disc whitespace-nowrap">
                        <span
                          class="text-213 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                        >
                          mechanical pencils
                        </span>
                      </li>
                      <li class="list-inside list-disc whitespace-nowrap">
                        <span
                          class="text-213 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                          >architect's choice</span
                        >
                      </li>

                      <li class="list-inside list-disc whitespace-nowrap">
                        <span
                          class="text-213 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                        >
                          executive pencils
                        </span>
                      </li>
                      <li class="list-inside list-disc whitespace-nowrap">
                        <span
                          class="text-213 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                        >
                          mechanical pencils
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- ---------------------------------------- -->
                <div>
                  <div class="mb-10">
                    <div
                      class="flex items-center pl-6 pt-419 pr-1.5 pb-3.517 rounded-10br border-white border-2 border-solid"
                    >
                      <p class="font-bold text-t36 leading-54 text-saleColor">
                        25%
                      </p>
                      <p
                        class="font-bold text-418 leading-8 text-saleColor uppercase mr-4"
                      >
                        off
                      </p>
                      <p class="font-normal leading-6 pr-521">
                        Offer Applicable on All Our Pencils
                      </p>
                    </div>
                  </div>

                  <!-- ---------------------------------------- -->

                  <div class="mb-939">
                    <div class="flex">
                      <div
                        class="pt-2 pr-2.5 pb-626 pl-3.5 w-1/2 rounded-2.5xl bg-white mr-418"
                      >
                        <img
                          class="mb-0.5"
                          :src="require(`/src/assets/${tab.img1}`)"
                          alt="img"
                        />
                        <p class="text-center leading-418 text-213 font-medium">
                          Aero
                        </p>
                        <p class="text-center leading-418 text-213 font-medium">
                          Mechanical Pencil
                        </p>
                        <div class="flex gap-29">
                          <p class="font-semibold text-214 text-center ml-418">
                            $99.00
                          </p>
                          <p class="font-normal text-213 leading-5">$125.00</p>
                        </div>
                      </div>
                      <div
                        class="pt-2 pr-2.5 pb-626 pl-3.5 w-full rounded-2.5xl bg-white"
                      >
                        <img
                          class="mb-0.5"
                          :src="require(`/src/assets/${tab.img2}`)"
                          alt="img"
                        />
                        <p class="text-center leading-418 text-213 font-medium">
                          Castell
                        </p>
                        <p class="text-center leading-418 text-213 font-medium">
                          Mechanical Pencil
                        </p>
                        <div class="flex gap-29">
                          <p class="font-semibold text-214 text-center ml-418">
                            $75.00
                          </p>
                          <p class="font-normal text-213 leading-5">$99.00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- ---------------------------------------- -->

                  <div class="text-center md:hidden mt-9 mb-12">
                    <button class="bg-saleColor rounded-1.5 py-px px-3.517">
                      <p
                        class="uppercase font-bold text-214 leading-40 text-white"
                      >
                        shop all
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </tab-content>
          </tab-header>
        </div>

        <tab-content
          v-for="tab in tabs"
          :key="tab.id"
          :tab="tab"
          v-show="tab.isActive"
          class="mx-auto hidden md:block"
        >
          <div
            class="bg-iconGray rounded-b-3.5xl py-10 px-1250 flex gap-10 flex-col md:flex-row"
          >
            <div class="w-1/3">
              <p class="font-normal text-521 leading-627">
                Graphite Artist Quality Fine Art Drawing and Sketching Pencils
                Replaceable Nib Pencils.
              </p>

              <!-- ---------------------------------------- -->

              <div class="mt-5">
                <ul class="mr-5 p-1 grid grid-col-6 md:grid-col-12 gap-1">
                  <li class="list-inside list-disc">
                    <span
                      class="text-418 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                    >
                      mechanical pencils
                    </span>
                  </li>
                  <li class="list-inside list-disc">
                    <span
                      class="text-418 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                      >architect's choice</span
                    >
                  </li>

                  <li class="list-inside list-disc">
                    <span
                      class="text-418 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                    >
                      executive pencils
                    </span>
                  </li>
                  <li class="list-inside list-disc">
                    <span
                      class="text-418 font-semibold leading-8 uppercase tracking-tighter relative -left-2.5"
                    >
                      mechanical pencils
                    </span>
                  </li>
                </ul>
              </div>

              <div class="hidden md:block mt-9">
                <button class="bg-saleColor rounded-1.5 py-15 pl-730 pr-626">
                  <p class="uppercase font-bold text-214 leading-40 text-white">
                    shop all
                  </p>
                </button>
              </div>
            </div>
            <!-- ---------------------------------------- -->
            <div class="w-2/3">
              <div class="mb-10">
                <div
                  class="flex items-center pl-6 pt-419 pr-1.5 pb-3.517 rounded-10br border-white border-2 border-solid"
                >
                  <p class="font-bold text-t36 leading-54 text-saleColor">
                    25%
                  </p>
                  <p
                    class="font-bold text-418 leading-8 text-saleColor uppercase mr-4"
                  >
                    off
                  </p>
                  <p class="font-normal leading-6 pr-521">
                    Offer Applicable on All Our Pencils
                  </p>
                </div>
              </div>

              <!-- ---------------------------------------- -->

              <div class="mb-939">
                <div class="flex w-80348">
                  <div
                    class="pt-2 pr-2.5 pb-626 pl-3.5 w-full rounded-2.5xl bg-white mr-418"
                  >
                    <img
                      class="mb-0.5"
                      :src="require(`/src/assets/${tab.img1}`)"
                      alt="img"
                    />
                    <p class="text-center leading-418 text-213 font-medium">
                      Aero
                    </p>
                    <p class="text-center leading-418 text-213 font-medium">
                      Mechanical Pencil
                    </p>
                    <div class="flex gap-29">
                      <p class="font-semibold text-214 text-center ml-418">
                        $99.00
                      </p>
                      <p class="font-normal text-213 leading-5">$125.00</p>
                    </div>
                  </div>
                  <div
                    class="pt-2 pr-2.5 pb-626 pl-3.5 w-full rounded-2.5xl bg-white"
                  >
                    <img
                      class="mb-0.5"
                      :src="require(`/src/assets/${tab.img2}`)"
                      alt="img"
                    />
                    <p class="text-center leading-418 text-213 font-medium">
                      Castell
                    </p>
                    <p class="text-center leading-418 text-213 font-medium">
                      Mechanical Pencil
                    </p>
                    <div class="flex gap-29">
                      <p class="font-semibold text-214 text-center ml-418">
                        $75.00
                      </p>
                      <p class="font-normal text-213 leading-5">$99.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ---------------------------------------- -->
            </div>
          </div>
        </tab-content>
      </div>
    </div>
  </div>
</template>

<script>
import TabHeader from "@/components/UI/TabHeader.vue";
import TabContent from "@/components/UI/TabContent.vue";
export default {
  props: ["idScreen"],
  components: {
    TabHeader,
    TabContent
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          title: "Pencils",
          img: "pencil.svg",
          icon: "upArrow.svg",
          img1: "pen-img11_1.jpg",
          img2: "pen-img11_2.jpg",
          isActive: true
        },
        {
          id: 2,
          title: "Markers",
          img: "markers.svg",
          img1: "marker1.jpg",
          img2: "marker2.jpg",
          icon: "downArrow.svg",
          isActive: false
        },
        {
          id: 3,
          title: "Drawing Colors",
          img: "drawingColors.svg",
          img1: "pen-img11_1.jpg",
          img2: "pen-img11_2.jpg",
          icon: "downArrow.svg",
          isActive: false
        },
        {
          id: 4,
          title: "Notebooks",
          img: "notebooks.svg",
          img1: "pen-img11_1.jpg",
          img2: "pen-img11_2.jpg",
          icon: "downArrow.svg",
          isActive: false
        }
      ],
      selectedIndex: 0
    };
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
      console.log("here", this.tabs[i].isActive);
    }
  }
};
</script>
