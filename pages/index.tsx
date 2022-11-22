import Button from "@mui/material/Button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  const onSignOut = () => {
    signOut().catch(console.log);
    if (!session) {
      router.push("/login").catch(console.log);
    }
  };

  return (
    <>
      <h1>Welcome to your profile {session?.user?.name}</h1>
      <Button onClick={onSignOut}>Sign out</Button>
    </>
  );
};

export default HomePage;
