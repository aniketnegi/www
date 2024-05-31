interface Item {
  object: string,
  value: string,
}

interface usesCategory {
  category: string,
  description?: string,
  items?: Item[],
}

export const usesData: usesCategory[] = [
  {
    category: "everyday",
    items: [
      { object: "Laptop", value: "HP Omen 15 2019 running Windows 10" },
      { object: "Old Laptop", value: "Lenovo G50-80 running Debian Server (server for tinkering purposes)" },
      { object: "Phone", value: "Nokia G20 (64+32 GB storage, 4GB RAM)" },
      { object: "Earphones", value: "Some random wired earphones lying around in the house" },
      { object: "Watch", value: "20-yr old Timex Analog that belonged to my grandfather" },
      { object: "Fitness Tracker", value: "Fitbit Blaze" },
    ]
  },
  {
    category: "software",
    items: [
      { object: "OS", value: "Windows 10" },
      { object: "DNS", value: "quad9" },
      { object: "Terminal", value: "Windows Terminal" },
      { object: "Text Editor", value: "Neovim" },
      { object: "Music", value: "Spotify & Local Files" },
      { object: "Notes", value: "Obsidian" },
    ]
  },
  {
    category: "programming",
    items: [
      { object: "Environment", value: "Ubuntu 22.04 via WSL2" },
      { object: "Text Editor", value: "Neovim" },
      { object: "IDE", value: "VSCode" },
      { object: "Font", value: "Iosevka Nerd Font" },
    ]
  },
  {
    category: "website",
    description: "I made this website using AstroJS, TailwindCSS, and MDX. It is hosted on Vercel."
  }
]
