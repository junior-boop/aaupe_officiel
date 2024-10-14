import{j as t}from"./jsx-runtime.7faW4zRM.js";import{g as n}from"./gql.BxQgxVmM.js";import{r as l}from"./index.DhYZZe0J.js";import{c as i}from"./index.D7LSBu92.js";import{h as c}from"./moment.C5S46NFB.js";import{L as m}from"./Loader.BvGW5vs7.js";import"./icons.BTq2nFqG.js";async function x(a){const e=n`
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
    `,{story:s}=await i.request(e);return s}function y({url:a}){const[e,s]=l.useState();return l.useEffect(()=>{(async()=>{const r=new URLSearchParams(window.location.search).get("slug"),o=await x(r);s(o)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pt-16 pb-6 bg-slate-200",children:t.jsxs("div",{className:"w-full px-6 mx-auto mt-16 lg:w-[650px] lg:px-0",children:[t.jsx("div",{className:"text-5xl lg:text-7xl font-bold mb-9 font-judson",children:e?.title}),t.jsxs("div",{className:"mb-4 text-base lg:text-xl font-bold",children:["Récit de : ",e?.bioOf]}),t.jsx("div",{className:"text-sm lg:text-base",children:"Publier le :"}),t.jsx("div",{className:"mb-4 text-sm lg:text-base font-bold",children:c(e?.publishedAt).calendar()})]})}),t.jsx("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ",children:e===void 0?t.jsx(m,{}):t.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content.html}})})]})}export{y as default};
