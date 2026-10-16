type Props = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export default async function Service({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-ivory-100 p-10">
      <h1 className="text-3xl font-bold text-emerald-900">
        Service {id}
      </h1>
    </main>
  );
}