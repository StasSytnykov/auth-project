import SignIn from "../components/SignIn";
import { getSession, GetSessionParams } from "next-auth/react";
import * as React from "react";
import { useState } from "react";

const login = () => {
  return <SignIn />;
};

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  // const [userInfo, setUserInfo] = useState<{ email: string; password: string }>(
  //   { email: "", password: "" }
  // );
  //
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const session = await getSession(context);
  console.log(context);
  console.log(session);

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
