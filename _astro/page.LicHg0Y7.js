import{j as e}from"./jsx-runtime.7faW4zRM.js";import{h as c,g as d,c as u}from"./moment.CX6sIYSx.js";import{E as x}from"./entete.BnFe7zPf.js";import m from"./section.-8nanTih.js";import{e as g,g as p,S as f}from"./icons.BYcsL8y_.js";import{r as n}from"./index.DhYZZe0J.js";function h({data:s}){const t=s.title.length>40?`${s.title.substring(0,36)}...`:s.title,i=s.content.raw.children,l=s.titleSlug;i.filter(o=>o.type==="paragraph");const r=s.description[0].length>100?`${s.description[0].substring(0,120)}...`:s.description[0],a=c(s.publishedAt).calendar();return e.jsx("a",{href:`/stories/article?slug=${l}`,className:"text-gray-800 hover:text-gray-800 flex h-full",children:e.jsxs("div",{className:"px-6 pt-4 lg:pt-9 lg:px-9 rounded-lg bg-slate-50 h-full flex flex-col justify-between hover:bg-slate-200 hover:shadow-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-judson text-3xl lg:text-[32px] font-bold first-letter:uppercase",style:{lineHeight:1.2},children:t}),e.jsxs("div",{className:"mb-4 text-base lg:text-xl font-bold",children:["Récit de : ",s.bioOf]}),e.jsx("div",{className:"mb-4 text-base lg:text-xl",children:r}),e.jsx("div",{className:"text-sm lg:text-base",children:"Publier le :"}),e.jsx("div",{className:"mb-4 text-sm lg:text-base font-bold",children:a})]}),e.jsxs("div",{className:" flex items-center justify-end h-[92px]",children:["Lire plus",e.jsx("button",{className:" w-11 aspect-square flex items-center justify-center",children:e.jsx(g,{className:"w-9 h-9"})})]})]})})}const j=async()=>{const s=d`
    query MyQuery {
        stories(first: 20, orderBy: publishedAt_DESC, stage: PUBLISHED) {
            bioOf
            title
            titleSlug
            stage
            id
            createdAt
            createdBy {
                id
                name
            }
            content {
                html
                raw
            }
            publishedAt
            description
        }
    }
`,t=await u.request(s);return t.stories,t};function q(){const[s,t]=n.useState([]);n.useEffect(()=>{async function l(){const{stories:r}=await j();console.log(r),t(r)}l()},[]);const i=()=>e.jsx("div",{className:"flex items-center justify-center h-[50vh] w-full",children:e.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[e.jsx(f,{className:"h-9 w-9"}),"Chargement..."]})});return e.jsxs(e.Fragment,{children:[e.jsx(x,{titre:"Récits"}),e.jsxs(m,{children:[e.jsxs("div",{className:"p-4 lg:p-9 bg-slate-100 rounded-lg mb-11 flex flex-col lg:flex-row gap-5 items-start",children:[e.jsxs("div",{children:[" ",e.jsx(p,{className:"h-10 lg:h-16 w-10 lg:w-16 "})]}),"Pour préserver la sécurité de nos enfants sur Internet, il est recommandé d'adopter quelques règles simples : éviter de publier leurs photos, sauf si elles sont floutées ou si leur visage n'est pas visible, ne pas partager leur nom complet sur les réseaux sociaux, et privilégier les pseudonymes. En adoptant ces bonnes pratiques, nous contribuons à leur offrir une enfance numérique sereine."]}),s.length===0?e.jsx(i,{}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map((l,r)=>e.jsx(h,{data:l},r))})]})]})}export{q as default};
