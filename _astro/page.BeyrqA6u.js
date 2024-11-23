import{j as s}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";import{c as o}from"./index.D7LSBu92.js";function i({image:a,name:r,role:e,surname:t}){return s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("div",{className:"w-full aspect-square bg-center bg-no-repeat bg-cover rounded-lg",style:{backgroundImage:`url("${a}")`}}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-judson name-member mb-[-5px] text-ms md:text-base pb-2",style:{lineHeight:"1.1"},children:[s.jsx("span",{className:"font-light",children:t})," ",s.jsx("span",{className:"font-extrabold uppercase",children:r})]}),s.jsx("div",{className:"text-gray-600 text-sm lg:text-base font-bold ",children:e})]})]})}const l=async()=>await o.request(`query MyQuery {
  membres(orderBy: indice_ASC) {
    nom
    prenom
    adresseMail
    telephone
    posteResponsabilite
    id
    organisation
    photo {
      url
    }
  }
}`);function p(){const[a,r]=n.useState([]);return n.useEffect(()=>{async function e(){const t=await l();r(t.membres)}e()},[]),a.length===0?s.jsx("div",{className:"max-w-[1280px] mx-auto",children:s.jsx("div",{className:"w-full h-[70dvh] rounded-3xl flex items-center justify-center bg-slate-100 ",children:s.jsx("span",{children:"-- Aucun membre pour le moment --"})})}):s.jsxs("div",{className:"max-w-[1280px] mx-auto px-6 lg:px-0",children:[s.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 py-6 lg:py-0 mb-16",children:a.map(e=>{if(e.organisation==="aaupe")return s.jsx(i,{image:e.photo.url,name:e.nom,surname:e.prenom,role:e.posteResponsabilite},e.id)})}),s.jsx("div",{className:"py-3 lg:py-6 text-2xl lg:text-4xl font-bold ",children:"Membres de UPE"}),s.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 py-6 lg:py-0",children:a.map(e=>{if(e.organisation==="upe")return s.jsx(i,{image:e.photo.url,name:e.nom,surname:e.prenom,role:e.posteResponsabilite},e.id)})})]})}export{p as default};
