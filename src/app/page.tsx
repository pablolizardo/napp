import { handleAddPage } from "@/server-actions/pages";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={handleAddPage}>
        <input name='name' placeholder="Page Name" />
        <button>Add Page</button>
      </form>

    </main>
  );
}
