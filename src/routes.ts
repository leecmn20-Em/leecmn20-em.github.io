const urlAliases = {
  "@articles": "/articles/",
  "@projects": "/projects/",
} as const;

export function resolveURL(href: string): string {
  const match = href.match(/^(@[a-z][a-z0-9-]*)(\/.*)?$/i);

  if (!match) {
    return href;
  }

  const [, alias, suffix = ""] = match;
  const baseURL = urlAliases[alias as keyof typeof urlAliases];

  if (!baseURL) {
    return href;
  }
  if (!suffix) {
    return `${baseURL}/`;
  }

  return `${baseURL}${suffix}`;
}
