import { Suspense } from "react";
import DataComponent from "./components/DataComponent";

export const dynamic = "force-dynamic"; // Force dynamic rendering
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Props = {
  searchParams: SearchParams;
};

export const metadata = {
  title:
    process.env.NEXT_PUBLIC_WITH_SUSPENSE === "true"
      ? "With Suspense"
      : "Without Suspense",
};

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const withSuspense = process.env.NEXT_PUBLIC_WITH_SUSPENSE === "true";

  return (
    <>
      {withSuspense ? (
        <Suspense fallback={<div>Loading1...</div>}>
          <DataComponent searchParams={searchParams} />
        </Suspense>
      ) : (
        <DataComponent searchParams={searchParams} />
      )}
    </>
  );
}
