/**
 * Make it easier to use Tailwind CSS classes in Vue components.
 * Using the twMerge function from tailwind-merge and normalizeClass from Vue.
 * Same as clsx in React.
 */

/* eslint-disable no-unused-vars */
import { twMerge } from 'tailwind-merge'
import { normalizeClass } from 'vue'

function clsx(...inputs: Parameters<typeof normalizeClass>) {
    return twMerge(normalizeClass(inputs))
}

type ClassDictionary = Record<string, any>
type ClassArray = ClassValue[]
type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined

declare module 'vue' {
    function normalizeClass(...inputs: ClassValue[]): string
}

export { clsx, type ClassValue }
