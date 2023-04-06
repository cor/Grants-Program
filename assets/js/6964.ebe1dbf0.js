"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6964],{6964:(e,t,s)=>{s.r(t),s.d(t,{diagram:()=>L});var o=s(1341),r=s(45625),a=s(59373),i=s(70044),n=s(12566),d=s(81188);s(27856),s(27484),s(42494),s(39354),s(31898),s(17967);const l="rect",c="rectWithTitle",p="statediagram",g=`${p}-state`,b="transition",h=`${b} note-edge`,u=`${p}-note`,y=`${p}-cluster`,f=`${p}-cluster-alt`,w="parent",x="note",$="----",m=`${$}${x}`,T=`${$}${w}`,k="fill:none",S="fill: #333",D="text",v="normal";let A={},B=0;function E(e="",t=0,s="",o=$){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const C=(e,t,s,r,a,n)=>{const d=s.id,p=null==(b=r[d])?"":b.classes?b.classes.join(" "):"";var b;if("root"!==d){let t=l;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.a&&(t=s.type),A[d]||(A[d]={id:d,shape:t,description:i.e.sanitizeText(d,(0,i.g)()),classes:`${p} ${g}`});const r=A[d];s.description&&(Array.isArray(r.description)?(r.shape=c,r.description.push(s.description)):r.description.length>0?(r.shape=c,r.description===d?r.description=[s.description]:r.description=[r.description,s.description]):(r.shape=l,r.description=s.description),r.description=i.e.sanitizeTextOrArray(r.description,(0,i.g)())),1===r.description.length&&r.shape===c&&(r.shape=l),!r.type&&s.doc&&(i.l.info("Setting cluster for ",d,V(s)),r.type="group",r.dir=V(s),r.shape=s.type===o.b?"divider":"roundedWithTitle",r.classes=r.classes+" "+y+" "+(n?f:""));const a={labelStyle:"",shape:r.shape,labelText:r.description,classes:r.classes,style:"",id:d,dir:r.dir,domId:E(d,B),type:r.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:u,style:"",id:d+m+"-"+B,domId:E(d,B,x),type:r.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:r.classes,style:"",id:d+T,domId:E(d,B,w),type:"group",padding:0};B++;const i=d+T;e.setNode(i,o),e.setNode(t.id,t),e.setNode(d,a),e.setParent(d,i),e.setParent(t.id,i);let n=d,l=t.id;"left of"===s.note.position&&(n=t.id,l=d),e.setEdge(n,l,{arrowhead:"none",arrowType:"",style:k,labelStyle:"",classes:h,arrowheadStyle:S,labelpos:"c",labelType:D,thickness:v})}else e.setNode(d,a)}t&&"root"!==t.id&&(i.l.trace("Setting node ",d," to be child of its parent ",t.id),e.setParent(d,t.id)),s.doc&&(i.l.trace("Adding nodes children "),R(e,s,s.doc,r,a,!n))},R=(e,t,s,r,a,n)=>{i.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.c:case o.a:C(e,t,s,r,a,n);break;case o.S:{C(e,t,s.state1,r,a,n),C(e,t,s.state2,r,a,n);const o={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:k,labelStyle:"",label:i.e.sanitizeText(s.description,(0,i.g)()),arrowheadStyle:S,labelpos:"c",labelType:D,thickness:v,classes:b};e.setEdge(s.state1.id,s.state2.id,o,B),B++}}}))},V=(e,t=o.e)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},N={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){i.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(s){return s}},draw:function(e,t,s,c){i.l.info("Drawing state diagram (v2)",t),A={};let g=c.db.getDirection();void 0===g&&(g=o.D);const{securityLevel:b,state:h}=(0,i.g)(),u=h.nodeSpacing||50,y=h.rankSpacing||50;i.l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),i.l.info(c.db.getRootDocV2());const f=c.db.getStates(),w=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:V(c.db.getRootDocV2()),nodesep:u,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let x;C(w,void 0,c.db.getRootDocV2(),f,c.db,!0),"sandbox"===b&&(x=(0,a.Ys)("#i"+t));const $="sandbox"===b?(0,a.Ys)(x.nodes()[0].contentDocument.body):(0,a.Ys)("body"),m=$.select(`[id="${t}"]`),T=$.select("#"+t+" g");(0,n.r)(T,w,["barb"],p,t);d.u.insertTitle(m,"statediagramTitleText",h.titleTopMargin,c.db.getDiagramTitle());const k=m.node().getBBox(),S=k.width+16,D=k.height+16;m.attr("class",p);const v=m.node().getBBox();(0,d.k)(m,D,S,h.useMaxWidth);const B=`${v.x-8} ${v.y-8} ${S} ${D}`;i.l.debug(`viewBox ${B}`),m.attr("viewBox",B);const E=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const o of E){const e=o.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",l);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),o.insertBefore(t,o.firstChild)}}},L={parser:o.p,db:o.d,renderer:N,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);