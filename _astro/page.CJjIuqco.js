import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";import{c as l}from"./index.D7LSBu92.js";function o({image:a,name:r,role:s,surname:t}){return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg",style:{backgroundImage:`url("${a}")`}}),e.jsxs("div",{children:[e.jsxs("div",{className:"font-judson name-member space-x-2 mb-[-5px]",children:[e.jsx("span",{className:"font-light",children:t}),e.jsx("span",{className:"font-extrabold uppercase",children:r})]}),e.jsx("div",{className:"text-gray-600 text-sm lg:text-base font-bold",children:s})]})]})}const m=async()=>await l.request(`query MyQuery {
  membres {
    nom
    prenom
    adresseMail
    telephone
    posteResponsabilite
    id
    photo {
      url
    }
  }
}`);function p(){const[a,r]=n.useState([]);return n.useEffect(()=>{async function s(){const t=await m();console.log(t.membres),r(t.membres)}s()},[]),a.length===0?e.jsx("div",{className:"max-w-[1280px] mx-auto",children:e.jsx("div",{className:"w-full h-[70dvh] rounded-3xl flex items-center justify-center bg-slate-100 ",children:e.jsx("span",{children:"-- Aucun membre pour le moment --"})})}):e.jsx("div",{className:"max-w-[1280px] mx-auto px-6 lg:px-0",children:e.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 py-6 lg:py-0",children:a.map(s=>e.jsx(o,{image:s.photo.url,name:s.nom,surname:s.prenom,role:s.posteResponsabilite}))})})}export{p as default};
