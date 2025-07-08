import React from "react";

export default async function DataComponent2() {
  const random = Math.random().toString(36).substring(2, 15);
  const END_POINTS = [
    "https://dummyjson.com/users?delay=2000&ab=" + random,
    "https://dummyjson.com/todos?delay=3000&ab=" + random,
    "https://fakeresponder.com/?sleep=2000&ab=" + random,
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
      <h1>Data from API 2</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
