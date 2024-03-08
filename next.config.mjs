/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.cache = {
        type: 'no-cache',
      };
      return config;
    },
  };
  
  export default nextConfig;