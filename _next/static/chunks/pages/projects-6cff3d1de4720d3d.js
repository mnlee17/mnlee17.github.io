(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return l(682)}])},7822:function(e,n,l){"use strict";l.d(n,{h:function(){return t}});var s=l(5893),r=l(1664),i=l.n(r);function t(){return(0,s.jsx)("div",{id:"top",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(i(),{style:{padding:"10px"},href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{style:{padding:"10px"},href:"/projects",children:"Projects"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{style:{padding:"10px"},href:"/faith",children:"Faith"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{style:{padding:"10px"},href:"/about",children:"About"})})]})})}},682:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return o}});var s=l(5893),r=l(7822),i=l(7294);function t(e){let{value:n,onSquareClick:l}=e;return(0,s.jsx)("button",{className:"square",style:{height:100,width:100,border:"1.5px solid",verticalAlign:"top"},onClick:l,children:n})}function c(e){let n,{xIsNext:l,squares:r,onPlay:i}=e;function c(e){if(u(r)||r[e])return;let n=r.slice();l?n[e]="X":n[e]="O",i(n)}console.log(l,r,i);let a=u(r);return n=a?"Winner: "+a:"Next player: "+(l?"X":"O"),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"status",children:n}),(0,s.jsxs)("div",{className:"board-row",children:[(0,s.jsx)(t,{value:r[0],onSquareClick:()=>c(0)}),(0,s.jsx)(t,{value:r[1],onSquareClick:()=>c(1)}),(0,s.jsx)(t,{value:r[2],onSquareClick:()=>c(2)})]}),(0,s.jsxs)("div",{className:"board-row",children:[(0,s.jsx)(t,{value:r[3],onSquareClick:()=>c(3)}),(0,s.jsx)(t,{value:r[4],onSquareClick:()=>c(4)}),(0,s.jsx)(t,{value:r[5],onSquareClick:()=>c(5)})]}),(0,s.jsxs)("div",{className:"board-row",children:[(0,s.jsx)(t,{value:r[6],onSquareClick:()=>c(6)}),(0,s.jsx)(t,{value:r[7],onSquareClick:()=>c(7)}),(0,s.jsx)(t,{value:r[8],onSquareClick:()=>c(8)})]})]})}function a(){let[e,n]=(0,i.useState)([Array(9).fill(null)]),[l,r]=(0,i.useState)(0),t=e[l];return(0,s.jsxs)("div",{className:"game",children:[(0,s.jsx)("div",{className:"game-board",children:(0,s.jsx)(c,{xIsNext:l%2==0,squares:t,onPlay:function(s){let i=[...e.slice(0,l+1),s];n(i),n([...e,s]),r(i.length-1)}})}),(0,s.jsx)("div",{className:"game-info"})]})}function u(e){let n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let l=0;l<n.length;l++){let[s,r,i]=n[l];if(e[s]&&e[s]===e[r]&&e[s]===e[i])return e[s]}return null}function o(){return(0,s.jsxs)("main",{children:[(0,s.jsx)(r.h,{}),(0,s.jsx)("h1",{children:"MY CODING PROJECTS:"}),(0,s.jsx)("p",{children:"Tic-tac-toe game:"}),(0,s.jsx)("br",{}),(0,s.jsx)(a,{})]})}}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);