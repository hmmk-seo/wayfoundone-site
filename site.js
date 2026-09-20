(function(){
  var nav=document.getElementById('nav'), mb=document.querySelector('.menu-button');
  function close(){ nav.classList.remove('menu-open'); mb.setAttribute('aria-expanded','false'); mb.textContent='Menu'; }
  if(mb){ mb.addEventListener('click',function(){ var o=nav.classList.toggle('menu-open'); mb.setAttribute('aria-expanded',String(o)); mb.textContent=o?'Close':'Menu'; }); }
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
  document.querySelectorAll('.nav-links a').forEach(function(a){ a.addEventListener('click',close); });
  var sv=document.querySelector('.signal-visual');
  if(sv){ if('IntersectionObserver' in window){ new IntersectionObserver(function(es,io){ es.forEach(function(en){ if(en.isIntersecting){ sv.classList.add('is-visible'); io.disconnect(); } }); },{threshold:.12}).observe(sv); } else sv.classList.add('is-visible'); }
  var hero=document.querySelector('.hero');
  if(hero && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    hero.addEventListener('pointermove',function(e){ var r=hero.getBoundingClientRect(); hero.style.setProperty('--x',(e.clientX-r.left)+'px'); hero.style.setProperty('--y',(e.clientY-r.top)+'px'); });
  }
  var bar=document.getElementById('sticky-cta'), first=document.querySelector('.hero, .inner-hero');
  if(bar && first){
    function show(on){ bar.classList.toggle('is-visible',on); }
    if('IntersectionObserver' in window){ new IntersectionObserver(function(es){ show(!es[0].isIntersecting); },{threshold:0}).observe(first); }
    else window.addEventListener('scroll',function(){ show(window.scrollY>first.offsetHeight); },{passive:true});
  }
  var cal=document.getElementById('calendly');
  if(cal){
    var cfg=window.WAYFOUND_CONFIG||{}, url=(cfg.calendlyUrl||'').trim(), email=(cfg.email||'').trim();
    if(url){
      cal.hidden=false;
      var s=document.createElement('script'); s.src='https://assets.calendly.com/assets/external/widget.js'; s.async=true;
      s.onload=function(){ if(window.Calendly) Calendly.initInlineWidget({url:url+(url.indexOf('?')>-1?'&':'?')+'hide_gdpr_banner=1&primary_color=090909',parentElement:cal}); };
      document.body.appendChild(s);
      window.addEventListener('message',function(e){
        if(e.origin!=='https://calendly.com') return;
        if(e.data && e.data.event==='calendly.event_scheduled'){ document.getElementById('booked').hidden=false; window.dataLayer=window.dataLayer||[]; window.dataLayer.push({event:'audit_booked'}); }
      });
    } else {
      var fb=document.getElementById('booking-fallback'), tx=document.getElementById('fallback-text'); fb.hidden=false;
      if(email){ tx.innerHTML='Email us at <a href="mailto:'+email+'" style="text-decoration:underline">'+email+'</a> and we’ll find a time for your free audit.'; }
      else { tx.textContent='Online booking will be available shortly.'; }
    }
  }
})();