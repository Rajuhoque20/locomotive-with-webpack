import { Icons } from "#framework";
const { coach1, coach2 } = Icons.DADIcons;
export const trainConfigIcons = {
  WAP7: coach1,
  LWFAC: coach2,
  WFSCZAC: coach2,
};
export const lineColors = [
  "red",
  "rgba(0, 34, 255, 1)",
  "rgba(5, 255, 22, 1)",
  "rgba(255, 5, 5, 1)",
];
export function convertHyphenToUnderscore(input) {
  return input.replace(/-/g, "_");
}
