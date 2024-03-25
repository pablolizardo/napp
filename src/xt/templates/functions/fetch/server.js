const fetchServerOutside = `async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest 'error.js' Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
`
const fetchServerFunctionSign = `const Page = async () => {`
const fetchServerInsidePage = `const data = await getData()`

module.exports = {
    fetchServerOutside,
    fetchServerFunctionSign,
    fetchServerInsidePage
}