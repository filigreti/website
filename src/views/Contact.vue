<template>
  <main class="contact">
    <div class="one-con">
      <img
        src="https://66.media.tumblr.com/bd21dadee2dfd9d2e0540505cde9cb82/tumblr_ozmf4g8dBK1qz7t0xo1_1280.jpg"
        alt
      />
    </div>
    <main style="display:flex; justify-content:center; flex-direction:column;position:relative">
      <form>
        <div class="main-contact">
          <div class="links-contact">
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
              <router-link exact-active-class="active-con" to="/contact">Contact</router-link>
            </div>
          </div>
        </div>
        <label>
          <input required type="text" placeholder="Enter Your Name" v-model="name" />
        </label>
        <label>
          <input required type="text" placeholder="Enter Your Email Address" v-model="email" />
        </label>
        <label>
          <textarea required type="text" placeholder="Enter Your Message" v-model="message"></textarea>
        </label>
        <button type="submit" @click="submit" :class="{ ss: disable }" class="red">
          <i class="icon ion-md-lock"></i> Send
        </button>
      </form>
      <div class="segment">
        <a href="https://www.linkedin.com/in/charles-osuya-b49ba712b/" target="_blank">
          <button class="unit">
            <img src="@/assets/link.svg" alt />
          </button>
        </a>
        <a href="https://github.com/filigreti" target="_blank">
          <button class="unit" type="button">
            <img src="@/assets/github.svg" alt />
          </button>
        </a>
        <a
          ref="click"
          :href="`mailto:aolfiligre@gmail.com?subject=${name}&body=Email%20=%20${email}%0D%0ABody%20=%20${message}`"
          target="_blank"
        >
          <button class="unit" type="button">
            <img src="@/assets/gmail.svg" alt />
          </button>
        </a>
      </div>
    </main>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      check: true
    };
  },
  computed: {
    disable() {
      if (this.name && this.email && this.message) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    submit() {
      this.$refs.click.click();
    }
  }
};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #ebecf0;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  width: 50vw;
  margin: 0 auto;
  position: relative;
}

.segment {
  padding: 32px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.one-con {
  width: 50vw;
}

button,
input,
textarea {
  border: 0;
  outline: 0;
  font-size: 14px;
  border-radius: 10px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}

label {
  display: block;
  margin-bottom: 24px;
  width: 100%;
}

input,
textarea {
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
}
input:focus {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}

button {
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
}
button:hover {
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
}
button:active {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
button .icon {
  margin-right: 8px;
}
button.unit {
  border-radius: 8px;
  line-height: 0;
  width: 48px;
  height: 48px;
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 8px;
  font-size: 19.2px;
}
button.unit .icon {
  margin-right: 0;
}
button.red {
  display: block;
  width: 100%;
  color: #ae1100;
}

.input-group {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
}
.input-group label {
  margin: 0;
  -webkit-box-flex: 1;
  flex: 1;
}
.main-contact {
  width: 100%;
  position: relative;
  top: -5vh;
}
.links-contact {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
}
.one-con img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.active-con {
  color: #ae1100;
}
.ss {
  cursor: none;
  pointer-events: none;
}
</style>
