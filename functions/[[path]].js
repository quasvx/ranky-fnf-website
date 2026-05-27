export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Si ya están en el dominio nuevo, NO redirigir (evita el bucle de payaso)
  if (url.hostname === 'rankyfnf.cc.cd') {
    return next(); 
  }

  // Si vienen de cualquier otro lado (como rankyfnf.pages.dev), los mandamos al nuevo
  const targetURL = `https://rankyfnf.cc.cd${url.pathname}${url.search}`;

  return Response.redirect(targetURL, 301);
}
