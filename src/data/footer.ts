export type FooterSocial = {
  label: string;
  icon: "github" | "x" | "linkedin" | "notion" | "youtube" | "instagram" | "email";
  href?: string;
};

export const referenceFooter = {
  eyebrow: "BUILDERS · COMMUNITIES · A MORE OPEN INTERNET.",
  headline: "Let’s build what’s next,",
  emphasis: "together.",
  description:
    "Open to collaborations, opportunities and conversations around developer ecosystems, community and open source.",
  leftNote: ["DIFFERENT", "PEOPLE.", "SAME", "PURPOSE."],
  rightNote: ["A MORE", "OPEN", "INTERNET."],
  socials: [
    { label: "GitHub", icon: "github", href: "https://github.com/meshivamgarg" },
    { label: "X (Twitter)", icon: "x", href: "https://x.com/Shivams_twt" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/meshivamgarg" },
    { label: "Notion", icon: "notion" },
    { label: "YouTube", icon: "youtube", href: "https://youtu.be/kgwoniXGL1o" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/reel/DCaBR4btKe3/" },
    { label: "Email", icon: "email" },
  ] satisfies FooterSocial[],
  navigation: [
    { label: "PRODUCTS", target: "products" },
    { label: "COMMUNITY", target: "village" },
    { label: "NGO", target: "village" },
    { label: "WRITING", target: "resources" },
    { label: "OPEN TO", target: "basecamp" },
  ],
};
