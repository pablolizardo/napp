


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest 'error.js' Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


const Page = async () => {
    const data = await getData()
    return <div>
        <h1>on server</h1>
        <p>
            Veniam laborum culpa ut sit est quis sint sunt sunt mollit non. Dolor anim quis elit magna. Pariatur tempor officia mollit anim velit adipisicing occaecat elit sunt adipisicing veniam irure in. Labore consectetur consequat incididunt voluptate sint. Aliquip cupidatat occaecat quis nisi duis. Aute minim ipsum dolor laboris nisi. Mollit cupidatat laboris nulla esse eu in officia occaecat consequat duis irure deserunt est.
        </p>
    </div>;
}
export default Page
