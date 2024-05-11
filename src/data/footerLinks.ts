interface footerLink {
    name: string,
    href: string,
}

interface footerLinksList {
    contact: footerLink[],
    portfolio: footerLink[],
}

export const footerLinks: footerLinksList = {
    contact: [{
        name: "E-mail",
        href: "mailto:aniketnegi@duck.com",
    }],
    portfolio: [{
        name: "GitHub",
        href: "https://github.com/aniketnegi/",
    },
    {
        name: "ArtStation",
        href: "https://artstation.com/aniketnegi/",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@aniketnegi00/",
    }],
}
