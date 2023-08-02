export default async function FetchFavicon(siteUrl?: string) {
  const siteURL = siteUrl ?? "8.219.208.165";
  const url = `https://icon.horse/icon/${siteURL}`;

  const response = await fetch(url);
  return response.arrayBuffer();
}
