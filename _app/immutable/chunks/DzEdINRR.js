import{c as z,g as J}from"./Cpj98o6Y.js";function ce(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")}var V=ce,he=typeof z=="object"&&z&&z.Object===Object&&z,ue=he,de=ue,fe=typeof self=="object"&&self&&self.Object===Object&&self,pe=de||fe||Function("return this")(),K=pe,ve=K,me=function(){return ve.Date.now()},ge=me,be=/\s/;function ye(i){for(var t=i.length;t--&&be.test(i.charAt(t)););return t}var Ee=ye,xe=Ee,Oe=/^\s+/;function Se(i){return i&&i.slice(0,xe(i)+1).replace(Oe,"")}var we=Se,Ae=K,We=Ae.Symbol,ee=We,X=ee,te=Object.prototype,ke=te.hasOwnProperty,Me=te.toString,T=X?X.toStringTag:void 0;function _e(i){var t=ke.call(i,T),r=i[T];try{i[T]=void 0;var e=!0}catch{}var s=Me.call(i);return e&&(t?i[T]=r:delete i[T]),s}var Te=_e,Ce=Object.prototype,ze=Ce.toString;function Le(i){return ze.call(i)}var Ne=Le,Y=ee,De=Te,Re=Ne,je="[object Null]",$e="[object Undefined]",F=Y?Y.toStringTag:void 0;function He(i){return i==null?i===void 0?$e:je:F&&F in Object(i)?De(i):Re(i)}var Ve=He;function Be(i){return i!=null&&typeof i=="object"}var Pe=Be,Ie=Ve,Xe=Pe,Ye="[object Symbol]";function Fe(i){return typeof i=="symbol"||Xe(i)&&Ie(i)==Ye}var qe=Fe,Ue=we,q=V,Ge=qe,U=NaN,Qe=/^[-+]0x[0-9a-f]+$/i,Ze=/^0b[01]+$/i,Je=/^0o[0-7]+$/i,Ke=parseInt;function et(i){if(typeof i=="number")return i;if(Ge(i))return U;if(q(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=q(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=Ue(i);var r=Ze.test(i);return r||Je.test(i)?Ke(i.slice(2),r?2:8):Qe.test(i)?U:+i}var tt=et,it=V,D=ge,G=tt,rt="Expected a function",st=Math.max,nt=Math.min;function lt(i,t,r){var e,s,n,l,o,a,c=0,p=!1,u=!1,v=!0;if(typeof i!="function")throw new TypeError(rt);t=G(t)||0,it(r)&&(p=!!r.leading,u="maxWait"in r,n=u?st(G(r.maxWait)||0,t):n,v="trailing"in r?!!r.trailing:v);function d(h){var b=e,y=s;return e=s=void 0,c=h,l=i.apply(y,b),l}function W(h){return c=h,o=setTimeout(g,t),p?d(h):l}function x(h){var b=h-a,y=h-c,I=t-b;return u?nt(I,n-y):I}function E(h){var b=h-a,y=h-c;return a===void 0||b>=t||b<0||u&&y>=n}function g(){var h=D();if(E(h))return O(h);o=setTimeout(g,x(h))}function O(h){return o=void 0,v&&e?d(h):(e=s=void 0,l)}function C(){o!==void 0&&clearTimeout(o),c=0,e=a=s=o=void 0}function N(){return o===void 0?l:O(D())}function _(){var h=D(),b=E(h);if(e=arguments,s=this,a=h,b){if(o===void 0)return W(a);if(u)return clearTimeout(o),o=setTimeout(g,t),d(a)}return o===void 0&&(o=setTimeout(g,t)),l}return _.cancel=C,_.flush=N,_}var ie=lt;const R=J(ie);var ot=ie,at=V,ct="Expected a function";function ht(i,t,r){var e=!0,s=!0;if(typeof i!="function")throw new TypeError(ct);return at(r)&&(e="leading"in r?!!r.leading:e,s="trailing"in r?!!r.trailing:s),ot(i,t,{leading:e,maxWait:t,trailing:s})}var ut=ht;const dt=J(ut);var M=function(){return M=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},M.apply(this,arguments)};function re(i){return!i||!i.ownerDocument||!i.ownerDocument.defaultView?window:i.ownerDocument.defaultView}function se(i){return!i||!i.ownerDocument?document:i.ownerDocument}var ne=function(i){var t={},r=Array.prototype.reduce.call(i,function(e,s){var n=s.name.match(/data-simplebar-(.+)/);if(n){var l=n[1].replace(/\W+(.)/g,function(o,a){return a.toUpperCase()});switch(s.value){case"true":e[l]=!0;break;case"false":e[l]=!1;break;case void 0:e[l]=!0;break;default:e[l]=s.value}}return e},t);return r};function le(i,t){var r;i&&(r=i.classList).add.apply(r,t.split(" "))}function oe(i,t){i&&t.split(" ").forEach(function(r){i.classList.remove(r)})}function ae(i){return".".concat(i.split(" ").join("."))}var B=!!(typeof window<"u"&&window.document&&window.document.createElement),ft=Object.freeze({__proto__:null,addClasses:le,canUseDOM:B,classNamesToQuery:ae,getElementDocument:se,getElementWindow:re,getOptions:ne,removeClasses:oe}),k=null,Q=null;B&&window.addEventListener("resize",function(){Q!==window.devicePixelRatio&&(Q=window.devicePixelRatio,k=null)});function Z(){if(k===null){if(typeof document>"u")return k=0,k;var i=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),i.appendChild(t);var r=t.getBoundingClientRect().right;i.removeChild(t),k=r}return k}var S=re,j=se,pt=ne,w=le,A=oe,f=ae,L=function(){function i(t,r){r===void 0&&(r={});var e=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var s=S(e.el);e.scrollXTicking||(s.requestAnimationFrame(e.scrollX),e.scrollXTicking=!0),e.scrollYTicking||(s.requestAnimationFrame(e.scrollY),e.scrollYTicking=!0),e.isScrolling||(e.isScrolling=!0,w(e.el,e.classNames.scrolling)),e.showScrollbar("x"),e.showScrollbar("y"),e.onStopScrolling()},this.scrollX=function(){e.axis.x.isOverflowing&&e.positionScrollbar("x"),e.scrollXTicking=!1},this.scrollY=function(){e.axis.y.isOverflowing&&e.positionScrollbar("y"),e.scrollYTicking=!1},this._onStopScrolling=function(){A(e.el,e.classNames.scrolling),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isScrolling=!1},this.onMouseEnter=function(){e.isMouseEntering||(w(e.el,e.classNames.mouseEntered),e.showScrollbar("x"),e.showScrollbar("y"),e.isMouseEntering=!0),e.onMouseEntered()},this._onMouseEntered=function(){A(e.el,e.classNames.mouseEntered),e.options.autoHide&&(e.hideScrollbar("x"),e.hideScrollbar("y")),e.isMouseEntering=!1},this._onMouseMove=function(s){e.mouseX=s.clientX,e.mouseY=s.clientY,(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseMoveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseMoveForAxis("y")},this.onMouseLeave=function(){e.onMouseMove.cancel(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&e.onMouseLeaveForAxis("x"),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&e.onMouseLeaveForAxis("y"),e.mouseX=-1,e.mouseY=-1},this._onWindowResize=function(){e.scrollbarWidth=e.getScrollbarWidth(),e.hideNativeScrollbar()},this.onPointerEvent=function(s){if(!(!e.axis.x.track.el||!e.axis.y.track.el||!e.axis.x.scrollbar.el||!e.axis.y.scrollbar.el)){var n,l;e.axis.x.track.rect=e.axis.x.track.el.getBoundingClientRect(),e.axis.y.track.rect=e.axis.y.track.el.getBoundingClientRect(),(e.axis.x.isOverflowing||e.axis.x.forceVisible)&&(n=e.isWithinBounds(e.axis.x.track.rect)),(e.axis.y.isOverflowing||e.axis.y.forceVisible)&&(l=e.isWithinBounds(e.axis.y.track.rect)),(n||l)&&(s.stopPropagation(),s.type==="pointerdown"&&s.pointerType!=="touch"&&(n&&(e.axis.x.scrollbar.rect=e.axis.x.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.x.scrollbar.rect)?e.onDragStart(s,"x"):e.onTrackClick(s,"x")),l&&(e.axis.y.scrollbar.rect=e.axis.y.scrollbar.el.getBoundingClientRect(),e.isWithinBounds(e.axis.y.scrollbar.rect)?e.onDragStart(s,"y"):e.onTrackClick(s,"y"))))}},this.drag=function(s){var n,l,o,a,c,p,u,v,d,W,x;if(!(!e.draggedAxis||!e.contentWrapperEl)){var E,g=e.axis[e.draggedAxis].track,O=(l=(n=g.rect)===null||n===void 0?void 0:n[e.axis[e.draggedAxis].sizeAttr])!==null&&l!==void 0?l:0,C=e.axis[e.draggedAxis].scrollbar,N=(a=(o=e.contentWrapperEl)===null||o===void 0?void 0:o[e.axis[e.draggedAxis].scrollSizeAttr])!==null&&a!==void 0?a:0,_=parseInt((p=(c=e.elStyles)===null||c===void 0?void 0:c[e.axis[e.draggedAxis].sizeAttr])!==null&&p!==void 0?p:"0px",10);s.preventDefault(),s.stopPropagation(),e.draggedAxis==="y"?E=s.pageY:E=s.pageX;var h=E-((v=(u=g.rect)===null||u===void 0?void 0:u[e.axis[e.draggedAxis].offsetAttr])!==null&&v!==void 0?v:0)-e.axis[e.draggedAxis].dragOffset;h=e.draggedAxis==="x"&&e.isRtl?((W=(d=g.rect)===null||d===void 0?void 0:d[e.axis[e.draggedAxis].sizeAttr])!==null&&W!==void 0?W:0)-C.size-h:h;var b=h/(O-C.size),y=b*(N-_);e.draggedAxis==="x"&&e.isRtl&&(y=!((x=i.getRtlHelpers())===null||x===void 0)&&x.isScrollingToNegative?-y:y),e.contentWrapperEl[e.axis[e.draggedAxis].scrollOffsetAttr]=y}},this.onEndDrag=function(s){e.isDragging=!1;var n=j(e.el),l=S(e.el);s.preventDefault(),s.stopPropagation(),A(e.el,e.classNames.dragging),e.onStopScrolling(),n.removeEventListener("mousemove",e.drag,!0),n.removeEventListener("mouseup",e.onEndDrag,!0),e.removePreventClickId=l.setTimeout(function(){n.removeEventListener("click",e.preventClick,!0),n.removeEventListener("dblclick",e.preventClick,!0),e.removePreventClickId=null})},this.preventClick=function(s){s.preventDefault(),s.stopPropagation()},this.el=t,this.options=M(M({},i.defaultOptions),r),this.classNames=M(M({},i.defaultOptions.classNames),r.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=dt(this._onMouseMove,64),this.onWindowResize=R(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=R(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=R(this._onMouseEntered,this.stopScrollDelay),this.init()}return i.getRtlHelpers=function(){if(i.rtlHelpers)return i.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var r=t.firstElementChild,e=r==null?void 0:r.firstElementChild;if(!e)return null;document.body.appendChild(r),r.scrollLeft=0;var s=i.getOffset(r),n=i.getOffset(e);r.scrollLeft=-999;var l=i.getOffset(e);return document.body.removeChild(r),i.rtlHelpers={isScrollOriginAtZero:s.left!==n.left,isScrollingToNegative:n.left!==l.left},i.rtlHelpers},i.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Z()}catch{return Z()}},i.getOffset=function(t){var r=t.getBoundingClientRect(),e=j(t),s=S(t);return{top:r.top+(s.pageYOffset||e.documentElement.scrollTop),left:r.left+(s.pageXOffset||e.documentElement.scrollLeft)}},i.prototype.init=function(){B&&(this.initDOM(),this.rtlHelpers=i.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},i.prototype.initDOM=function(){var t,r;this.wrapperEl=this.el.querySelector(f(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(f(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(f(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(f(this.classNames.offset)),this.maskEl=this.el.querySelector(f(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,f(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(f(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(f(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(f(this.classNames.track)).concat(f(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(f(this.classNames.track)).concat(f(this.classNames.vertical))),this.axis.x.scrollbar.el=((t=this.axis.x.track.el)===null||t===void 0?void 0:t.querySelector(f(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((r=this.axis.y.track.el)===null||r===void 0?void 0:r.querySelector(f(this.classNames.scrollbar)))||null,this.options.autoHide||(w(this.axis.x.scrollbar.el,this.classNames.visible),w(this.axis.y.scrollbar.el,this.classNames.visible))},i.prototype.initListeners=function(){var t=this,r,e=S(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(r=this.contentWrapperEl)===null||r===void 0||r.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var s=!1,n=e.ResizeObserver||ResizeObserver;this.resizeObserver=new n(function(){s&&e.requestAnimationFrame(function(){t.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame(function(){s=!0})}this.mutationObserver=new e.MutationObserver(function(){e.requestAnimationFrame(function(){t.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},i.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var t=S(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var r=this.contentEl.offsetWidth,e=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||r>0,n=this.contentWrapperEl.offsetWidth,l=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=s?"".concat(r||c,"px"):"auto",this.placeholderEl.style.height="".concat(a,"px");var p=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=r!==0&&c>r,this.axis.y.isOverflowing=a>p,this.axis.x.isOverflowing=l==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=o==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,v=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>n-v,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>p-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},i.prototype.getScrollbarSize=function(t){var r,e;if(t===void 0&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var s=this.contentEl[this.axis[t].scrollSizeAttr],n=(e=(r=this.axis[t].track.el)===null||r===void 0?void 0:r[this.axis[t].offsetSizeAttr])!==null&&e!==void 0?e:0,l=n/s,o;return o=Math.max(~~(l*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(o=Math.min(o,this.options.scrollbarMaxSize)),o},i.prototype.positionScrollbar=function(t){var r,e,s;t===void 0&&(t="y");var n=this.axis[t].scrollbar;if(!(!this.axis[t].isOverflowing||!this.contentWrapperEl||!n.el||!this.elStyles)){var l=this.contentWrapperEl[this.axis[t].scrollSizeAttr],o=((r=this.axis[t].track.el)===null||r===void 0?void 0:r[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c=t==="x"&&this.isRtl&&(!((e=i.getRtlHelpers())===null||e===void 0)&&e.isScrollOriginAtZero)?-c:c,t==="x"&&this.isRtl&&(c=!((s=i.getRtlHelpers())===null||s===void 0)&&s.isScrollingToNegative?c:-c);var p=c/(l-a),u=~~((o-n.size)*p);u=t==="x"&&this.isRtl?-u+(o-n.size):u,n.el.style.transform=t==="x"?"translate3d(".concat(u,"px, 0, 0)"):"translate3d(0, ".concat(u,"px, 0)")}},i.prototype.toggleTrackVisibility=function(t){t===void 0&&(t="y");var r=this.axis[t].track.el,e=this.axis[t].scrollbar.el;!r||!e||!this.contentWrapperEl||(this.axis[t].isOverflowing||this.axis[t].forceVisible?(r.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(r.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?e.style.display="block":e.style.display="none")},i.prototype.showScrollbar=function(t){t===void 0&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(w(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},i.prototype.hideScrollbar=function(t){t===void 0&&(t="y"),!this.isDragging&&this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(A(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},i.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},i.prototype.onMouseMoveForAxis=function(t){t===void 0&&(t="y");var r=this.axis[t];!r.track.el||!r.scrollbar.el||(r.track.rect=r.track.el.getBoundingClientRect(),r.scrollbar.rect=r.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(r.track.rect)?(this.showScrollbar(t),w(r.track.el,this.classNames.hover),this.isWithinBounds(r.scrollbar.rect)?w(r.scrollbar.el,this.classNames.hover):A(r.scrollbar.el,this.classNames.hover)):(A(r.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},i.prototype.onMouseLeaveForAxis=function(t){t===void 0&&(t="y"),A(this.axis[t].track.el,this.classNames.hover),A(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},i.prototype.onDragStart=function(t,r){var e;r===void 0&&(r="y"),this.isDragging=!0;var s=j(this.el),n=S(this.el),l=this.axis[r].scrollbar,o=r==="y"?t.pageY:t.pageX;this.axis[r].dragOffset=o-(((e=l.rect)===null||e===void 0?void 0:e[this.axis[r].offsetAttr])||0),this.draggedAxis=r,w(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},i.prototype.onTrackClick=function(t,r){var e=this,s,n,l,o;r===void 0&&(r="y");var a=this.axis[r];if(!(!this.options.clickOnTrack||!a.scrollbar.el||!this.contentWrapperEl)){t.preventDefault();var c=S(this.el);this.axis[r].scrollbar.rect=a.scrollbar.el.getBoundingClientRect();var p=this.axis[r].scrollbar,u=(n=(s=p.rect)===null||s===void 0?void 0:s[this.axis[r].offsetAttr])!==null&&n!==void 0?n:0,v=parseInt((o=(l=this.elStyles)===null||l===void 0?void 0:l[this.axis[r].sizeAttr])!==null&&o!==void 0?o:"0px",10),d=this.contentWrapperEl[this.axis[r].scrollOffsetAttr],W=r==="y"?this.mouseY-u:this.mouseX-u,x=W<0?-1:1,E=x===-1?d-v:d+v,g=40,O=function(){e.contentWrapperEl&&(x===-1?d>E&&(d-=g,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=d,c.requestAnimationFrame(O)):d<E&&(d+=g,e.contentWrapperEl[e.axis[r].scrollOffsetAttr]=d,c.requestAnimationFrame(O)))};O()}},i.prototype.getContentElement=function(){return this.contentEl},i.prototype.getScrollElement=function(){return this.contentWrapperEl},i.prototype.removeListeners=function(){var t=S(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},i.prototype.unMount=function(){this.removeListeners()},i.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},i.prototype.findChild=function(t,r){var e=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(s){return e.call(s,r)})[0]},i.rtlHelpers=null,i.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},i.getOptions=pt,i.helpers=ft,i}(),H=function(i,t){return H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])},H(i,t)};function vt(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");H(i,t);function r(){this.constructor=i}i.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var P=L.helpers,$=P.getOptions,m=P.addClasses,mt=P.canUseDOM,gt=function(i){vt(t,i);function t(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var s=i.apply(this,r)||this;return t.instances.set(r[0],s),s}return t.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(r){r.getAttribute("data-simplebar")!=="init"&&!t.instances.has(r)&&new t(r,$(r.attributes))})},t.removeObserver=function(){var r;(r=t.globalObserver)===null||r===void 0||r.disconnect()},t.prototype.initDOM=function(){var r=this,e,s,n;if(!Array.prototype.filter.call(this.el.children,function(a){return a.classList.contains(r.classNames.wrapper)}).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),m(this.wrapperEl,this.classNames.wrapper),m(this.contentWrapperEl,this.classNames.contentWrapper),m(this.offsetEl,this.classNames.offset),m(this.maskEl,this.classNames.mask),m(this.contentEl,this.classNames.contentEl),m(this.placeholderEl,this.classNames.placeholder),m(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),m(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),(e=this.contentWrapperEl)===null||e===void 0||e.setAttribute("tabindex",this.options.tabIndex.toString()),(s=this.contentWrapperEl)===null||s===void 0||s.setAttribute("role","region"),(n=this.contentWrapperEl)===null||n===void 0||n.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var l=document.createElement("div"),o=document.createElement("div");m(l,this.classNames.track),m(o,this.classNames.scrollbar),l.appendChild(o),this.axis.x.track.el=l.cloneNode(!0),m(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=l.cloneNode(!0),m(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}L.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},t.prototype.unMount=function(){L.prototype.unMount.call(this),t.instances.delete(this.el)},t.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),typeof MutationObserver<"u"&&(this.globalObserver=new MutationObserver(t.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},t.handleMutations=function(r){r.forEach(function(e){e.addedNodes.forEach(function(s){s.nodeType===1&&(s.hasAttribute("data-simplebar")?!t.instances.has(s)&&document.documentElement.contains(s)&&new t(s,$(s.attributes)):s.querySelectorAll("[data-simplebar]").forEach(function(n){n.getAttribute("data-simplebar")!=="init"&&!t.instances.has(n)&&document.documentElement.contains(n)&&new t(n,$(n.attributes))}))}),e.removedNodes.forEach(function(s){var n;s.nodeType===1&&(s.getAttribute("data-simplebar")==="init"?!document.documentElement.contains(s)&&((n=t.instances.get(s))===null||n===void 0||n.unMount()):Array.prototype.forEach.call(s.querySelectorAll('[data-simplebar="init"]'),function(l){var o;!document.documentElement.contains(l)&&((o=t.instances.get(l))===null||o===void 0||o.unMount())}))})})},t.instances=new WeakMap,t}(L);mt&&gt.initHtmlApi();export{gt as default};
