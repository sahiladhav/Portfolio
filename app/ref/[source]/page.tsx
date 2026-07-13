import RefTracker from "./RefTracker";

export default async function RefPage({
  params,
}: {
  params: Promise<{ source: string }>;
}) {
  const { source } = await params;
  return <RefTracker source={source} />;
}
