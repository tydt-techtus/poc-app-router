import { Suspense } from "react";
import DataComponent from "./components/DataComponent";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Props = {
  searchParams: SearchParams;
};

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
