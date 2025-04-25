


import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { createApi } from 'unsplash-js';

dotenv.config();
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!UNSPLASH_ACCESS_KEY) {
  console.error('🚨 Error: Set UNSPLASH_ACCESS_KEY in .env');
  process.exit(1);
}

// Initialize Unsplash client (with node-fetch for ESM)
const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
  fetch: fetch
});

(async () => {
  // Read the original JSON file
  const raw = fs.readFileSync('products.json', 'utf8');
  const products = JSON.parse(raw);
  const updatedProducts = [];

  for (const product of products) {
    const name = product.name;

    // Search Unsplash for the product name
    const response = await unsplash.search.getPhotos({ query: name, perPage: 1 });
    const results = response.response.results;

    // If found, grab the true static URL from urls.regular
    let staticUrl = '';
    if (results && results.length > 0 && results[0].urls && results[0].urls.regular) {
      staticUrl = `${results[0].urls.regular}?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=${results[0].id}`;
    }

    // Replace the images array with the static Unsplash URL
    product.images = staticUrl ? [staticUrl] : product.images;
    updatedProducts.push(product);
  }

  // Write the updated JSON to a new file
  fs.writeFileSync('products_static_unsplash.json', JSON.stringify(updatedProducts, null, 2));
  console.log(`✅ Updated ${updatedProducts.length} products to products_static_unsplash.json`);
})();

