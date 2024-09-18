// File: src/Utilities/sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGGER_FEED_URL = 'https://www.blogger.com/feeds/6428958383452564318/posts/default/-/Project?max-results=600&alt=json';
const SITE_URL = 'http://localhost:5173'; // Replace with your actual website URL in production

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function formatDate(dateString) {
  return new Date(dateString).toISOString();
}

function generateSitemapXML(urls) {
  const xmlUrls = urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
      ${url.image ? `<image:image>
        <image:loc>${url.image}</image:loc>
        <image:caption>${url.title}</image:caption>
      </image:image>` : ''}
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${xmlUrls}
</urlset>`;
}

async function generateSitemap() {
  try {
    // Fetch blog posts from Blogger feed
    const response = await fetch(BLOGGER_FEED_URL);
    const data = await response.json();
    const posts = data.feed.entry || [];

    // Create a list of URLs with additional metadata
    const urls = [
      {
        loc: `${SITE_URL}/`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: '1.0'
      },
      {
        loc: `${SITE_URL}/#/contact`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: '0.5'
      },
      ...posts.map(post => {
        const title = post.title.$t;
        const slug = slugify(title);
        const publishedDate = formatDate(post.published.$t);
        const updatedDate = formatDate(post.updated.$t);
        const author = post.author[0].name.$t;
        const categories = post.category.map(cat => cat.term);
        const content = post.content.$t;
        
        // Try to find an image in the content
        const imageMatch = content.match(/<img.*?src=["'](.*?)["']/);
        const imageUrl = imageMatch ? imageMatch[1] : null;

        return {
          loc: `${SITE_URL}/#/post/${slug}`,
          lastmod: updatedDate,
          changefreq: 'weekly',
          priority: '0.8',
          title: title,
          image: imageUrl,
          // Additional metadata (not included in sitemap XML but can be used for other purposes)
          author: author,
          publishDate: publishedDate,
          updateDate: updatedDate,
          categories: categories,
          content: content
        };
      })
    ];

    // Generate sitemap XML
    const sitemapXML = generateSitemapXML(urls);

    // Write sitemap to file
    const outputPath = path.resolve(__dirname, '../../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemapXML);

    console.log('Sitemap generated successfully! 👍');

    // Optionally, generate a JSON file with full post data for your React app to use
    const buildPath = path.resolve(__dirname, '../../build/sitemap.xml');
    fs.writeFileSync(buildPath, sitemapXML);

    console.log('Sitemap generated successfully in build directory!  👍');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();