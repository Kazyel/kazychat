import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
import { db } from "../database/db";
import { messages } from "../database/schema";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();

  let connectedUsers = 0;

  io.bind(engine);

  io.on("connection", (socket) => {
    socket.on("sendMessage", async (messageText) => {
      if (messageText) {
        await db.insert(messages).values({ text: messageText, userId: 1 });
      }
    });

    socket.on("getMessages", async () => {
      const message = await db.query.messages.findMany();
      io.emit("returnMessages", message);
    });

    connectedUsers++;
    io.emit("connectedUsers", connectedUsers);

    socket.on("disconnect", () => {
      connectedUsers--;
      io.emit("connectedUsers", connectedUsers);
    });
  });
  nitroApp.router.use(
    "/socket.io/",
    defineEventHandler({
      handler(event) {
        engine.handleRequest(event.node.req, event.node.res);
        event._handled = true;
      },
      websocket: {
        open(peer) {
          const nodeContext = peer.ctx.node;
          const req = nodeContext.req;

          engine.prepare(req);

          const rawSocket = nodeContext.req.socket;
          const websocket = nodeContext.ws;

          engine.onWebSocket(req, rawSocket, websocket);
        },
      },
    })
  );
});
