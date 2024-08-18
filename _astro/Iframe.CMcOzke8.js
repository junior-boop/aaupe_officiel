import{j as t}from"./jsx-runtime.7faW4zRM.js";import{h as c,g as i,c as x}from"./moment.CX6sIYSx.js";import{r as l}from"./index.DhYZZe0J.js";import{S as d}from"./icons.BYcsL8y_.js";async function m(a){const e=i`
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
    `,{story:s}=await x.request(e);return s}function b({url:a}){const[e,s]=l.useState();l.useEffect(()=>{(async()=>{const n=new URLSearchParams(window.location.search).get("slug"),o=await m(n);s(o)})()},[]);const r=()=>t.jsx("div",{className:"flex items-center justify-center h-[50vh] w-full",children:t.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[t.jsx(d,{className:"h-9 w-9"}),"Chargement..."]})});return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"pt-16 pb-6 bg-slate-200",children:t.jsxs("div",{className:"w-full px-6 mx-auto mt-16 lg:w-[650px] lg:px-0",children:[t.jsx("div",{className:"text-5xl lg:text-7xl font-bold mb-9 font-judson",children:e?.title}),t.jsxs("div",{className:"mb-4 text-base lg:text-xl font-bold",children:["Récit de : ",e?.bioOf]}),t.jsx("div",{className:"text-sm lg:text-base",children:"Publier le :"}),t.jsx("div",{className:"mb-4 text-sm lg:text-base font-bold",children:c(e?.publishedAt).calendar()})]})}),t.jsx("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ",children:e===void 0?t.jsx(r,{}):t.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content.html}})})]})}export{b as default};
