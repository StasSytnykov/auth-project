import Button from "@mui/material/Button";
import {
  signOut,
  useSession,
  getSession,
  GetSessionParams,
} from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Welcome to your profile {session?.user?.name}</h1>
      <Button type={"button"} onClick={() => signOut()}>
        Sign out
      </Button>
    </>
  );
};

export default HomePage;

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return { props: { session } };
};
