import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import { formatPrice } from "../utils/formatPrice";
import { Container, Content } from "./styles";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Container>
        <Content>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> World
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </Content>
        <Image
          src="/images/avatar.svg"
          width="334"
          height="520"
          alt="Girl coding"
        />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KeXQTBnjQyXk2zFSe0cA9d0");

  const product = {
    priceId: price.id,
    amount: formatPrice(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
