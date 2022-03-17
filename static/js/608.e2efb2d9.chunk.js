"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[608],{608:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(791);var s=n(856),A=n(153),i=n(717),r=n(871),a=function(){var e=(0,r.UO)().id;return{movie:(0,i.a)(["movie.details",e],"movie/".concat(e)).data}},l=n(641),d=n(184),c=function(e){var t=e.title,n=e.children;return(0,d.jsxs)("div",{className:"mt-5 flex flex-row flex-wrap justify-start items-center",children:[(0,d.jsxs)("div",{className:"text-indigo-600 font-normal text-lg mr-3",children:[t,":"]}),n]})},x=function(e){var t=e.movie,n=null===t.poster_path?l:"".concat("https://image.tmdb.org/t/p/w500","/").concat(t.poster_path);return(0,d.jsxs)("div",{className:"flex flex-row flex-wrap md:flex-nowrap justify-start p-2 bg-gray-50 shadow overflow-hidden sm:rounded-lg mt-10",children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:n,alt:"movie",className:"bg-cover"})}),(0,d.jsxs)("div",{className:"md:px-10 sh sm:px-5",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center",children:[(0,d.jsx)("div",{className:"text-gray-900 font-bold text-xl mb-2",children:t.title}),(0,d.jsx)("div",{className:"inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-700 rounded-full",children:t.release_date})]}),(0,d.jsxs)("div",{className:"flex flex-col justify-start mt-10",children:[(0,d.jsx)("div",{className:"text-indigo-600 font-normal text-lg",children:"Description: "}),(0,d.jsx)("div",{className:"text-gray-800",children:t.overview})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5",children:(0,d.jsxs)("div",{className:"bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full",style:{width:"".concat(0===t.vote_average?100:10*t.vote_average,"%")},children:["IMDB: ",t.vote_average]})}),(0,d.jsx)(c,{title:"Votes",children:(0,d.jsxs)("div",{className:"bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800",children:[(0,d.jsx)(s.Zs9,{className:"mr-1 w-3 h-3"}),t.vote_count]})}),(0,d.jsx)(c,{title:"Categories",children:t.genres.map((function(e){return(0,d.jsx)("span",{className:"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-700 rounded mr-2",children:e.name},e.id)}))}),(0,d.jsx)(c,{title:"Language",children:t.original_language})]})]})]})},o=function(){return(0,A.y)((0,A.l)(x,a))}},153:function(e,t,n){n.d(t,{l:function(){return i},y:function(){return d}});var s=n(413),A=n(184),i=function(e,t){var n=t();return(0,A.jsx)(e,(0,s.Z)({},n))},r=n(791),a=n(828),l=function(){return(0,A.jsx)("div",{className:"flex justify-center items-center text-center text-lg",children:(0,A.jsx)(a.Cd,{className:"animate-spin h-10 w-10 text-indigo-800"})})},d=function(e){return(0,A.jsx)(r.Suspense,{fallback:(0,A.jsx)(l,{}),children:e})}},641:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsCAMAAACxJAyMAAAAAXNSR0IArs4c6QAAAIdQTFRF3d3d2NjYwMDA1NTU3NzczMzMsrKyxsbGvb29sbGxurq62tra0tLSs7Ozz8/PwsLCtLS0t7e32dnZ19fXxMTExcXF09PTubm51dXVuLi4vLy8ysrKzc3NtbW10NDQwcHBx8fH1tbWyMjIv7+/zs7Ow8PD29vbycnJvr6+u7u70dHRtra2y8vLJmBMyQAABgxJREFUeJztnI12qjoQhRURBERREVTA3ypiff/nu6gVkoCWeogJ3v2tVVZLqM52MplJArZaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAJtpSPahFpQu5quijaiFnqGaYm2oQ76tmEPRBtRA+rQMIyhaCtqoOOkQkZj0Wb8nUnXnZB/T40LXVHmvIjluabhkx//bH4VsmhUuPcD006NDsnBVr/qMKKZMKv+yni5iq42+23ibOfmEMPQhRn2N7y1b/+YvCbPhz8nDX8jyLI/YE22u7sKZoCyetn5L2H2VWU8HRkE+wPRNsgFyt+3PJvU4XhE00HJG6bCDKyIOiV1GAo5zvYJjdJnkgnVsWwyFKxh3uBLX8qvKYf08hyyiY+5Q5KTQBMrsUlIHdq9zB2H7reWuUnpSpjYrQ5l1IByiH8tsw7e3s87m7n2JJThhQsqc6tHSkiQnpqFuyg78b0/SaiivRymkb0nS6kTNfb6m3GfcEa0CL2HLyYMy1vPL1bbVPmnkDps/eznwkx9Jp8zDuOz8mPinjxPO0Rz8i41/Go/ejFxHE55f7FDooFMFKRndvpMwnWTmZ5ouZFHspTqfJeoGOlLCVWkEZ5QZpIOaU01Vka060rYpS6oXcpQaoXKMhlnpClDSmdcGNPGBmRbSDX5ijd59CoSQBfpo37eYg0IjfbubEnrjCsr6lPPxl7L0/PJn23qfflSBo0XkTqin0Q96xJViLM/y7/8dtAphwwvY6/lufkUxFl0JaxCitCzJs1LC9tukudv3+3I3qVuqLRD9laoEIWtMpB5lKI4+KQOWzGzBKgtpKxCHnGmHJLP+ObTr8Pv/y0P1sIowZG2CnnIslBKGZrMVcgjVIWVMd8NmjFK0ZyoZJhWIcG4UZFxx3JJGf7Ukz9/l9PJE1+khE1VkbK9j1JpFdK4+CYY3/aa5vuvJsY3wcUhzrHbgI2mAm2v388WrVTf6E29Jo5SB+9o27Yf/GTtw7pZVUhOeFva0aZNDuyU9r2usptWSDF4WV21FW3KvzHIhNzv5Dmtg20cBLdDHAdxcGJ73WZ9acgvCeKwEFjLbXxvTZv5D+X5hs19pSQs1L4+q2Q2Zy9xAlZJTL9E2OJMJ1u/uq/BHbY2aya7E6guffYS58wo2dA19PeSt5L79DzJU0ngsGYWfHIy2UsKPpnRS2Pc70Fr3z65hFjdUYPffXL63SczyidH3kJa43CqrGJqP0qNCz4x2T2Dok+ipz5Z8NZRinouKqnQuwo+IZQk77OeohgnyStxkvcuMR4p9YnP9q5+UUnMKsk26Xrvs52mZOwy2fsxSiI+YFPO3SfChJSOwqxPlgl7SSHiOyvRQir5pKR3PRi7RAX7hVozo6hgv1LmE6Z3qVUifiW2a7XKxy7WJ/1CnBR8slmJFtJqdSPWzEKOL1ESM2X7ZshXiFWB84g1018e6EtOR7byT5XQdIZcY2RvmmaSJKb/5NArCDHmaYNJXpIUpjBOktwu+TksFgpPIYU+wRGuHind0OEE1xhJPkVI7/f3rw2umf2dQrjGyDuFcO1aCHbZhCDYXwDBXgUE+wt8TNdCsMsmRFSwayt3v3dd8uBmB+Zc9ptSvD/qPUKSx+8bvXITyrgwwX+TkCddK3rl1ofNEyGigt15RcjkiRBRwR51qiyxsGslorrWk2C3zXwJpPqhsGX3JiHJ4/etnY8p4z8mIX6MEJTxVUjeKORjlkxRxssm5GOCnatHkjcK+ZjMjmD/RyGaMxp9j0Z/OxT2sglEBXv0yj2IS1HzkeSJkFeeNXw2Q8ScvQrPhNTtEVHB7ri67qY/t8M0OzB/0gf3SbR/TGb/mDIemb0KH1M0ooyXTUjyRiGYs1fh/1DG1w6CvQrH39+/NnY8hZR/cRkfuN5lun6yC1szGtdvmZ0Unifkhs/1223U4F06tDPfZ5pV93cbasHl/Wz2JC75gr/aieI3fG3SzF04Nk+chdtp+LPyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABH/gPurGhCde7yjgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=608.e2efb2d9.chunk.js.map