interface UserSlugProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UserDetails({ params }: UserSlugProps) {
  const { slug } = await params;
  return (
    <main>
      <h1>{slug}</h1>
    </main>
  );
}
