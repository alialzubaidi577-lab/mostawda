self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode==='navigate')e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>new Response('<meta charset=utf-8><p style="font:18px sans-serif;text-align:center;margin-top:40vh" dir=rtl>ما فيه إنترنت. حاول مرة ثانية.</p>',{headers:{'Content-Type':'text/html;charset=utf-8'}})));
});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});
