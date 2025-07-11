import{j as e}from"./jsx-runtime.7faW4zRM.js";import{g as n}from"./gql.BxQgxVmM.js";import{r as s}from"./index.DhYZZe0J.js";import{c}from"./index.D7LSBu92.js";import{h as u}from"./moment.C5S46NFB.js";import{L as m}from"./Loader.BvGW5vs7.js";import"./icons.BTq2nFqG.js";async function d(a){const t=n`
        query MyQuery {
            article(where: {titleSlug: "${a}"}, stage: PUBLISHED) {
                picture {
                    url
                }
                image {
                    url
                }
                titleSlug
                title
                id
                content {
                    html
                }
                publishedAt
            }
            }
    `,{article:l}=await c.request(t);return console.log(l),l}function y({url:a}){const[t,l]=s.useState();return s.useEffect(()=>{(async()=>{const o=new URLSearchParams(window.location.search).get("slug"),i=await d(o);l(i)})()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lg:pt-28 lg:pb-6 lg:mb-[200px] bg-slate-200 lg:h-[400px]",children:e.jsx("div",{className:"bg-gray-500 lg:w-[800px] aspect-square lg:aspect-video mx-auto rounded-md bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${t?.picture.url})`}})}),e.jsxs("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0",children:[e.jsx("div",{className:" text-4xl font-bold",children:t?.title}),e.jsx("div",{children:u(t?.publishedAt).calendar()})]}),e.jsx("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0 ",children:t===void 0?e.jsx(m,{}):e.jsx("div",{dangerouslySetInnerHTML:{__html:t?.content.html}})}),e.jsx("div",{className:"w-full px-6 mx-auto my-16 lg:w-[650px] lg:px-0",children:t?.image.length!==0?e.jsx(x,{data:t?.image}):null})]})}function x({data:a}){const t=a!==void 0?a.map((l,r)=>e.jsx("div",{className:"w-full aspect-auto  mb-4 rounded-lg overflow-hidden",children:e.jsx("img",{src:l.url,alt:"image gallerie",className:"w-full h-full object-cover object-center"})})):null;return e.jsxs("div",{children:[e.jsx("div",{className:"text-2xl font-bold mb-4",children:"Quelques Images"}),t]})}export{y as default};
