const { createApp } = Vue;

createApp({
  data() {
    return {
      slides: [
        "./img/01.webp",
        "./img/02.webp",
        "./img/03.webp",
        "./img/04.webp",
        "./img/05.webp",
      ],
      counter: 0,
      isActive: true,
      goNext: true,
    };
  },

  methods: {
    nextPrev(isNext) {
      isNext ? this.counter++ : this.counter--;
      if (this.counter === this.slides.length) {
        this.counter = 0;
      } else if (this.counter < 0) {
        this.counter = this.slides.length - 1;
      }
    },

    autoPlay() {
      setInterval(() => {
        if (this.isActive) {
          this.nextPrev(true);
        }
      }, 3000);
    },

    invertSlides() {
      this.nextPrev(!goNext);
    },
  },

  mounted() {
    this.autoPlay();
  },
}).mount("#app");
