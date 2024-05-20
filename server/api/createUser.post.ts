import { db } from "../database/db";
import { users } from "../database/schema";

export default defineEventHandler(async (event) => {
  const body: { username: string } = await readBody(event);

  const checkUsername = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.fullName, body.username),
  });

  if (checkUsername === undefined) {
    await db.insert(users).values({ fullName: body.username });
  }
});
