import { handleAddPage, handleRemoveAllPages } from "@/xt/server-actions/pages";
import { getTemplates } from "@/xt/templates/pages";

export default async function Home() {
  const templates = await getTemplates()
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <form action={handleAddPage}>
        <input name='name' placeholder="Page Name" />
        <select name='template'>
          {templates.map((name) => <option value={name.name} key={name.name}>{name.name}</option>)}
        </select>
        <button>+ Add Page</button>
      </form>
      <form action={handleRemoveAllPages}>
        <button>␡ All Pages</button>

      </form>

    </main>
  );
}
