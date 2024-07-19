import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Shandilya.me",
  DESCRIPTION: "My personal blog.",
  EMAIL: "schandilya.abhi007@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SCRIPTS: Metadata = {
  TITLE: "Scripts",
  DESCRIPTION:
      "A collection of my useful scripts I have collected over the time.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/5parkp1ug",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/5parkp1ug",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/5parkp1ug",
  },
];
