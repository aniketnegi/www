/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface Window {
    theme: {
        setTheme: (theme: "auto" | "dark" | "light") => void;
        getTheme: () => "auto" | "dark" | "light";
        getSystemTheme: () => "light" | "dark";
        getDefaultTheme: () => "auto" | "dark" | "light";
    };
}
