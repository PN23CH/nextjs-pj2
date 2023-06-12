import Post from "./components/Post";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-0 text-3xl text-center">
        Whats&#39;UP&#33; Welcome&#33; 👋
        <span className="whitespace-nowrap">
          I&#39;m <span className="font-bold">PNCH</span>.
        </span>
      </p>
      <br />
      <p className="my-1 text-lg text-center">
        or You can call me{" "}
        <span className="text-2xl font-bold">&#34; Pete &#34;</span>
      </p>
      <Post />
    </main>
  );
}
