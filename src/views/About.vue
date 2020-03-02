<template>
  <div v-if="loading" class="about">
    <div class="main-two">
      <div class="links-two">
        <div>
          <router-link exact-active-class="active-two" to="/">Home</router-link>
        </div>
        <div class="about-it">
          <router-link ref="about" exact-active-class="active-two" to="/about">About</router-link>
        </div>
        <div>
          <router-link exact-active-class="active-two" to="/projects">Projects</router-link>
        </div>
        <div class="button">
          <router-link exact-active-class="active-two" to="/contact">Contact</router-link>
        </div>
      </div>
    </div>

    <div class="color-scheme">
      <div class="about-cont">
        <div :style="`background:${randomise}`" class="liner-cont fade-in-left">
          <div class="liner first-area">
            <div class="letter b">A</div>
            <div class="letter b">U</div>
            <div class="letter b">M</div>
          </div>
          <div class="liner">
            <div class="letter b">B</div>
            <div class="letter b">T</div>
            <div class="letter b">E</div>
          </div>
          <div class="liner">
            <div style="padding-left:2px" class="letter b">O</div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-sect">
      <div class="about-size">
        <div class="color-names">{{name}}</div>
        <div class="about-header">Summary</div>
        <div class="about-header-two">
          Software Developer with a Bachelor’s degree in computer science and over three years of professional experience as a full-stack web developer.
          I tend to view myself as a generalist since I am comfortable working with a wide range of technologies.
          My skills range from HTML, CSS, Node, Javascript(vue.js, react.js and Jquery), and most recently Go.
          <br />I have been exposed to varieties of technology in my career and consider myself to be very adaptable.
          <div class="about-button">
            <a
              class="btns"
              :href="`data:application/pdf;base64,${pdf}`"
              download="Resume.pdf"
            >Résumé</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
import pdf from "../helper/resume";
import gradient from "../helper/gradient";
export default {
  data() {
    return {
      random: "",
      name: "",
      start: "",
      loading: false,
      pdf: pdf
    };
  },
  computed: {
    randomise() {
      this.numberWithCommas(this.random);
      return `linear-gradient(to right,${this.random})`;
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    randomStuff() {
      let colorGradient = gradient;
      let randomGradient =
        colorGradient[Math.floor(Math.random() * colorGradient.length)];
      let k = randomGradient;
      this.random = [...k.colors];
      this.name = k.name;
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = true;
    }, 1500);
    this.randomStuff();
    if (this.random && !this.start) {
      this.start = setInterval(() => {
        this.randomStuff();
      }, 20000);
    } else {
      clearInterval(this.start);
    }
  },
  destroyed() {
    this.random = "";
  }
};
</script>


<style  scoped>
.about {
  background: #e5e4e5;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
}
.about::before {
  content: "";
  height: 100vh;
  width: 15vw;
  background: url("https://66.media.tumblr.com/27fe8c2d6323dae0dec77752e1b44433/tumblr_my958ui0n71szmv8go1_500.jpg");
  background-size: contain;
  background-position: center -15px;
  position: absolute;
  background-repeat: no-repeat;
  right: 10vw;
  top: 65vh;
  z-index: 0;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 2px 5px #35363a;
  -webkit-animation: kenburns-top 5s ease-out both;
  animation: kenburns-top 5s ease-out both;
}
.color-scheme {
  flex: 3;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-cont {
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    #252524,
    #272625,
    #282727,
    #282828,
    #292929,
    #292929,
    #292929,
    #292929,
    #292929,
    #282928,
    #282828,
    #282828
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
.b {
  color: #babecc;
}
.active-two {
  color: #babecc;
  transition-delay: 2s;
}
.liner-cont {
  width: 25vw;
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: -10vw;
  z-index: 1;
  box-shadow: -3px 4px 15px rgba(0, 0, 0, 1);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.about-sect {
  flex: 7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.letter {
  font-size: 8rem;
  line-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #434243;
}

.liner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-two {
  position: absolute;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.links-two {
  position: absolute;
  width: 35vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5vh;
  font-weight: bold;
}
.about-it {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-it::before {
  content: "";
  z-index: -1;
  position: absolute;
  height: 8vh;
  width: 50%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  bottom: -3vh;
  padding: 20px;
  background-image: linear-gradient(
    to bottom,
    #252524,
    #272625,
    #282727,
    #282828,
    #292929,
    #292929,
    #292929,
    #292929,
    #292929,
    #282928,
    #282828,
    #282828
  );
  box-shadow: -2px -2px 5px #fff, 0px 2px 5px #35363a;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #837d7d;
  -webkit-animation: scale-in-ver-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-ver-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.about-sect {
}
.about-header {
  color: #434243;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
}
.about-header-two {
  font-size: 13px;
  font-weight: 400;
  color: #434243;
  padding-left: 20px;
}
.about-size {
  width: 60%;
}
.btns {
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
  color: #61677c;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 400;
  position: relative;
}
.btns:hover {
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
}
.btns:active,
.btn:focus {
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  /* box-shadow: inset 1px 1px 2px #babecc, -1px -1px 2px #fff; */
}

.btns:focus::after,
.btns:active::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 0px #dfe4ea inset, -2px -2px 2px 0px #ffffff inset;
}
.about-button {
  margin-top: 6vh;
}
.color-names {
  position: absolute;
  margin-bottom: 2.2rem;
  left: 32vw;
  font-size: 14px;
  color: #434243;
  top: 15vh;
  -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
.kenburns-top {
  -webkit-animation: kenburns-top 5s ease-out both;
  animation: kenburns-top 5s ease-out both;
}
@-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
    transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
    transform-origin: top;
  }
}
@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
    transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
    transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
    transform-origin: top;
  }
}
.fade-in-left {
  -webkit-animation: fade-in-left 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s
    both;
  animation: fade-in-left 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both;
}
/* ----------------------------------------------
 * Generated by Animista on 2020-2-27 7:45:34
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-left
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
.scale-in-ver-top {
  -webkit-animation: scale-in-ver-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-ver-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2020-2-27 7:50:42
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-in-ver-top
 * ----------------------------------------
 */
@-webkit-keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>