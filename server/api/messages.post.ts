import { db } from "../database/db";
import { messages } from "../database/schema";

export type MessageType = {
  username: string;
  message: string;
};

export default defineEventHandler(async (event) => {
  try {
    const body: MessageType = await readBody(event);
    if (!(body.message !== null)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Message must not be null.",
      });
    } else if (!(body.username !== null)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Username must not be null.",
      });
    }

    await db.insert(messages).values({ text: body.message, userId: 1 });
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  return "Message posted.";
});
