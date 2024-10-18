import Shopify from 'shopify-api-node';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        SHOPIFY_SHOP_NAME,
        SHOPIFY_API_KEY,
        SHOPIFY_API_PASSWORD,
        SHOPWARE_API_URL,
        SHOPWARE_ACCESS_KEY
      } = req.body;

      const shopify = new Shopify({
        shopName: SHOPIFY SHOP NAME,
        apiKey: SHOPIFY_API_KEY,
        password: SHOPIFY_API_PASSWORD
      });

      const shopwareApi = axios.create({
        baseURL: SHOPWARE_API_URL,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${SHOPWARE_ACCESS_KEY}`
        }
      });

      // Export products from Shopify
      const shopifyProducts = await shopify.product.list();

      // Map products
      const mappedProducts = shopifyProducts.map(product => ({
        name: product.title,
        description: product.body_html,
        // Add more mappings as needed
      }));

      // Import to Shopware
      for (const product of mappedProducts) {
        await shopwareApi.post('/product', product);
      }

      res.status(200).json({ message: `Successfully exported ${shopifyProducts.length} products from Shopify and imported to Shopware.` });
    } catch (error) {
      console.error('Error in export/import process:', error);
      res.status(500).json({ message: 'An error occurred during the export/import process.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}