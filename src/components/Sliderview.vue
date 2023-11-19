<template>
  <div class="navigation-wrapper">
    <div ref="slider" class="keen-slider">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="keen-slider__slide number-slide1 bg-cover"
        :style="{
          'background-image':
            'url(' + require('../assets/imgs/' + item.bg) + ')',
        }"
      >
        <div class="item-1 md:flex" :class="{ hidden: i % 2 !== 0 }">
          <div
            class="w-1/2 mx-auto text-center md:text-left"
            v-if="i % 2 === 0"
          >
            <img :src="item.logo" class="w-full md:w-1/2" alt="" />
            <h1
              class="text-base md:text-4xl font-bold max-w-md mb-3 md:leading-10"
            >
              {{ item.title }}
            </h1>
            <p
              class="text-sm md:text-xl max-w-sm md:leading-8"
              v-html="item.content"
            ></p>
          </div>
        </div>
        <div class="item-2 md:flex" :class="{ hidden: i % 2 === 0 }">
          <div
            class="w-1/2 mx-auto text-center md:text-left"
            v-if="i % 2 !== 0"
          >
            <img :src="item.logo" class="w-full md:w-1/2" alt="" />
            <h1
              class="text-base md:text-4xl font-bold max-w-md mb-3 md:leading-10"
            >
              {{ item.title }}
            </h1>
            <p
              class="text-sm md:text-xl max-w-sm md:leading-8"
              v-html="item.content"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
    </div>
  </div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default {
  name: "SliderView",
  props: ["items"],
  data() {
    return {
      current: 1,
      slider: null,
    };
  },
  computed: {
    dotHelper() {
      return this.slider
        ? [...Array(this.slider.track.details.slides.length).keys()]
        : [];
    },
  },
  mounted() {
    this.slider = new KeenSlider(
      this.$refs.slider,
      {
        loop: true,
        initial: this.current,
        slideChanged: (s) => {
          this.current = s.track.details.rel;
        },
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 5000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
  },
  beforeUnmount() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style scoped>
[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 75vh !important;
  max-height: 100vh;
}

.item-1,
.item-2 {
  flex: 1 1 25%;
  color: #fff;
}

.navigation-wrapper {
  position: relative;
}
.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
}
.dot {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  background: #000;
}
</style>
