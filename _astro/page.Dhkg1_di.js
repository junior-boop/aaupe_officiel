import{j as e}from"./jsx-runtime.7faW4zRM.js";import{L as c,g as d,c as u}from"./Loader.Cn-EYzXX.js";import{E as x}from"./entete.2xGaC6i0.js";import m from"./section.-8nanTih.js";import{h as p}from"./moment.C5S46NFB.js";import{e as g,h as f}from"./icons.3hJRUljc.js";import{r as i}from"./index.DhYZZe0J.js";function h({data:s}){const t=s.title.length>40?`${s.title.substring(0,36)}...`:s.title,r=s.content.raw.children,l=s.titleSlug;r.filter(a=>a.type==="paragraph");const n=s.description[0].length>100?`${s.description[0].substring(0,120)}...`:s.description[0],o=p(s.publishedAt).calendar();return e.jsx("a",{href:`/stories/article?slug=${l}`,className:"text-gray-800 hover:text-gray-800 flex h-full",children:e.jsxs("div",{className:"px-6 pt-4 lg:pt-9 lg:px-9 rounded-lg bg-slate-50 h-full flex flex-col justify-between hover:bg-slate-200 hover:shadow-sm",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-judson text-3xl lg:text-[32px] font-bold first-letter:uppercase",style:{lineHeight:1.2},children:t}),e.jsxs("div",{className:"mb-4 text-base lg:text-xl font-bold",children:["Récit de : ",s.bioOf]}),e.jsx("div",{className:"mb-4 text-base lg:text-xl",children:n}),e.jsx("div",{className:"text-sm lg:text-base",children:"Publier le :"}),e.jsx("div",{className:"mb-4 text-sm lg:text-base font-bold",children:o})]}),e.jsxs("div",{className:" flex items-center justify-end h-[92px]",children:["Lire plus",e.jsx("button",{className:" w-11 aspect-square flex items-center justify-center",children:e.jsx(g,{className:"w-9 h-9"})})]})]})})}const b=async()=>{const s=d`
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
`,t=await u.request(s);return t.stories,t};function S(){const[s,t]=i.useState([]);return i.useEffect(()=>{async function r(){const{stories:l}=await b();t(l)}r()},[]),e.jsxs(e.Fragment,{children:[e.jsx(x,{titre:"Récits"}),e.jsxs(m,{children:[e.jsxs("div",{className:"p-4 lg:p-9 bg-slate-100 rounded-lg mb-11 flex flex-col lg:flex-row gap-5 items-start",children:[e.jsxs("div",{children:[" ",e.jsx(f,{className:"h-10 lg:h-16 w-10 lg:w-16 "})]}),"Pour préserver la sécurité de nos enfants sur Internet, il est recommandé d'adopter quelques règles simples : éviter de publier leurs photos, sauf si elles sont floutées ou si leur visage n'est pas visible, ne pas partager leur nom complet sur les réseaux sociaux, et privilégier les pseudonymes. En adoptant ces bonnes pratiques, nous contribuons à leur offrir une enfance numérique sereine."]}),s.length===0?e.jsx(c,{}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map((r,l)=>e.jsx(h,{data:r},l))})]})]})}export{S as default};
