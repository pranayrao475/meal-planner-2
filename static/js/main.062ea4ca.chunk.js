(this["webpackJsonpmeal-planner-2"]=this["webpackJsonpmeal-planner-2"]||[]).push([[0],{55:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(18),i=t.n(a),s=t(23),o=t(4),l=t(0);var d=function(){return Object(l.jsx)(l.Fragment,{})};var j,b,h,u,p,x=function(e){var n=e.isSearch,t=e.setIsSearch;return Object(l.jsx)("div",{class:"search",children:Object(l.jsx)("input",{type:"text",placeholder:"Country name....",name:"search",onChange:function(e){console.log(e.target.value),t(e.target.value)},value:n})})},f=t(5),O=t(19),g=t.n(O),m=t(6);var v=function(e){var n=e.recipe,t=e.addToFavorite,c=Object(r.useState)(!1),a=Object(o.a)(c,2),i=a[0],s=a[1],j=Object(r.useState)(!0),b=Object(o.a)(j,2),h=b[0],u=b[1];return Object(l.jsxs)(y,{children:[Object(l.jsx)("h2",{children:n.Meal}),Object(l.jsxs)("h2",{children:["(",n.Area,")"]}),Object(l.jsx)(k,{children:Object(l.jsx)("img",{onClick:function(e){console.log(e),s((function(e){return!e}))},width:"350",height:"300",src:n.MealThumb,alt:""})}),i?Object(l.jsxs)(C,{children:[Object(l.jsxs)("h3",{children:["Category: ",n.Category]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Ingredients:"}),n.Ingredient]}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("strong",{children:"Recipe:"})," ",n.Instructions]}),Object(l.jsx)(S,{children:Object(l.jsx)(g.a,{url:n.Video})}),Object(l.jsxs)(w,{children:[h?Object(l.jsx)("button",{onClick:function(){t(n),u((function(e){return!e}))},className:"emoji-button like",children:"Like \u2764\ufe0f"}):null,Object(l.jsx)("a",{href:n.Source,target:"_blank",rel:"noreferrer",children:"Recipe Link"})]})]}):null,Object(l.jsx)(d,{liked:h})]})},y=m.a.div(j||(j=Object(f.a)(["\n\n  flex-direction: row;\n  float: left;\n  align-items: center;\n  \n\n  font-family: 'Robato', sans-serif;  \n  justify-content: space between;\n  & h2{\n    display: flex;\n    flex-direction: row;\n    float: left;\n    padding: 5px;\n  }\n\n"]))),k=m.a.div(b||(b=Object(f.a)(["\n\n  display: block;\n  width: 100%;\n  margin: 20px;\n  padding : 5px;\n  opacity: 0.9;\n  height: auto;\n  \n  transform: scale(1);\n  transition: transform 1s, opacity 0.5s;\n  & img:hover{\n      opacity: 1;\n    transform: scale(1.03);\n    }\n    \n"]))),C=m.a.div(h||(h=Object(f.a)(["\nborder: 2px solid brown;\n}\nfont-family: 'Robato', sans-serif;\n\n& h3{\n  color: brown;\n  font-size: 20px;\n  text-align: center;\n  padding-bottom: 10px;\n  border-bottom: 1px solid brown;\n}\n& p{\n  background-color:#FFFFFF;\n  color: rgb(85,85,89);\n  text-align: center;\n  font-family: 'Cursive';\n  font-size: 20px;\n  \n}\n\n"]))),S=m.a.div(u||(u=Object(f.a)(['\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nmargin-left: auto;\nmargin-right: auto;\nborder: 2px solid black;\npadding: 20px;\n& img{\n  border: 5px solid black;\n  opacity: 0.1;\n}\nbackground-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("https://thumbs.dreamstime.com/b/plate-fork-knife-background-top-view-plate-fork-knife-wooden-background-top-view-170949504.jpg");\nbackground-repeat: no-repeat;\nbackground-size: cover;\nbackground-position: ceter;\nmax-width: 100%;\n  height: auto;\n\n']))),w=m.a.div(p||(p=Object(f.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-evenly;\n\npadding : 20px;\n& button{\n  font-size: 15px;\n}\n\n"])));var I,F,D,N=function(e){var n=e.isrecipe,t=e.isSearch,r=e.setIsSearch,c=e.addToFavorite,a=n.filter((function(e){return e.Area.toLowerCase().includes(t)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{isSearch:t,setIsSearch:r}),a.map((function(e){return Object(l.jsx)(v,{recipe:e,addToFavorite:c},e.id)}))]})},R=t(9),A=t(13);var T=function(e){var n=Object(r.useState)({Meal:"",Category:"",Area:"",Instructions:"",MealThumb:"",Video:"",Ingredient:"",Source:""}),t=Object(o.a)(n,2),c=t[0],a=t[1];function i(e){a(Object(A.a)(Object(A.a)({},c),{},Object(R.a)({},e.target.name,e.target.value))),console.log(e.target.name)}return Object(l.jsx)(q,{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e),fetch("http://localhost:3001/meals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){return a(e)}))},className:"new-recipe-form",children:[Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:"Name"}),Object(l.jsx)("input",{placeholder:"Enter Dish Name...",name:"Meal",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Category "}),Object(l.jsx)("input",{placeholder:"Category",name:"Category",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Country "}),Object(l.jsx)("input",{placeholder:"Enter Country Name...",name:"Area",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Instructions"}),Object(l.jsx)("textarea",{placeholder:"Instructions...",name:"Instructions",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Image "}),Object(l.jsx)("input",{placeholder:"Image...",name:"MealThumb",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Video"}),Object(l.jsx)("input",{placeholder:"Video URL....",name:"Video",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Ingredient "}),Object(l.jsx)("textarea",{placeholder:"Ingredients...",name:"Ingredient",onChange:i,value:e.isform,required:!0})]}),Object(l.jsxs)(z,{children:[Object(l.jsx)("span",{class:"Details",children:" Recipe"}),Object(l.jsx)("input",{placeholder:"add URL...",name:"Source",onChange:i,value:e.isform,required:!0})]}),Object(l.jsx)(E,{children:Object(l.jsx)("input",{type:"submit",value:"Share your Recipe",onChange:i})})]})})},q=m.a.div(I||(I=Object(f.a)(["\n\nmargin-top: 50px;\npadding: 0px;\nbox-sizing: border-box;\ndisplay: flex;\njustify-content: flex-start;\nalign-items: center;\nheight: 50vh;\nfont-size: 18px;\n//background: linear-gradient(135deg, #ff9966, #ff5e62);\n\n\n"]))),z=m.a.div(F||(F=Object(f.a)(["\ndisplay: flex;\nwidth:(100% / 2 - 30px);\npadding: 2px;\nmargin-bottom: 10px;\n& input, textarea{\n    height: 20px;\n    width: 100%;\n    outline: none;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    padding-left: 15px;\n    font-size: 15px;\n    border-bottom-width: 2px;\n    transition: all 0.3s ease;\n    border-color: #ff9966;\n    \n}\n\n& span{\n    align-items: center;\n    padding-right:10px;\n}\n\n\n"]))),E=m.a.div(D||(D=Object(f.a)(["\n\nwidth:100%;\noutline: none;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n\n& input{\nfont-size: 20px;\nfont-weight: 500;\ncolor: black;\nborder-color: #ff9966;\nborder: none;\nborder-radius: 5px;\nbackground: linear-gradient(135deg, #ff9966, #ff5e62);\n\n}\n& input:hover{\n    background: linear-gradient(-135deg, #ff9966, #ff5e62); \n}\n\n\n"])));var M=function(e){e.liked;var n=Object(r.useState)(!1),t=Object(o.a)(n,2),c=t[0],a=t[1];return Object(l.jsx)("div",{class:"hey",children:Object(l.jsxs)("ul",{class:"nav",children:[Object(l.jsxs)("div",{class:"hi",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"nav-item",href:" ",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{class:"nav-item",href:" ",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{onClick:function(){},href:" ",children:"Favorite"})})]}),Object(l.jsx)("div",{class:"hey",children:Object(l.jsxs)("li",{children:[Object(l.jsx)("a",{class:"nav-item",onClick:function(e){e.preventDefault(),a((function(e){return!e}))},href:" ",children:" Add New Recipe "}),c?Object(l.jsx)(T,{}):null]})})]})})};var L=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),j=i[0],b=i[1],h=Object(r.useState)(""),u=Object(o.a)(h,2),p=u[0],x=u[1];return console.log("FAVS",j),Object(r.useEffect)((function(){fetch("http://localhost:3001/meals").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{class:"app",children:Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"INTERNATIONAL MEALS AND RECIPES "}),Object(l.jsx)(M,{class:"nav"})]})})}),Object(l.jsx)(N,{addToFavorite:function(e){var n=[].concat(Object(s.a)(j),[e]);b(n)},isSearch:p,setIsSearch:x,isrecipe:t}),Object(l.jsx)(d,{favoriteRecipes:j})]})};t(55);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.062ea4ca.chunk.js.map