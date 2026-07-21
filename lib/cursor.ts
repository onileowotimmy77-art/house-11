export const CursorLabels = {
  HOME: "HOME",
  MENU: "MENU",
  MEET: "MEET",
  READ: "READ",
  ENTER: "ENTER",
  CLOSE: "CLOSE",
  VIEW: "VIEW",
  SHOP: "SHOP",
} as const;

export type CursorLabel =
  (typeof CursorLabels)[keyof typeof CursorLabels];
