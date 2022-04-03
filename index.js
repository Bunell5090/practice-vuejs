var App = {
  data: function () {
    return {
      message: "Hello from JavaScript",
      name: "Katherine",
      count: 0,
      test: "Test",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Yo!";
    },
  },
};

Vue.createApp(App).mount("#app");
