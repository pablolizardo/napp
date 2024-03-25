//@xt-use-client
//@xt-imports
//@xt-fetch-outside


const Page = () => {
    //@xt-fetch-inside
    return <div>
        <header>
            <h1>Frequently Asked Questions (FAQ)</h1>
        </header>

        <section id="faq-list">
            <article>
                <h2>How do I create an account?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eu justo a commodo.</p>
            </article>

            <article>
                <h2>What payment methods do you accept?</h2>
                <p>Our platform currently accepts credit cards, PayPal, and bank transfers as payment methods.</p>
            </article>

            <article>
                <h2>Can I cancel my subscription at any time?</h2>
                <p>Yes, you can cancel your subscription at any time from your account settings.</p>
            </article>


        </section>
    </div>;
}
export default Page


