import { siteConfig } from "@/lib/data";

/** Dark glyph for light browser chrome. */
const LIGHT_UI_FAVICON = siteConfig.faviconLightUi;
/** Light glyph for dark browser chrome. */
const DARK_UI_FAVICON = siteConfig.faviconDarkUi;

function getFaviconHref(scheme: "light" | "dark") {
  return scheme === "dark" ? DARK_UI_FAVICON : LIGHT_UI_FAVICON;
}

function getFaviconLink() {
  return (
    document.querySelector<HTMLLinkElement>("#site-favicon") ??
    document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  );
}

function setFaviconHref(href: string) {
  const link = getFaviconLink();
  if (!link) return;
  if (link.getAttribute("href") === href) return;
  link.setAttribute("href", href);
}

export function getBrowserColorScheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyBrowserFavicon() {
  setFaviconHref(getFaviconHref(getBrowserColorScheme()));
}

export function initBrowserFavicon() {
  applyBrowserFavicon();

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => applyBrowserFavicon();

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }

  media.addListener(onChange);
  return () => media.removeListener(onChange);
}
