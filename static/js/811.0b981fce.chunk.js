"use strict";(self.webpackChunkcampers=self.webpackChunkcampers||[]).push([[811],{811:(n,e,i)=>{i.d(e,{A:()=>Vn});var t,r=i(43),o=i(3),s=i(122),l=i(547),a=i(34),c=i(528),d=i(273);const h=d.A.ul(t||(t=(0,c.A)(["\n   display: flex;\n   gap: 8px;\n   flex-wrap: wrap;\n   margin-bottom: 24px;\n\n   li {\n      padding: 12px 18px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      border-radius: 100px;\n      background-color: var(--feature-background-color);\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 1.25;\n      color: var(--primary-color);\n\n      &.capitalize {\n         text-transform: capitalize;\n      }\n   }\n\n   svg {\n      fill: var(--primary-color);\n      stroke: var(--primary-color);\n   }\n"])));var p=i(579);const x=n=>{let{data:e}=n;return(0,p.jsxs)(h,{children:[(0,p.jsxs)("li",{children:[(0,p.jsx)(a.A,{icon:"icon-adults",width:20,height:20}),e.adults," adults"]}),(0,p.jsxs)("li",{className:"capitalized",children:[(0,p.jsx)(a.A,{icon:"icon-transmission",width:20,height:20}),e.transmission]}),(0,p.jsxs)("li",{className:"capitalized",children:[(0,p.jsx)(a.A,{icon:"icon-petrol",width:20,height:20}),e.engine]}),e.details.kitchen>=1&&(0,p.jsxs)("li",{children:[(0,p.jsx)(a.A,{icon:"icon-kitchen",width:20,height:20}),"Kitchen"]}),(0,p.jsxs)("li",{children:[(0,p.jsx)(a.A,{icon:"icon-bed",width:20,height:20}),e.details.beds," beds"]}),e.details.airConditioner>=1&&(0,p.jsxs)("li",{children:[(0,p.jsx)(a.A,{icon:"icon-ac",width:20,height:20}),"AC"]})]})};var g,v=i(950);const u=d.A.div(g||(g=(0,c.A)(["\n   position: fixed;\n   top: 0;\n   left: 0;\n\n   width: 100vw;\n   height: 100vh;\n   z-index: 999;\n\n   display: flex;\n   justify-content: center;\n   align-items: center;\n\n   background-color: rgba(17, 18, 19, 0.4);\n"]))),f=document.querySelector("#modal-root"),j=n=>{let{onClose:e,children:i}=n;(0,r.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e()};return document.body.style.overflow="hidden",window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n),document.body.style.overflow="visible"}}),[e]);return(0,v.createPortal)((0,p.jsx)(u,{onClick:n=>{n.currentTarget===n.target&&e()},children:i}),f)},m=n=>n.charAt(0).toUpperCase()+n.slice(1);var b,w;const A=d.A.ul(b||(b=(0,c.A)(["\n   display: flex;\n   width: 100%;\n   gap: 8px;\n   flex-wrap: wrap;\n"]))),y=d.A.li(w||(w=(0,c.A)(["\n   background-color: var(--feature-background-color);\n   padding: 12px 18px;\n   border-radius: 100px;\n   font-weight: 500;\n   font-size: 16px;\n   line-height: 1.25;\n   color: var(--primary-color);\n   display: flex;\n   gap: 8px;\n\n   svg {\n      fill: transparent;\n      stroke: var(--primary-color);\n   }\n"]))),k=n=>{let{details:e}=n;const i={AC:"icon-ac",adults:"icon-adults","air conditioner":"icon-air-conditioner",kitchen:"icon-kitchen",beds:"icon-bed",TV:"icon-tv",CD:"icon-cd",radio:"icon-radio",shower:"icon-shower",toilet:"icon-toilet",freezer:"icon-freezer",hob:"icon-hob",microwave:"icon-microwave",gas:"icon-gas",water:"icon-water",transmission:"icon-transmission",engine:"icon-petrol"},t=[];for(const r in e)"bathroom"!==r&&("transmission"!==r&&"engine"!==r&&0===Number.parseInt(e[r])||("airConditioner"===r?(t.splice(2,0,"AC"),t.push("air conditioner")):t.push(r)));return(0,p.jsx)(A,{children:t.map(((n,t)=>(0,p.jsxs)(y,{children:[(0,p.jsx)(a.A,{icon:i[n],width:20,height:20}),(0,p.jsxs)("span",{children:["airConditioner"===n||"beds"===n||"hob"===n||"adults"===n?e[n]:"","transmission"===n||"engine"===n?m(e[n]):" ".concat(n)]})]},t)))})};var C,z;const F=d.A.div(C||(C=(0,c.A)(["\n   width: 430px;\n   display: flex;\n   flex-direction: column;\n"]))),S=d.A.div(z||(z=(0,c.A)(["\n   display: flex;\n   justify-content: space-between;\n\n   p {\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 1.33333;\n   }\n"]))),_=n=>{let{item:e}=n;return(0,p.jsxs)(F,{children:[(0,p.jsxs)(S,{children:[(0,p.jsx)("p",{children:"Form"}),(0,p.jsx)("p",{children:m(e.form)})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)("p",{children:"Length"}),(0,p.jsx)("p",{children:e.length})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)("p",{children:"Width"}),(0,p.jsx)("p",{children:e.width})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)("p",{children:"Height"}),(0,p.jsx)("p",{children:e.height})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)("p",{children:"Tank"}),(0,p.jsx)("p",{children:e.tank})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)("p",{children:"Consumption"}),(0,p.jsx)("p",{children:e.consumption})]})]})};var E,R,T,L,N;const $=d.A.div(E||(E=(0,c.A)(["\n   margin-top: 44px;\n   display: flex;\n   gap: 24px;\n"]))),D=d.A.div(R||(R=(0,c.A)(["\n   width: 430px;\n   display: flex;\n   flex-direction: column;\n   gap: 44px;\n"]))),O=d.A.div(T||(T=(0,c.A)(["\n   width: 430px;\n   display: flex;\n   flex-direction: column;\n\n   h3 {\n      font-weight: 600;\n      font-size: 20px;\n      line-height: 1.2;\n   }\n"]))),V=d.A.hr(L||(L=(0,c.A)(["\n   margin: 24px 0;\n   border: none;\n   height: 1px;\n   background-color: rgba(16, 24, 40, 0.2);\n   position: relative;\n   transition: background-color 0.3s ease;\n"]))),q=d.A.form(N||(N=(0,c.A)(["\n   width: 448px;\n"]))),H=n=>{let{item:e}=n;const{adults:i,transmission:t,engine:r}=e,o={adults:i,transmission:t,engine:r,...e.details};return(0,p.jsxs)($,{children:[(0,p.jsxs)(D,{children:[(0,p.jsx)(k,{details:o}),(0,p.jsxs)(O,{children:[(0,p.jsx)("h3",{children:"Vehicle details"}),(0,p.jsx)(V,{}),(0,p.jsx)(_,{item:e})]})]}),(0,p.jsx)(q,{})]})},I=()=>(0,p.jsx)("div",{children:"Reviews"});var J,K,M,P,U,W,B,G,Q,X,Y,Z,nn;const en=d.A.li(J||(J=(0,c.A)(["\n   display: flex;\n   gap: 24px;\n   border: 1px solid rgba(16, 24, 40, 0.2);\n   border-radius: 20px;\n   padding: 24px;\n   width: 888px;\n   height: 358px;\n"]))),tn=d.A.div(K||(K=(0,c.A)(["\n   border-radius: 10px;\n   overflow: hidden;\n   width: 290px;\n   height: 310px;\n\n   img {\n      height: 100%;\n      object-fit: cover;\n   }\n"]))),rn=d.A.div(M||(M=(0,c.A)(["\n   width: 526px;\n"]))),on=d.A.div(P||(P=(0,c.A)(["\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   margin-bottom: 8px;\n"]))),sn=d.A.h3(U||(U=(0,c.A)(["\n   max-width: 100%;\n   white-space: nowrap;\n   overflow: hidden;\n   text-overflow: ellipsis;\n\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 1.25;\n   color: var(--primary-color);\n"]))),ln=d.A.div(W||(W=(0,c.A)(["\n   display: flex;\n   gap: 8px;\n   align-items: center;\n"]))),an=d.A.p(B||(B=(0,c.A)(["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 1.25;\n   color: var(--primary-color);\n"]))),cn=d.A.button(G||(G=(0,c.A)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   border: none;\n   padding: 0;\n   background-color: transparent;\n\n   svg {\n      fill: ",";\n      stroke: ",";\n      transition: fill 0.3s ease, stroke 0.3s ease;\n\n      &:hover {\n         fill: transparent;\n         stroke: var(--button-color);\n      }\n   }\n"])),(n=>{let{$favorite:e}=n;return e?"var( --button-color)":"transparent"}),(n=>{let{$favorite:e}=n;return e?"var( --button-color)":"var(--primary-color)"})),dn=d.A.div(Q||(Q=(0,c.A)(["\n   display: flex;\n   justify-content: flex-start;\n   align-items: baseline;\n   gap: 16px;\n   margin-bottom: 24px;\n"]))),hn=d.A.div(X||(X=(0,c.A)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   gap: 4px;\n\n   svg {\n      fill: var(--rating-color);\n   }\n\n   button {\n      padding: 0;\n      border: none;\n      background-color: transparent;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 1.5;\n      text-decoration: underline;\n      transition: color 0.3s ease;\n\n      &:hover {\n         color: var(--rating-color);\n         border-color: var(--rating-color);\n      }\n   }\n"]))),pn=d.A.div(Y||(Y=(0,c.A)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   gap: 4px;\n   line-height: 1.5;\n\n   svg {\n      fill: transparent;\n      stroke: var(--primary-color);\n   }\n"]))),xn=d.A.p(Z||(Z=(0,c.A)(["\n   max-width: 100%;\n   margin-bottom: 24px;\n\n   white-space: nowrap;\n   overflow: hidden;\n   text-overflow: ellipsis;\n\n   line-height: 1.5;\n   color: var(--secondary-color);\n"]))),gn=d.A.button(nn||(nn=(0,c.A)(["\n   padding: 16px 40px;\n   border: none;\n   outline: none;\n   border-radius: 200px;\n\n   font-weight: 500;\n   font-size: 16px;\n   line-height: 1.5;\n   letter-spacing: -0.01em;\n\n   color: #fff;\n   background-color: var(--button-color);\n\n   transition: background-color 0.3s ease;\n\n   &:hover {\n      background-color: #d84343;\n   }\n"])));var vn,un,fn,jn,mn,bn,wn,An,yn,kn,Cn;const zn=d.A.div(vn||(vn=(0,c.A)(["\n   position: fixed;\n   top: 20px;\n   border-radius: 20px;\n   padding: 40px;\n   width: 982px;\n   height: calc(100vh - 5%);\n   background-color: #fff;\n   overflow-y: auto;\n\n   ::-webkit-scrollbar {\n      width: 0;\n   }\n"]))),Fn=d.A.div(un||(un=(0,c.A)(["\n   position: absolute;\n   top: 40px;\n   right: 40px;\n   border: none;\n   outline: none;\n   background-color: transparent;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n\n   svg {\n      stroke: var(--primary-color);\n      transition: stroke 0.3s ease;\n\n      &:hover {\n         stroke: var(--button-color);\n      }\n   }\n"]))),Sn=d.A.h3(fn||(fn=(0,c.A)(["\n   margin-bottom: 8px;\n   max-width: 100%;\n   white-space: nowrap;\n   overflow: hidden;\n   text-overflow: ellipsis;\n\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 1.25;\n   color: var(--primary-color);\n"]))),_n=d.A.div(jn||(jn=(0,c.A)(["\n   display: flex;\n   justify-content: flex-start;\n   align-items: baseline;\n   gap: 16px;\n   margin-bottom: 16px;\n"]))),En=d.A.p(mn||(mn=(0,c.A)(["\n   margin-bottom: 24px;\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 1.25;\n   color: var(--primary-color);\n"]))),Rn=d.A.div(bn||(bn=(0,c.A)(["\n   margin-right: -20px;\n   height: 450px;\n   overflow-y: auto;\n\n   &::-webkit-scrollbar {\n      margin-left: 30px;\n      width: 8px;\n   }\n\n   &::-webkit-scrollbar-thumb {\n      border-radius: 7px;\n      background-color: #d9d9d9;\n   }\n\n   div {\n      width: 902px;\n   }\n"]))),Tn=d.A.div(wn||(wn=(0,c.A)(["\n   display: flex;\n   justify-content: flex-start;\n   gap: 16px;\n   margin-bottom: 24px;\n"]))),Ln=d.A.p(An||(An=(0,c.A)(["\n   max-width: 100%;\n   margin-bottom: 24px;\n\n   line-height: 1.5;\n   color: var(--secondary-color);\n"]))),Nn=d.A.div(yn||(yn=(0,c.A)(["\n   margin-top: 44px;\n   display: flex;\n   gap: 40px;\n"]))),$n=d.A.button(kn||(kn=(0,c.A)(['\n   padding-bottom: 24px;\n   outline: none;\n   border: none;\n   background-color: transparent;\n   font-weight: 600;\n   font-size: 20px;\n   line-height: 1.2;\n   position: relative;\n\n   &:hover {\n      color: var(--button-color);\n   }\n\n   &::after {\n      content: "";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 4px;\n      background-color: transparent;\n      transition: background-color 0.3s ease;\n      margin-bottom: -2px;\n   }\n\n   ',"\n"])),(n=>{let{isActive:e}=n;return e&&"\n      &::after {\n         background-color: var( --button-color)\n      }\n   "})),Dn=d.A.hr(Cn||(Cn=(0,c.A)(["\n   margin: 0;\n   border: none;\n   height: 1px;\n   background-color: rgba(16, 24, 40, 0.2);\n   position: relative;\n   transition: background-color 0.3s ease;\n"]))),On=n=>{let{item:e,onClose:i}=n;const[t,o]=(0,r.useState)(0),s=n=>{o(n)};return(0,p.jsxs)(zn,{children:[(0,p.jsx)(Fn,{type:"button",onClick:i,children:(0,p.jsx)(a.A,{icon:"icon-close",width:32,height:32})}),(0,p.jsx)(Sn,{children:e.name}),(0,p.jsxs)(_n,{children:[(0,p.jsxs)(hn,{children:[(0,p.jsx)(a.A,{icon:"icon-star",width:16,height:16}),(0,p.jsx)("button",{type:"button","aria-label":"Open reviews",onClick:()=>s(2),children:"".concat(e.rating,"(").concat(e.reviews.length," Reviews)")})]}),(0,p.jsxs)(pn,{children:[(0,p.jsx)(a.A,{icon:"icon-location",width:16,height:16}),(0,p.jsx)("p",{children:e.location.split(",").reverse().join(", ")})]})]}),(0,p.jsxs)(En,{children:["\u20ac",e.price.toFixed(2)]}),(0,p.jsx)(Rn,{children:(0,p.jsxs)("div",{children:[(0,p.jsxs)(Tn,{children:[(0,p.jsx)(tn,{children:(0,p.jsx)("img",{src:e.gallery[0],alt:e.name})}),(0,p.jsx)(tn,{children:(0,p.jsx)("img",{src:e.gallery[1],alt:e.name})}),(0,p.jsx)(tn,{children:(0,p.jsx)("img",{src:e.gallery[2],alt:e.name})})]}),(0,p.jsxs)(Ln,{children:["Description: ",e.description]})]})}),(0,p.jsxs)(Nn,{children:[(0,p.jsx)($n,{active:1===t,onClick:()=>s(1),isActive:1===t,children:"Features"}),(0,p.jsx)($n,{active:2===t,onClick:()=>s(2),isActive:2===t,children:"Reviews"})]}),(0,p.jsx)(Dn,{}),(0,p.jsxs)("div",{children:[1===t&&(0,p.jsx)(H,{item:e}),2===t&&(0,p.jsx)(I,{rev:e.reviews})]})]})},Vn=n=>{let{item:e}=n;const i=(0,o.wA)(),t=(0,o.d4)(l.Cp),c=(0,r.useMemo)((()=>t.find((n=>n._id===e._id))),[t,e._id]),[d,h]=(0,r.useState)(!1),g=()=>{h(!d)};return(0,p.jsxs)(en,{children:[(0,p.jsx)(tn,{children:(0,p.jsx)("img",{src:e.gallery[0],alt:e.name})}),(0,p.jsxs)(rn,{children:[(0,p.jsxs)(on,{children:[(0,p.jsx)(sn,{children:e.name}),(0,p.jsxs)(ln,{children:[(0,p.jsxs)(an,{children:["\u20ac",e.price.toFixed(2)]}),(0,p.jsx)(cn,{type:"button","aria-label":"Toggle Favorites",onClick:()=>{i(c?(0,s.wy)(e._id):(0,s._J)(e))},$favorite:!!c,children:(0,p.jsx)(a.A,{icon:"icon-heart",width:24,height:24})})]})]}),(0,p.jsxs)(dn,{children:[(0,p.jsxs)(hn,{children:[(0,p.jsx)(a.A,{icon:"icon-star",width:16,height:16}),(0,p.jsx)("button",{type:"button","aria-label":"Open reviews",children:"".concat(e.rating,"(").concat(e.reviews.length," Reviews)")})]}),(0,p.jsxs)(pn,{children:[(0,p.jsx)(a.A,{icon:"icon-location",width:16,height:16}),(0,p.jsx)("p",{children:e.location.split(",").reverse().join(", ")})]})]}),(0,p.jsx)(xn,{children:e.description}),(0,p.jsx)(x,{data:e}),(0,p.jsx)(gn,{type:"button","aria-label":"Show more details",onClick:g,children:"Show more"})]}),d&&(0,p.jsx)(j,{onClose:g,children:(0,p.jsx)(On,{item:e,onClose:g})})]})}},34:(n,e,i)=>{i.d(e,{A:()=>o});i(43);const t=i.p+"static/media/sprite.2243c5b546d2a895bea8653c8ced8a85.svg";var r=i(579);const o=n=>{let{icon:e,width:i,height:o}=n;return(0,r.jsx)("svg",{width:i,height:o,children:(0,r.jsx)("use",{href:"".concat(t,"#").concat(e)})})}},547:(n,e,i)=>{i.d(e,{Co:()=>t,Cp:()=>r,dx:()=>o});const t=n=>{let{adverts:e}=n;return e.adverts},r=n=>{let{adverts:e}=n;return e.favorites},o=n=>{let{filter:e}=n;return e}}}]);
//# sourceMappingURL=811.0b981fce.chunk.js.map