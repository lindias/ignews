import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SignInButton } from "../SignInButton";
import { Container, Content } from "./styles";

export function Header() {
  const { pathname } = useRouter();
  return (
    <Container>
      <Content>
        <Image
          src="/images/logo.svg"
          width="108px"
          height="30px"
          alt="ig.news logo"
        />
        <nav>
          <Link href="/">
            <a className={pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={pathname === "/posts" ? "active" : ""}>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </Content>
    </Container>
  );
}
