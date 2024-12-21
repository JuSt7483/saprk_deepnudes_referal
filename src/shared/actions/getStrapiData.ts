"use server";

export async function getStrapiData(url: string) {
  const baseUrl = process.env.STRAPI_URL;
  try {
    const response = await fetch(baseUrl + url, { next: { revalidate: 300 }, headers: {
        "Authorization": `bearer ${process.env.STRAPI_TOKEN}`
    } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}