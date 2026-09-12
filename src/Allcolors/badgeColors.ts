const BADGE_COLORS: Record<string, string> = {
  Popular: "bg-sky-100 text-sky-700",
  Versatile: "bg-emerald-100 text-emerald-700",
  Fast: "bg-orange-100 text-orange-600",
  Standard: "bg-emerald-100 text-emerald-700",
  "Top SQL": "bg-sky-100 text-sky-700",
  Cache: "bg-red-100 text-red-700",
  Ubiquitous: "bg-yellow-100 text-yellow-700",
  Essential: "bg-sky-100 text-sky-700",
  Robust: "bg-sky-100 text-sky-700",
  Modern: "bg-emerald-100 text-emerald-700",
  Containers: "bg-sky-100 text-sky-700",
  "SSR / Edge": "bg-purple-100 text-purple-700",
};
const DEFAULT_COLOR = "bg-gray-100 text-gray-600";
export const getBadgeColor = (badge: string): string => {
  return BADGE_COLORS[badge] ?? DEFAULT_COLOR;
};
