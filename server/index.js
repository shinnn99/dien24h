export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const path = url.pathname.replace(/\/$/, '') || '/'
    const redirects = new Map([
      ['/dich-vu/bao-tri-thi-nghiem-dien', '/dich-vu/tram-bien-ap'],
      ['/san-pham/may-bien-ap-dau-1000kva', '/san-pham/may-bien-ap'],
      ['/du-an', '/lien-he'],
      ['/du-an/tram-bien-ap-1000kva-bien-hoa', '/lien-he'],
      ['/ho-so-nang-luc', '/gioi-thieu'],
      ['/yeu-cau-bao-gia', '/lien-he'],
    ])
    const redirectPath = redirects.get(path)
    if (redirectPath) return Response.redirect(new URL(redirectPath, url), 301)

    let response = await env.ASSETS.fetch(request)
    if (response.status === 404 && !url.pathname.includes('.')) {
      const routes = new Set([
        '/', '/dich-vu/sua-chua-dien-24h', '/dich-vu/tram-bien-ap',
        '/dich-vu/dien-cong-nghiep',
        '/dich-vu/solar', '/dich-vu/chong-set', '/dich-vu/may-phat-dien',
        '/san-pham', '/san-pham/may-bien-ap',
        '/kien-thuc', '/kien-thuc/chi-phi-lap-tram-bien-ap',
        '/gioi-thieu', '/lien-he',
      ])
      if (!routes.has(path)) return new Response('Không tìm thấy trang', { status: 404 })
      response = await env.ASSETS.fetch(new Request(new URL('/index.html', url), request))
    }
    return response
  },
}
