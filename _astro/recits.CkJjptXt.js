import{j as t}from"./jsx-runtime.7faW4zRM.js";import{g as l}from"./gql.BxQgxVmM.js";import{b as n}from"./icons.BTq2nFqG.js";import{c as o}from"./index.D7LSBu92.js";import{r as a}from"./index.DhYZZe0J.js";import{L as c}from"./Loader.BvGW5vs7.js";const d=async()=>{const e=l`
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
`,s=await o.request(e);return s.stories,s};function j(){const[e,s]=a.useState([]);return a.useEffect(()=>{async function i(){const{stories:r}=await d();s(r)}i()},[]),t.jsx("section",{className:"bg-[#0E0E0E] py-24",children:t.jsxs("div",{className:"max-w-[1280px] mx-auto",children:[t.jsx("div",{className:"text-white text-[42px] lg:text-[52px] font-judson font-bold pb-10 px-6 lg:px-0",style:{lineHeight:1},children:"Découvrez nos Récits"}),e.length===0?t.jsx(c,{white:!0}):t.jsx("div",{className:"grid gap-10 lg:grid-cols-3 mb-5 px-6 lg:px-0",children:e.map((i,r)=>t.jsx(x,{data:i},r))})]})})}function x({data:e}){const s=e.titleSlug,i=e.description[0].length>100?`${e.description[0].substring(0,120)}...`:e.description[0];return t.jsx("a",{href:`/stories/article?slug=${s}`,className:"w-full rounded-xl h-[500px] bg-white flex items-end p-9",children:t.jsxs("div",{className:"text-black",children:[t.jsx("div",{className:"font-judson font-bold text-5xl mb-9",children:e.title}),t.jsx("div",{className:"mb-4",children:i}),t.jsxs("div",{className:"flex justify-end items-center gap-4",children:["Lire plus ",t.jsx("a",{className:"h-9 w-9",children:t.jsx(n,{className:"h-9 w-9"})})]})]})})}export{j as default};
