import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";import{E as u}from"./entete.FfZv1ywV.js";import m from"./section.-8nanTih.js";import{h as g}from"./moment.C5S46NFB.js";import{d as p}from"./icons.BTq2nFqG.js";import{g as x}from"./gql.BxQgxVmM.js";import{c as h}from"./index.D7LSBu92.js";import{L as f}from"./Loader.BvGW5vs7.js";function j({data:t}){const i=t.title.length>40?`${t.title.substring(0,36)}...`:t.title,s=t.picture.url,r=t.content.raw.children,a=t.titleSlug,c=g(t.publishedAt).calendar(),l=r.filter(d=>d.type==="paragraph"),o=l[0].children[0].text.length>100?`${l[0].children[0].text.substring(0,95)}...`:l[0].children[0].text;return e.jsxs("a",{href:`/actualites/articles?slug=${a}`,className:"text-gray-800 hover:text-gray-800 h-full overflow-hidden rounded-lg",children:[e.jsx("div",{className:"aspect-[3/2] bg-no-repeat bg-center bg-cover",style:{backgroundImage:`url(${s})`}}),e.jsxs("div",{className:"px-6 py-4 bg-slate-100",children:[e.jsx("div",{className:"font-judson text-[32px] font-bold first-letter:uppercase mb-4",style:{lineHeight:1.2},children:i}),e.jsx("div",{className:"mb-4",children:o}),e.jsx("div",{className:"text-sm lg:text-base",children:"Publier le :"}),e.jsx("div",{className:"mb-4 text-sm lg:text-base font-bold",children:c}),e.jsx("div",{className:" flex items-center justify-end",children:e.jsx("button",{className:" w-11 aspect-square flex items-center justify-center",children:e.jsx(p,{className:"w-9 h-9"})})})]})]})}async function b(){const t=x`
  query MyQuery {
    articlesConnection(first: 20, stage: PUBLISHED, orderBy: updatedAt_DESC) {
      edges {
        node {
          id
          title
          titleSlug
          content {
            raw
          }
          publishedAt
          picture {
            size
            url
            width
            stage
          }
        }
      }
    }
  }
`;return await h.request(t)}function L(){const[t,i]=n.useState([]);return n.useEffect(()=>{async function s(){const{articlesConnection:r}=await b();i(r.edges)}s()},[]),e.jsxs(e.Fragment,{children:[e.jsx(u,{titre:"Actualités"}),e.jsx(m,{children:t.length===0?e.jsx(f,{}):e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((s,r)=>e.jsx(j,{data:s.node},r))})})]})}export{L as default};
