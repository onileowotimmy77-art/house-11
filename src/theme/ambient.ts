export const ambient = {
  hero: "#e82525",
  manifesto: "#e00909",
  chapter: "#060606",
  polo: "#040404",
  sweatshirt: "#090909",
  hoodie: "#070707",
  tee: "#0A0A0A",
  pants: "#050505",
} as const;

export type AmbientKey = keyof typeof ambient;