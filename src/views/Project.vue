<template>
  <main v-if="loading" class="project">
    <main class="first">
      <div class="top">
        <div @click="check = !check" class="logo-proj">
          <div class="dl">
            <div class="dl__container">
              <div class="dl__corner--top"></div>
              <div class="dl__corner--bottom"></div>
            </div>
            <div class="dl__square"></div>
          </div>
        </div>
        <div class="links-a">
          <div class="links-area">
            <div class="about-its">
              <router-link exact-active-class="active-three" to="/projects"
                >Projects</router-link
              >
            </div>
            <transition
              mode="out-in"
              enter-active-class=" fade-in-left"
              leave-active-class="fade-out-left"
            >
              <div v-show="check">
                <router-link exact-active-class="active-three" to="/"
                  >Home</router-link
                >
              </div>
            </transition>
            <transition
              mode="out-in"
              enter-active-class="fade-in-left-two"
              leave-active-class="fade-out-left-two"
            >
              <div v-show="check">
                <router-link
                  ref="about"
                  exact-active-class="active-three"
                  to="/about"
                  >About</router-link
                >
              </div>
            </transition>
            <transition
              mode="out-in"
              enter-active-class=" fade-in-left-three"
              leave-active-class="fade-out-left-three"
            >
              <div v-show="check">
                <router-link exact-active-class="active-three" to="/contact"
                  >Contact</router-link
                >
              </div>
            </transition>
          </div>
        </div>
      </div>

      <transition mode="out-in" enter-active-class="animated slideInUp faster">
        <div :key="currentPage" class="roles">
          {{ getRole.toString().replace(/ /g, '\r\n') }}
        </div>
      </transition>

      <div class="size">
        <div class="big">{{ getName.toString().replace(/ /g, '\r\n') }}</div>
      </div>
      <div class="stack">
        <div v-for="stack in getStack" :key="stack">{{ stack }}</div>
      </div>
    </main>
    <main class="second">
      <carousel
        data-index="0"
        @navigation-click="click"
        @page-change="pageClick"
        :navigation-next-label="''"
        :navigation-prev-label="''"
        :navigationEnabled="true"
        class="carousel"
        :per-page="1"
        :mouse-drag="false"
        :loop="true"
      >
        <slide v-for="(item, index) in items" :key="index">
          <transition
            mode="out-in"
            enter-active-class="animated slideInUp faster"
          >
            <div :key="currentPage" class="information">{{ item.summary }}</div>
          </transition>
          <div
            :style="`background: url(${item.img})`"
            :class="`img-${index}`"
            class="image-section"
          >
            <div class="static-header">
              <div class="search">
                <a
                  :href="item.link"
                  target="_blank"
                  style="display:flex;align-items:center"
                >
                  <img src="@/assets/right-arrow.svg" alt />
                  <div style="color:#ffffff; padding-left:1rem">Visit</div>
                </a>
              </div>
              <div class="stat-cont">
                <div class="text-size">{{ (index + 1) | insertZero }}</div>
                <div class="dash"></div>
                <div class="text-size">
                  {{
                    index === items.indexOf(items[items.length - 1])
                      ? 1
                      : (index + 2) | insertZero
                  }}
                </div>
              </div>
            </div>
            <div class="static-box">
              <div class="box-width">
                <div
                  :style="`background:url(${items[val].img})`"
                  :class="`small-${index}`"
                  class="first-box"
                >
                  <div class="numbers">
                    <div class="text-size">{{ (index + 1) | insertZero }}</div>
                    <div class="text-size">{{ items.length | insertZero }}</div>
                  </div>
                </div>
                <div class="second-box">
                  <div v-if="item.github" @click="sendgit(item)" class="github">
                    <a :href="item.github" target="_blank" class="img-cont">
                      <img src="@/assets/github.png" alt />
                    </a>
                  </div>
                  <div v-else class="more"></div>
                  <div class="content">
                    <div class="text-size">{{ (val + 1) | insertZero }}</div>
                    <div style="padding-left:.5rem" class="text-size">
                      {{ items[val].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div class="info-section"></div>
        </slide>
      </carousel>
    </main>
  </main>

  <main class="loader-bg" v-else>
    <div class="frame">
      <div class="center">
        <div class="dot-1"></div>
        <div class="dot-2"></div>
        <div class="dot-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
import nextLabel from '@/assets/left-arrow.svg';
import prevLabel from '@/assets/right-arrow.svg';
import { Carousel, Slide } from 'vue-carousel';
import items from '../helper/data';
export default {
  data() {
    return {
      loading: false,
      items: items,
      nextLabel: nextLabel,
      prevLabel: prevLabel,
      val: 1,
      check: true,
      currentPage: 0
    };
  },
  components: {
    Carousel,
    Slide
  },
  computed: {
    getName() {
      return this.currentPage === 0
        ? this.items[0].name
        : this.items[this.currentPage].name;
    },
    getStack() {
      return this.currentPage === 0
        ? this.items[0].stack
        : this.items[this.currentPage].stack;
    },
    getRole() {
      return this.currentPage === 0
        ? this.items[0].role
        : this.items[this.currentPage].role;
    }
  },
  methods: {
    click(x, y) {
      if (
        this.val === items.indexOf(items[items.length - 1]) &&
        x === 'forward'
      ) {
        this.val = 0;
      } else if (this.val >= 0 && x === 'forward') {
        this.val = this.val + 1;
      } else if ((this.val == 1 || this.val > 1) && x === 'backward') {
        this.val = this.val - 1;
      } else if (this.val == 0 && x == 'backward') {
        this.val = items.length - 1;
      }
    },
    sendgit(x) {
      console.log(x);
    },
    pageClick(x) {
      this.currentPage = x;
    }
  },
  filters: {
    insertZero(val) {
      if (val.toString().length < 2) {
        return (val = '0' + val);
      }
    },
    checkSpace(val) {}
  },
  mounted() {
    setTimeout(() => {
      this.loading = true;
    }, 1500);
  }
};
</script>

<style scoped>
.project {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.project a {
  color: white !important;
}

.first {
  width: 21vw;
  height: 100%;
  background: rgba(48, 45, 52, 1);
  display: flex;
}
.second {
  width: 79vw;
  height: 100%;
  background: #aeadae;
}
.carousel {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
.image-section {
  width: 100%;
  height: 69vh;
  background-repeat: no-repeat !important;
  background-size: contain;
  background-position: center !important;
  z-index: 40;
  box-shadow: 0px 2px 5px #35363a;
}
.links-a {
  margin-left: 10px;
  margin-top: -10px;
}
.info-section {
  width: 100%;
  height: 31vh;
  background: rgba(48, 45, 52, 1);
}
.static-header {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8vh 12vw 0 0;
  align-items: center;
}
.stat-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}
.top {
  display: flex;
  width: 100%;
  height: 20vh;
  margin-left: 5vw;
  margin-top: 10vh;
}
.dash {
  width: 20px;
  height: 1px;
  background: #f5f5f5;
  margin: 0 10px;
}
.text-size {
  font-size: 12px;
  color: #f5f5f5;
}
.img-0 {
  background-size: 450px !important;
}
.static-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: flex-end;
}
.search {
  padding-left: 4rem;
}
.more {
  height: 50%;
}
.first-box {
  position: relative;
  width: 18.25vw;
  height: 15vh;
  background-repeat: no-repeat !important;
  background-size: cover;
  background-position: center !important;
  box-shadow: 0px 2px 5px #35363a;
}
.first-box::before {
  content: '';
  width: 18.25vw;
  height: 15vh;
  background: #ebecef;
  position: absolute;
  z-index: -3;
}
.github {
  height: 50%;
}
.img-cont {
  height: 100%;
  width: 4.5vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-cont::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  z-index: -1;
  opacity: 0.3;
}
.img-cont img {
  height: 20px;
  width: 20px;
}
.content {
  height: 50%;
  background: #403e47;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 12px !important;
}
@-webkit-keyframes dyinglight {
  15% {
    -webkit-transform: scale(1.6);
    transform: scale(1.6);
  }
  50% {
    -webkit-transform: rotate(-89deg);
    transform: rotate(-89deg);
  }
  100% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}

@keyframes dyinglight {
  15% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: rotate(-89deg);
    transform: rotate(-89deg);
  }
  100% {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}
.dl {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.dl__square {
  display: block;
  width: 20px;
  height: 20px;
  background: white;
}

.dl__container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  -webkit-transform-origin: 50% 50% 0;
  transform-origin: 50% 50% 0;
  -webkit-animation: dyinglight infinite ease 10s;
  animation: dyinglight infinite ease 10s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.dl__corner--top:before,
.dl__corner--top:after,
.dl__corner--bottom:before,
.dl__corner--bottom:after {
  position: absolute;
  width: 10px;
  height: 10px;
  color: white;
  content: '';
}

.dl__corner--top:before {
  border-left: 1px solid;
  border-top: 1px solid;
  top: -6px;
  left: -6px;
}
.dl__corner--top:after {
  border-right: 1px solid;
  border-top: 1px solid;
  top: -6px;
  right: -6px;
}

.dl__corner--bottom:before {
  border-left: 1px solid;
  border-bottom: 1px solid;
  bottom: -6px;
  left: -6px;
}
.dl__corner--bottom:after {
  border-right: 1px solid;
  border-bottom: 1px solid;
  bottom: -6px;
  right: -6px;
}
.size {
  position: absolute;
  height: 100%;
  font-size: 1rem;
  flex-direction: column;
}
.big {
  white-space: pre-line;
  line-height: 5rem;
  padding-bottom: 4rem;
  font-size: 5rem;
  top: 43vh;
  letter-spacing: 1px;
  color: white;
  margin-left: 13vw;
  position: absolute;
}
</style>
<style>
.VueCarousel-inner {
  transform: 0 !important;
  transition: none !important;
}
.VueCarousel-pagination {
  position: absolute;
  z-index: 5;
  bottom: 0;
  margin: 0 !important;
  padding: 0 !important;
}
.VueCarousel-dot-container {
  display: flex !important;
  position: absolute;
  width: 13vw;
  z-index: 5 !important;
  margin: 0 !important;
  padding: 0 !important;
  bottom: 11.6vh;
  right: 21vw;
}
.VueCarousel-dot {
  padding: 0 !important;
  margin: 0 !important;
  flex: 1;
  height: 1px !important;
  background: #5b6467 !important;
}
.VueCarousel-dot--active {
  background: #f5f5f5 !important;
}
.VueCarousel-navigation-button {
  position: absolute !important;
  top: 50vh !important;
}
.VueCarousel-navigation-prev {
  position: absolute !important;
  left: 67vw !important;
  margin-top: 38.15vh;
}
.VueCarousel-navigation-next {
  position: absolute !important;
  right: 8vw !important;
  margin-top: 38.15vh;
}
.VueCarousel-navigation-next::after {
  content: url('../assets/right-arrow.svg');
}
.VueCarousel-navigation-prev::after {
  content: url('../assets/left-arrow.svg');
}
button {
  outline: none !important;
}
.box-width {
  width: 36.5vw;
  height: 15vh;
  margin-bottom: -7.5vh;
  display: flex;
  z-index: 1;
}

.numbers {
  display: flex;
  justify-content: space-between;
  bottom: -13.2vh;
  position: absolute;
  width: 100%;
  z-index: 10;
}
.second-box {
  width: 18.25vw;
  height: 15vh;
  background: transparent;
  display: flex;
  flex-direction: column;
}

.information {
  position: absolute;
  height: auto;
  width: 35vw;
  top: 75.5vh;
  color: #e2e2e2;
  font-size: 12px;
}
.stack {
  position: absolute;
  top: 75vh;
  width: 120px;
  left: 14vw;
  color: #ffffff;
}
.stack div {
  font-size: 1rem !important;
  font-weight: bold;
}
.roles {
  position: absolute;
  top: 30vh;
  width: 120px;
  left: 13.5vw;
  color: #ffffff;
  font-size: 12px;
  white-space: pre-line;
}
.roles::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 2px;
  background: white;
  margin-left: -20px;
  margin-top: 8px;
}
.small-0,
.small-2,
.small-4 {
  background-size: 60px !important;
}
.img-1 {
  background-size: 200px !important;
}
.img-2 {
  background-size: 650px !important;
}
.small-1 {
  background-size: 250px !important;
}
.small-5 {
  background-size: 100px !important;
}
.img-3 {
  background-size: 200px !important;
}
.img-4 {
  background-size: 200px !important;
}
.img-6,
.img-8 {
  background-size: 500px !important;
}
.img-5 {
  background-size: 120px !important;
}
.small-6 {
  background-size: 100px !important;
}
.small-3 {
  background-size: 50px !important;
}
.slide-in-bottom {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
