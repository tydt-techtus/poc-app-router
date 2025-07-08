import React from "react";
import SearchComponent from "./SearchComponent";

export default async function DataComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const test = searchParams.test || "";
  const random = Math.random().toString(36).substring(2, 15);
  const END_POINTS = [
    "https://dummy-json.mock.beeceptor.com/posts",
    "https://dummy-json.mock.beeceptor.com/comments",
    "https://dummy-json.mock.beeceptor.com/companies",
    "https://dummy-json.mock.beeceptor.com/users",
    "https://dummy-json.mock.beeceptor.com/todos",
    "https://dummy-json.mock.beeceptor.com/quotes",
    "https://jsonplaceholder.typicode.com/todos?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/users?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/posts?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/comments?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/albums?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/photos?abc=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/todos?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/users?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/posts?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/comments?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/albums?def=" +
      random +
      "&test=" +
      test,
    "https://jsonplaceholder.typicode.com/photos?def=" +
      random +
      "&test=" +
      test,
  ];

  const promises = END_POINTS.map((endpoint) =>
    fetch(endpoint, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }).then((res) => res.json())
  );

  const data = await Promise.all(promises);

  return (
    <div>
      <SearchComponent />
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
