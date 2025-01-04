import HeroSec from "./components/hero";
import FeaturedPosts from "./components/featuredPosts";
import Intro from "./components/intro";
import Subscribe from "./components/subscribe";
import LatestBlogs from "./components/latestBlog";
import Follow from "./components/follow";

export default function Home() {
  return (
   <>
    <HeroSec/>        
    <FeaturedPosts/>
    <Intro/>
    <Subscribe/>
    <LatestBlogs/>
    <Follow/>
   </>
  );
}
