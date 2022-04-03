var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      answer: 90,
      guess: null,
      wrong: "Your answer is wrong, try again",
      right: "Yay, you got the right answer",
    };
  },
  methods: {
    guessNumber() {
      if (parseInt(this.guess) > this.answer) {
        console.log("Too High!");
      } else if (parseInt(this.guess) < this.answer) {
        console.log("Too Low!");
      } else if (parseInt(this.guess) === this.answer) {
        console.log("Correct!");
      }
    },
    resetGame() {
      this.message = "";
      this.guess = null;
      this.answer = 1 + Math.floor(Math.random() * Math.floor(100));
    },
  },
};

Vue.createApp(App).mount("#app");
