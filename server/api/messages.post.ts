import { eq } from "drizzle-orm";
import { db } from "../database/db";
import { messages, users } from "../database/schema";

export type MessageType = {
  username: string;
  message: {
    _value: string;
  };
};

export default defineEventHandler(async (event) => {
  try {
    const body: MessageType = await readBody(event);
    if (!(body.message._value !== null)) {
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

    const teste = await db
      .insert(messages)
      .values({ text: body.message._value, userId: 1 });
    console.log(teste);
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  return "Message posted.";
});
