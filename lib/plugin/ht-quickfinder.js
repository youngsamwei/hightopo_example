!function(n,K){"use strict";var t="ht",T=n[t],u=function(Q){return(/ble$/.test(Q)||/ed$/.test(Q)||T.IsGetter[Q]?"is":"get")+Q.charAt(0).toUpperCase()+Q.slice(1)};T.QuickFinder=function(k,y,F,e,Y){var g=this;g.$9j={},g.$1j=k,g.$2j=y,g.$3j=F,g.$4j=e||g.getValue,g.$5j=Y||g.$5j,k.each(g.$7j,g),k.mm(g.$11j,g,!0),k.md(g.$12j,g,!0)},T.Default.def(T.QuickFinder,K,{$6j:"__ht__null__",getValueFunc:function(){return this.$4j},getFilterFunc:function(){return this.$5j},$11j:function($){"add"===$.kind?this.$7j($.data):"remove"===$.kind?this.$8j($.data):"clear"===$.kind&&(this.$9j={})},$12j:function(i){var G=this,h=G.$3j,K=G.$2j;if(G.$5j(i.data)){if(null==h&&K===i.property);else if("style"===h&&"s:"+K===i.property);else if("attr"!==h||"a:"+K!==i.property)return;var X=G.$10j(i.oldValue);X&&X.remove(i.data),G.$7j(i.data)}},$10j:function(m){return m=null==m?this.$6j:m,this.$9j[m]},find:function(e){var k=this.$10j(e);return k?k.toList():new T.List},findFirst:function(_){var O=this.$10j(_);return!O||O.isEmpty()?null:O.get(0)},$7j:function(y){var C=this;if(C.$5j(y)){var m=C.$4j(y),_=C.$10j(m);_||(_=new T.List,m=null==m?C.$6j:m,C.$9j[m]=_),_.add(y)}},$8j:function(E){var V=this;if(V.$5j(E)){var e=V.$4j(E),k=V.$10j(e);k&&(k.remove(E),k.isEmpty()&&(e=null==e?V.$6j:e,delete V.$9j[e]))}},dispose:function(){this.$1j.umm(this.$11j,this),this.$1j.umd(this.$12j,this),delete this.$1j},getDataModel:function(){return this.$1j},getAccessType:function(){return this.$3j},getPropertyName:function(){return this.$2j},$5j:function(Y){return null!=this.$3j||this.$4j!==this.getValue||Y[u(this.$2j)]?!0:!1},getValue:function(t){var $=this,v=$.$3j,q=$.$2j;return null==v?t[u(q)]():"style"===v?t.s(q):"attr"===v?t.a(q):void 0}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);