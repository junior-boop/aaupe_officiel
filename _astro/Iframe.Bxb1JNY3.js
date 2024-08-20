import{j as t}from"./jsx-runtime.7faW4zRM.js";import{L as n,g as i,c}from"./Loader.Cn-EYzXX.js";import{r as l}from"./index.DhYZZe0J.js";import{h as x}from"./moment.C5S46NFB.js";import"./icons.3hJRUljc.js";async function d(a){const e=i`
        query MyQuery {
            story(where: {titleSlug: "${a}"}, stage: PUBLISHED) {
                bioOf
                content {
                    html
                    raw
                }
                createdBy {
                    id
                }
                title
                titleSlug
                publishedAt
            }
        }
    `,{story:s}=await c.request(e);return s}function j({url:a}){const[e,s]=l.useState();return l.useEffect(()=>{(async()=>{const r=new URLSearchParams(window.location.search).get("slug"),o=await d(r);s(o)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pt-16 pb-6 bg-slate-200",children:t.jsxs("div",{className:"w-full px-6 mx-auto mt-16 lg:w-[650px] lg:px-0",children:[t.jsx("div",{className:"text-5xl lg:text-7xl font-bold mb-9 font-judson",children:e?.title}),t.jsxs("div",{className:"mb-4 text-base lg:text-xl font-bold",children:["Récit de : ",e?.bioOf]}),t.jsx("div",{className:"text-sm lg:text-base",children:"Publier le :"}),t.jsx("div",{className:"mb-4 text-sm lg:text-base font-bold",children:x(e?.publishedAt).calendar()})]})}),t.jsx("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ",children:e===void 0?t.jsx(n,{}):t.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content.html}})})]})}export{j as default};
