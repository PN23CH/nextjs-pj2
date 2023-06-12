import { getSortedPostsData } from "@/lib/post";
import ListItem from "./ListItem";

export default function Post() {
  // const posts = getSortedPostsData();
  const posts = [ { id: 'test', title: 'test title', date: "2023-06-12 19:00:00" } ]

  console.log(posts)

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
