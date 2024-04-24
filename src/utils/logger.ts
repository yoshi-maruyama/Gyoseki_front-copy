import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

class Logger {
  async error(e: Error) {
    console.error({
      userId: await this.getUserId(),
      time: new Date(),
      stack: e.stack,
    });
  }

  private async getUserId() {
    const session = await getServerSession(options);
    return session?.user?.id || "guest";
  }
}

const logger = new Logger();

export const handleLog = (e: unknown) => {
  if (e instanceof Error) {
    logger.error(e);
  } else {
    console.log(e);
  }
};
