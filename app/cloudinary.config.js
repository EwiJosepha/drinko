import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
 cloud_name:process.env.cloud_name,
 api_key:process.env.api_key,
 secret:process.env.secret,
 cloudinary_url:process.env.cloudinary_url
});

export { cloudinary };