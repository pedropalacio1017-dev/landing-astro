import { client } from './contentful';
// HEADER
export async function getHeader() {
  const response = await client.getEntries({
    content_type: 'header',
  });

  return response.items[0];
}

// HERO
export async function getHero() {
  const res = await client.getEntries({
    content_type: 'hero',
  });

  return res.items[0];
}

// BENEFICIOS
export async function getBeneficios() {
  const res = await client.getEntries({
    content_type: 'beneficio',
  });

  return res.items;
}
// TITULO BENEFICIOS
export async function getSeccionBeneficios() {
  const res = await client.getEntries({
    content_type: 'seccionBeneficios',
  });

  return res.items[0];
}
// TESTIMONIOS
export async function getTestimonios() {
  const res = await client.getEntries({
    content_type: 'testimonio',
  });

  return res.items;
}

export async function getSeccionTestimonios() {
  const res = await client.getEntries({
    content_type: 'seccionTestimonio',
  });

  return res.items[0];
}

// LOGOS
export async function getLogos() {
  const res = await client.getEntries({
    content_type: 'logoCliente',
  });

  return res.items;
}
// TITULO LOGOS
export async function getTituloLogos() {
  const res = await client.getEntries({
    content_type: 'seccionLogos',
  });

  return res.items[0];
}

// CTA
export async function getCTA() {
  const res = await client.getEntries({
    content_type: 'cta',
  });

  return res.items[0];
}
// FOOTER
export async function getFooter() {
  const res = await client.getEntries({
    content_type: 'footer',
  });

  return res.items[0];
}