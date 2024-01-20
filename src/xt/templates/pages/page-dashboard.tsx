
/* eslint-disable @next/next/no-img-element */
// XT imports
// XT fetchInsideOutside

const Page = () => {
    // XT fetchInside
    return <section
        className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl"
    >

        <div className="md:hidden">
            <img
                alt="Dashboard"
                loading="lazy"
                width="1280"
                height="866"
                decoding="async"
                data-nimg="1"
                className="block dark:hidden"
                srcSet="
      /_next/image?url=%2Fexamples%2Fdashboard-light.png&w=1920&q=75 1x,
      /_next/image?url=%2Fexamples%2Fdashboard-light.png&w=3840&q=75 2x
    "
                src="/_next/image?url=%2Fexamples%2Fdashboard-light.png&w=3840&q=75"
            /><img
                alt="Dashboard"
                loading="lazy"
                width="1280"
                height="866"
                decoding="async"
                data-nimg="1"
                className="hidden dark:block"
                srcSet="
      /_next/image?url=%2Fexamples%2Fdashboard-dark.png&w=1920&q=75 1x,
      /_next/image?url=%2Fexamples%2Fdashboard-dark.png&w=3840&q=75 2x
    "
                src="/_next/image?url=%2Fexamples%2Fdashboard-dark.png&w=3840&q=75"
            />
        </div>
        <div className="hidden flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <button
                        className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between"
                        role="combobox"
                        aria-expanded="false"
                        aria-label="Select a team"
                        type="button"
                        aria-haspopup="dialog"
                        aria-controls="radix-:r94:"
                        data-state="closed"
                    >
                        <span
                            className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5"
                        ><img
                                className="aspect-square h-full w-full grayscale"
                                alt="Alicia Koch"
                                src="https://avatar.vercel.sh/personal.png" /></span
                        >Alicia Koch<svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-auto h-4 w-4 shrink-0 opacity-50"
                        >
                            <path
                                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                        <a
                            className="text-sm font-medium transition-colors hover:text-primary"
                            href="/examples/dashboard"
                        >Overview</a
                        ><a
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            href="/examples/dashboard"
                        >Customers</a
                        ><a
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            href="/examples/dashboard"
                        >Products</a
                        ><a
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            href="/examples/dashboard"
                        >Settings</a
                        >
                    </nav>
                    <div className="ml-auto flex items-center space-x-4">
                        <div>
                            <input
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[100px] lg:w-[300px]"
                                placeholder="Search..."
                                type="search"
                            />
                        </div>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-8 rounded-full"
                            type="button"
                            id="radix-:r95:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                        >
                            <span
                                className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"
                            ><img
                                    className="aspect-square h-full w-full"
                                    alt="@shadcn"
                                    src="/avatars/01.png"
                                /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <div className="flex items-center space-x-2">
                        <div className="grid gap-2">
                            <button
                                className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[260px] justify-start text-left font-normal"
                                id="date"
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:r97:"
                                data-state="closed"
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-4 w-4"
                                >
                                    <path
                                        d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path></svg
                                >Jan 20, 2023 - Feb 09, 2023
                            </button>
                        </div>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                        >
                            Download
                        </button>
                    </div>
                </div>
                <div dir="ltr" data-orientation="horizontal" className="space-y-4">
                    <div
                        role="tablist"
                        aria-orientation="horizontal"
                        className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
                        tabIndex={0}
                        data-orientation="horizontal"

                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected="true"
                            aria-controls="radix-:r98:-content-overview"
                            data-state="active"
                            id="radix-:r98:-trigger-overview"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                            tabIndex={-1}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                        >
                            Overview</button
                        ><button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:r98:-content-analytics"
                            data-state="inactive"
                            data-disabled=""
                            disabled
                            id="radix-:r98:-trigger-analytics"
                            className="disabled inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                            tabIndex={-1}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                        >
                            Analytics</button><button
                                type="button"
                                role="tab"
                                aria-selected="false"
                                aria-controls="radix-:r98:-content-reports"
                                data-state="inactive"
                                data-disabled=""
                                disabled
                                id="radix-:r98:-trigger-reports"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                tabIndex={-1}
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                            >
                            Reports</button ><button
                                type="button"
                                role="tab"
                                aria-selected="false"
                                aria-controls="radix-:r98:-content-notifications"
                                data-state="inactive"
                                data-disabled=""
                                disabled
                                id="radix-:r98:-trigger-notifications"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                tabIndex={-1}
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                            >
                            Notifications
                        </button>
                    </div>
                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r98:-trigger-overview"
                        id="radix-:r98:-content-overview"
                        tabIndex={0}
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
                    >
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div
                                    className="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                                >
                                    <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path
                                            d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div
                                    className="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                                >
                                    <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path
                                            d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold">+2350</div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div
                                    className="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                                >
                                    <h3 className="tracking-tight text-sm font-medium">Sales</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                        <path d="M2 10h20"></path>
                                    </svg>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold">+12,234</div>
                                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                                </div>
                            </div>
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div
                                    className="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                                >
                                    <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-2xl font-bold">+573</div>
                                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <div
                                className="rounded-xl border bg-card text-card-foreground shadow col-span-4"
                            >
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <h3 className="font-semibold leading-none tracking-tight">
                                        Overview
                                    </h3>
                                </div>
                                <div className="p-6 pt-0 pl-2">
                                    <div
                                        className="recharts-responsive-container"
                                        style={{ width: '100%', height: '350px', minWidth: '0px' }}
                                    // width={703}
                                    // height={350}
                                    >
                                        <div
                                            className="recharts-wrapper"
                                            style={{

                                                position: 'relative',
                                                cursor: 'default',
                                                width: '703px',
                                                height: '350px',
                                            }}
                                            role="region"
                                        >
                                            <svg
                                                className="recharts-surface"
                                                width="703"
                                                height="350"
                                                viewBox="0 0 703 350"
                                            >
                                                <title></title>
                                                <desc></desc>
                                                <defs>
                                                    <clipPath id="recharts6-clip">
                                                        <rect x="65" y="5" height="310" width="633"></rect>
                                                    </clipPath>
                                                </defs>
                                                <g
                                                    className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"
                                                >
                                                    <g className="recharts-cartesian-axis-ticks">
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="91.375"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="91.375" dy="0.71em">Jan</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="144.125"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="144.125" dy="0.71em">Feb</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="196.875"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="196.875" dy="0.71em">Mar</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="249.625"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="249.625" dy="0.71em">Apr</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="302.375"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="302.375" dy="0.71em">May</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="355.125"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="355.125" dy="0.71em">Jun</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="407.875"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="407.875" dy="0.71em">Jul</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="460.625"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="460.625" dy="0.71em">Aug</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="513.375"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="513.375" dy="0.71em">Sep</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="566.125"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="566.125" dy="0.71em">Oct</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="618.875"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="618.875" dy="0.71em">Nov</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="bottom"
                                                                width="633"
                                                                height="30"
                                                                x="671.625"
                                                                y="323"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="middle"
                                                            >
                                                                <tspan x="671.625" dy="0.71em">Dec</tspan>
                                                            </text>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g
                                                    className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"
                                                >
                                                    <g className="recharts-cartesian-axis-ticks">
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="left"
                                                                width="60"
                                                                height="310"
                                                                x="57"
                                                                y="315"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="end"
                                                            >
                                                                <tspan x="57" dy="0.355em">$0</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="left"
                                                                width="60"
                                                                height="310"
                                                                x="57"
                                                                y="237.5"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="end"
                                                            >
                                                                <tspan x="57" dy="0.355em">$1500</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="left"
                                                                width="60"
                                                                height="310"
                                                                x="57"
                                                                y="160"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="end"
                                                            >
                                                                <tspan x="57" dy="0.355em">$3000</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="left"
                                                                width="60"
                                                                height="310"
                                                                x="57"
                                                                y="82.5"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="end"
                                                            >
                                                                <tspan x="57" dy="0.355em">$4500</tspan>
                                                            </text>
                                                        </g>
                                                        <g className="recharts-layer recharts-cartesian-axis-tick">
                                                            <text
                                                                stroke="none"
                                                                font-size="12"
                                                                orientation="left"
                                                                width="60"
                                                                height="310"
                                                                x="57"
                                                                y="9"
                                                                fill="#888888"
                                                                className="recharts-text recharts-cartesian-axis-tick-value"
                                                                text-anchor="end"
                                                            >
                                                                <tspan x="57" dy="0.355em">$6000</tspan>
                                                            </text>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g className="recharts-layer recharts-bar fill-primary">
                                                    <g className="recharts-layer recharts-bar-rectangles">
                                                        <g className="recharts-layer">
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="300.13166666666666"
                                                                    name="Jan"
                                                                    x="70.275"
                                                                    y="14.868333333333347"
                                                                    d="M70.275,18.868333333333347A 4,4,0,0,1,74.275,14.868333333333347L 108.275,14.868333333333347A 4,4,0,0,1,
        112.275,18.868333333333347L 112.275,315L 70.275,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="117.33500000000001"
                                                                    name="Feb"
                                                                    x="123.025"
                                                                    y="197.665"
                                                                    d="M123.025,201.665A 4,4,0,0,1,127.025,197.665L 161.025,197.665A 4,4,0,0,1,
        165.025,201.665L 165.025,315L 123.025,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="246.3983333333333"
                                                                    name="Mar"
                                                                    x="175.775"
                                                                    y="68.60166666666667"
                                                                    d="M175.775,72.60166666666667A 4,4,0,0,1,179.775,68.60166666666667L 213.775,68.60166666666667A 4,4,0,0,1,
        217.775,72.60166666666667L 217.775,315L 175.775,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="84.16500000000005"
                                                                    name="Apr"
                                                                    x="228.525"
                                                                    y="230.83499999999995"
                                                                    d="M228.525,234.83499999999995A 4,4,0,0,1,232.525,230.83499999999995L 266.525,230.83499999999995A 4,4,0,0,1,
        270.525,234.83499999999995L 270.525,315L 228.525,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="75.63999999999999"
                                                                    name="May"
                                                                    x="281.275"
                                                                    y="239.36"
                                                                    d="M281.275,243.36A 4,4,0,0,1,285.275,239.36L 319.275,239.36A 4,4,0,0,1,
        323.275,243.36L 323.275,315L 281.275,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="136.91666666666666"
                                                                    name="Jun"
                                                                    x="334.025"
                                                                    y="178.08333333333334"
                                                                    d="M334.025,182.08333333333334A 4,4,0,0,1,338.025,178.08333333333334L 372.025,178.08333333333334A 4,4,0,0,1,
        376.025,182.08333333333334L 376.025,315L 334.025,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="65.875"
                                                                    name="Jul"
                                                                    x="386.775"
                                                                    y="249.125"
                                                                    d="M386.775,253.125A 4,4,0,0,1,390.775,249.125L 424.775,249.125A 4,4,0,0,1,
        428.775,253.125L 428.775,315L 386.775,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="182.79666666666668"
                                                                    name="Aug"
                                                                    x="439.525"
                                                                    y="132.20333333333332"
                                                                    d="M439.525,136.20333333333332A 4,4,0,0,1,443.525,132.20333333333332L 477.525,132.20333333333332A 4,4,0,0,1,
        481.525,136.20333333333332L 481.525,315L 439.525,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="182.53833333333333"
                                                                    name="Sep"
                                                                    x="492.275"
                                                                    y="132.46166666666667"
                                                                    d="M492.275,136.46166666666667A 4,4,0,0,1,496.275,132.46166666666667L 530.275,132.46166666666667A 4,4,0,0,1,
        534.275,136.46166666666667L 534.275,315L 492.275,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="88.91833333333332"
                                                                    name="Oct"
                                                                    x="545.025"
                                                                    y="226.08166666666668"
                                                                    d="M545.025,230.08166666666668A 4,4,0,0,1,549.025,226.08166666666668L 583.025,226.08166666666668A 4,4,0,0,1,
        587.025,230.08166666666668L 587.025,315L 545.025,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="191.94166666666666"
                                                                    name="Nov"
                                                                    x="597.775"
                                                                    y="123.05833333333334"
                                                                    d="M597.775,127.05833333333334A 4,4,0,0,1,601.775,123.05833333333334L 635.775,123.05833333333334A 4,4,0,0,1,
        639.775,127.05833333333334L 639.775,315L 597.775,315Z"
                                                                ></path>
                                                            </g>
                                                            <g
                                                                className="recharts-layer recharts-bar-rectangle"
                                                                role="img"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    radius="4,4,0,0"
                                                                    className="recharts-rectangle fill-primary"
                                                                    width="42"
                                                                    height="113.305"
                                                                    name="Dec"
                                                                    x="650.525"
                                                                    y="201.695"
                                                                    d="M650.525,205.695A 4,4,0,0,1,654.525,201.695L 688.525,201.695A 4,4,0,0,1,
        692.525,205.695L 692.525,315L 650.525,315Z"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g className="recharts-layer"></g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="rounded-xl border bg-card text-card-foreground shadow col-span-3"
                            >
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <h3 className="font-semibold leading-none tracking-tight">
                                        Recent Sales
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        You made 265 sales this month.
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="space-y-8">
                                        <div className="flex items-center">
                                            <span
                                                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                            ><img
                                                    className="aspect-square h-full w-full"
                                                    alt="Avatar"
                                                    src="/avatars/01.png"
                                                /></span>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    Olivia Martin
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    olivia.martin@email.com
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">+$1,999.00</div>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                                className="relative shrink-0 overflow-hidden rounded-full flex h-9 w-9 items-center justify-center space-y-0 border"
                                            ><img
                                                    className="aspect-square h-full w-full"
                                                    alt="Avatar"
                                                    src="/avatars/02.png"
                                                /></span>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                                <p className="text-sm text-muted-foreground">
                                                    jackson.lee@email.com
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">+$39.00</div>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                            ><img
                                                    className="aspect-square h-full w-full"
                                                    alt="Avatar"
                                                    src="/avatars/03.png"
                                                /></span>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    Isabella Nguyen
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    isabella.nguyen@email.com
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">+$299.00</div>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                            ><img
                                                    className="aspect-square h-full w-full"
                                                    alt="Avatar"
                                                    src="/avatars/04.png"
                                                /></span>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">William Kim</p>
                                                <p className="text-sm text-muted-foreground">will@email.com</p>
                                            </div>
                                            <div className="ml-auto font-medium">+$99.00</div>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                            ><img
                                                    className="aspect-square h-full w-full"
                                                    alt="Avatar"
                                                    src="/avatars/05.png"
                                                /></span>
                                            <div className="ml-4 space-y-1">
                                                <p className="text-sm font-medium leading-none">Sofia Davis</p>
                                                <p className="text-sm text-muted-foreground">
                                                    sofia.davis@email.com
                                                </p>
                                            </div>
                                            <div className="ml-auto font-medium">+$39.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Page