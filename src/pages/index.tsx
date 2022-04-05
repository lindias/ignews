import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import { formatPrice } from "../utils/formatPrice";

const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.section`
  max-width: 600px;

  > span {
    color: var(--gray-300);
    font-weight: bold;
    font-size: 1.5rem;
  }

  h1 {
    margin-top: 2.5rem;
    color: var(--gray-100);
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;

    span {
      color: var(--cyan-500);
    }
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.25rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }

  button {
    margin-top: 2.5rem;
  }
`;

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
