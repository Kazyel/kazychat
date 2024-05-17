export const useCounter = defineStore("websiteStore", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    count() {
      this.counter++;
    },
    decount() {
      this.counter--;
    },
  },
});
