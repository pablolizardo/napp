const Stats = () => {
  return (
    <section className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6  w-full">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
          <dd className="font-light text-muted-foreground">developers</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
          <dd className="font-light text-muted-foreground">contributors</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
          <dd className="font-light text-muted-foreground">organizations</dd>
        </div>
      </dl>
    </section>
  );
};

export default Stats;
