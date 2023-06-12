import { getSortedPostsData } from "@/lib/post";
import ListItem from "./ListItem";

export default function Post() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 ms-auto max-w-2xl">
      <h2 className="text-4xl font-bold">My Practice</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
