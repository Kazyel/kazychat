export const useCounter = defineStore("counterStore", {
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
