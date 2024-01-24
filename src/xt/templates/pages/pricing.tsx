//@xt-use-client
//@xt-imports
//@xt-fetch-outside

const Page = () => {
    //@xt-fetch-inside
    return <div>
        <header>
            <h1>{/*@xt-app-name*/}</h1>
            <p>Descubre nuestras tarifas</p>
        </header>

        <section>
            <div className="pricing-plan">
                <h2>Plan Básico</h2>
                <p>Descripción del plan básico y sus características.</p>
                <p>Precio: $19.99/mes</p>
                <button>Seleccionar</button>
            </div>

            <div className="pricing-plan">
                <h2>Plan Estándar</h2>
                <p>Descripción del plan estándar y sus características.</p>
                <p>Precio: $29.99/mes</p>
                <button>Seleccionar</button>
            </div>

            <div className="pricing-plan">
                <h2>Plan Premium</h2>
                <p>Descripción del plan premium y sus características.</p>
                <p>Precio: $49.99/mes</p>
                <button>Seleccionar</button>
            </div>
        </section>
    </div>;
}
export default Page