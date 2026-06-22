export type Achievement = {
  title: string;
  description: string;
  year?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Innovation Appreciation Certificate - Amdocs",
    description:
      "Awarded for independently engineering an automation solution (Auto Rolldown) that reduced recurring team effort by 80% and was adopted org-wide across Amdocs Product Management.",
    year: "2025",
  },
  {
    title: "Winner - Spider Club Hackathon",
    description:
      "Secured 1st place competing against institute-wide teams at the flagship hackathon of National Institute of Technology, Tiruchirappalli.",
    year: "2023",
  },
  {
    title: "650+ LeetCode problems solved",
    description:
      "1,300+ problems solved across competitive programming platforms - consistent daily practice of DSA and problem solving fundamentals.",
  },
];

export const education = {
  degree: "Bachelor of Technology",
  institution: "National Institute of Technology, Tiruchirappalli",
  shortName: "NIT Trichy",
  duration: "Aug 2020 - Jun 2024",
  location: "Tiruchirappalli, India",
};
