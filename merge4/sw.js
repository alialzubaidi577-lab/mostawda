// يفكّ أي service worker قديم على الجهاز، وبعدها الصفحة تفتح من السيرفر مباشرة
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  await self.registration.unregister();
  const cs=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  cs.forEach(c=>{if('navigate' in c)c.navigate(c.url)});
})()));
