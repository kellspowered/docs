(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{534:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[e._v("#")]),e._v(" Views")]),e._v(" "),s("p",[e._v("Views are part of presentation layer (There is one exception. See: "),s("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/solution-components/entity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Entity"),s("OutboundLink")],1),e._v(" for more info).")]),e._v(" "),s("p",[e._v("These components are used for listing records of specific entity with specific filters.")]),e._v(" "),s("p",[e._v("MS Docs: "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/create-edit-views-app-designer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a view"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conventions"}},[e._v("#")]),e._v(" Conventions")]),e._v(" "),s("h3",{attrs:{id:"code-placement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-placement"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Code Placement")])]),e._v(" "),s("p",[e._v("Views are stored in "),s("strong",[e._v("SavedQueries")]),e._v(" folder under their Entity. So for example Account entity view will be stored in this folder:")]),e._v(" "),s("p",[e._v("…\\CDS\\Entities\\Account\\SavedQueries\\")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"view-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-type"}},[e._v("#")]),e._v(" "),s("strong",[e._v("View Type")])]),e._v(" "),s("p",[e._v("There are multiple Query Types which define how your view will behave.")]),e._v(" "),s("p",[s("strong",[e._v("The most used types in our projects:")])]),e._v(" "),s("p",[s("code",[e._v("<querytype>0</querytype>")]),e._v(" = Classic view (Used in "),s("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/solution-components/appmodule/#sitemap",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppModule SiteMap"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("p",[s("code",[e._v("<querytype>2</querytype>")]),e._v(" = Subgrid View (Used in "),s("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/solution-components/form",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forms"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("p",[s("code",[e._v("<querytype>64</querytype>")]),e._v(" = Lookup View (Used in "),s("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/solution-components/relationship/#lookup-fields",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lookups"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("p",[e._v("Other Types of views: "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/customize-entity-views#types-of-views",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customize entity views"),s("OutboundLink")],1)]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"appmodule-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appmodule-xml"}},[e._v("#")]),e._v(" "),s("strong",[e._v("AppModule.xml")])]),e._v(" "),s("p",[e._v("This is same as in "),s("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/solution-components/form",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forms"),s("OutboundLink")],1),e._v(" case. You need to reference id of the view in "),s("strong",[e._v("AppModule_managed.xml")]),e._v(" in order to make the view accessible in the App.")]),e._v(" "),s("p",[e._v('Views type="26"')]),e._v(" "),s("p",[e._v("Please follow conventions in [AppModule](https://docs.talxis.com/en/developer-guide/applications/solution-components/appmodule/ guide (section: "),s("em",[e._v("Forms and Views")]),e._v(").")]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("AppModuleComponent")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("schemaName")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("AppModuleComponent")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("26"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("{16957922-09e4-450b-9d26-9a301117c678}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"order-attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order-attribute"}},[e._v("#")]),e._v(" "),s("strong",[e._v("Order Attribute")])]),e._v(" "),s("p",[e._v("This is not required but highly recommended. It is always better to have records organized somehow. In cases of entities that contains field "),s("strong",[e._v("talxis_internalid")]),e._v(" we often use this field as order attribute.")]),e._v(" "),s("p",[s("strong",[e._v("Example:")])]),e._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("order")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("attribute")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("talxis_internalid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("descending")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("Descending")])]),e._v(" "),s("p",[e._v("Descending defines how records will be sorted accourding to order attribute.")]),e._v(" "),s("p",[s("code",[e._v('descending="true"')]),e._v(": Newer to Older, From Z to A, Larger to Smaller")]),e._v(" "),s("p",[s("code",[e._v('descending="false"')]),e._v(": Older to Newer, From A to Z, Smaller to Larger")]),e._v(" "),s("hr")])}),[],!1,null,null,null);t.default=n.exports}}]);