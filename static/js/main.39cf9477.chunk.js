(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,t,e){n.exports=e(24)},18:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(4),i=e.n(o),c=(e(18),e(3)),u=e(1),f=e(2);function l(){var n=Object(u.a)(["\n  background: #ffffff22;\n  height: ",";\n  width: 100vw;\n"]);return l=function(){return n},n}function d(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  background: ",";\n  height: 100vh;\n  width: 100vw;\n  opacity: 0.5;\n"]);return d=function(){return n},n}var v=f.a.div(d(),function(n){return n.color}),s=f.a.div(l(),function(n){return"".concat(n.percentage,"%")});function b(n){var t=n.color,e=n.percentage;return a.a.createElement(v,{color:t},a.a.createElement(s,{percentage:e}))}function w(){var n=Object(u.a)(["\n  display: block;\n  font-size: 30vw;\n  line-height: 10vw;\n  color: #fff;\n"]);return w=function(){return n},n}function h(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n  align-items: center;\n  justify-content: center;\n"]);return h=function(){return n},n}var p=f.a.div(h()),g=f.a.span(w());function m(n){var t=n.time;return a.a.createElement(p,null,a.a.createElement(g,null,t))}function E(){var n=Object(u.a)(["\n  width: 10vw;\n  height: 10vw;\n  background: #ffffff77;\n  border: none;\n"]);return E=function(){return n},n}var O=f.a.button(E());function j(){var n=Object(u.a)(["\n  display: block;\n  border-style: solid;\n  border-width: 5vw 0 5vw 10vw;\n  border-color: transparent transparent transparent #ffffff77;\n  background: transparent;\n  width: 0;\n  height: 0;\n  padding: 0;\n"]);return j=function(){return n},n}var k=f.a.button(j());function y(){var n=Object(u.a)(['\n  display: inline-block;\n  width: 10vw;\n  height: 10vw;\n  position: relative;\n  padding: 0;\n  background: none;\n  border-top: 1vw solid #ffffff77;\n  border-bottom: 1vw solid #ffffff78;\n  border-right: 1vw solid #ffffff77;\n  border-left: 1vw solid transparent;\n  border-radius: 10vw;\n\n  :after {\n    content: "";\n    display: block;\n    position: absolute;\n    border-top: 3vw solid transparent;\n    border-bottom: 3vw solid transparent;\n    border-right: 3vw solid #ffffff77;\n    transform: rotate(-45deg) translate(-0.5vw,-1.3vw);\n  }\n']);return y=function(){return n},n}var S=f.a.div(y());function D(){var n=Object(u.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 50vh;\n  padding-top: 20vw;\n  width: 100vw;\n  height: 30vw;\n  align-items: center;\n  justify-content: space-between;\n"]);return D=function(){return n},n}var x=f.a.div(D());function R(n){var t=n.onReset,e=n.onStart,r=n.onStop;return n.active?a.a.createElement(x,null,a.a.createElement(O,{onClick:r})):a.a.createElement(x,null,a.a.createElement(k,{onClick:e}),a.a.createElement(S,{onClick:t}))}function C(){var n=Object(u.a)(["\n  background: #222;\n  height: 100vh;\n  width: 100vw;\n"]);return C=function(){return n},n}var I=f.a.main(C());function W(n){return String(n).padStart(2,"0")}function B(n){var t=W(Math.floor(n/60)),e=W(n%60);return"".concat(t,":").concat(e)}function G(n){var t=n.color,e=n.endDate,o=n.duration,i=Object(r.useState)(!1),u=Object(c.a)(i,2),f=u[0],l=u[1],d=Object(r.useState)(B(o)),v=Object(c.a)(d,2),s=v[0],w=v[1],h=Object(r.useState)(0),p=Object(c.a)(h,2),g=p[0],E=p[1];return Object(r.useEffect)(function(){if(f){var n=setInterval(function(){var n=e.getTime()-Date.now(),t=Math.floor(n/1e3);w(B(t)),E(100*(1-t/o)),n<1e3&&l(!1)},1e3);return function(){return clearInterval(n)}}},[e,f]),a.a.createElement(I,null,a.a.createElement(m,{time:s}),a.a.createElement(b,{color:t,percentage:g}),a.a.createElement(R,{onReset:function(){return console.log("TODO")},onStart:function(){return l(!0)},onStop:function(){return l(!1)},active:f}))}var J={RED:"#600",YELLOW:"#660",GREEN:"#060"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(function(){var n=Object(r.useState)(new Date(Date.now()+3e4+1e3)),t=Object(c.a)(n,1)[0];return a.a.createElement(G,{color:J.GREEN,duration:30,endDate:t})},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.39cf9477.chunk.js.map