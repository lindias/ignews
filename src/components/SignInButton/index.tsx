import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Button } from "./styles";

export function SignInButton() {
  const { data: session } = useSession();
  return session ? (
    <Button type="button" onClick={() => signOut()}>
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX className="closeIcon" color="#737380" />
    </Button>
  ) : (
    <Button type="button" onClick={() => signIn("github")}>
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </Button>
  );
}
