"use server";

import backendClient from "@/infrastructure/backend-client";
import { ServerUser } from "@/features/auth/types";
import { handleLog } from "@/utils/logger";

export async function getUser() {
  try {
    const { data, error } = await backendClient.get("/api/v1/users");
    if (error !== null) {
      throw Error(error);
    }
    return data as ServerUser;
  } catch (e) {
    handleLog(e);
  }
}
