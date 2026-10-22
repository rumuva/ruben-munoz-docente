(()=>{'use strict';
    const menu=document.querySelector('#menu-toggle'),nav=document.querySelector('#nav');
    menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.dataset.open=String(open)});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.dataset.open='false';menu.setAttribute('aria-expanded','false')}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){nav.dataset.open='false';menu.setAttribute('aria-expanded','false');menu.focus()}});
    const filters=[...document.querySelectorAll('[data-filter]')],projects=[...document.querySelectorAll('[data-category]')];
    filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(f=>f.setAttribute('aria-pressed',String(f===b)));projects.forEach(p=>p.hidden=b.dataset.filter!=='all'&&p.dataset.category!==b.dataset.filter);const count=projects.filter(p=>!p.hidden).length;document.querySelector('#filter-status').textContent=`${count} ${count===1?'muestra disponible':'muestras disponibles'}`;}));
    const sales=[['Cuadernos','Sevilla',240],['Carpetas','Aljarafe',180],['Bolígrafos','Sevilla',120],['Archivadores','Aljarafe',300],['Folios','Sevilla',160],['Agendas','Aljarafe',200]];
    const euro=n=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
    function renderSales(){const zone=document.querySelector('#sales-zone').value,rows=sales.filter(r=>zone==='all'||r[1]===zone);document.querySelector('#sales-body').replaceChildren(...rows.map(r=>{const tr=document.createElement('tr');r.forEach((v,i)=>{const td=document.createElement('td');td.textContent=i===2?euro(v):v;tr.append(td)});return tr}));document.querySelector('#sales-total').textContent=euro(rows.reduce((n,r)=>n+r[2],0))}
    document.querySelector('#sales-zone').addEventListener('change',renderSales);renderSales();
    document.querySelector('#show-formula').addEventListener('click',function(){const a=document.querySelector('#formula-answer');a.hidden=!a.hidden;this.setAttribute('aria-expanded',String(!a.hidden));this.textContent=a.hidden?'Ver cómo hacerlo en Excel':'Ocultar explicación'});
    let toastTimer;function toast(msg){const t=document.querySelector('#toast'),parent=document.querySelector('dialog[open]')||document.body;if(t.parentElement!==parent)parent.append(t);t.textContent=msg;clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.textContent='',4500)}
    async function copyText(value){
      const trigger=document.activeElement;
      document.querySelectorAll('.copy-fallback').forEach(el=>el.remove());
      try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);toast('Copiado al portapapeles.');return true}}catch(e){}
      const area=document.createElement('textarea');area.value=value;area.setAttribute('aria-label','Texto temporal de copia');area.style.cssText='position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
      const parent=document.querySelector('dialog[open]')||document.body;parent.append(area);area.select();let ok=false;
      try{ok=document.execCommand('copy')}catch(e){}
      area.remove();if(trigger&&trigger.isConnected)trigger.focus({preventScroll:true});
      if(ok){toast('Copiado al portapapeles.');return true}
      const box=document.createElement('div');box.className='copy-fallback';
      const instruction=document.createElement('p');instruction.textContent='Tu navegador no permite copiar automáticamente. El texto está seleccionado: usa Copiar en tu dispositivo o Ctrl+C (Cmd+C en Mac).';
      const field=document.createElement('textarea');field.className='manual-copy';field.readOnly=true;field.value=value;field.setAttribute('aria-label','Texto para copiar manualmente');
      const close=document.createElement('button');close.type='button';close.className='button outline';close.textContent='Cerrar ayuda de copia';close.addEventListener('click',()=>{box.remove();if(trigger&&trigger.isConnected)trigger.focus({preventScroll:true})});
      box.append(instruction,field,close);if(trigger&&trigger.parentNode)trigger.insertAdjacentElement('afterend',box);else parent.append(box);field.focus();field.select();toast('Copia manual disponible debajo del botón.');return false;
    }
    document.querySelector('#copy-email').addEventListener('click',()=>copyText('rumuva1492@gmail.com'));
    const promptTopic=document.querySelector('#prompt-topic'),promptLevel=document.querySelector('#prompt-level'),promptFormat=document.querySelector('#prompt-format'),promptOutput=document.querySelector('#prompt-output'),promptResult=document.querySelector('#prompt-result'),promptStatus=document.querySelector('#prompt-status'),promptError=document.querySelector('#prompt-error'),generateButton=document.querySelector('#generate-prompt'),copyButton=document.querySelector('#copy-prompt');
    let generatedChoices='';
    function currentChoices(){return JSON.stringify([promptTopic.value.trim(),promptLevel.value,promptFormat.value])}
    function generatePrompt(){
      const topic=promptTopic.value.trim(),level=promptLevel.value,format=promptFormat.value;
      if(!topic){promptError.textContent='Escribe el tema de la actividad antes de crear el prompt.';promptTopic.setAttribute('aria-invalid','true');promptTopic.focus();return}
      promptError.textContent='';promptTopic.removeAttribute('aria-invalid');
      promptOutput.value=`Actúa como un docente de Formación Profesional para el Empleo.\n\nTema: ${topic}.\nAlumnado: ${level.toLowerCase()}.\nRecurso solicitado: ${format.toLowerCase()}.\n\nFormula un objetivo de aprendizaje observable. Presenta los conocimientos previos, los materiales necesarios y las instrucciones en una secuencia clara. Utiliza un ejemplo laboral con datos ficticios y explica los términos técnicos.\n\nIncluye una propuesta de solución y criterios sencillos para comprobar el aprendizaje. Si falta información relevante, indícala antes de hacer suposiciones. No inventes referencias ni requisitos oficiales.\n\nPresenta el resultado con apartados breves y lenguaje accesible. El material se revisará antes de utilizarlo con el alumnado.`;
      generatedChoices=currentChoices();promptResult.hidden=false;copyButton.disabled=false;generateButton.textContent='2. Volver a crear mi prompt';promptStatus.textContent=`Prompt preparado sobre «${topic}». Cópialo y pégalo en tu herramienta de IA para obtener la actividad.`;
      promptResult.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
    }
    generateButton.addEventListener('click',generatePrompt);
    function markPromptChanges(){
      promptError.textContent='';promptTopic.removeAttribute('aria-invalid');
      if(!generatedChoices)return;
      const changed=generatedChoices!==currentChoices();copyButton.disabled=changed;
      generateButton.textContent=changed?'2. Actualizar mi prompt':'2. Volver a crear mi prompt';
      promptStatus.textContent=changed?'Has cambiado las opciones. Pulsa «Actualizar mi prompt» antes de copiar para incluir los cambios.':'El prompt coincide con tus opciones. Ya puedes copiarlo y pegarlo en tu herramienta de IA.';
    }
    [promptTopic,promptLevel,promptFormat].forEach(field=>field.addEventListener(field===promptTopic?'input':'change',markPromptChanges));
    promptTopic.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();generatePrompt()}});
    copyButton.addEventListener('click',async()=>{
      if(copyButton.disabled||promptResult.hidden)return;
      const copied=await copyText(promptOutput.value);
      promptStatus.textContent=copied?'Prompt copiado. Abre tu herramienta de IA, pégalo en el cuadro de mensaje y pulsa Enviar.':'La copia automática no está disponible. Usa el texto seleccionado de la ayuda de copia y pégalo en tu herramienta de IA.';
    });
    document.querySelector('#select-prompt').addEventListener('click',()=>{promptOutput.focus();promptOutput.select();promptStatus.textContent='Texto seleccionado. Usa Copiar en tu dispositivo o Ctrl+C (Cmd+C en Mac), y después pégalo en tu herramienta de IA.'});
    if(window.location.hash==='#crear-prompt')document.querySelector('#crear-prompt').open=true;
    const tabs=[...document.querySelectorAll('.lesson-tab')];function selectTab(b,focus=false){tabs.forEach(t=>{const active=t===b;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById(t.dataset.panel).hidden=!active});if(focus)b.focus()};tabs.forEach((b,i)=>{b.addEventListener('click',()=>selectTab(b));b.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=tabs.length-1;else return;e.preventDefault();selectTab(tabs[n],true)})});

    const form=document.querySelector('#contact-form'),status=document.querySelector('#form-status'),send=document.querySelector('#contact-submit');
    document.querySelectorAll('[data-contact]').forEach(link=>link.addEventListener('click',()=>{
      const reason=document.querySelector('#contact-reason'),message=document.querySelector('#contact-message');
      if(!reason.value)reason.value='Proyecto formativo o contratación';
      if(!message.value.trim())message.value='Hola, Rubén. Me gustaría hablar contigo sobre un proyecto formativo.\n\n';
      document.querySelector('#contact-name').focus({preventScroll:true});
    }));
    document.querySelectorAll('a[href="#privacidad"]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#privacidad').open=true}));
    form.addEventListener('submit',async event=>{
      if(!window.fetch)return;
      event.preventDefault();
      if(!form.reportValidity()||send.disabled)return;
      send.disabled=true;send.textContent='Enviando…';status.textContent='Enviando tu consulta…';status.dataset.state='pending';
      const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),25000);
      try{
        const response=await fetch('https://formsubmit.co/ajax/rumuva1492@gmail.com',{method:'POST',body:new FormData(form),headers:{Accept:'application/json'},signal:controller.signal});
        const result=await response.json();
        if(!response.ok||(result.success!==true&&result.success!=='true'))throw new Error('No se confirmó el envío');
        status.dataset.state='success';status.textContent='El servicio de envío ha aceptado tu mensaje. Gracias por contactar; te responderé por correo.';
        form.reset();
      }catch(error){
        status.dataset.state='error';status.textContent='No se ha podido confirmar el envío. Tu texto se conserva. Puedes intentarlo de nuevo o escribirme a rumuva1492@gmail.com. Si el intento quedó en curso, evita repetirlo para no duplicar el mensaje.';
      }finally{clearTimeout(timeout);send.disabled=false;send.innerHTML='Enviar mensaje <span aria-hidden="true">↗</span>'}
    });
    if('IntersectionObserver'in window){const links=[...nav.querySelectorAll('a[href^="#"]')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(a=>{if(a.getAttribute('href')==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}}},{rootMargin:'-15% 0px -65% 0px',threshold:0});links.forEach(a=>{const target=document.querySelector(a.getAttribute('href'));if(target)observer.observe(target)})}
  })();
