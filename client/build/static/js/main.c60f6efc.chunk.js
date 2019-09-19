(window["webpackJsonpgoogle-book-search"]=window["webpackJsonpgoogle-book-search"]||[]).push([[0],{29:function(e,t,a){},34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(30),r=a.n(l),c=(a(39),a(7)),s=a(6);a(40),a(41);var i=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg  sticky-top"},o.a.createElement(c.b,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement(c.b,{className:"nav-item",to:"/search"},o.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"},"  Search")),o.a.createElement(c.b,{className:"nav-item",to:"/save"},o.a.createElement("i",{className:"fa fa-bookmark","aria-hidden":"true"},"  Saved")))))};a(47);var m=function(){return o.a.createElement("div",{className:"bodyContainer"},o.a.createElement("h3",null,"(React) Google Books Search"),o.a.createElement("p",null," Search for and Save books of Interest"))};a(48);var u=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",null,"Google Books Search 2019"))},d=a(33),v=a(11),g=a(12),h=a(14),f=a(13),b=a(15),k=(a(49),{errorStyles:{color:"red",fontWeight:20}});var E=function(e){return o.a.createElement("div",{className:"contianer searchForm"},o.a.createElement("h2",null,"Book Search"),o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("form",{className:"form-inline"},o.a.createElement("input",{className:"form-control  mr-sm-2",type:"search",id:"bookname",onChange:e.handleInputChange,name:"bookname",value:e.bookname,placeholder:"input a book name","aria-label":"Search"}),o.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:e.handleSearchFormSubmit,type:"submit"},"Search")),e.error?o.a.createElement("div",{style:k.errorStyles},e.error):o.a.createElement("div",null)))},p=a(10),N=a.n(p),S={getGoogleBooks:function(e){return console.log("in API, title",e),N.a.get("/api/books/googlebooks/"+e)},saveBooks:function(e){return N.a.post("/api/books",e)},getBooks:function(){return N.a.get("/api/books")},deleteBooks:function(e){return N.a.delete("/api/books/"+e)}};a(29),a(67),a(68);function B(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var I=function(e){return o.a.createElement("div",{className:"container-fluid resultContainer"},o.a.createElement(B,null,o.a.createElement("h4",null,"Results"),e.result.map((function(t,a){return t.volumeInfo.title&&t.volumeInfo.title?o.a.createElement(y,{key:a},o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h5",{className:"card-title"},t.volumeInfo.title),o.a.createElement("p",{className:"card-text"},o.a.createElement("small",{className:"text-muted"},t.volumeInfo.authors)),o.a.createElement("img",{src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.smallThumbnail:"",className:"card-img",alt:"book image"})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text card-desc"},t.volumeInfo.description?t.volumeInfo.description:"No description"),o.a.createElement("button",null,o.a.createElement("a",{href:t.volumeInfo.previewLink,target:"_blank",rel:"noopener noreferrer"},"View")),o.a.createElement("button",{onClick:e.handleSaveBooks,title:t.volumeInfo.title,authors:t.volumeInfo.authors,image:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.smallThumbnail:"",link:t.volumeInfo.previewLink,description:t.volumeInfo.description,disabled:!!e.saveSuccess},"Save")))))):o.a.createElement("div",null)}))))},w=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={bookname:"",result:[],errorflag:!1,error:"",loadingflag:!1,displayflag:!1,saveSuccess:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(d.a)({},n,o))},a.handleSearchFormSubmit=function(e){e.preventDefault(),a.setState({errorflag:!1,error:"",displayflag:!1,result:"",saveSuccess:!1}),a.setState({loadingflag:!0}),""===a.state.bookname?a.setState({errorflag:!0,error:"Please input a valid book name!"}):(console.log("this book name",a.state.bookname),S.getGoogleBooks(a.state.bookname).then((function(e){a.setState({result:e.data,loadingflag:!1,displayflag:!0})})).catch((function(e){console.log("get google books err ",e)})))},a.handleSaveBooks=function(e){var t=e.target.attributes.authors.value.split(","),n={title:e.target.attributes.title.value,authors:t,image:e.target.attributes.image?e.target.attributes.image.value:"",link:e.target.attributes.link?e.target.attributes.link.value:"",description:e.target.attributes.description?e.target.attributes.description.value:""};S.saveBooks(n).then((function(e){a.setState({saveSuccess:!0}),console.log("success",e)})).catch((function(e){console.log("save books err ",e)}))},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(E,{handleInputChange:this.handleInputChange,handleSearchFormSubmit:this.handleSearchFormSubmit,error:this.state.error}),this.state.loadingflag&&!this.state.errorflag?o.a.createElement("p",null,"Loading...."):o.a.createElement("p",null),0!==this.state.result.length?o.a.createElement(I,{result:this.state.result,handleSaveBooks:this.handleSaveBooks,saveSuccess:this.state.saveSuccess}):this.state.displayflag?o.a.createElement("h4",null,"No Result to Display"):o.a.createElement("div",null))}}]),t}(n.Component);var C=function(e){return o.a.createElement("div",{className:"container-fluid savedContainer"},o.a.createElement(B,null,e.books.map((function(t){return o.a.createElement(y,{key:t._id},o.a.createElement("div",{className:"card mb-3"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h5",{className:"card-title"},t.title),o.a.createElement("p",{className:"card-text"},o.a.createElement("small",{className:"text-muted"},t.authors)),o.a.createElement("img",{src:t.image,className:"card-img",alt:"book"})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text card-desc"},t.description),o.a.createElement("button",null,o.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},"View")),o.a.createElement("button",{onClick:e.handleDeleteBooks,id:t._id},"Delete"))))))}))))},j=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],error:""},a.componentWillMount=function(){a.getBooks()},a.getBooks=function(){S.getBooks().then((function(e){console.log("success",e),a.setState({books:e.data}),console.log("state books",a.state.books)})).catch((function(e){console.log("get books err ",e)}))},a.handleDeleteBooks=function(e){console.log("delete",e.target.id),S.deleteBooks(e.target.id).then((function(e){console.log("success",e),a.getBooks()})).catch((function(e){console.log("delete books err ",e)}))},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(C,{getBooks:this.getBooks,books:this.state.books,handleDeleteBooks:this.handleDeleteBooks}))}}]),t}(n.Component);var x=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement(m,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",component:w}),o.a.createElement(s.a,{exact:!0,path:"/search",component:w}),o.a.createElement(s.a,{exact:!0,path:"/save",component:j})),o.a.createElement(u,null)))};r.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c60f6efc.chunk.js.map