// @license © 2019 Google LLC. Licensed under the Apache License, Version 2.0.
const d=document,l=localStorage,b="prefers-color-scheme",m="media",r="light",a="dark",E=`(${b}:${a})`,R=`(${b}:${r})`,C="link[rel=stylesheet]",u="remember",f="legend",p="toggle",w="switch",k="appearance",v="permanent",$="mode",h="colorschemechange",L="permanentcolorscheme",q="all",y="not all",t="dark-mode-toggle",n="https://googlechromelabs.github.io/dark-mode-toggle/demo/",s=(c,e,o=e)=>{Object.defineProperty(c,o,{enumerable:!0,get(){const i=this.getAttribute(e);return i===null?"":i},set(i){this.setAttribute(e,i)}})},M=(c,e,o=e)=>{Object.defineProperty(c,o,{enumerable:!0,get(){return this.hasAttribute(e)},set(i){i?this.setAttribute(e,""):this.removeAttribute(e)}})},A=d.createElement("template");A.innerHTML=`<style>*,::after,::before{box-sizing:border-box}:host{contain:content;display:block}:host([hidden]){display:none}form{background-color:var(--${t}-background-color,transparent);color:var(--${t}-color,inherit);padding:0}fieldset{border:none;margin:0;padding-block:.25rem;padding-inline:.25rem}legend{font:var(--${t}-legend-font,inherit);padding:0}input,label{cursor:pointer}label{white-space:nowrap}input{opacity:0;position:absolute;pointer-events:none}input:focus-visible+label{outline:#e59700 auto 2px;outline:-webkit-focus-ring-color auto 5px}label:not(:empty)::before{margin-inline-end:.5rem;}label::before{content:"";display:inline-block;background-size:var(--${t}-icon-size,1rem);background-repeat:no-repeat;height:var(--${t}-icon-size,1rem);width:var(--${t}-icon-size,1rem);vertical-align:middle;}[part=lightLabel]::before{background-image:var(--${t}-light-icon, url("${n}sun.png"))}[part=darkLabel]::before{filter:var(--${t}-icon-filter, none);background-image:var(--${t}-dark-icon, url("${n}moon.png"))}[part=toggleLabel]::before{background-image:var(--${t}-checkbox-icon,none)}[part=permanentLabel]::before{background-image:var(--${t}-remember-icon-unchecked, url("${n}unchecked.svg"))}[part=darkLabel],[part=lightLabel],[part=toggleLabel]{font:var(--${t}-label-font,inherit)}[part=darkLabel]:empty,[part=lightLabel]:empty,[part=toggleLabel]:empty{font-size:0;padding:0}[part=permanentLabel]{font:var(--${t}-remember-font,inherit)}input:checked+[part=permanentLabel]::before{background-image:var(--${t}-remember-icon-checked, url("${n}checked.svg"))}input:checked+[part=darkLabel],input:checked+[part=lightLabel]{background-color:var(--${t}-active-mode-background-color,transparent)}input:checked+[part=darkLabel]::before,input:checked+[part=lightLabel]::before{background-color:var(--${t}-active-mode-background-color,transparent)}input:checked+[part=toggleLabel]::before{filter:var(--${t}-icon-filter, none)}input:checked+[part=toggleLabel]+aside [part=permanentLabel]::before{filter:var(--${t}-remember-filter, invert(100%))}aside{visibility:hidden;margin-block-start:.15rem}[part=darkLabel]:focus-visible~aside,[part=lightLabel]:focus-visible~aside,[part=toggleLabel]:focus-visible~aside{visibility:visible;transition:visibility 0s}aside [part=permanentLabel]:empty{display:none}@media (hover:hover){aside{transition:visibility 3s}aside:hover{visibility:visible}[part=darkLabel]:hover~aside,[part=lightLabel]:hover~aside,[part=toggleLabel]:hover~aside{visibility:visible;transition:visibility 0s}}</style><form part=form><fieldset part=fieldset><legend part=legend></legend><input part=lightRadio id=l name=mode type=radio><label part=lightLabel for=l></label><input part=darkRadio id=d name=mode type=radio><label part=darkLabel for=d></label><input part=toggleCheckbox id=t type=checkbox><label part=toggleLabel for=t></label><aside part=aside><input part=permanentCheckbox id=p type=checkbox><label part=permanentLabel for=p></label></aside></fieldset></form>`;class z extends HTMLElement{static get observedAttributes(){return[$,k,v,f,r,a,u]}constructor(){super(),s(this,$),s(this,k),s(this,f),s(this,r),s(this,a),s(this,u),M(this,v),this.t=null,this.i=null,d.addEventListener(h,e=>{this.mode=e.detail.colorScheme,this.o(),this.l()}),d.addEventListener(L,e=>{this.permanent=e.detail.permanent,this.h.checked=this.permanent}),this.p()}p(){const e=this.attachShadow({mode:"open"});e.appendChild(A.content.cloneNode(!0)),this.t=d.querySelectorAll(`${C}[${m}*=${b}][${m}*="${a}"]`),this.i=d.querySelectorAll(`${C}[${m}*=${b}][${m}*="${r}"]`),this.g=e.querySelector("[part=lightRadio]"),this.m=e.querySelector("[part=lightLabel]"),this.u=e.querySelector("[part=darkRadio]"),this.k=e.querySelector("[part=darkLabel]"),this.v=e.querySelector("[part=toggleCheckbox]"),this.$=e.querySelector("[part=toggleLabel]"),this.L=e.querySelector("legend"),this.M=e.querySelector("aside"),this.h=e.querySelector("[part=permanentCheckbox]"),this.C=e.querySelector("[part=permanentLabel]");const o=matchMedia(E).media!==y;o&&matchMedia(E).addListener(({matches:g})=>{this.mode=g?a:r,this.R(h,{colorScheme:this.mode})});const i=l.getItem(t);i&&[a,r].includes(i)?(this.mode=i,this.h.checked=!0,this.permanent=!0):o&&(this.mode=matchMedia(R).matches?r:a),this.mode||(this.mode=r),this.permanent&&!i&&l.setItem(t,this.mode),this.appearance||(this.appearance=p),this._(),this.o(),this.l(),[this.g,this.u].forEach(g=>{g.addEventListener("change",()=>{this.mode=this.g.checked?r:a,this.l(),this.R(h,{colorScheme:this.mode})})}),this.v.addEventListener("change",()=>{this.mode=this.v.checked?a:r,this.o(),this.R(h,{colorScheme:this.mode})}),this.h.addEventListener("change",()=>{this.permanent=this.h.checked,this.R(L,{permanent:this.permanent})}),this.A(),this.R(h,{colorScheme:this.mode}),this.R(L,{permanent:this.permanent})}attributeChangedCallback(e,o,i){if(e===$){if(![r,a].includes(i))throw new RangeError(`Allowed values: "${r}" and "${a}".`);matchMedia("(hover:none)").matches&&this.remember&&this.S(),this.permanent&&l.setItem(t,this.mode),this.o(),this.l(),this.A()}else if(e===k){if(![p,w].includes(i))throw new RangeError(`Allowed values: "${p}" and "${w}".`);this._()}else e===v?(this.permanent?l.setItem(t,this.mode):l.removeItem(t),this.h.checked=this.permanent):e===f?this.L.textContent=i:e===u?this.C.textContent=i:e===r?(this.m.textContent=i,this.mode===r&&(this.$.textContent=i)):e===a&&(this.k.textContent=i,this.mode===a&&(this.$.textContent=i))}R(e,o){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:o}))}_(){const e=this.appearance===p;this.g.hidden=e,this.m.hidden=e,this.u.hidden=e,this.k.hidden=e,this.v.hidden=!e,this.$.hidden=!e}o(){this.mode===r?this.g.checked=!0:this.u.checked=!0}l(){this.mode===r?(this.$.style.setProperty(`--${t}-checkbox-icon`,`var(--${t}-light-icon,url("${n}moon.png"))`),this.$.textContent=this.light,this.light||(this.$.ariaLabel=a),this.v.checked=!1):(this.$.style.setProperty(`--${t}-checkbox-icon`,`var(--${t}-dark-icon,url("${n}sun.png"))`),this.$.textContent=this.dark,this.dark||(this.$.ariaLabel=r),this.v.checked=!0)}A(){this.mode===r?(this.i.forEach(e=>{e.media=q,e.disabled=!1}),this.t.forEach(e=>{e.media=y,e.disabled=!0})):(this.t.forEach(e=>{e.media=q,e.disabled=!1}),this.i.forEach(e=>{e.media=y,e.disabled=!0}))}S(){this.M.style.visibility="visible",setTimeout(()=>{this.M.style.visibility="hidden"},3e3)}}customElements.define(t,z);const x=document.querySelector("dark-mode-toggle"),S=document.documentElement;x.mode==="dark"?S.classList.add("dark"):S.classList.remove("dark");x.addEventListener("colorschemechange",()=>{S.classList.toggle("dark",x.mode==="dark")});
