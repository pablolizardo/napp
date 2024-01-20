/* eslint-disable @next/next/no-img-element */
import { Button } from "@/xt/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/xt/components/ui/card"
import { Facebook, Github } from "lucide-react";
// XT imports

// XT fetchInsideOutside

const Page = () => {
    // XT fetchInside
    return (
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl" >

            <div className=" items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1 ">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl">
                                Create an account
                            </CardTitle>
                            <CardDescription>
                                Enter your email below to create your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-6">
                                <Button className="gap-2"> <Github className="w-4 h-4" /> Github </Button>
                                <Button className="gap-2"> <Facebook className="w-4 h-4" /> Facebook </Button>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t"></span>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="email"
                                    placeholder="m@example.com"
                                    type="email"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="password"
                                    type="password"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:brightness-90 h-10 py-2 px-4 w-full">
                                Create account
                            </button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Payment Method
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Add a new payment method to your account.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div
                                role="radiogroup"
                                aria-required="false"
                                dir="ltr"
                                className="grid grid-cols-3 gap-4 outline-none"
                                tabIndex={0}
                            >
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                                    htmlFor="card"
                                >
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked="true"
                                        data-state="checked"
                                        value="card"
                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                                        id="card"
                                        tabIndex={-1}
                                        data-radix-collection-item=""
                                    >
                                        <span
                                            data-state="checked"
                                            className="flex items-center justify-center"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-2.5 w-2.5 fill-current text-current"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                        </span>
                                    </button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="mb-3 h-6 w-6"
                                    >
                                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                        <line x1="2" x2="22" y1="10" y2="10"></line>
                                    </svg>
                                    Card
                                </label>
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                                    htmlFor="paypal"
                                >
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked="false"
                                        data-state="unchecked"
                                        value="paypal"
                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                                        id="paypal"
                                        tabIndex={-1}
                                        data-radix-collection-item=""
                                    ></button>
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="mb-3 h-6 w-6"
                                    >
                                        <path
                                            d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    Paypal
                                </label>
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                                    htmlFor="apple"
                                >
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked="false"
                                        data-state="unchecked"
                                        value="apple"
                                        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                                        id="apple"
                                        tabIndex={-1}
                                        data-radix-collection-item=""
                                    ></button>
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="mb-3 h-6 w-6"
                                    >
                                        <path
                                            d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    Apple
                                </label>
                            </div>
                            <div className="grid gap-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="name"
                                    placeholder="First Last"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="number"
                                >
                                    Card number
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="number"
                                    placeholder=""
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="month"
                                    >
                                        Expires
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-:r1p:"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        data-placeholder=""
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="month"
                                    >
                                        <span >Month</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="year"
                                    >
                                        Year
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-:r1q:"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        data-placeholder=""
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="year"
                                    >
                                        <span >Year</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="cvc"
                                    >
                                        CVC
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="cvc"
                                        placeholder="CVC"
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:brightness-90 h-10 py-2 px-4 w-full">
                                Continue
                            </button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Team Members
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Invite your team members to collaborate.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            className="aspect-square h-full w-full"
                                            src="/avatars/01.png"
                                        />
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Sofia Davis
                                        </p>
                                        <p className="text-sm text-muted-foreground">m@example.com</p>
                                    </div>
                                </div>
                                <button
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-:r1r:"
                                    data-state="closed"
                                >
                                    Owner
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-2 h-4 w-4 text-muted-foreground"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex items-center space-x-4">
                                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            className="aspect-square h-full w-full"
                                            src="/avatars/02.png"
                                        />
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            Jackson Lee
                                        </p>
                                        <p className="text-sm text-muted-foreground">p@example.com</p>
                                    </div>
                                </div>
                                <button
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-:r1s:"
                                    data-state="closed"
                                >
                                    Member
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-2 h-4 w-4 text-muted-foreground"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Share this document
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Anyone with the link can view this document.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex space-x-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    readOnly={true}
                                    value="http://example.com/link/to/document"
                                />
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:brightness-80 h-10 py-2 px-4 shrink-0">
                                    Copy Link
                                </button>
                            </div>
                            <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-4"
                            ></div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">People with access</h4>
                                <div className="grid gap-6">
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img
                                                    className="aspect-square h-full w-full"
                                                    src="/avatars/03.png"
                                                />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">
                                                    Olivia Martin
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    m@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-controls="radix-:r1t:"
                                            aria-expanded="false"
                                            aria-autocomplete="none"
                                            dir="ltr"
                                            data-state="closed"
                                            className="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]"
                                        >
                                            <span >Can edit</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-4 w-4 opacity-50"
                                                aria-hidden="true"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img
                                                    className="aspect-square h-full w-full"
                                                    src="/avatars/05.png"
                                                />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">
                                                    Isabella Nguyen
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    b@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-controls="radix-:r1u:"
                                            aria-expanded="false"
                                            aria-autocomplete="none"
                                            dir="ltr"
                                            data-state="closed"
                                            className="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]"
                                        >
                                            <span >Can view</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-4 w-4 opacity-50"
                                                aria-hidden="true"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <img
                                                    className="aspect-square h-full w-full"
                                                    src="/avatars/01.png"
                                                />
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium leading-none">
                                                    Sofia Davis
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    p@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-controls="radix-:r1v:"
                                            aria-expanded="false"
                                            aria-autocomplete="none"
                                            dir="ltr"
                                            data-state="closed"
                                            className="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]"
                                        >
                                            <span >Can view</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="h-4 w-4 opacity-50"
                                                aria-hidden="true"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <div className="p-6 pt-6">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 shrink-0"
                                    htmlFor="date"
                                >
                                    Pick a date
                                </label>
                                <div className="grid gap-2 [&>button]:w-[260px]">
                                    <button
                                        className="inline-flex items-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-[300px] justify-start text-left font-normal"
                                        id="date"
                                        type="button"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="radix-:r20:"
                                        data-state="closed"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="mr-2 h-4 w-4"
                                        >
                                            <rect
                                                width="18"
                                                height="18"
                                                x="3"
                                                y="4"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                            <line x1="16" x2="16" y1="2" y2="6"></line>
                                            <line x1="8" x2="8" y1="2" y2="6"></line>
                                            <line x1="3" x2="21" y1="10" y2="10"></line>
                                        </svg>
                                        Jan 20, 2022 - Feb 09, 2022
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Notifications
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Choose what you want to be notified about.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center space-x-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Everything</p>
                                    <p className="text-sm text-muted-foreground">
                                        Email digest, mentions & all activity.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 rounded-md bg-accent p-2 text-accent-foreground">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="h-5 w-5"
                                >
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Available</p>
                                    <p className="text-sm text-muted-foreground">
                                        Only mentions and comments.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="h-5 w-5"
                                >
                                    <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"></path>
                                    <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"></path>
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                    <path d="m2 2 20 20"></path>
                                </svg>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Ignoring</p>
                                    <p className="text-sm text-muted-foreground">
                                        Turn off all notifications.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1 lg:grid-cols-2 xl:grid-cols-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Report an issue
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                What area are you having problems with?
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="area"
                                    >
                                        Area
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-:r21:"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="area"
                                    >
                                        <span >Billing</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="security-level"
                                    >
                                        Security Level
                                    </label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-:r22:"
                                        aria-expanded="false"
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="security-level"
                                    >
                                        <span >Severity 2</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="h-4 w-4 opacity-50"
                                            aria-hidden="true"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="subject"
                                >
                                    Subject
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="subject"
                                    placeholder="I need help with..."
                                />
                            </div>
                            <div className="grid gap-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="description"
                                    placeholder="Please include all information relevant to your issue."
                                ></textarea>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                                Cancel
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:brightness-90 h-10 py-2 px-4">
                                Submit
                            </button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <div className="flex-col p-6 grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                            <div className="space-y-1">
                                <CardTitle>
                                    shadcn/ui
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </div>
                            <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:brightness-80 h-10 py-2 px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="mr-2 h-4 w-4"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    Star
                                </button>
                                <div
                                    data-orientation="vertical"
                                    role="none"
                                    className="shrink-0 bg-border w-[1px] h-[20px]"
                                ></div>
                                <button
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:brightness-80 h-10 py-2 px-2"
                                    type="button"
                                    id="radix-:r23:"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-4 w-4 text-secondary-foreground"
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <CardContent className="grid gap-4">
                            <div className="flex space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="mr-1 h-3 w-3 fill-sky-400 text-sky-400"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                    TypeScipt
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="mr-1 h-3 w-3"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    10k
                                </div>
                                <div>Updated April 2023</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Cookie Settings
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Manage your cookie settings here.
                            </p>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="flex items-center justify-between space-x-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
                                    htmlFor="necessary"
                                >
                                    <span>Strictly Necessary</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        These cookies are essential in order to use the website
                                        and use its features.
                                    </span>
                                </label>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked="true"
                                    data-state="checked"
                                    value="on"
                                    className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id="necessary"
                                >
                                    <span
                                        data-state="checked"
                                        className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                                    ></span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
                                    htmlFor="functional"
                                >
                                    <span>Functional Cookies</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        These cookies allow the website to provide personalized
                                        functionality.
                                    </span>
                                </label>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked="false"
                                    data-state="unchecked"
                                    value="on"
                                    className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id="functional"
                                >
                                    <span
                                        data-state="unchecked"
                                        className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                                    ></span>
                                </button>
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
                                    htmlFor="performance"
                                >
                                    <span>Performance Cookies</span>
                                    <span className="font-normal leading-snug text-muted-foreground">
                                        These cookies help to improve the performance of the
                                        website.
                                    </span>
                                </label>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked="false"
                                    data-state="unchecked"
                                    value="on"
                                    className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id="performance"
                                >
                                    <span
                                        data-state="unchecked"
                                        className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                                    ></span>
                                </button>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full">
                                Save preferences
                            </button>
                        </CardFooter>
                    </Card>
                </div >
            </div >
        </div >
    );
};

export default Page;
