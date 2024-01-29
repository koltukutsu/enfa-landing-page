import HomePage from "./home";
import { getAllPosts, getSocialMediaAccounts } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPosts();
  // console.log("Control Social Medias: ", socials);
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
