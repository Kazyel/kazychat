import { socket } from "../components/socket";

export const useConnected = defineStore("connectedStore", {
  state: () => ({
    connectedUsers: 0,
  }),
  actions: {
    fetch() {
      socket.on("connectedUsers", (userCount) => {
        this.connectedUsers = userCount;
      });
    },
  },
});
