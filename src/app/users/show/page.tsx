import Title from "@/components/title/title";
import { getUser } from "@/features/auth/actions";

export default async function UserShowPage() {
  const user = await getUser();

  if (!user) {
    return <div>no user</div>;
  }

  return (
    <div>
      <Title title="this is user show page" size="primary" />
      <div>id: {user.id}</div>
      <div>email: {user.email}</div>
      <div>fullName: {user.fullName}</div>
    </div>
  );
}
