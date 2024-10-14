import{j as t}from"./jsx-runtime.7faW4zRM.js";import{g as c}from"./gql.BxQgxVmM.js";import{r as s}from"./index.DhYZZe0J.js";import{c as n}from"./index.D7LSBu92.js";import{h as i}from"./moment.C5S46NFB.js";import{L as m}from"./Loader.BvGW5vs7.js";import"./icons.BTq2nFqG.js";async function u(r){const e=c`
        query MyQuery {
  article(where: {titleSlug: "${r}"}, stage: PUBLISHED) {
    picture {
      url
    }
    title
    createdAt
    content {
      html
    }
    specialsPage {
      slugProgramme
      theme
      programme
      imageEntete {
        url
      }
    }
  }
}
    `,{article:a}=await n.request(e);return console.log(a),a}function v({url:r}){const[e,a]=s.useState();return s.useEffect(()=>{(async()=>{const l=new URLSearchParams(window.location.search).get("slug"),o=await u(l);a(o)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"lg:pt-28 lg:pb-6 lg:mb-[200px] bg-slate-200 lg:h-[400px]",children:t.jsx("div",{className:"bg-gray-500 lg:w-[800px] aspect-square lg:aspect-video mx-auto rounded-md bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${e?.picture.url})`}})}),t.jsxs("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0",children:[t.jsx("div",{className:" text-4xl font-bold",children:e?.title}),t.jsx("div",{children:i(e?.createdAt).calendar()})]}),t.jsx("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ",children:e===void 0?t.jsx(m,{}):t.jsx("div",{dangerouslySetInnerHTML:{__html:e?.content.html}})})]})}export{v as default};
