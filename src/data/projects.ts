interface ProjectLinks {
    name: string,
    href: string
    iconName: string,
}

export interface Project {
    projectTitle: string,
    projectDescription: string,
    projectTags: string[],
    projectLinks: ProjectLinks[],
}

export const projects: Project[] = [
    {
        projectTitle: "personal website",
        projectDescription: "The website you are currently on.",
        projectTags: ["webdev", "design"],
        projectLinks: [{
            name: "GitHub",
            href: "https://github.com/aniketnegi/www/",
            iconName: "github"
        }, {
            name: "Link to site",
            href: "https://aniketnegi.vercel.app/",
            iconName: "link",
        }]
    },
    // {
    //     projectTitle: "random",
    //     projectDescription: "An elegant links manager allowing users to manage links, share them, and connect with LastFM",
    //     projectTags: ["webdev", "design"],
    //     projectLinks: [{
    //         name: "github",
    //         href: "https://github.com/aniketnegi/www/",
    //         iconName: "github"
    //     }, {
    //         name: "Link to demo",
    //         href: "https://aniketnegi.vercel.app/",
    //         iconName: "link",
    //     }]
    // }
]
