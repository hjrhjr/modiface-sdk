var MFEFaceTracker=function(t,e,i){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
function n(t,e,i,n){return new(i||(i=Promise))((function(r,a){function o(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))}function r(t,e){var i,n,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],n=0}finally{i=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var a=function(t,e){if(void 0===e&&(e=null),!t)throw console.trace(),new Error("Assertion failed: "+e)},o=function(t,e,i,n){this.x=t,this.y=e,this.width=i,this.height=n};function s(t){return t.width*t.height}function c(t,e){var i=function(t,e){var i=new o(0,0,0,0);i.x=Math.max(t.x,e.x),i.y=Math.max(t.y,e.y);var n=Math.min(t.x+t.width,e.x+e.width),r=Math.min(t.y+t.height,e.y+e.height);return i.width=n-i.x,i.height=r-i.y,i}(t,e),n=function(t,e){var i=new o(0,0,0,0),n=Math.min(t.x,e.x),r=Math.max(t.x+t.width,e.x+e.width),a=Math.min(t.y,e.y),s=Math.max(t.y+t.height,e.y+e.height);return i.x=n,i.y=a,i.width=r-n,i.height=s-a,i}(t,e);return s(i)/s(n)}function h(t){var e=t[0],i=t.slice(1,e+1);return function(t,e){for(var i=Uint8Array.from(t),n=0;n<t.length;n+=1)i[n]=t[n]^e[n%e.length];return i}(t.slice(e+1,t.length),i)}function u(t,e,i){var n=t[e+1],r=t[e+2]*i,a=t[e+3]*i;return{x:r,y:a,width:t[e+4]*i-r,height:t[e+5]*i-a,score:n}}function l(t,e){var i=function(t,e){var i=new o(0,0,0,0);i.x=Math.max(t.x,e.x),i.y=Math.max(t.y,e.y);var n=Math.min(t.x+t.width,e.x+e.width),r=Math.min(t.y+t.height,e.y+e.height);return i.width=n-i.x,i.height=r-i.y,i}(t,e);if(i.width<=0||i.height<=0)return 0;var n=Math.min(t.width*t.height,e.width*e.height);return i.width*i.height/n}var f,d=function(){function t(){this.scoreThreshold=.5}return t.prototype.loadModel=function(t,e,i){return void 0===i&&(i=!1),n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return[4,fetch(t)];case 1:return[4,r.sent().arrayBuffer()];case 2:return n=r.sent(),[4,this.loadFromData(n,e,i)];case 3:return r.sent(),[2]}}))}))},t.prototype.loadFromData=function(t,i,a){return void 0===a&&(a=!1),n(this,void 0,void 0,(function(){var n,o,s;return r(this,(function(r){switch(r.label){case 0:return n=new Uint8Array(t),o=a?h(n):n,s=this,[4,e.loader.loadMNN(o,i,["input_0"],["concat_8"])];case 1:return s.varMap=r.sent(),this.modelInput=this.varMap.input_0,this.modelOutput=this.varMap.concat_8,[2]}}))}))},t.prototype.detect=function(e,i,o){return n(this,void 0,void 0,(function(){var n,s,c,h,f,d,p,g,m,y,x,v,w;return r(this,(function(r){switch(r.label){case 0:return n=t.inputSize,a(this.varMap,"Model must be loaded"),a(e.byteLength===i*o*4),s={type:"image",sourceFormat:"rgba",destFormat:"rgb",filterType:"bilinear",wrapType:"clamp_to_edge",cropAndResize:[[0,0,i,o],[0,0,n,n]],means:[-127,-127,-127,0],norms:[1/128,1/128,1/128,0]},[4,this.modelInput.setData(e.buffer,"uint8",[1,o,i,4],"NHWC",s)];case 1:return r.sent(),[4,this.modelOutput.getData()];case 2:for(c=r.sent(),h=new Float32Array(c.data),f=h.length,d=[],g=0;g<f;g+=6)(m=u(h,g,n)).score>=this.scoreThreshold&&d.push(m);if(0===d.length)return[2,[]];for(d.sort((function(t,e){return e.score-t.score})),p=function(t){for(var e=[],i=0;i<t.length;i+=1){for(var n=t[i],r=!1,a=0;a<e.length;a+=1)if(l(n,e[a])>.5){r=!0;break}r||e.push(n)}return e}(d),g=0;g<p.length;g+=1)m=p[g],y=m.width*(i/n),x=m.height*(o/n),v=(m.x+m.width/2)*(i/n),w=(m.y+m.height/2)*(o/n),m.x=v-y/2,m.y=w-x/2,m.width=y,m.height=x;return[2,p]}}))}))},t.prototype.destroy=function(){for(var t=0,e=this.varMap;t<e.length;t++){e[t].release()}},t.inputSize=224,t}(),p=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.sub=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.multScalar=function(e){return new t(this.x*e,this.y*e)},t.prototype.divScalar=function(e){return new t(this.x/e,this.y/e)},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.normalized=function(){var e=this.norm();return new t(this.x/e,this.y/e)},t.prototype.norm=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t}(),g=function(){function t(){}return t.prototype.loadModel=function(t,e,i){return void 0===i&&(i=!1),n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:return[4,fetch(t)];case 1:return[4,r.sent().arrayBuffer()];case 2:return n=r.sent(),[4,this.loadFromData(n,e,i)];case 3:return r.sent(),[2]}}))}))},t.prototype.loadFromData=function(t,i,a){return void 0===a&&(a=!1),n(this,void 0,void 0,(function(){var n,o,s;return r(this,(function(r){switch(r.label){case 0:return n=new Uint8Array(t),o=a?h(n):n,s=this,[4,e.loader.loadMNN(o,i,["Placeholder"],["concat"])];case 1:return s.varMap=r.sent(),this.modelInput=this.varMap.Placeholder,this.modelOutput=this.varMap.concat,[2]}}))}))},t.prototype.detect=function(e,i,o,s){return n(this,void 0,void 0,(function(){var n,c,h,u,l,f;return r(this,(function(r){switch(r.label){case 0:return n=t.inputSize,a(e.byteLength===o*s*4),c={type:"image",sourceFormat:"rgba",destFormat:"rgb",filterType:"bilinear",wrapType:"clamp_to_edge",cropAndResize:[[i.x,i.y,i.width,i.height],[0,0,n,n]],means:[0,0,0,0],norms:[1/255,1/255,1/255,0]},[4,this.modelInput.setData(e.buffer,"uint8",[1,s,o,4],"NHWC",c)];case 1:return r.sent(),[4,this.modelOutput.getData()];case 2:for(h=r.sent(),u=new Float32Array(h.data),l=[],f=0;f<65;f+=1)l.push(new p(u[2*f+1]*i.width+i.x,u[2*f]*i.height+i.y));return[2,l]}}))}))},t.prototype.destroy=function(){if(this.varMap)for(var t=0,e=this.varMap;t<e.length;t++){e[t].release()}},t.inputSize=224,t}(),m=function(){this.boxDetectionTime=0,this.pointDetectionTime=0,this.faceBoxPredictorTime=0,this.emscriptenModuleTime=0,this.totalTime=0},y=function(){this.facebox=null,this.origFacebox=null,this.targetOrigFacebox=null,this.facePoints=null,this.timings=new m,this.isBadLighting=!1,this.allPoints=null},x=function(){this.faces=[],this.timings=new m,this.isBadLighting=!1};f=performance&&performance.now?function(){return performance.now()}:function(){return(new Date).getTime()};var v=function(){function t(){this.ref=0,this.start()}return t.prototype.start=function(){this.ref=f()},Object.defineProperty(t.prototype,"seconds",{get:function(){return(f()-this.ref)/1e3},enumerable:!1,configurable:!0}),t}(),w=function(){function t(t,e,i){this.statePtr=0,this.facebox=new o(0,0,0,0),this.origFacebox=new o(0,0,0,0),this.targetOrigFacebox=new o(0,0,0,0),this.facePoints=[],this.isValid=!1,this.nativeModule=t,this.facebox=i,this.origFacebox=e,this.targetOrigFacebox=e,this.isValid=!0,this.statePtr=t._newFaceState(e.x,e.y,e.width,e.height,i.x,i.y,i.width,i.height)}return t.prototype.processPoints=function(t,e,i,n,r){for(var a=this.nativeModule,o=2*this.facePoints.length,s=a._malloc(4*o),c=new Float32Array(a.HEAPF32.buffer,s,o),h=0;h<this.facePoints.length;h+=1){var u=this.facePoints[h],l=u.x,f=u.y;c[2*h]=l,c[2*h+1]=f}try{if(!this.nativeModule._processPoints(this.statePtr,t,e,i,this.facebox.x,this.facebox.y,this.facebox.width,this.facebox.height,s,this.facePoints.length,n,r))throw new Error("An error occurred, possibly a problem with licence key verification");var d=a.faceRects.origFacebox,p=a.faceRects.targetOrigFacebox,g=a.faceRects.facebox;return{facePoints:a.facePointsOutput,isBadLighting:a.isBadLighting,faceRects:{origFaceRect:d,targetOrigFaceRect:p,faceRect:g}}}finally{a._free(s)}},t.prototype.destroy=function(){this.nativeModule._freeFaceState(this.statePtr),this.statePtr=0,this.isValid=!1},t.prototype.updateFacebox=function(t){this.targetOrigFacebox=t,this.isValid=!0,this.nativeModule._updateMatchingState(this.statePtr,t.x,t.y,t.width,t.height)},t}(),b=function(){function t(){this.faceBoxDetector=null,this.facePointDetector=null,this.faces=[],this.nativeModule=null,this.nativeInputFramePtr=0,this.nativeInputArray=null,this.numFramesLastFaceboxDetection=0,this.modelDidLoad=!1,this.warmupPromise=null,this.numFramesForDetection=30,this.enableLightingCheck=!1,this.lightingCheckThreshold=.5,this.licenceKey=null,this.maxFaces=1,this.faceBoxDetector=new d,this.facePointDetector=new g}return t.prototype.load=function(t,o){return void 0===o&&(o=!1),n(this,void 0,void 0,(function(){var n,s,c,h,u,l,f=this;return r(this,(function(r){switch(r.label){case 0:if(!this.licenceKey)throw new Error("Please set the licenceKey before calling load");return a((n=function(t){return null!=t})(t)),[4,function(){return new Promise((function(t){var e={licenceKey:f.licenceKey,onRuntimeInitialized:function(){e._init(),t()}};f.nativeModule=i(e)}))}()];case 1:return r.sent(),s=function(){var t=e.WebGLPrecision.High,i=navigator.userAgent,n=i.indexOf("Chrome")>-1;if(i.indexOf("Safari")>-1&&!n){var r=i.indexOf("Version");if(-1!==r){r+=8;var a=i.substring(r,r+2);parseInt(a,10)<13&&(t=e.WebGLPrecision.Medium)}}return t}(),c=e.JSBuilder.create(),h=e.WebGLBuilder.create({precision:s,enableProgramReusing:!0,enableDownloadAcceleration:!0,enableUploadAcceleration:!0}),"string"!=typeof t?[3,6]:[4,e.WasmBuilder.compile(fetch(t+"/MNN.wasm"))];case 2:return u=r.sent(),[4,e.WasmBuilder.create(u)];case 3:return l=r.sent(),[4,this.faceBoxDetector.loadModel(t+"/FaceBox/model/mnn/face_box_model.mnn",[l,c],o)];case 4:return r.sent(),[4,this.facePointDetector.loadModel(t+"/Face_Alignment_V1/model/mnn/recurrent_face.mnn",[h,c],o)];case 5:return r.sent(),[3,10];case 6:return a(n(t.faceBoxModelArray)),a(n(t.facePointModelArray)),a(n(t.mnnWasmModule)),[4,e.WasmBuilder.create(t.mnnWasmModule)];case 7:return l=r.sent(),[4,this.faceBoxDetector.loadFromData(t.faceBoxModelArray,[l,c],o)];case 8:return r.sent(),[4,this.facePointDetector.loadFromData(t.facePointModelArray,[h,c],o)];case 9:r.sent(),r.label=10;case 10:return this.modelDidLoad=!0,[2]}}))}))},t.prototype.warmup=function(){var t=this;a(this.modelDidLoad,"Must call load before warmup can be used");return this.warmupPromise||(this.warmupPromise=n(t,void 0,void 0,(function(){var t,e,i;return r(this,(function(n){switch(n.label){case 0:return t=d.inputSize,e=g.inputSize,a(t===e),i=new Uint8Array(t*t*4),[4,this.faceBoxDetector.detect(i,t,t)];case 1:return n.sent(),[4,this.facePointDetector.detect(i,new o(0,0,t,t),t,t)];case 2:return n.sent(),[2]}}))}))),this.warmupPromise},t.prototype.reset=function(){this.faces.forEach((function(t){return t.destroy()})),this.faces=[],this.numFramesLastFaceboxDetection=0},t.prototype.setupInputBuffer=function(t){var e=t.buffer.length,i=this.nativeModule;this.nativeInputArray&&this.nativeInputArray.length===e||(this.nativeInputFramePtr&&i._free(this.nativeInputFramePtr),this.nativeInputFramePtr=i._malloc(e),this.nativeInputArray=new Uint8Array(i.HEAPU8.buffer,this.nativeInputFramePtr,e)),this.nativeInputArray.set(t.buffer)},t.prototype.runNativeModule=function(t,e,i){return i.processPoints(this.nativeInputFramePtr,t,e,this.enableLightingCheck,this.lightingCheckThreshold)},t.validateFaceState=function(t,e,i,n){if(c(t,e)<.7)return!1;var r=.1*i*n,a=1.3*i*n,o=e.width*e.height;if(o<r||o>a)return!1;var s=e.width/e.height;return!(s<.5||s>1.2)},t.prototype.detect=function(t){return n(this,void 0,void 0,(function(){var e,i;return r(this,(function(n){switch(n.label){case 0:return[4,this.detectMulti(t)];case 1:return(e=n.sent())?0===e.faces.length?((i=new y).timings=e.timings,i.isBadLighting=e.isBadLighting,[2,i]):[2,e.faces[0]]:[2,null]}}))}))},t.prototype.detectMulti=function(e){return n(this,void 0,void 0,(function(){var i,n,s,h,u,l,f,d,p,g,m,b,D,F,M,P,B,T,A,L,O,R,_,E,I=this;return r(this,(function(r){switch(r.label){case 0:return a(this.modelDidLoad,"Must call load before detect can be used"),a(e,"you must supply pixel data"),i=e.width,n=e.height,s=e.buffer,a(s,"no buffer sepecified"),a(i>1,"width must be positive"),a(n>1,"height must be something"),h=(new Date).getTime(),this.setupInputBuffer(e),u=new x,this.warmupPromise?[4,this.warmupPromise]:[3,2];case 1:r.sent(),this.warmupPromise=null,r.label=2;case 2:return l=(new Date).getTime(),f=!this.faces.length,d=this.numFramesLastFaceboxDetection>this.numFramesForDetection,p=this.faces.some((function(t){return!t.isValid})),f||d||p?(this.numFramesLastFaceboxDetection=0,[4,this.faceBoxDetector.detect(s,i,n)]):[3,4];case 3:return(g=r.sent()).length>this.maxFaces&&(g.length=this.maxFaces),m=function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<i;e++)for(var a=arguments[e],o=0,s=a.length;o<s;o++,r++)n[r]=a[o];return n}(this.faces),b=[],g.forEach((function(t){for(var e=1.2*t.width,i=t.height,n=t.x+t.width/2,r=t.y+t.height/2,a=new o(n-e/2,r-.7*i/2,e,i),s=null,h=0;h<m.length;h+=1){var u=m[h];if(c(u.facebox,a)>.5){s=u,m.splice(h,1);break}}if(s)s.updateFacebox(t),b.push(s);else{var l=new w(I.nativeModule,t,a);b.push(l)}})),m.forEach((function(t){return t.destroy()})),this.faces=b,[3,5];case 4:this.numFramesLastFaceboxDetection+=1,r.label=5;case 5:u.timings.boxDetectionTime=(new Date).getTime()-l,D=new v,F=[],M=0,r.label=6;case 6:return M<this.faces.length?(B=(P=F).push,[4,this.facePointDetector.detect(s,this.faces[M].facebox,i,n)]):[3,9];case 7:B.apply(P,[r.sent()]),r.label=8;case 8:return M+=1,[3,6];case 9:for(a(this.faces.length===F.length,"wrong number of facepoints"),A=0;A<F.length;A+=1)a(F[A],"this.facePointDetector.detect has returned a null"),a(F[A].length>0,"this.facePointDetector.detect has returned no points"),this.faces[A].facePoints=F[A];for(u.timings.pointDetectionTime=1e3*D.seconds,T=function(){return(new Date).getTime()},A=0;A<F.length;A+=1)L=this.faces[A],O=L.facebox,R=(new Date).getTime(),_=this.runNativeModule(i,n,L),(E=new y).timings.emscriptenModuleTime=T()-R,E.facePoints=_.facePoints,E.isBadLighting=_.isBadLighting,E.facebox=O,L.isValid=t.validateFaceState(E.facebox,_.faceRects.faceRect,i,n),E.origFacebox=_.faceRects.origFaceRect,E.targetOrigFacebox=_.faceRects.targetOrigFaceRect,E.facebox=_.faceRects.faceRect,L.origFacebox=E.origFacebox,L.targetOrigFacebox=E.targetOrigFacebox,L.facebox=E.facebox,E.allPoints=L.facePoints,u.faces.push(E);return u.timings.totalTime=T()-h,[2,u]}}))}))},t.prototype.destroy=function(){this.faceBoxDetector.destroy(),this.facePointDetector.destroy()},t.didTextureFixCheck=!1,t.didApplyTextureFix=!1,t}(),D=function(){this.leftEye2D=null,this.rightEye2D=null,this.cheek2D=null,this.nose2D=null,this.outerMouth2D=null,this.innerMouth2D=null,this.leftBrow2D=null,this.rightBrow2D=null,this.face2D=null,this.forehead2D=null,this.contour2D=null,this.leftExtendedBrow2D=null,this.rightExtendedBrow2D=null,this.extendedOuterMouth2D=null,this.leftExtendedEye2D=null,this.rightExtendedEye2D=null,this.extendedNose2D=null,this.leftFullBrow2D=null,this.rightFullBrow2D=null,this.rightEyeCenter3D=null,this.leftEyeCenter3D=null,this.noseCenter3D=null,this.mouthCenter3D=null,this.contour3D=null,this.modelMatrix=null,this.projectionViewMatrix=null,this.faceRotation=null},F=function(t,e,i){a(t.length===e*i*4,"Buffer must be the correct size"),this.buffer=t,this.width=e,this.height=i};return t.FaceDetectionResult=y,t.FacePoints=D,t.FaceTracker=b,t.PixelData=F,t.Rect=o,t.TimingStats=m,t}({},MNN,FaceTrackerEM);