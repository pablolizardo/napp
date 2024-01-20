/* eslint-disable @next/next/no-img-element */
const Footer = () => {
    return (
        <footer className="container inset-x-0 bottom-0">
            <p className="py-2 text-sm text-muted-foreground">
                For the best experience, we recommend viewing on desktop.
            </p>
            <div className="flex justify-between">
                <div className="flex items-end">
                    <a target="_blank" href="https://www.luisfilipept.com/">
                        <img
                            alt="Luis avatar, just a memoji"
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluis-memoji.db6484b7.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluis-memoji.db6484b7.png&w=128&q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fluis-memoji.db6484b7.png&w=128&q=75"
                        />
                    </a>
                    <a
                        target="_blank"
                        className="hidden sm:inline"
                        href="https://www.luisfilipept.com/"
                    >
                        <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
                            Luis Oliveira
                        </span>
                    </a>
                </div>
                <div className="self-end pb-1">
                    <div className="flex items-end text-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-copyright"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M15 9.354a4 4 0 1 0 0 5.292"></path>
                        </svg>
                        <a
                            target="_blank"
                            className="hidden sm:inline"
                            href="https://ui.shadcn.com/"
                        >
                            &
                            <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
                                shadcn/ui
                            </span>
                        </a>
                        &Theme Explorer .
                    </div>
                </div>
                <div className="flex items-end">
                    <a target="_blank" href="https://joanasantos.vercel.app/">
                        <img
                            alt="Joana's avatar, just a memoji"
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoana-memoji.8d8272bd.webp&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoana-memoji.8d8272bd.webp&w=128&q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoana-memoji.8d8272bd.webp&w=128&q=75"
                        />
                    </a>
                    <a
                        target="_blank"
                        className="hidden sm:inline"
                        href="https://joanasantos.vercel.app/"
                    >
                        <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
                            Joana Santos
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
