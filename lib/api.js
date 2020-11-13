export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi
 */
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI('/categories');
  return categories;
}

export async function getCategory(id) {
  const category = await fetchAPI(`/categories/${id}`);
  return category;
}

export async function getProducts() {
  const products = await fetchAPI('/products');
  return products;
}

export async function getProduct(id) {
  const product = await fetchAPI(`/products/${id}`);
  return product;
}
