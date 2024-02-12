/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add your configurations here
    experimental: {
      // Add experimental features here, if needed
      images: true // Enable experimental images feature
    },
    // Add other configurations as needed
    // For example, if you're planning to use static HTML export:
    output: {
      // Set up static HTML export
      export: true
    }
  };
  
  module.exports = nextConfig;
  