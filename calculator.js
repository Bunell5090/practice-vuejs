var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      num1: 0,
      num2: 0,
      num3: 0,
      sum: 0,
    };
  },
  methods: {
    addNumber() {
      this.sum = parseInt(this.num1) + parseInt(this.num2) + parseInt(this.num3);
    },
    delNumber() {
      this.sum = parseInt(this.num1) - parseInt(this.num2) - parseInt(this.num3);
    },
    multNumber() {
      this.sum = parseInt(this.num1) * parseInt(this.num2) * parseInt(this.num3);
    },
    divNumber() {
      this.sum = parseInt(this.num1) / parseInt(this.num2) / parseInt(this.num3);
    },
  },
};

Vue.createApp(App).mount("#app");
