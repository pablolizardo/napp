import { clsx, type ClassValue } from "clsx"
import { headers } from "next/headers";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

function removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function generateSlug(inputString: string): string {
    const sanitizedString = removeAccents(inputString)
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales excepto espacios y guiones
        .replace(/\s+/g, '-') // Reemplazar espacios con guiones
        .replace(/-+/g, '-'); // Eliminar duplicados de guiones
    return sanitizedString;
}

export function desanitizeSlug(slug: string): string {
    const stringWithSpaces = slug.replace(/-/g, ' ');
    const stringWithAccents = stringWithSpaces.normalize("NFC");
    return stringWithAccents;
}

