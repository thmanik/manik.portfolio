/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      buildActivity: false,  // Disable the build activity indicator
      autoPrerender: false,  // Disable the auto prerender indicator
      // If you want to completely hide the dev tools UI (like the "Hide Dev Tools" option), you should set the value to `false` here.
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  