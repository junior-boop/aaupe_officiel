import{j as e}from"./jsx-runtime.7faW4zRM.js";import{g as a}from"./gql.BxQgxVmM.js";import{r as i}from"./index.DhYZZe0J.js";import{c as r}from"./index.D7LSBu92.js";async function l(){const t=a`
       query MyQuery {
  evenements(first: 10, orderBy: updatedAt_DESC, stage: PUBLISHED) {
    notificationEvenement {
      ... on Notification {
        id
        slugEvenement
        description
        titreNotification
      }
    }
  }
}
    `,{evenements:s}=await r.request(t);return s}function d(){const[t,s]=i.useState();return i.useEffect(()=>{(async()=>{const n=await l();s(n[0].notificationEvenement)})()},[]),e.jsx("section",{className:"banniere bg-[#1a917b] py-6 flex items-center justify-center px-6 lg:px-0",children:e.jsxs("div",{className:"w-full max-w-[960px] flex flex-col lg:flex-row justify-between",children:[e.jsxs("div",{className:"flex gap-4 flex-1",children:[e.jsx("div",{className:"w-[50px] aspect-video flex items-center justify-center",children:e.jsx("img",{src:"/element_1.webp",alt:""})}),e.jsxs("div",{className:"text-sm text-white font-inter w-[80%]",children:[e.jsx("div",{className:"font-bold",children:t?.titreNotification}),e.jsx("div",{className:"text-base",children:t?.description.length>90?`${t?.description.substring(0,90)}...`:t?.description})]})]}),e.jsxs("a",{href:`/evenements?slug=${t?.slugEvenement}`,className:"text-sm pl-[66px] lg:pl-0 pt-2 lg:pt-0 flex items-center text-white",children:["Lire plus  ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"})})]})]})})}export{d as default};
