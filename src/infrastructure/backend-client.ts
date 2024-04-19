class BackendClient {
  readonly BACKEND_URL = process.env.BACKEND_URL;

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

export default new BackendClient();
