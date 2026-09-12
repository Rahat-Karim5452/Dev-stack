const BADGE_COLORS: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-sky-50 text-sky-600",
  Robust: "bg-sky-50 text-sky-600",
  Modern: "bg-emerald-50 text-emerald-600",
  Containers: "bg-sky-50 text-sky-600",
  "SSR / Edge": "bg-purple-50 text-purple-600",
};
const DEFAULT_COLOR = "bg-gray-100 text-gray-600";
export const getBadgeColor = (badge: string): string => {
  return BADGE_COLORS[badge] ?? DEFAULT_COLOR;
};
