"use strict";(self.webpackChunkstudy_doxs=self.webpackChunkstudy_doxs||[]).push([[6108],{6108:(t,e,i)=>{i.d(e,{diagram:()=>d});var n=i(74357),s=i(23218),r=(i(27484),i(67780),i(60342),function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,3],i=[1,4],n=[1,5],s=[1,6],r=[1,10,12,14,16,18,19,20,21,22],l=[2,4],a=[1,5,10,12,14,16,18,19,20,21,22],c=[20,21,22],o=[2,7],h=[1,12],u=[1,13],y=[1,14],p=[1,15],d=[1,16],g=[1,17],_={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,n,s,r,l){var a=r.length-1;switch(s){case 3:n.setShowData(!0);break;case 6:this.$=r[a-1];break;case 8:n.addSection(r[a-1],n.cleanupValue(r[a]));break;case 9:this.$=r[a].trim(),n.setDiagramTitle(this.$);break;case 10:this.$=r[a].trim(),n.setAccTitle(this.$);break;case 11:case 12:this.$=r[a].trim(),n.setAccDescription(this.$);break;case 13:n.addSection(r[a].substr(8)),this.$=r[a].substr(8)}},table:[{3:1,4:2,5:e,20:i,21:n,22:s},{1:[3]},{3:7,4:2,5:e,20:i,21:n,22:s},t(r,l,{6:8,7:[1,9]}),t(a,[2,14]),t(a,[2,15]),t(a,[2,16]),{1:[2,1]},t(c,o,{8:10,9:11,1:[2,2],10:h,12:u,14:y,16:p,18:d,19:g}),t(r,l,{6:18}),t(r,[2,5]),{4:19,20:i,21:n,22:s},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},t(c,[2,12]),t(c,[2,13]),t(c,o,{8:10,9:11,1:[2,3],10:h,12:u,14:y,16:p,18:d,19:g}),t(r,[2,6]),t(c,[2,8]),t(c,[2,9]),t(c,[2,10]),t(c,[2,11])],defaultActions:{7:[2,1]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[],s=[null],r=[],l=this.table,a="",c=0,o=0,h=r.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(y.yy[p]=this.yy[p]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var d=u.yylloc;r.push(d);var g=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,f,m,b,k,x,v,S,w,$={};;){if(f=i[i.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==_&&(w=void 0,"number"!=typeof(w=n.pop()||u.lex()||1)&&(w instanceof Array&&(w=(n=w).pop()),w=e.symbols_[w]||w),_=w),m=l[f]&&l[f][_]),void 0===m||!m.length||!m[0]){var E="";for(k in S=[],l[f])this.terminals_[k]&&k>2&&S.push("'"+this.terminals_[k]+"'");E=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(E,{text:u.match,token:this.terminals_[_]||_,line:u.yylineno,loc:d,expected:S})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+_);switch(m[0]){case 1:i.push(_),s.push(u.yytext),r.push(u.yylloc),i.push(m[1]),_=null,o=u.yyleng,a=u.yytext,c=u.yylineno,d=u.yylloc;break;case 2:if(x=this.productions_[m[1]][1],$.$=s[s.length-x],$._$={first_line:r[r.length-(x||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(x||1)].first_column,last_column:r[r.length-1].last_column},g&&($._$.range=[r[r.length-(x||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply($,[a,o,c,y.yy,m[1],s,r].concat(h))))return b;x&&(i=i.slice(0,-1*x*2),s=s.slice(0,-1*x),r=r.slice(0,-1*x)),i.push(this.productions_[m[1]][0]),s.push($.$),r.push($._$),v=l[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}},f={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 20;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:case 15:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};function m(){this.yy={}}return _.lexer=f,m.prototype=_,_.Parser=m,new m}());r.parser=r;const l=r,a=n.A.pie,c={},o=!1;let h=c,u=o;const y=structuredClone(a),p={getConfig:()=>structuredClone(y),clear:()=>{h=structuredClone(c),u=o,(0,n.t)()},setDiagramTitle:n.q,getDiagramTitle:n.r,setAccTitle:n.s,getAccTitle:n.g,setAccDescription:n.b,getAccDescription:n.a,addSection:(t,e)=>{t=(0,n.d)(t,(0,n.c)()),void 0===h[t]&&(h[t]=e,n.l.debug(`added new section: ${t}, with value: ${e}`))},getSections:()=>h,cleanupValue:t=>(":"===t.substring(0,1)&&(t=t.substring(1).trim()),Number(t.trim())),setShowData:t=>{u=t},getShowData:()=>u},d={parser:l,db:p,renderer:{draw:(t,e,i,r)=>{var l,a;n.l.debug("rendering pie chart\n"+t);const c=r.db,o=(0,n.c)(),h=(0,n.B)(c.getConfig(),o.pie),u=450,y=(null==(a=null==(l=document.getElementById(e))?void 0:l.parentElement)?void 0:a.offsetWidth)??h.useWidth,p=(0,n.z)(e);p.attr("viewBox",`0 0 ${y} 450`),(0,n.i)(p,u,y,h.useMaxWidth);const d=18,g=p.append("g");g.attr("transform","translate("+y/2+",225)");const{themeVariables:_}=o;let[f]=(0,n.C)(_.pieOuterStrokeWidth);f??(f=2);const m=h.textPosition,b=Math.min(y,u)/2-40,k=(0,s.Nb1)().innerRadius(0).outerRadius(b),x=(0,s.Nb1)().innerRadius(b*m).outerRadius(b*m);g.append("circle").attr("cx",0).attr("cy",0).attr("r",b+f/2).attr("class","pieOuterCircle");const v=c.getSections(),S=(t=>{const e=Object.entries(t).map((t=>({label:t[0],value:t[1]}))).sort(((t,e)=>e.value-t.value));return(0,s.ve8)().value((t=>t.value))(e)})(v),w=[_.pie1,_.pie2,_.pie3,_.pie4,_.pie5,_.pie6,_.pie7,_.pie8,_.pie9,_.pie10,_.pie11,_.pie12],$=(0,s.PKp)(w);g.selectAll("mySlices").data(S).enter().append("path").attr("d",k).attr("fill",(t=>$(t.data.label))).attr("class","pieCircle");let E=0;Object.keys(v).forEach((t=>{E+=v[t]})),g.selectAll("mySlices").data(S).enter().append("text").text((t=>(t.data.value/E*100).toFixed(0)+"%")).attr("transform",(t=>"translate("+x.centroid(t)+")")).style("text-anchor","middle").attr("class","slice"),g.append("text").text(c.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const A=g.selectAll(".legend").data($.domain()).enter().append("g").attr("class","legend").attr("transform",((t,e)=>"translate(216,"+(22*e-22*$.domain().length/2)+")"));A.append("rect").attr("width",d).attr("height",d).style("fill",$).style("stroke",$),A.data(S).append("text").attr("x",22).attr("y",14).text((t=>{const{label:e,value:i}=t.data;return c.getShowData()?`${e} [${i}]`:e}))}},styles:t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${t.pieOuterStrokeColor};\n    stroke-width: ${t.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`}}}]);