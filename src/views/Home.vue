<template>
  <main v-if="loading" class="container">
    <div class="main-header">
      <div class="links">
        <div>
          <router-link exact-active-class="active" to="/">Home</router-link>
        </div>
        <div>
          <router-link exact-active-class="active" to="/about"
            >About</router-link
          >
        </div>
        <div>
          <router-link exact-active-class="active" to="/projects"
            >Projects</router-link
          >
        </div>
        <div class="button">
          <router-link exact-active-class="active" to="/contact"
            >Contact</router-link
          >
        </div>
      </div>
    </div>
    <div class="book n-bottom">
      <div class="area">
        <div class="gold">
          <div class="logo-cont">
            <div class="logo"></div>
            <div>
              <div>Hello</div>
              <div class="logo-text">I'm Charles</div>
              <div>
                FreeLance Web Designer
                <br />& Software Engineer
              </div>
            </div>

            <div class="chinese">さそり座</div>
          </div>

          <div class="gold-container">
            <img class="img-fluid" :src="getIcon" alt />
            <div class="pos-num">
              <div class="text">{{ formatData }}&#176;</div>
            </div>
          </div>
          <!-- <p>Good morning</p> -->
        </div>
      </div>
    </div>
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
import axios from 'axios';

export default {
  data() {
    return {
      lat: '',
      long: '',
      weatherData: {
        main: '',
        weather: ''
      },
      loading: false
    };
  },
  watch: {
    'weatherData.main': {
      deep: true,
      handler(x) {
        if (x.temp) {
          this.loading = false;
          setTimeout(() => {
            this.loading = true;
          }, 3000);
        }
      }
    }
  },
  computed: {
    formatData() {
      if (this.weatherData && this.weatherData.main) {
        let k = this.weatherData.main.temp.toFixed(0).toString();
        return k.length > 2 ? k.substring(0, 2) : k;
      }
    },
    getIcon() {
      if (this.weatherData && this.weatherData.main) {
        return `http://openweathermap.org/img/wn/${this.weatherData.weather.weather[0].icon}@2x.png`;
      }
    }
  },
  methods: {
    async showPosition(position) {
      let key = 'e8e569135b11f4e02b402366ae393681';

      await position.coords.latitude;
      await position.coords.longitude;
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${key}`
      );

      let { main, ...weather } = res.data;
      this.weatherData.main = main;
      this.weatherData.weather = weather;
      this.loading = true;
    },
    getLocation() {
      if (navigator.geolocation) {
        let res = navigator.geolocation.getCurrentPosition(this.showPosition);
        console.log('iii', res);
      } else {
        alert('Geolocation is not supported by this browser');
      }
    }
  },
  async mounted() {
    await this.getLocation();
    setTimeout(() => {
      this.loading = true;
    }, 10000);
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Chinese';
  src: url('../assets/Chinese.ttf');
}
.container {
  background-size: cover;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  background-image: linear-gradient(
    to right bottom,
    #e2e2e2,
    #e5e5e5,
    #e8e8e8,
    #ececec,
    #efefef,
    #f2f2f2,
    #f4f4f4,
    #f7f7f7,
    #f9f9f9,
    #fbfbfb,
    #fdfdfd,
    #ffffff
  );
}
.container::before {
  content: '';
  position: absolute;
  left: 0;
  width: 50vw;
  height: 100%;
}

.book {
  width: 60vw;
  height: 70vh;
  background-color: #f7f7f7;
  background-image: url('https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/e35/17881331_211277712695886_4765536372649885696_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=xwX6ZOijguAAX99PlYZ&oh=c2ed88bde4c0f1b5690ddd5200df5e35&oe=5E814FE8');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -7px 10px 20px -5px rgba(119, 119, 119, 0.993);
  box-sizing: border-box;
}
.book::before {
  content: '';
  height: 1px;
  position: absolute;
  left: 0;
  width: 20vw;
  top: 2.1vw;
  border-bottom: 0.29px solid rgba(255, 191, 0, 0.83);
}

.area {
  width: 100%;
  height: 100%;
  margin-left: 2.1vw;
  border-left: 0.29px solid rgba(255, 191, 0, 0.83);
}
.gold {
  position: relative;
  width: 100%;
  height: 100%;
}

.gold-container {
  height: 15vh;
  width: 5.5vw;
  background: #e2e2e2;
  position: absolute;
  right: 5vw;
  top: 0px;
  overflow: hidden;
  box-shadow: -2px -2px 5px #fff, 0px 2px 5px #35363a;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.gold-container::before,
.gold-container::after {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  border-top-left-radius: 40%;
  border-top-right-radius: 45%;
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 40%;
  z-index: 1;
}
.gold-container::before {
  top: 45%;
  left: -15%;
  background-color: rgba(236, 110, 76, 0.85);
  -webkit-animation: wawes 5.5s infinite linear;
  -moz-animation: wawes 6s infinite linear;
  animation: wawes 6s infinite linear;
}
.gold-container::after {
  top: 50%;
  left: -15%;
  background-color: rgba(238, 198, 67, 0.82);
  -webkit-animation: wawes 4s infinite;
  -moz-animation: wawes 4s infinite;
  animation: wawes 4s infinite;
}
@-webkit-keyframes wawes {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes wawes {
  from {
    -moz-transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@keyframes wawes {
  from {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.pos-num {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  font-size: 25px;
  z-index: 5;
}
.text {
  font-family: 'Lato';
  font-size: 1.6rem;
  color: #2b4162;
}
.img-fluid {
  height: 40px;
  width: 40px;
  object-fit: cover;
  position: absolute;
  right: 1vw;
}
.logo-cont {
  padding-left: 2vw;
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
}
.logo-text {
  color: #947a5f;
  font-family: 'Chinese';
  letter-spacing: 0.1rem;
  font-size: 2rem;
  padding: 0.5rem 0;
}
.chinese {
  font-family: 'Chinese';
  font-size: 2rem;
  writing-mode: vertical-lr;
  background: #947a5f;
  color: #12100e;
  width: 3.5vw;
  margin-bottom: -10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  text-align: center;
  padding: 8px 0;
}
.text-little {
  font-size: 1rem;
  font-family: 'Chinese';
  letter-spacing: 1px;
}
.loader-bg {
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  z-index: 3;
}

.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  background: #f4f4f4;
  color: #fff;
}

.center {
  position: absolute;
  width: 220px;
  height: 220px;
  top: 90px;
  left: 90px;
}

.dot-1 {
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  top: 95px;
  left: 95px;
  background: #fff;
  border-radius: 50%;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: jump-jump-1 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
  animation: jump-jump-1 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
}

.dot-2 {
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  top: 80px;
  left: 80px;
  background: #fff;
  border-radius: 50%;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: jump-jump-2 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
  animation: jump-jump-2 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
}

.dot-3 {
  position: absolute;
  z-index: 1;
  width: 90px;
  height: 90px;
  top: 65px;
  left: 65px;
  background: #fff;
  border-radius: 50%;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: jump-jump-3 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
  animation: jump-jump-3 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
    alternate;
}

@-webkit-keyframes jump-jump-1 {
  0%,
  70% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes jump-jump-1 {
  0%,
  70% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes jump-jump-2 {
  0%,
  40% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes jump-jump-2 {
  0%,
  40% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes jump-jump-3 {
  0%,
  10% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes jump-jump-3 {
  0%,
  10% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
