export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Si ya están en el dominio definitivo, dejamos que pase a los archivos estáticos
  if (url.hostname === 'rankyfnf.cc.cd') {
    return context.next();
  }

  // Si vienen de pages.dev, los mandamos al nuevo con sus rutas y queries intactas
  const targetURL = `https://rankyfnf.cc.cd${url.pathname}${url.search}`;
  
  return Response.redirect(targetURL, 301);
}
