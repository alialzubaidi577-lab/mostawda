self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// كل فتح للصفحة يجيب النسخة الأحدث من السيرفر (بدون كاش)، عشان التحديث يظهر تلقائياً
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate'){
    const u=new URL(e.request.url);
    u.searchParams.set('_',Date.now());
    e.respondWith(fetch(u.href,{cache:'no-store'}).catch(()=>new Response('<meta charset=utf-8><p style="font:18px sans-serif;text-align:center;margin-top:40vh" dir=rtl>ما فيه إنترنت. حاول مرة ثانية.</p>',{headers:{'Content-Type':'text/html;charset=utf-8'}})));
  }
});
