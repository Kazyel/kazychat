export const useUsername = defineStore("userStore", {
  state: () => ({
    username: "",
  }),
  actions: {
    setUsername(newUser: string) {
      this.username === newUser;
    },
  },
});
