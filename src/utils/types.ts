// imports
import { navLinks } from "../data/navLinks";

export interface Crumb {
    title: string,
    href: string,
}

export type currentPage = (typeof navLinks[number]["name"]);
