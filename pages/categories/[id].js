import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { getCategories, getCategory } from '../../lib/api';

const CategoryPage = ({ category }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>Hi</Head>
      <div>
        <h1>{category.title}</h1>
        <h2>{category.subtitle}</h2>
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const category = await getCategory(params.id);

  return { props: { category } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((_category) => {
      return {
        params: { id: _category.id },
      };
    }),
    fallback: true,
  };
}
