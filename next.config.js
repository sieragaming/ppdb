/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    "BASE_URL": "https://ppdb-app.netlify.app",
    "MONGO_URL": "mongodb+srv://admin:admin@cluster0.rtcgt.mongodb.net/db_ppdb?retryWrites=true&w=majority",
    "ACCESS_TOKEN": "c2ElF6Ve1mi16D2fWvvxfq4Ltq5Hzf",
    "REFRESH_TOKEN": "HKsq3e7fPxOK39GRKjJbhTryC3TYRuyURJb3vNQXkBDE8MCjHt",
    "CLOUD_UPDATE_PRESET": "ppdb_media",
    "CLOUD_NAME": "sierragaming",
    "CLOUD_API": "https://api.cloudinary.com/v1_1/sierragaming/image/upload"
  }
}
