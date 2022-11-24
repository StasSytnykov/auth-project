import SignIn from "../components/SignIn";
import { getSession, GetSessionParams } from "next-auth/react";
import * as React from "react";

const login = () => {
  return <SignIn />;
};

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return { props: { session } };
};

export default login;
