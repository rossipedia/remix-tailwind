export default function Index() {
  return (
    <div className="leading-5 p-3 flex flex-col gap-2">
      <h1 className="text-3xl leading-10">Welcome to Remix</h1>
      <ul className="list-inside list-disc">
        <li>
          <a
            className="underline decoration-1 hover:text-blue-500 hover:decoration-3"
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            className="underline decoration-1 hover:text-blue-500 hover:decoration-3"
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            className="underline decoration-1 hover:text-blue-500 hover:decoration-3"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
