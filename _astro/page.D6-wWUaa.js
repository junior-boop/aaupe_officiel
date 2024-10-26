import{j as e}from"./jsx-runtime.7faW4zRM.js";import{g as o}from"./gql.BxQgxVmM.js";import{r as s}from"./index.DhYZZe0J.js";import{c as m}from"./index.D7LSBu92.js";import{h as l}from"./moment.C5S46NFB.js";import{E as c}from"./entete.FfZv1ywV.js";import"./icons.BTq2nFqG.js";async function x(t){const n=o`query MyQuery {
        evenement(where: {id: "${t}"}) {
          createdAt
          createdBy {
            name
          }
          sousTitreEvenement
          titreEvenement
          imagesFlyers {
            url
        }
          notificationEvenement {
            ... on Notification {
              id
              titreEvenement
              slugEvenement
              titreNotification
            }
          }
          dataHeureEvenement
          dateEvenement
        }
      }`,{evenement:a}=await m.request(n);return console.log(a),a}function j(){const[t,n]=s.useState();return s.useEffect(()=>{(async()=>{const r=new URLSearchParams(window.location.search).get("slug"),i=await x(r);n(i)})()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-[72px] lg:h-[86px]"}),e.jsx(c,{titre:"Evènement"}),e.jsxs("div",{className:"max-w-[720px] w-full px-6 lg:px-0 mx-auto my-14 lg:my-24",children:[e.jsx("div",{className:"text-4xl lg:text-6xl font-judson font-bold text-center mb-3",children:t?.titreEvenement}),e.jsx("div",{className:"font-inter text-2xl lg:text-3xl text-center mb-3",children:t?.sousTitreEvenement}),e.jsx("div",{className:"bg-slate-100 px-4 lg:px-6 py-3 lg:py-6 rounded-xl mb-9",children:e.jsxs("div",{children:["Date : ",e.jsx("b",{children:l(t?.dataHeureEvenement).format("DD MM YYYY")})]})}),e.jsx("div",{className:"mt-6",children:e.jsx("img",{src:t?.imagesFlyers.url,alt:"programme de la sensibilisation du 27 aout 2024 en Arabe"})})]})]})}export{j as default};
