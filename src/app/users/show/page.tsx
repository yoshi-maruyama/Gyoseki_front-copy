import Title from "@/components/title/title";
import backendClient from "@/infrastructure/backend-client";

type User = {
  id: string;
  email: string;
  fullName: string;
};

export default async function UserShowPage() {
  const user = await backendClient.get<User>("/api/v1/users");

  return (
    <div>
      <Title title="this is user show page" size="primary" />
      <div>id: {user.id}</div>
      <div>email: {user.email}</div>
      <div>fullName: {user.fullName}</div>
    </div>
  );
}
