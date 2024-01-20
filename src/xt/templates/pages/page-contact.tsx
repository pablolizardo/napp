// XT imports
// XT fetchInsideOutside
const Page = () => {
    // XT fetchInside
    return <div>
        <header> <h1>Contact Us</h1> </header>

        <section id="contact-form">
            <form action="#" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message </label>
                <textarea id="message" name="message" rows={4} required></textarea>

                <button type="submit">Submit</button>

            </form>
        </section>

        <section id="contact-info">
            <h2>Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Main Street, Cityville</p>
        </section>

    </div>;
}
export default Page