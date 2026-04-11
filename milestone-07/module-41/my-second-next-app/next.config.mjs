/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //https://res.cloudinary.com/dj493l0jy/image/upload/v1774364613/foods/3cb36000-0df8-4661-ac50-39ff4566bbf9.png
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
