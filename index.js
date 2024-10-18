import dotenv from 'dotenv';
import Shopify from 'shopify-api-node';
import axios from 'axios';

dotenv.config();

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME,
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_API_PASSWORD
});

const shopwareApi = axios.create({
  baseURL: process.env.SHOPWARE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${process.env.SHOPWARE_ACCESS_KEY}`
  }
});

async function exportShopifyProducts() {
  try {
    const products = await shopify.product.list();
    console.log('Exported Shopify products:', products.length);
    return products;
  } catch (error) {
    console.error('Error exporting Shopify products:', error);
  }
}

function mapProducts(shopifyProducts) {
  return shopifyProducts.map(product => ({
    name: product.title,
    description: product.body_html,
    // Add more mappings as needed
  }));
}

async function importToShopware(mappedProducts) {
  try {
    for (const product of mappedProducts) {
      await shopwareApi.post('/product', product);
    }
    console.log('Products imported to Shopware successfully');
  } catch (error) {
    console.error('Error importing to Shopware:', error);
  }
}

async function main() {
  const shopifyProducts = await exportShopifyProducts();
  const mappedProducts = mapProducts(shopifyProducts);
  await importToShopware(mappedProducts);
}

main();