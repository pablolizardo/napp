
import { cn } from "@/xt/lib/utils"
import { ReactNode } from "react"

export function TypographyH1({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h1 className={cn(`
        scroll-m-20 text-balance text-5xl tracking-tighter md:text-6xl lg:leading-[1.1] lg:text-7xl
         font-bold leading-tight  
        `, className)}>
            {children}
        </h1>
    )
}

export function TypographyH2({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h2 className={cn(`text-balance scroll-m-20  pb-2 text-4xl lg:text-5xl font-semibold tracking-tight transition-colors first:mt-0`, className)}>
            {children}
        </h2>
    )
}

export function TypographyH3({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h3 className={cn(`text-balance scroll-m-20 text-2xl font-semibold tracking-tight`, className)}>
            {children}
        </h3>
    )
}

export function TypographyH4({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h4 className={cn(`text-balance scroll-m-20 text-xl font-semibold tracking-tight`, className)}>
            {children}
        </h4>
    )
}

export function TypographyP({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn(`text-balance leading-7 [&:not(:first-child)]:mt-6`, className)}>
            {children}
        </p>
    )
}

export function TypographyBlockquote({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <blockquote className={cn(`text-balance mt-6 border-l-2 pl-6 italic`, className)}>
            {children}
        </blockquote>
    )
}

export function TypographyList({ items }: { items: string[] }) {
    return (
        <ul className={`my-6 ml-6 list-disc [&>li]:mt-2`}>
            {items.map((item, i) => <li key={`item-${i}`}>{item}</li>)}
        </ul>
    )
}

export function TypographyInlineCode({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <code className={cn(`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`, className)}>
            {children}
        </code>
    )
}

export function TypographyLead({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn(`text-balance text-xl text-muted-foreground`, className)}>
            {children}
        </p>
    )
}

export function TypographyLarge({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn(`text-balance max-w-[750px]  text-lg text-muted-foreground sm:text-xl`, className)}>{children}</div>
    )
}

export function TypographySmall({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <small className={cn(` text-sm font-medium leading-none`, className)}>{children}</small>
    )
}

export function TypographyMuted({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn(`text-sm text-muted-foreground`, className)}>{children}</p>
    )
}
