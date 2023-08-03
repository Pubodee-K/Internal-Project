export const revalidate = 0;

export default async function FetchFavicon(siteUrl?: string) {
  const siteURL = siteUrl ?? "www.google.com";
  const url = `https://icon.horse/icon/${siteURL}`;

  return fetch(url, {
    cache: "no-store",
  }).then((response) => response.arrayBuffer());
}
