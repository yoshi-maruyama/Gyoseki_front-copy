import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

class BackendClient {
  readonly BACKEND_URL = process.env.BACKEND_URL;

  async get(url: string) {
    const session = await getServerSession(options);
    const res = await fetch(`${this.BACKEND_URL}${url}`, {
      headers: {
        Authentication: session?.user?.id || "",
      },
    });
    const result = await this.toClientResponse(res);
    return result;
  }

  async post<T>(url: string, body?: T) {
    const res = await fetch(`${this.BACKEND_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await this.toClientResponse(res);
    return result;
  }

  private async toClientResponse(res: Response) {
    const isError = !res.ok;
    const data = await res.json();
    return {
      data: isError ? null : data,
      error: isError ? JSON.stringify(data) : null,
      status: res.status,
    };
  }
}

const backendClient = new BackendClient();
export default backendClient;
