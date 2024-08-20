import{j as e}from"./jsx-runtime.7faW4zRM.js";import{L as l,g as c,c as n}from"./Loader.Cn-EYzXX.js";import{c as o}from"./icons.3hJRUljc.js";import{r as a}from"./index.DhYZZe0J.js";const d=async()=>{const s=c`
    query MyQuery {
        stories(first: 3, orderBy: publishedAt_DESC, stage: PUBLISHED) {
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
`,t=await n.request(s);return t.stories,t};function h(){const[s,t]=a.useState([]);return a.useEffect(()=>{async function i(){const{stories:r}=await d();t(r)}i()},[]),e.jsx("section",{className:"bg-[#0E0E0E] py-24",children:e.jsxs("div",{className:"max-w-[1280px] mx-auto",children:[e.jsx("div",{className:"text-white text-[42px] lg:text-[52px] font-judson font-bold pb-10 px-6 lg:px-0",style:{lineHeight:1},children:"Découvrez nos Récits"}),s.length===0?e.jsx(l,{white:!0}):e.jsx("div",{className:"grid gap-10 lg:grid-cols-3 mb-5 px-6 lg:px-0",children:s.map((i,r)=>e.jsx(x,{data:i},r))})]})})}function x({data:s}){const t=s.titleSlug,i=s.description[0].length>100?`${s.description[0].substring(0,120)}...`:s.description[0];return e.jsx("a",{href:`/stories/article?slug=${t}`,className:"w-full rounded-xl h-[500px] bg-white flex items-end p-9",children:e.jsxs("div",{className:"text-black",children:[e.jsx("div",{className:"font-judson font-bold text-5xl mb-9",children:s.title}),e.jsx("div",{className:"mb-4",children:i}),e.jsxs("div",{className:"flex justify-end items-center gap-4",children:["Lire plus ",e.jsx("a",{className:"h-9 w-9",children:e.jsx(o,{className:"h-9 w-9"})})]})]})})}export{h as default};
