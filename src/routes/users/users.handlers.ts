import type { Context } from "hono";

import type { AppRouteHandler } from "@/lib/types";
import type { ListRoute } from "@/routes/users/users.routes";

import db from "@/db";
import {users} from "@/db/schema"

export const list: AppRouteHandler<ListRoute> = async (c: Context) => {
  const res = await db.select().from(users);
  return c.json(res);
};
