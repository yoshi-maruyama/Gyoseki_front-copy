import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

class BackendClient {
  readonly BACKEND_URL = process.env.BACKEND_URL;

  async get<T>(url: string) {
    const session = await getServerSession(options);
    const res = await fetch(`${this.BACKEND_URL}${url}`, {
      headers: {
        Authentication: session?.user?.id || "",
      },
    });
    const data = (await res.json()) as T;
    return data;
  }

  async post<T>(url: string, body?: T) {
    const res = await fetch(`${this.BACKEND_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return { data, ok: res.ok };
  }
}

const backendClient = new BackendClient();
export default backendClient;
