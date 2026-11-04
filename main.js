(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  function setOpen(v){ if(!d||!t) return; d.hidden=!v; d.classList.toggle('open',v); if(o) o.classList.toggle('open',v); t.setAttribute('aria-expanded',String(v)); document.body.classList.toggle('no-scroll',v); if(v&&c) c.focus(); else if(!v) t.focus(); }
  if(t) t.addEventListener('click',function(){ setOpen(d.hidden); });
  if(c) c.addEventListener('click',function(){ setOpen(false); });
  if(o) o.addEventListener('click',function(){ setOpen(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&d&&!d.hidden) setOpen(false); });
  document.querySelectorAll('.faq-q').forEach(function(b){
    b.addEventListener('click',function(){
      var it=b.parentNode, open=it.classList.toggle('open'); b.setAttribute('aria-expanded',String(open));
    });
  });
})();
