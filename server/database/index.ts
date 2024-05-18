import { db } from "./db";
import { messages, users } from "./schema";

await db.insert(users).values({ fullName: "Andrew" });

// const teste = await db.query.messages.findMany({
//   where: (userId, { eq }) => eq(messages.userId, 1),
// });

// console.log(teste);
