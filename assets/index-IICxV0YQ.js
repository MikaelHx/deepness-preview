var mr=Object.defineProperty;var br=(t,e,n)=>e in t?mr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var h=(t,e,n)=>br(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const Be={beatsPerBar:4,smallPhraseBars:1,bigPhraseBars:2,clusterSpinRate:.42,clusterOrbitRate:0,plateTumbleRate:5.2,cameraSpinRate:1.15,cameraRollRate:.22,tunnelSpeed:26,tunnelRollRate:.36,cameraJumpDistanceInner:0,cameraJumpDistanceOuter:1},Ve=[{name:"cross",m:4,n1:.2,n2:.2,n3:.2,a:1,b:1,m2:0,n12:1,n22:1,n32:1,a2:1,b2:1,outline:"hull",scale:1,tiltX:0,tiltY:0,tiltZ:0,arcBlend:0},{name:"plant",m:4,n1:.375393,n2:50.7442,n3:-.657,a:1,b:1,m2:9,n12:-74.1592,n22:-.68202,n32:-41.4,a2:1,b2:1,outline:"hull",scale:1,tiltX:0,tiltY:0,tiltZ:0,arcBlend:0},{name:"pods",m:0,n1:-.445953,n2:-96.5377,n3:.121,a:1,b:1,m2:1,n12:77.3879,n22:-.85962,n32:-87.59,a2:1,b2:1,outline:"hull",scale:1,tiltX:0,tiltY:0,tiltZ:0,arcBlend:0},{name:"flower",m:5.2,n1:.04,n2:1.7,n3:1.7,a:1,b:1,m2:0,n12:1,n22:1,n32:1,a2:1,b2:1,outline:"hull",scale:1,tiltX:0,tiltY:0,tiltZ:0,arcBlend:0},{name:"lobes",m:6,n1:.249778,n2:47.8198,n3:-.8625,a:1,b:1,m2:7,n12:-76.8867,n22:.521395,n32:-56.7,a2:1,b2:1,outline:"hull",scale:1,tiltX:0,tiltY:0,tiltZ:0,arcBlend:0},{name:"star7",m:7,n1:.2,n2:1.7,n3:1.7,a:1,b:1,m2:7,n12:.2,n22:1.7,n32:1.7,a2:1,b2:1,outline:"hull",scale:1,tiltX:0,tiltY:0,tiltZ:0,arcBlend:0}];function Rt(t){const e=Ve.length,n=(Math.round(t)%e+e)%e;return Ve[Number.isFinite(n)?n:0]}const d={bloom:1,bloomStrength:1,bloomSigma:2,bloomTapRadius:4,bloomTapStep:1,bloomKnee:.025,bloomKaris:1,lightX:.28,lightY:.91,lightZ:.3,lightAmbient:.08,lightDiffuse:.22,lightViewAlign:0,shadingMode:"flat",bloomThreshold:.94,exposure:5.5,specular:44,specularSharpness:18,accentBlue:1,metal:1,partScale:.5,clusterPieceCount:800,clusterCohortCount:2,clusterNormalJitter:.025,shardSpinSpeed:5.2/6,clusterSpinRate:.42,clusterSpinFalloff:0,clusterSpinTwist:"signed",clusterAlignToTunnel:1,supershapeM:4,supershapeN1:.2,supershapeN2:.2,supershapeN3:.2,supershapeA:1,supershapeB:1,supershapeM2:0,supershapeN12:1,supershapeN22:1,supershapeN32:1,supershapeA2:1,supershapeB2:1,supershapeOutline:"hull",supershapeScale:1,supershapeTiltX:0,supershapeTiltY:0,supershapeTiltZ:0,supershapeThetaSteps:40,supershapePhiSteps:20,supershapeArcBlend:0,supershapeFill:.7,supershapeFillCap:.95,supershapeMaxShard:.28,supershapeMinShard:.1,supershapeThickness:.18,supershapeFace:.88,supershapeBoundPercentile:1,supershapeClusterScale:.66,supershapeStretchMin:1.1,supershapeStretch:1.25,supershapeStretchHigh:1.85,supershapeStretchMax:1.8,supershapeStretchAngle:32,supershapeShotShrink:.03,supershapeShotGlow:1.95,supershapeShotFloor:.52,supershapeShotBody:.24,supershapeShotKnee:121,supershapeShotCap:124,supershapePresetIndex:0,ringCount:6,tunnelPlateColumns:24,tunnelPlateRows:12,tunnelPlateSizeJitter:.3,ringGlowSpread:5.7,ringSideSpread:2,ringGlowLength:5.2,ringGlowStrength:.14,ringGlowCap:.06,ringCapSide:.992,ringEdgeFacing:.14,ringEdgeCap:.028,ringEdgeLength:1.35,ringEdgePull:.12,ringEdgeBody:1,ringEdgeGain:.55,ringEdgeFront:0,ringEdgeSpread:.2,ringSideLift:5.5,ringLiftCap:1.4,ringHoopNear:.98,ringHoopFar:1.18,ringAxial:.85,ringSideWiden:.28,ringWashBreak:.62,ringWashFrequency:.9,ringBandNear:.04,ringBandFar:.35,ringSideGain:1.5,ringWashPull:.18,ringWashEngage:.35,ringFaceStart:.62,ringFaceEnd:.66,ringFaceArc:.38,ringFaceScale:.5,ringHornSpread:1.4,ringHornLength:4,ringHornBreak:.7,ringHornPull:.45,ringHornSoft:.92,ringHornGain:.72,ringHornFrequency:.9,shotFogPower:1,shotFogJoin:.5,shotFogMid:.18,shotFogEarly:.27,shotFogEarlyHold:.2,shotFogEarlyEnd:.26,laserSideMargin:.4,laserDownMargin:1.15,laserThickness:.55,laserSideScale:.42,laserSideFullRadial:1.45,laserSideAngular:0,laserDownAngular:.085,laserReach:2,laserBody:3.8,motionBlurMode:"reprojection",motionBlurStrength:1,motionBlurFeedbackWeight:.35,motionBlurSamples:64,motionBlurMaxPixels:64,motionBlurVelocityScale:1,motionBlurDepthScale:0,motionBlurDepthNear:.06,motionBlurDepthFar:48,motionBlurObjectScale:0,motionBlurResetOnCut:!0,motionBlurJitter:1,motionBlurTapSpacing:1,bloomPulse:.12,bloomCompositeBase:.34,bloomTintRed:1.04,bloomTintGreen:.98,bloomTintBlue:.94,dashAcross:12,dashTipStart:.42,dashTipEnd:.72,fogSampleExposure:2.5,fogGapRed:.14,fogGapGreen:.143,fogGapBlue:.166,fogDistanceStart:3,fogDistanceEnd:20,tunnelBody:.004,tunnelSquareSize:1.2,tunnelCylinderSpan:28,tunnelEnergyDecay:3.2,tunnelScreenCap:.11,tunnelScreenCapNear:.25,tunnelInnerGray:.28,tunnelOuterGray:.55,tunnelRadius0:11.5,tunnelRadius1:9.5,tunnelRadius2:7.5,tunnelRadius3:5.5,tunnelRadius4:3.5,tunnelScroll0:.06,tunnelScroll1:.13,tunnelScroll2:.2,tunnelScroll3:.27,tunnelScroll4:.34,tunnelRoll0:.2,tunnelRoll1:.28,tunnelRoll2:.36,tunnelRoll3:.44,tunnelRoll4:.52,tunnelSoft0:.62,tunnelSoft1:.5,tunnelSoft2:.38,tunnelSoft3:.26,tunnelSoft4:.14,tunnelEdgeHard:.05,tunnelEdgeSoft:0,tunnelEdgeSpan:.62,tunnelCover:.42,tunnelAngle0:.2,tunnelAngle1:.7,tunnelAngle2:1.2,tunnelAngle3:1.7,tunnelAngle4:.4,tunnelPhase0:0,tunnelPhase1:4,tunnelPhase2:8,tunnelPhase3:12,tunnelPhase4:1,cameraRollWobble:.45,cameraRollWobbleGain:.7,cameraRollWobbleRate:11,cameraRollWobbleGainB:.35,cameraRollWobbleRateB:17.3,cameraRollSnap:2.05,cameraRollSnapSpan:1.35,cameraRollBurst:5.4,cameraRollBurstDecay:34,cameraDriftInward:.02,cameraDriftOrbit:.03,cameraOrbitLift:.4,tunnelWallRadius:3.6,clusterCoreRadius:.42,eyeNominalInner:1.12,eyeStormEdge:1.55,eyeNominalOuter:1.62,eyeInsideDepth:.1,eyeOutsideDepth:.08,eyeInsideFraction:.22,eyeOutsideFraction:.1,packedMassRadius:1.22,eyeCutRate:2.2,shutterSeconds:.22,flightDrawRate:2.15,maxRollRadians:1.25,zoomUnitsPerRadian:.72,maxAddedTail:.07,flightEmissiveMin:.2,flightLateralMin:.05,flightExtraMin:.04,flightHistoryFps:240,flightHistoryMax:.25,shardStreakTime:1.9,shardStreakMax:1.35,shardEdgeSoft:.48,shardStreakRadial:.35,shardStreakOut:1,shardStreakMelt:1,shardStreakTip:.07,shardStreakPinch:.7,shardStreakSoft:1.6,shardStreakFade:4.2,shockDecay:2.65,rippleDecay:4.5,ringFlashRise0:.18,ringFlashRise1:.48,ringFlashFall0:1.05,ringFlashFall1:1.38,ringFlashLife:1.5,phraseBigBoost:1.55,phraseSmallBoost:1.2,shockHit:1.05,shockHitCap:1.5,dofFocus:0,dofAperture:0};d.dofFocus=d.eyeNominalInner;function Sr(t=0,e=120,n=d){return{time:t,bpm:e,pulse:0,clusterSpin:0,clusterOrbit:0,plateTumble:0,tunnelScroll:0,tunnelRoll:0,tunnelEnergy:0,cameraSpin:0,cameraRoll:0,cameraEyeX:0,cameraEyeY:0,cameraEyeZ:0,cameraDistance:0,cameraCut:0,patternSeed:1,patternVariant:0,shockStrength:0,rippleStrength:0,latheRingStrength:0,barIndex:0,phraseSmall:0,phraseBig:0,...n}}function q(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function X(t,e,n){return[t[0]+e[0]*n,t[1]+e[1]*n,t[2]+e[2]*n]}function C(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function D(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function H(t){return Math.hypot(t[0],t[1],t[2])}function k(t){const e=H(t);return e<1e-8?[0,1,0]:[t[0]/e,t[1]/e,t[2]/e]}function ln(t){return[-t[0],-t[1],-t[2]]}function xr(t,e,n){for(let i=0;i<4;i++){const r=e[i*4],o=e[i*4+1],s=e[i*4+2],a=e[i*4+3];n[i*4]=t[0]*r+t[4]*o+t[8]*s+t[12]*a,n[i*4+1]=t[1]*r+t[5]*o+t[9]*s+t[13]*a,n[i*4+2]=t[2]*r+t[6]*o+t[10]*s+t[14]*a,n[i*4+3]=t[3]*r+t[7]*o+t[11]*s+t[15]*a}}function yr(t,e,n,i){const r=k([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),o=k(D(r,n)),s=D(o,r);i[0]=o[0],i[1]=s[0],i[2]=-r[0],i[3]=0,i[4]=o[1],i[5]=s[1],i[6]=-r[1],i[7]=0,i[8]=o[2],i[9]=s[2],i[10]=-r[2],i[11]=0,i[12]=-C(o,t),i[13]=-C(s,t),i[14]=C(r,t),i[15]=1}function wr(t,e,n,i,r){const o=1/Math.tan(t/2);r.fill(0),r[0]=o/Math.max(.01,e),r[5]=o,r[10]=(i+n)/(n-i),r[11]=-1,r[14]=2*i*n/(n-i)}function vr(t,e,n,i,r){const o=1/Math.tan(t/2);r.fill(0),r[0]=o/Math.max(.01,e),r[5]=o,r[10]=i/(n-i),r[11]=-1,r[14]=n*i/(n-i)}function Fe(t=d){const e=n=>{const i=1-Math.exp(-n*t.fogSampleExposure);return-Math.log(1-i)/Math.max(t.exposure,.001)};return{red:e(t.fogGapRed),green:e(t.fogGapGreen),blue:e(t.fogGapBlue)}}const It=Fe(),Zn=It.red,_r=It.green,Br=It.blue,Er=d.fogDistanceStart,Tr=d.fogDistanceEnd;d.tunnelBody;const cn=d.tunnelPlateColumns,un=d.tunnelPlateRows,Pr=d.tunnelPlateSizeJitter,Fr=8192,kr=d.tunnelCylinderSpan;function Kn(t){const e=t.tunnelCylinderSpan,n=t.tunnelSquareSize,i=t.tunnelPlateColumns,r=t.tunnelPlateRows;return[{columns:i,rows:r,radius:t.tunnelRadius0,scrollScale:t.tunnelScroll0,rollScale:t.tunnelRoll0,span:e,size:n,phase:t.tunnelPhase0,angleOffset:t.tunnelAngle0,softness:t.tunnelSoft0},{columns:i,rows:r,radius:t.tunnelRadius1,scrollScale:t.tunnelScroll1,rollScale:t.tunnelRoll1,span:e,size:n,phase:t.tunnelPhase1,angleOffset:t.tunnelAngle1,softness:t.tunnelSoft1},{columns:i,rows:r,radius:t.tunnelRadius2,scrollScale:t.tunnelScroll2,rollScale:t.tunnelRoll2,span:e,size:n,phase:t.tunnelPhase2,angleOffset:t.tunnelAngle2,softness:t.tunnelSoft2},{columns:i,rows:r,radius:t.tunnelRadius3,scrollScale:t.tunnelScroll3,rollScale:t.tunnelRoll3,span:e,size:n,phase:t.tunnelPhase3,angleOffset:t.tunnelAngle3,softness:t.tunnelSoft3},{columns:i,rows:r,radius:t.tunnelRadius4,scrollScale:t.tunnelScroll4,rollScale:t.tunnelRoll4,span:e,size:n,phase:t.tunnelPhase4,angleOffset:t.tunnelAngle4,softness:t.tunnelSoft4}]}const $e=Qn(Kn(d)),zt=$e.reduce((t,e)=>t+e.count,0);$e.map(t=>({radius:t.radius,scrollScale:t.scrollScale,rollScale:t.rollScale,size:t.size,softness:t.softness,count:t.count}));function Jn(t,e,n=d){const i=at(t),r=at(e),o=ei(i,r,n),s=o.reduce((a,l)=>a+l.count,0);return{columns:i,rows:r,count:Math.min(Fr,s),layers:o}}function Mr(t,e,n,i,r,o,s={columns:cn,rows:un,sizeJitter:Pr},a,l=d){const u=a??(s.columns===cn&&s.rows===un?$e:ei(s.columns,s.rows)),c=Lr(t,u),f=t-c.instanceStart,p=Ke(f*12.9898+c.radius*78.233),m=Ke(f*4.1414+c.phase*19.19),S=p*Math.PI*2+c.angleOffset+i*c.rollScale,b=Rr(m*c.span-e*c.scrollScale+c.phase,c.span)-c.span*.5,g=Math.cos(S),x=Math.sin(S),B=X(q(r.right,g),r.up,x),_=X(X([0,0,0],r.axis,b),B,c.radius),T=k(D(r.axis,B)),E=Math.hypot(o[0]-_[0],o[1]-_[1],o[2]-_[2]),P=l.tunnelScreenCap*Math.max(E,l.tunnelScreenCapNear),F=Math.min(c.size,P),M=Number.isFinite(s.sizeJitter)?Math.max(0,s.sizeJitter):0,O=M*2,y=F*(1-M+Ke(f*19.19+c.radius)*O),w=F*(1-M+Ke(f*47.13+c.phase)*O),v=u[0]??$e[0],R=(u[u.length-1]??v).radius,$=v.radius-R,I=$>0?(c.radius-R)/$:0,J=l.tunnelInnerGray+(l.tunnelOuterGray-l.tunnelInnerGray)*I,j=Fe(l);return{position:_,size:F,width:y,height:w,roll:0,along:r.axis,around:T,softness:c.softness,red:j.red*J,green:j.green*J,blue:j.blue*J}}function Qn(t){let e=0;return t.map(n=>{const i=n.columns*n.rows,r={...n,count:i,instanceStart:e};return e+=i,r})}function ei(t,e,n=d){const i=at(t),r=at(e);return Qn(Kn(n).map(o=>({...o,columns:i,rows:r})))}function Lr(t,e){for(const n of e)if(t>=n.instanceStart&&t<n.instanceStart+n.count)return n;return e[0]??$e[0]}function at(t){return Number.isFinite(t)?Math.max(0,Math.round(t)):0}function Ke(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Rr(t,e){if(e<=0)return 0;const n=t%e;return n<0?n+e:n}const Ge=1,Ar=8;d.fogSampleExposure;const Cr=d.dashAcross,Nr=d.dashTipStart,Dr=d.dashTipEnd,ti=d.bloomTintRed,ni=d.bloomTintGreen,ii=d.bloomTintBlue;function Ur(t,e=d.bloomCompositeBase){return e*t}function hn(t,e,n=d.bloomCompositeBase){const i=Number.isFinite(e)?Math.max(0,e):1;return Ur(t,n)*i}function At(t){return .55*t}d.tunnelWallRadius;d.clusterCoreRadius;const Ie=d.eyeNominalInner;d.eyeStormEdge;const lt=d.eyeNominalOuter,ri=d.eyeInsideDepth,Or=d.eyeOutsideDepth,dn=d.eyeInsideFraction,Gr=d.eyeOutsideFraction;function Wt(t=d){return{innerRadius:t.eyeNominalInner-t.eyeInsideDepth,outerRadius:t.eyeNominalOuter+t.eyeOutsideDepth}}function ct(){return Wt()}function Hr(t,e){const n=t.outerRadius-t.innerRadius,i=Number.isFinite(e)?Math.min(1,Math.max(0,e)):0;return t.innerRadius+n*i}function Vt(t,e){const n=Math.min(e.innerRadius,e.outerRadius),i=Math.max(e.innerRadius,e.outerRadius),r=t[0],o=t[1],s=t[2],a=Math.hypot(r,o,s);if(a<1e-8)return[0,0,n];const u=Math.min(i,Math.max(n,a))/a;return[r*u,o*u,s*u]}const fn=3.05,oi=1.8;function Ir(){return qe.length}function zr(t,e){const n=qe.length,i=$t(Math.floor(t),n);return qe[i].placePiece(e)}function si(t,e,n){const i=Math.max(1,Math.round(n)),r=Z(e*1.7+t*12.13+5.5);return Math.floor(r*i)%i}function ai(t){const e=Math.round(t);return e>=7?5:e<=5?3:4}const Wr=1.72,Vr=1.48,pn={"packed-burst":{halfLength:1.32,belly:1.85,tail:!1},"packed-bar":{halfLength:Vr,belly:Wr,tail:!1},"packed-tail":{halfLength:1.62,belly:1.6,tail:!0},"packed-cross":{halfLength:1.4,belly:1.9,tail:!1},"packed-column":{halfLength:1.58,belly:1.8,tail:!1},"tight-knot":{halfLength:1.15,belly:1.55,tail:!1}},$r=.92,li=Ie-ri,gn=4,qr=1.85;let mn="",et={samples:[{position:[0,0,0],normal:[0,1,0],tangent:[1,0,0],spacing:.2}],clearance:.2};function bn(t,e){return e>=0?t===0?0:Math.pow(t,e):Math.pow(Math.max(t,.001),e)}function ut(t,e,n,i,r,o,s){const a=Math.max(Math.abs(o),1e-4),l=Math.max(Math.abs(s),1e-4);if(!Number.isFinite(n)||Math.abs(n)<1e-4)return 1;const u=e*t/4,c=bn(Math.abs(Math.cos(u))/a,i)+bn(Math.abs(Math.sin(u))/l,r);if(!Number.isFinite(c)||c<=0)return 1;const f=Math.pow(c,-1/n);return!Number.isFinite(f)||f<=0?1:f}function Xr(t,e){const n=t[0]-e[0],i=t[1]-e[1],r=t[2]-e[2];return n*n+i*i+r*r}function jr(t){if(t.length<2)return .2;let e=1/0;for(let n=0;n<t.length;n++)for(let i=n+1;i<t.length;i++){const r=Xr(t[n],t[i]);r>1e-10&&r<e&&(e=r)}return Number.isFinite(e)?Math.sqrt(e):.05}function Yr(t){return ci(t).samples.length}function ci(t){const e=[t.supershapeM,t.supershapeN1,t.supershapeN2,t.supershapeN3,t.supershapeA,t.supershapeB,t.supershapeM2,t.supershapeN12,t.supershapeN22,t.supershapeN32,t.supershapeA2,t.supershapeB2,t.supershapeOutline,t.supershapeScale,t.supershapeTiltX,t.supershapeTiltY,t.supershapeTiltZ,t.supershapeThetaSteps,t.supershapePhiSteps,t.supershapeArcBlend,t.supershapeFill,t.supershapeMaxShard,t.supershapeMinShard,t.supershapeBoundPercentile,t.supershapeClusterScale].join("|");return e===mn||(et=ro(t),mn=e),et}function ui(t){const e=Math.round(Math.abs(t)*1e3)/1e3;if(e<1e-6)return 1;for(let n=1;n<=40;n++){const i=e*n;if(Math.abs(i-Math.round(i))<1e-4)return n}return 1}function Zr(t){return[t[0],t[2],t[1]]}function Kr(t,e){const n=Math.cos(e),i=Math.sin(e);return[t[0],t[1]*n-t[2]*i,t[1]*i+t[2]*n]}function Jr(t,e){const n=Math.cos(e),i=Math.sin(e);return[t[0]*n+t[2]*i,t[1],-t[0]*i+t[2]*n]}function Qr(t,e){const n=Math.cos(e),i=Math.sin(e);return[t[0]*n-t[1]*i,t[0]*i+t[1]*n,t[2]]}function eo(t,e){const n=Qr(Jr(Kr(t,e.supershapeTiltX??0),e.supershapeTiltY??0),e.supershapeTiltZ??0);return Zr(n)}function to(t,e,n){const i=ut(t,n.supershapeM,n.supershapeN1,n.supershapeN2,n.supershapeN3,n.supershapeA,n.supershapeB),r=ut(e,n.supershapeM2??0,n.supershapeN12??1,n.supershapeN22??1,n.supershapeN32??1,n.supershapeA2??1,n.supershapeB2??1),o=Math.cos(e),s=i*Math.cos(t)*r*o,a=i*Math.sin(t)*r*o,l=r*Math.sin(e);return!Number.isFinite(s)||!Number.isFinite(a)||!Number.isFinite(l)?null:[s,a,l]}function no(t){const e=Math.max(3,Math.round(t.supershapeThetaSteps??40)),n=Math.max(3,Math.round(t.supershapePhiSteps??20)),i=Math.max(9,e*n),r=ui(t.supershapeM);let o=Math.max(3,Math.round(e*r));const s=3;o>Math.floor(i/s)&&(o=Math.max(3,Math.floor(i/s)));const a=Math.max(s,Math.round(i/o));return o=Math.max(3,Math.round(i/a)),{thetaCount:o,phiCount:a}}function Sn(t,e,n,i,r,o){const s=Math.max(1440,t*32),a=Ae(o,0,1),l=[],u=[];for(let E=0;E<=s;E++){const P=e+(n-e)*E/s;u.push(P);const F=i(P);l.push(Number.isFinite(F)&&F>0?F:0)}const f=(hi(l,.5)||1)*8,p=l.map(E=>Math.min(E,f)),m=[0];let S=p[0]*Math.cos(u[0]),b=p[0]*Math.sin(u[0]);for(let E=1;E<=s;E++){const P=p[E]*Math.cos(u[E]),F=p[E]*Math.sin(u[E]);m.push(Math.hypot(P-S,F-b)),S=P,b=F}let g=0;for(const E of m)g+=E;const x=[0];for(let E=1;E<=s;E++){const P=1/s,F=g>1e-8?m[E]/g:P;x.push(x[x.length-1]+(1-a)*P+a*F)}const B=x[x.length-1],_=[];let T=1;for(let E=0;E<t;E++){const P=r?E/t:(E+.5)/t,F=B*P;for(;T<x.length-1&&x[T]<F;)T+=1;const M=Math.max(0,T-1),O=x[T]-x[M],y=O>1e-12?(F-x[M])/O:0;_.push(u[M]+(u[T]-u[M])*y)}return _}function io(t,e){const n=t.length;if(n===0)return[];const i=Math.max(1,Math.min(e,n));let r=0,o=0,s=0;for(const p of t)r+=p.position[0],o+=p.position[1],s+=p.position[2];r/=n,o/=n,s/=n;let a=0,l=-1;for(let p=0;p<n;p++){const m=t[p].position,S=m[0]-r,b=m[1]-o,g=m[2]-s,x=S*S+b*b+g*g;x>l&&(l=x,a=p)}const u=new Uint8Array(n),c=new Float64Array(n);c.fill(1/0);const f=[];for(let p=0;p<i;p++){u[a]=1;const m=t[a];f.push({position:[m.position[0],m.position[1],m.position[2]],normal:m.normal,tangent:m.tangent,spacing:m.spacing});const S=m.position;let b=-1,g=-1;for(let x=0;x<n;x++){if(u[x])continue;const B=t[x].position,_=B[0]-S[0],T=B[1]-S[1],E=B[2]-S[2],P=_*_+T*T+E*E;P<c[x]&&(c[x]=P),c[x]>g&&(g=c[x],b=x)}if(b<0)break;a=b}return f}function ro(t){const e=Math.max(3,Math.round(t.supershapeThetaSteps??40)),n=Math.max(3,Math.round(t.supershapePhiSteps??20)),i=Math.max(9,e*n),{thetaCount:r,phiCount:o}=no({...t,supershapeThetaSteps:e*gn,supershapePhiSteps:n*gn}),s=Math.PI*2*ui(t.supershapeM),a=t.supershapeArcBlend??0,l=Sn(r,0,s,v=>ut(v,t.supershapeM,t.supershapeN1,t.supershapeN2,t.supershapeN3,t.supershapeA,t.supershapeB),!0,a),u=Sn(o,-Math.PI/2,Math.PI/2,v=>ut(v,t.supershapeM2??0,t.supershapeN12??1,t.supershapeN22??1,t.supershapeN32??1,t.supershapeA2??1,t.supershapeB2??1),!1,a),c=[],f=[];for(let v=0;v<o;v++){const L=[];for(let R=0;R<r;R++){const G=to(l[R],u[v],t);if(L.push(G),!G)continue;const $=Math.hypot(G[0],G[1],G[2]);Number.isFinite($)&&$>0&&f.push($)}c.push(L)}const p=Ae(t.supershapeBoundPercentile??1,.5,1),m=hi(f,p)||1,S=$r/Math.max(m,1e-6),b=c.map(v=>v.map(L=>{if(!L)return null;const R=Math.hypot(L[0],L[1],L[2]);if(!Number.isFinite(R)||R<=0)return null;const G=R>m?m/R:1;return eo([L[0]*G*S,L[1]*G*S,L[2]*G*S],t)})),g=[];for(const v of b)for(const L of v)!L||!Number.isFinite(L[1])||g.push(Math.abs(L[1]));g.sort((v,L)=>v-L);const x=g.length,B=x>0?g[Math.floor(.25*(x-1))]:0,_=x>0?g[Math.floor(.75*(x-1))]:0,T=_+1.5*Math.max(_-B,0),E=v=>Math.abs(v[1])<=T+1e-4,P=[],F=new Set;for(let v=0;v<o;v++)for(let L=0;L<r;L++){const R=b[v][L];if(!R||!E(R))continue;const G=`${Math.round(R[0]*1e4)}|${Math.round(R[1]*1e4)}|${Math.round(R[2]*1e4)}`;F.has(G)||(F.add(G),P.push({position:R,normal:So(b,v,L),tangent:[1,0,0],spacing:.05}))}const M=io(P,i),O=go(M.map(v=>v.position),Math.max(.2,Math.min(.9,t.supershapeClusterScale??.66)));for(const v of M)v.position=Do([v.position[0]*O,v.position[1]*O,v.position[2]*O]);const y=xo(M.map(v=>v.position));for(let v=0;v<M.length;v++)M[v].spacing=y[v];const w=M;return w.length===0?et:{samples:w,clearance:jr(w.map(v=>v.position))}}const oo=.95,so=.99,xn=[{distance:li,weight:.22},{distance:(Ie+lt)*.5,weight:.68},{distance:lt,weight:.1}],ao=.3,lo=li,co=1;function uo(t){if(!(t>.2))return 1;const e=co*Math.pow(t/lo,ao);return Number.isFinite(e)&&e>0?e:1}function vt(t,e){const n=Math.sin(t[0]*12.9898+t[1]*78.233+t[2]*37.719+e)*43758.5453;return n-Math.floor(n)}function ho(t,e,n,i){const r=Math.min(1,Math.max(0,t)),o=e>1?e:1,s=n>o?n:o,a=i>s?i:s;if(r<=.5){const u=(r-.1)/.4;return o+u*(s-o)}const l=(r-.5)/.4;return s+l*(a-s)}function fo(t,e,n){const i=e>1?e:1,r=t>0?t:i,o=n>1?n:1,s=r/i;return!Number.isFinite(s)||s<=1?1:s<o?s:o}function po(t,e){const n=Math.min(75,Math.max(8,e)),i=Math.log(n/90)/Math.log(.5),r=Math.min(1,Math.max(0,t)),o=90*Math.pow(r,i);return Number.isFinite(o)?o:n}function go(t,e){if(t.length<8||!(e>0))return 1;let n=.05,i=5;for(let o=0;o<20;o++){const s=(n+i)*.5;mo(t,s,e)>1?i=s:n=s}const r=(n+i)*.5;return Number.isFinite(r)&&r>0?r:1}function mo(t,e,n){let i=0,r=0,o=0;for(const s of xn){const a=bo(t,e,s.distance);r+=s.weight*a.body,i+=s.weight,s.distance===xn[0].distance&&(o=a.tip)}return Math.max(r/i/n,o)}function bo(t,e,n){const i=Math.tan(qr/2),r=[];for(const a of t){const l=Math.hypot(a[0],a[2])*e,u=n-a[1]*e,c=u>=.12?l/(u*i):2;Number.isFinite(c)&&r.push(Math.min(c,2))}if(r.length<8)return{body:1,tip:1};r.sort((a,l)=>a-l);const o=Math.min(r.length-1,Math.floor(oo*(r.length-1))),s=Math.min(r.length-1,Math.floor(so*(r.length-1)));return{body:r[o],tip:r[s]}}function pe(t,e,n){if(e<0||e>=t.length)return null;const i=t[e],r=(n%i.length+i.length)%i.length;return i[r]}function ge(t,e){if(!e)return null;const n=[e[0]-t[0],e[1]-t[1],e[2]-t[2]];return Math.hypot(n[0],n[1],n[2])<1e-6?null:n}function So(t,e,n){const i=t[e][n];if(!i)return[0,1,0];const r=[[ge(i,pe(t,e,n+1)),ge(i,pe(t,e+1,n))],[ge(i,pe(t,e,n-1)),ge(i,pe(t,e-1,n))],[ge(i,pe(t,e,n+1)),ge(i,pe(t,e-1,n))],[ge(i,pe(t,e,n-1)),ge(i,pe(t,e+1,n))]];for(const[o,s]of r){if(!o||!s)continue;const a=k(D(o,s));if(a[0]!==0||a[1]!==0||a[2]!==0)return a}return[0,1,0]}function xo(t){const e=t.map(()=>1/0);for(let n=0;n<t.length;n++)for(let i=n+1;i<t.length;i++){const r=Math.hypot(t[n][0]-t[i][0],t[n][1]-t[i][1],t[n][2]-t[i][2]);r<e[n]&&(e[n]=r),r<e[i]&&(e[i]=r)}return e.map(n=>Number.isFinite(n)?n:.05)}function hi(t,e){if(t.length===0)return 1;const n=t.slice().sort((r,o)=>r-o),i=Math.max(0,Math.min(n.length-1,Math.floor(e*(n.length-1))));return n[i]||1}function De(t,e){const n=ci(e),i=$t(e.pieceIndex,n.samples.length),r=n.samples[i],o=Po(e,r.position,r.normal),s=e.supershapeFillCap??d.supershapeFillCap,a=Math.min(Math.max(.15,s),Math.max(.15,e.supershapeFill??d.supershapeFill)),l=No(n.samples),u=Math.max(.02,e.supershapeMaxShard??.18)*l,c=r.spacing*a,f=Math.min(Math.max(0,e.supershapeMinShard??0)*l,c),p=Math.min(u,Math.max(f,c));o.axis=r.normal,o.faceRoll=0,o.sizeX=p;const m=Math.min(.5,Math.max(.05,e.supershapeThickness??.18)),S=Math.min(1.5,Math.max(.05,e.supershapeFace??.88));return o.sizeY=p*m,o.sizeZ=p*S,o}const yo={name:"packed-burst",placePiece:t=>De("packed-burst",t)},wo={name:"packed-bar",placePiece:t=>De("packed-bar",t)},vo={name:"packed-tail",placePiece:t=>De("packed-tail",t)},_o={name:"packed-cross",placePiece:t=>De("packed-cross",t)},Bo={name:"packed-column",placePiece:t=>De("packed-column",t)},Eo={name:"tight-knot",placePiece:t=>De("tight-knot",t)},qe=[yo,wo,vo,_o,Bo,Eo];function To(t,e,n){if(t.tail){const s=-t.halfLength*.22,a=t.halfLength;if(e<s||e>a)return 0;const l=(e-s)/(a-s);return ko(l,n,t.belly,t.belly*.22,1.35)*(.72+.28*Math.sin(l*Math.PI))}const i=t.halfLength;if(e<-i||e>i)return 0;const r=e/(i*2)+.5,o=.84+.16*Math.sin(r*Math.PI);return t.belly*o*Mo(r,n)}function Po(t,e,n){const i=Ae(t.partScale,.35,oi),r=Z(Q(t,3.3)),o=Z(Q(t,8.2)),s=.52+Z(Q(t,1.7))*.58;let a,l,u;if(r<.3)a=(.0325+o*.026)*i,l=(.104+o*.078)*i,u=(.0325+Z(Q(t,4.4))*.026)*i;else if(r<.55){const B=(.104+o*.078)*i;a=B,l=(.0182+Z(Q(t,4.4))*.013)*i,u=B*(.85+Z(Q(t,9.1))*.3)}else if(r<.78){const B=(.052+o*.052)*i;a=B*(.8+Z(Q(t,4.4))*.4),l=B,u=B*(.8+Z(Q(t,9.1))*.4)}else a=(.13+o*.104)*i,l=(.0182+Z(Q(t,4.4))*.0143)*i,u=(.052+Z(Q(t,9.1))*.052)*i;const c=si(t.pieceIndex,t.seed,t.cohortCount);let f,p;if(r<.3){const B=Math.max(0,t.normalJitter),_=(Z(Q(t,4.1))-.5)*B;f=k(X(n,Ct(n),_)),p=c%2*Math.PI*.5}else f=Co(n,t,c),p=Math.floor(Z(Q(t,7.7))*4)*(Math.PI*.5);const m=Math.hypot(e[0],e[2]),S=Ae(1-m/.28,0,1),b=1+.4*S*S,g=.76+.2*S,x=.86+.12*S;return{position:e,axis:f,faceRoll:p,sizeX:a,sizeY:l,sizeZ:u,red:s*b,green:s*b*g,blue:s*b*x,emissive:0}}const tt=0;function Fo(t,e,n,i){return{position:[0,0,0],axis:k(i),faceRoll:0,sizeX:.01,sizeY:.01,sizeZ:.01,red:0,green:0,blue:0,emissive:0}}function ko(t,e,n,i,r){const o=Ae(t,0,1),s=.7+.22*Math.sin(o*Math.PI*3.1+e*1.3)+.14*Math.sin(o*Math.PI*6.2+e*.6),a=Math.pow(o,r);return(n+(i-n)*a)*s}function Mo(t,e){return .86+.1*Math.sin(t*Math.PI*2+e*1.7)+.06*Math.sin(t*Math.PI*4.6+e*.4)}function Lo(t,e,n){const i=pn[di(t)]??pn["packed-burst"];return To(i,n,e)}function Ro(t,e,n,i){const r=Lo(t,e,n);if(r<=0)return 0;const o=Ae(i,.35,oi);return r*1.06+.045*o}function Ao(t){const e=di(t);return e==="packed-column"?"column":e==="packed-tail"?"tail":"bar"}function di(t){const e=$t(Math.floor(t),qe.length);return qe[e].name}function Co(t,e,n){const i=Ct(t),r=k(D(t,i)),o=[i,r,t],s=o[n%o.length],a=Math.max(0,e.normalJitter),l=Ct(s),u=k(D(s,l)),c=(Z(Q(e,2.2))-.5)*2*a,f=(Z(Q(e,8.8))-.5)*2*a;return k(X(X(s,l,c),u,f))}function Q(t,e){return t.seed*1.7+t.pieceIndex*12.13+e}function Ct(t){const e=Math.abs(t[1])>.85?[1,0,0]:[0,1,0];return k(D(e,t))}function No(t){let e=0;for(const n of t){const i=Math.hypot(n.position[0],n.position[2]);i>e&&(e=i)}return Math.max(e,.05)}function Do(t){const e=Math.hypot(t[0],t[1],t[2]);if(e<=fn||e<1e-8)return t;const n=fn/e;return[t[0]*n,t[1]*n,t[2]*n]}function Z(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function $t(t,e){if(e<=0)return 0;const n=t%e;return n<0?n+e:n}function Ae(t,e,n){return!Number.isFinite(t)||t<e?e:t>n?n:t}const Uo=1,Le=[-.42,.04,.46],nt=[.85,1.25],Nt=40,Oo=Le.length*nt.length*Nt,Go=.45,Ho=.53,Io=6.5,zo=.95,Wo=.038,Vo=.125,$o=.24,qo=7.6,Xo=.26,jo=.66,Yo=2.45,fi=1.5;function Zo(t){const e=1-Si(t/fi);return .62+.38*ve(0,.18,e)}function Ko(t){const e=k(t.tunnelAxis),n={position:[0,0,0],axis:e,length:.001,thickness:.001,red:0,green:0,blue:0,emissive:0};if(t.strength<.2)return n;const i=as(e,t.eye,Io,rs(e,t.eye,t.sideMargin??1.15,t.downMargin??1.15));if(!i)return n;const r=Math.min(t.strength,fi),o=qt(e,t.eye),s=bi(t.eye,e),a=ss(s,t.sideScale??1,t.sideFullRadial??1),u=(t.thickness&&t.thickness>0?t.thickness:zo)*(a+(1-a)*o),c=t.body&&t.body>0?t.body:qo;return{position:i.position,axis:e,length:i.length,thickness:u,red:Wo,green:Vo,blue:$o,emissive:c*r}}function Je(t,e){return t!==void 0&&Number.isFinite(t)?t:e}function Jo(t,e,n){const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)}function pi(t){const e=k(t.tunnelAxis),n=H(D(t.eye,e)),i=t.ringHoopNear,r=Math.max(t.ringHoopFar,i+.001);return 1-Jo(i,r,n)}function gi(t){if(!(t.ringEdgeFacing>0))return!1;const e=t.eye,n=t.tunnelAxis,i=H(e),r=H(n);return i<1e-8||r<1e-8?!1:Math.abs(C(n,e)/(r*i))<t.ringEdgeFacing}const mi=16;function Qo(t,e,n){t.fill(0);const i=k(e.tunnelAxis),r=Math.min(Math.max(e.strength,0),1.15);if(r<.04)return;const o=Zo(e.strength),s=is(i),a=Math.PI*2/Nt,l=H(e.eye),u=l>1e-4?q(e.eye,-1/l):i,c=Je(e.ringFaceStart,d.ringFaceStart),f=Je(e.ringFaceEnd,d.ringFaceEnd),p=ve(c,Math.max(f,c+1e-4),Math.abs(C(u,i))),m=Math.min(1,Math.max(.05,Je(e.ringFaceArc,d.ringFaceArc))),S=Math.min(1,Math.max(.05,Je(e.ringFaceScale,d.ringFaceScale))),b=C(e.eye,i),g=[e.eye[0]-i[0]*b,e.eye[1]-i[1]*b,e.eye[2]-i[2]*b],x=H(g),B=x>.001?q(g,1/x):s.u,_=Math.cos(Math.min(m,.999)*Math.PI),T=ns(i,e.eye,p),E=a*.62;let P=0;for(let F=0;F<Le.length;F++){const M=Le[F],O=Ro(e.variant,e.seed,M,e.partScale),y=e.time*.85+F*.55;for(let w=0;w<nt.length;w++){const v=nt[w]<1,L=v?1+(S-1)*p:1,R=O*o*nt[w]*L,G=y+w*.47;for(let $=0;$<Nt;$++){const I=P*mi;if(P+=1,O<.05||R<.08)continue;const J=$*a+G,j=Math.cos(J),V=Math.sin(J),z=k([s.u[0]*j+s.v[0]*V,s.u[1]*j+s.v[1]*V,s.u[2]*j+s.v[2]*V]),Y=k(D(i,z)),ae=[i[0]*M+z[0]*R,i[1]*M+z[1]*R,i[2]*M+z[2]*R],Ue=[e.eye[0]-ae[0],e.eye[1]-ae[1],e.eye[2]-ae[2]],fe=H(Ue);if(fe<1e-4)continue;const rn=q(Ue,1/fe),ur=ve(.22,.48,fe),hr=es(Y,z,rn),yt=ts(Y,z,rn),on=ur*hr*yt;if(on<.12||yt<.55)continue;const dr=v?1:1-p,fr=C(z,B)>=_?1:1-p,pr=m>=.999&&$%2===1?1-p:1,sn=T[F]*dr*pr*fr;if(sn<.04)continue;const wt=r*on*sn*(1+.8*p),an=Math.min(R*E,fe*.18)*(.35+.65*yt),gr=Math.min(an*.3,fe*.035);t[I]=ae[0],t[I+1]=ae[1],t[I+2]=ae[2],t[I+3]=an,t[I+4]=Xo*wt,t[I+5]=jo*wt,t[I+6]=Yo*wt,t[I+7]=1,t[I+8]=Y[0],t[I+9]=Y[1],t[I+10]=Y[2],t[I+11]=gr,t[I+12]=z[0],t[I+13]=z[1],t[I+14]=z[2],t[I+15]=0}}}}function es(t,e,n){const i=H(D(t,n)),o=H(D(e,n))/Math.max(i,.05);return ve(.12,.4,o)}function ts(t,e,n){const i=C(t,n),r=C(e,n),o=[t[0]-n[0]*i,t[1]-n[1]*i,t[2]-n[2]*i],s=[e[0]-n[0]*r,e[1]-n[1]*r,e[2]-n[2]*r],a=H(o),l=H(s);if(a<.08||l<.08)return 1;const u=Math.abs(C(o,s))/(a*l);return 1-ve(.55,.82,u)}function ns(t,e,n){let i=0;return Le.forEach((r,o)=>{Math.abs(r)<Math.abs(Le[i])&&(i=o)}),Le.map((r,o)=>o===i?1:1-n)}function is(t){const e=Math.abs(t[1])>.85?[1,0,0]:[0,1,0],n=k(D(e,t)),i=k(D(t,n));return{u:n,v:i}}function rs(t,e,n,i){const r=qt(t,e);return n+(i-n)*r}function qt(t,e){const n=H(e),i=n>1e-4?q(e,-1/n):t,r=Math.abs(C(i,k(t)));return ve(Go,Ho,r)}function bi(t,e){const n=k(e),i=C(t,n);return H(X(t,n,-i))}function os(t,e,n){return qt(t,e)<.35&&bi(e,t)>=n}function ss(t,e,n){const i=Math.min(1,Math.max(0,e)),r=Math.min(1.1,n-.05),o=ve(r,Math.max(n,r+.05),t);return i+(1-i)*o}function as(t,e,n,i){let r=-n,o=n;const s=C(e,t),a=H(X(e,t,-s));if(a<i){const c=Math.sqrt(Math.max(0,i*i-a*a)),f=s-c,p=s+c,m=Math.min(o,f),S=Math.max(r,p),b=m-r,g=o-S;b>=g?o=m:r=S}const l=o-r;if(l<.2)return null;const u=(r+o)*.5;return{position:q(t,u),length:l}}function ve(t,e,n){const i=e-t;if(i<=1e-6)return n>=e?1:0;const r=Si((n-t)/i);return r*r*(3-2*r)}function Si(t){return!Number.isFinite(t)||t<0?0:t>1?1:t}d.packedMassRadius;class ls{constructor(){h(this,"hasHistory",!1);h(this,"previousTime",0);h(this,"previousRoll",0);h(this,"previousEye",[0,0,1])}sample(e,n,i,r=d){const o={rollRadians:0,zoomUnits:0},s=e-this.previousTime,a=this.previousEye,l=this.previousRoll,u=this.hasHistory&&s>1/Math.max(r.flightHistoryFps,1)&&s<r.flightHistoryMax;if(this.previousTime=e,this.previousRoll=n,this.previousEye=[i[0],i[1],i[2]],this.hasHistory=!0,!u)return o;const c=ms(n-l)/s,f=gs(a,i)/s,p=c<0?-1:1,m=f>r.eyeCutRate?f:0,S=c+p*m,b=Dt(S,-r.flightDrawRate,r.flightDrawRate),g=Dt(b*r.shutterSeconds,-r.maxRollRadians,r.maxRollRadians);return{rollRadians:g,zoomUnits:Math.abs(g)*r.zoomUnitsPerRadian}}}function cs(t,e,n,i,r,o,s,a,l=d){const u={position:t,xAxis:e.x,yAxis:e.y,zAxis:e.z,sizeX:n,sizeY:i,sizeZ:r,emissive:o,spark:0};if(o<l.flightEmissiveMin||H(t)>l.packedMassRadius)return u;const c=C(s,s);if(c<1e-8||Math.abs(a.rollRadians)<1e-4)return u;const f=C(t,s)/c,p=X(t,s,-f),m=H(p);if(m<l.flightLateralMin)return u;const S=m*Math.abs(a.rollRadians),b=m*a.zoomUnits,g=S+b;if(g<l.flightExtraMin)return u;const x=Math.min(l.maxAddedTail,g*.2),B=n>=i&&n>=r,_=!B&&i>=r;return{...u,sizeX:n+(B?x:0),sizeY:i+(_?x:0),sizeZ:r+(!B&&!_?x:0),emissive:o+x*1.5,spark:0}}function us(t,e,n,i=d){const r={...t,spark:0},o=fs(t.position,e,n,i);if(o<1e-4)return r;const s=k(e),a=C(t.position,s),l=X(t.position,s,-a);if(H(l)<1e-4)return r;const u=k(l),c=n<0?-1:1,f=q(k(D(s,l)),c),p=yn(i.shardStreakRadial,d.shardStreakRadial),m=k(X(q(f,1-p),u,p)),S=ps(t,m),b=ds(t,S,m),g=yn(i.shardStreakOut,d.shardStreakOut),x=b.size+o*(1+g);return{...t,xAxis:S==="x"?b.axis:t.xAxis,yAxis:S==="y"?b.axis:t.yAxis,zAxis:S==="z"?b.axis:t.zAxis,sizeX:S==="x"?x:t.sizeX,sizeY:S==="y"?x:t.sizeY,sizeZ:S==="z"?x:t.sizeZ,spark:hs(S,b.size,x)}}function hs(t,e,n){const i=t==="x"?1:t==="y"?2:3;if(!(n>1e-8))return 0;const r=Math.min(.999,Math.max(0,e/n));return i+r}function ds(t,e,n){const i=e==="x"?t.xAxis:e==="y"?t.yAxis:t.zAxis,r=e==="x"?t.sizeX:e==="y"?t.sizeY:t.sizeZ;return C(i,n)<0?{axis:q(i,-1),size:r}:{axis:[i[0],i[1],i[2]],size:r}}function yn(t,e){return Number.isFinite(t)?t<0?0:t>1?1:t:e}function fs(t,e,n,i=d){const r=i.shardStreakTime,o=i.shardStreakMax;if(!(r>0)||!(o>0)||!Number.isFinite(n))return 0;const s=k(e),a=X(t,s,-C(t,s)),l=H(a)*Math.abs(n)*r;return!Number.isFinite(l)||l<=0?0:Math.min(o,l)}function ps(t,e){const n=[{key:"x",size:t.sizeX,axis:t.xAxis},{key:"y",size:t.sizeY,axis:t.yAxis},{key:"z",size:t.sizeZ,axis:t.zAxis}];n.sort((a,l)=>l.size-a.size);const i=n[0],r=n[1];if(!r)return i.key;const o=Math.abs(C(i.axis,e));return Math.abs(C(r.axis,e))>o?r.key:i.key}function gs(t,e){const n=Dt(C(k(t),k(e)),-1,1);return Math.acos(n)}function ms(t){const e=Math.PI*2;let n=t%e;return n>Math.PI&&(n-=e),n<-Math.PI&&(n+=e),n}function Dt(t,e,n){return Number.isFinite(t)?t<e?e:t>n?n:t:0}const ze=1e4;function bs(t){return Number.isFinite(t)?Math.min(ze,Math.max(0,Math.round(t))):d.clusterPieceCount}const Xe=ze,Xt=Xe+tt;let Ut=d.clusterPieceCount;function Ss(){return Ut}const Ce=Uo,xe=Oo,je=xe+zt,ce=20,ue=mi,it=14,wn=1.85,ht=.06,dt=48;function xs(t,e,n,i){const r=Math.cos(i),o=Math.sin(i),s=k([e[0]*r+n[0]*o,e[1]*r+n[1]*o,e[2]*r+n[2]*o]);return{up:s,right:k(D(t,s))}}const vn=.46;function ys(t,e,n,i,r,o){if(r==="free"||i<1.2||o<=0)return[t,e,n];const s=1+Math.min(vn,o*vn);return[t*s,e*s,n*s]}function _n(t,e,n){const i=k(t),r=k(e),o=Math.min(1,Math.max(-1,C(i,r)));if(o>.9995)return n;if(o<-.9995){const a=Math.abs(i[1])>.85?[1,0,0]:[0,1,0];return ke(k(D(a,i)),Math.PI,n)}const s=k(D(i,r));return ke(s,Math.acos(o),n)}function ws(t,e,n){const i=k(t),r=Math.min(1,Math.max(0,Number.isFinite(n)?n:0));if(r<=1e-8)return i;const o=k(e);if(r>=1-1e-8)return o;const s=C(i,o)<0?q(o,-1):o;return k(X(q(i,1-r),s,r))}function vs(t,e,n){const i=n-e;return!(i>1e-4)||!Number.isFinite(t)?0:Math.min(1,Math.max(-1,(t-e)/i*2-1))}function _s(t,e,n="signed"){if(!Number.isFinite(e)||e===0)return 1;const i=Math.min(1,Math.max(-1,t)),r=n==="abs"?Math.abs(i):i;return Math.max(0,1+e*r)}function ke(t,e,n){const i=Math.cos(e),r=Math.sin(e);return X(X(q(n,i),D(t,n),r),t,C(t,n)*(1-i))}function _t(t){const e=k(t),n=Math.abs(e[1])>.85?[1,0,0]:[0,1,0],i=k(D(n,e)),r=D(i,e);return{x:i,y:e,z:r}}function Bn(t,e,n){const i=si(t,e,n),r=[1,-1,.72];return r[i%r.length]}function En(t,e){const n=Math.cos(e),i=Math.sin(e);return{x:X(q(t.x,n),t.z,i),y:t.y,z:X(q(t.x,-i),t.z,n)}}function Bt(t,e,n,i,r,o,s,a,l,u,c,f,p,m=0,S=0,b=0){const g=e*ce;t[g]=i[0]*s,t[g+1]=i[1]*s,t[g+2]=i[2]*s,t[g+3]=m,t[g+4]=r[0]*a,t[g+5]=r[1]*a,t[g+6]=r[2]*a,t[g+7]=S,t[g+8]=o[0]*l,t[g+9]=o[1]*l,t[g+10]=o[2]*l,t[g+11]=0,t[g+12]=n[0],t[g+13]=n[1],t[g+14]=n[2],t[g+15]=b,t[g+16]=u,t[g+17]=c,t[g+18]=f,t[g+19]=p}function Bs(t,e,n,i,r,o,s,a,l,u,c,f){const p=e*it;t[p]=n[0],t[p+1]=n[1],t[p+2]=n[2],t[p+3]=i[0],t[p+4]=i[1],t[p+5]=i[2],t[p+6]=r,t[p+7]=o,t[p+8]=s,t[p+9]=a,t[p+10]=l,t[p+11]=u,t[p+12]=c,t[p+13]=f}const Es=.08,Tn=.85,Et=.22;function Ts(t,e,n){const i=Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2])-n;if(i>=Tn)return 1;if(i<=Et)return 0;const r=(i-Et)/(Tn-Et);return r*r*(3-2*r)}function Ps(t,e,n){const i=Math.min(1.8,Math.max(.35,e.partScale)),r=ai(e.ringCount);for(let o=0;o<n;o++){const s=zr(e.patternVariant,{pieceIndex:o,pieceCount:n,seed:e.patternSeed,partScale:i,ringSlots:r,cohortCount:e.clusterCohortCount,normalJitter:e.clusterNormalJitter,supershapeM:e.supershapeM,supershapeN1:e.supershapeN1,supershapeN2:e.supershapeN2,supershapeN3:e.supershapeN3,supershapeA:e.supershapeA,supershapeB:e.supershapeB,supershapeM2:e.supershapeM2,supershapeN12:e.supershapeN12,supershapeN22:e.supershapeN22,supershapeN32:e.supershapeN32,supershapeA2:e.supershapeA2,supershapeB2:e.supershapeB2,supershapeOutline:e.supershapeOutline,supershapeScale:e.supershapeScale,supershapeTiltX:e.supershapeTiltX,supershapeTiltY:e.supershapeTiltY,supershapeTiltZ:e.supershapeTiltZ,supershapeThetaSteps:e.supershapeThetaSteps,supershapePhiSteps:e.supershapePhiSteps,supershapeArcBlend:e.supershapeArcBlend,supershapeFill:e.supershapeFill,supershapeFillCap:e.supershapeFillCap,supershapeMaxShard:e.supershapeMaxShard,supershapeMinShard:e.supershapeMinShard,supershapeThickness:e.supershapeThickness,supershapeFace:e.supershapeFace,supershapeBoundPercentile:e.supershapeBoundPercentile,supershapeClusterScale:e.supershapeClusterScale});Bs(t,o,s.position,s.axis,s.faceRoll,s.sizeX,s.sizeY,s.sizeZ,s.red,s.green,s.blue,s.emissive)}}function Fs(t){const e=Math.sin(t),n=Math.cos(t);return{axis:[e,0,n],right:[-n,0,e],up:[0,1,0]}}function ks(t,e,n,i,r,o,s,a,l,u){for(let c=0;c<l;c++){const f=Mr(c,n,i,r,e,o,s,a,u),p=(xe+c)*ue;t[p]=f.position[0],t[p+1]=f.position[1],t[p+2]=f.position[2],t[p+3]=f.width,t[p+4]=f.red,t[p+5]=f.green,t[p+6]=f.blue,t[p+7]=f.softness,t[p+8]=f.along[0],t[p+9]=f.along[1],t[p+10]=f.along[2],t[p+11]=f.height,t[p+12]=f.around[0],t[p+13]=f.around[1],t[p+14]=f.around[2],t[p+15]=0}}function Ms(t,e,n,i){Qo(t,{variant:e.patternVariant,seed:e.patternSeed,partScale:e.partScale,tunnelAxis:n,eye:i,strength:Math.max(0,e.latheRingStrength),time:e.time,ringFaceStart:e.ringFaceStart,ringFaceEnd:e.ringFaceEnd,ringFaceArc:e.ringFaceArc,ringFaceScale:e.ringFaceScale})}function Ls(t,e,n){const i=Math.min(1,Math.max(0,n));if(i<=0)return t;const r=1+Es*i,o=t[0]*e[0]+t[1]*e[1]+t[2]*e[2];return[e[0]*o+(t[0]-e[0]*o)*r,e[1]*o+(t[1]-e[1]*o)*r,e[2]*o+(t[2]-e[2]*o)*r]}const Rs=30*Math.PI/180,As=.2,Cs=.08;function xi(t){const e=Math.min(1,Math.max(0,t));return e*e*(3-2*e)}function Qe(t,e){return Number.isFinite(t)?t<0?0:t>1?1:t:e}function Ns(t,e){const n=Math.min(.35,Math.max(0,e));return 1/(1-n*.5)*(1-n*xi(t))}function yi(t){const e=Math.min(1,Math.max(0,t));return 1-(1-e)*(1-e)}function Ds(t,e,n,i){const r=Math.min(1,Math.max(0,t));if(r<=0)return 0;const o=Math.min(.95,Math.max(.02,i)),s=Math.min(.9,Math.max(.1,n)),a=Math.log(o)/Math.log(s),l=Math.pow(r,a),u=Math.pow(r,a/Math.max(1,e)),c=1-xi(r/s);return l+(u-l)*c}function Us(t,e,n,i){const r=d.shotFogEarly,o=Math.min(1,Math.max(0,Number.isFinite(e)?e:r));if(o>=1)return 1;const s=Math.min(1,Math.max(0,t)),a=Math.min(.95,Math.max(0,Number.isFinite(n)?n:d.shotFogEarlyHold)),l=Math.min(1,Math.max(a+1e-4,Number.isFinite(i)?i:d.shotFogEarlyEnd));if(s<=a)return o;if(s>=l)return 1;const u=(s-a)/(l-a),c=u*u*(3-2*u);return o+(1-o)*c}function Pn(t,e,n,i=yi){const r=Math.min(2.4,Math.max(.4,e)),o=Math.min(r,Math.max(.15,n));return r+(o-r)*i(t)}function Os(t,e){const n=Math.min(1,Math.max(0,e));return 1+(t-1)*n}function Fn(t,e){const n=Math.min(.92,Math.max(.05,t/255));return-Math.log(1-n)/Math.max(Zn*e,1e-4)}function Gs(t,e,n,i){const r=Fn(e,i),o=Fn(Math.max(n,e+1),i);if(t<=r)return t;const s=Math.max(o-r,1e-4);return r+s*(1-Math.exp(-(t-r)/s))}const Hs=1.15,Is=1;function rt(t,e,n,i,r,o){const s=Math.sqrt(i>0?i:1),a=1/s,l=C(t,e),u=C(t,n),c=[t[0]+e[0]*(s-1)*l+n[0]*(a-1)*u,t[1]+e[1]*(s-1)*l+n[1]*(a-1)*u,t[2]+e[2]*(s-1)*l+n[2]*(a-1)*u];if(o===1)return c;const f=C(c,r),p=o-1;return[c[0]+r[0]*p*f,c[1]+r[1]*p*f,c[2]+r[2]*p*f]}function zs(t,e,n,i,r,o,s,a,l,u,c){const f=rt(q(t,e),s,a,l,u,c),p=rt(q(n,i),s,a,l,u,c),m=rt(q(r,o),s,a,l,u,c),S=H(f),b=H(p),g=H(m);return{x:S>1e-8?k(f):t,y:b>1e-8?k(p):n,z:g>1e-8?k(m):r,sx:S,sy:b,sz:g}}class wi{constructor(){h(this,"frame");h(this,"flightSmear",new ls);h(this,"outlineHit",0);h(this,"shotScale",1);h(this,"shotEye",0);h(this,"shotAlong",[1,0,0]);h(this,"shotAcross",[0,0,1]);h(this,"shotStretch",1);h(this,"stretchEye",[0,0,0]);h(this,"stretchHeld",!1);h(this,"shotCutTime",0);h(this,"seenCut",-1);h(this,"shotFade",1);h(this,"shotLight",1);h(this,"fogLight",1);h(this,"shotPhase",0);h(this,"shotNearHeight",1);h(this,"heldOutline","free");h(this,"pieceCount",d.clusterPieceCount);h(this,"patternSeed",1);h(this,"cohortCount",d.clusterCohortCount);h(this,"target",new Float32Array(ze*it));h(this,"targetKey","");h(this,"burstAxis",[0,1,0]);h(this,"spunPosition",new Float32Array(ze*3));h(this,"spunAxis",new Float32Array(ze*3));h(this,"view",new Float32Array(16));h(this,"proj",new Float32Array(16));h(this,"activeParams",null);const e=new Float32Array(new ArrayBuffer(64));this.frame={viewProj:e,eye:[0,0,1],right:[1,0,0],up:[0,1,0],cluster:new Float32Array(new ArrayBuffer(Xt*ce*4)),streaks:new Float32Array(new ArrayBuffer(Ce*ce*4)),sprites:new Float32Array(new ArrayBuffer(je*ue*4)),metal:1,specular:10,specularSharpness:960,shardStreakOut:d.shardStreakOut,shardStreakMelt:d.shardStreakMelt,shardStreakTip:d.shardStreakTip,shardStreakPinch:d.shardStreakPinch,shardStreakSoft:d.shardStreakSoft,shardStreakFade:d.shardStreakFade,accent:1,bloomStrength:hn(d.bloom,d.bloomStrength),bloomThreshold:d.bloomThreshold,bloomGain:At(d.bloom),bloomSigma:d.bloomSigma,bloomTapRadius:d.bloomTapRadius,bloomTapStep:d.bloomTapStep,dofFocus:d.dofFocus,dofAperture:d.dofAperture,bloomKnee:d.bloomKnee,bloomKaris:d.bloomKaris,lightX:d.lightX,lightY:d.lightY,lightZ:d.lightZ,lightAmbient:d.lightAmbient,lightDiffuse:d.lightDiffuse,lightViewAlign:d.lightViewAlign,shadingMode:d.shadingMode,exposure:d.exposure,shotLight:1,shotBody:1,fogRed:Fe().red,fogGreen:Fe().green,fogBlue:Fe().blue,fogDistanceStart:d.fogDistanceStart,fogDistanceEnd:d.fogDistanceEnd,tunnelCylinderSpan:d.tunnelCylinderSpan,dashAcross:d.dashAcross,dashTipStart:d.dashTipStart,dashTipEnd:d.dashTipEnd,bloomTintRed:d.bloomTintRed,bloomTintGreen:d.bloomTintGreen,bloomTintBlue:d.bloomTintBlue,tunnelAxis:[0,0,1],crystalTailCount:0,clusterPieceCount:d.clusterPieceCount,tunnelPlateCount:zt,ringGlowSpread:d.ringGlowSpread,ringSideSpread:d.ringSideSpread,ringGlowCap:d.ringGlowCap,ringCapSide:d.ringCapSide,ringEdgeFacing:d.ringEdgeFacing,ringEdgeCap:d.ringEdgeCap,ringEdgeLength:d.ringEdgeLength,ringEdgePull:d.ringEdgePull,ringEdgeBody:d.ringEdgeBody,ringEdgeGain:d.ringEdgeGain,ringEdgeFront:d.ringEdgeFront,ringEdgeSpread:d.ringEdgeSpread,ringGlowLength:d.ringGlowLength,ringGlowStrength:d.ringGlowStrength,ringSideLift:d.ringSideLift,ringLiftCap:d.ringLiftCap,ringHoopNear:d.ringHoopNear,ringHoopFar:d.ringHoopFar,ringAxial:d.ringAxial,ringSideWiden:d.ringSideWiden,ringWashBreak:d.ringWashBreak,ringWashFrequency:d.ringWashFrequency,ringBandNear:d.ringBandNear,ringBandFar:d.ringBandFar,ringSideGain:d.ringSideGain,ringWashPull:d.ringWashPull,ringWashEngage:d.ringWashEngage,ringHornSpread:d.ringHornSpread,ringHornLength:d.ringHornLength,ringHornBreak:d.ringHornBreak,ringHornPull:d.ringHornPull,ringHornSoft:d.ringHornSoft,ringHornGain:d.ringHornGain,ringHornFrequency:d.ringHornFrequency,ringFaceStart:d.ringFaceStart,ringFaceEnd:d.ringFaceEnd,laserSideAngular:d.laserSideAngular,laserDownAngular:d.laserDownAngular,laserReach:d.laserReach,tunnelEdgeHard:d.tunnelEdgeHard,tunnelEdgeSoft:d.tunnelEdgeSoft,tunnelEdgeSpan:d.tunnelEdgeSpan,tunnelCover:d.tunnelCover}}ensureSprites(e){const n=(xe+e)*ue;this.frame.sprites.length>=n||(this.frame.sprites=new Float32Array(new ArrayBuffer(n*4)))}build(e,n,i){this.activeParams=e,this.pieceCount=bs(Yr({pieceIndex:0,pieceCount:e.clusterPieceCount,seed:e.patternSeed,partScale:e.partScale,ringSlots:ai(e.ringCount),cohortCount:e.clusterCohortCount,normalJitter:e.clusterNormalJitter,supershapeM:e.supershapeM,supershapeN1:e.supershapeN1,supershapeN2:e.supershapeN2,supershapeN3:e.supershapeN3,supershapeA:e.supershapeA,supershapeB:e.supershapeB,supershapeM2:e.supershapeM2,supershapeN12:e.supershapeN12,supershapeN22:e.supershapeN22,supershapeN32:e.supershapeN32,supershapeA2:e.supershapeA2,supershapeB2:e.supershapeB2,supershapeOutline:e.supershapeOutline,supershapeScale:e.supershapeScale,supershapeTiltX:e.supershapeTiltX,supershapeTiltY:e.supershapeTiltY,supershapeTiltZ:e.supershapeTiltZ,supershapeThetaSteps:e.supershapeThetaSteps,supershapePhiSteps:e.supershapePhiSteps,supershapeArcBlend:e.supershapeArcBlend,supershapeFill:e.supershapeFill,supershapeFillCap:e.supershapeFillCap,supershapeMaxShard:e.supershapeMaxShard,supershapeMinShard:e.supershapeMinShard,supershapeThickness:e.supershapeThickness,supershapeBoundPercentile:e.supershapeBoundPercentile,supershapeClusterScale:e.supershapeClusterScale})),this.frame.clusterPieceCount=this.pieceCount,this.patternSeed=e.patternSeed,this.cohortCount=e.clusterCohortCount;const r=`${e.patternVariant}|${e.patternSeed}|${e.partScale}|${e.ringCount}|${this.pieceCount}|${e.clusterCohortCount}|${e.clusterNormalJitter}|${e.supershapeM}|${e.supershapeN1}|${e.supershapeN2}|${e.supershapeN3}|${e.supershapeA}|${e.supershapeB}|${e.supershapeM2}|${e.supershapeN12}|${e.supershapeN22}|${e.supershapeN32}|${e.supershapeA2}|${e.supershapeB2}|${e.supershapeTiltX}|${e.supershapeTiltY}|${e.supershapeTiltZ}|${e.supershapeThetaSteps}|${e.supershapePhiSteps}|${e.supershapeArcBlend}|${e.supershapeFill}|${e.supershapeFillCap}|${e.supershapeMaxShard}|${e.supershapeMinShard}|${e.supershapeThickness}|${e.supershapeFace}|${e.supershapeBoundPercentile}|${e.supershapeClusterScale}`;r!==this.targetKey&&(Ps(this.target,e,this.pieceCount),this.targetKey=r);const o=Fs(e.cameraSpin),s=Jn(e.tunnelPlateColumns,e.tunnelPlateRows,e);this.ensureSprites(s.count),this.frame.tunnelPlateCount=s.count,this.frame.tunnelAxis=o.axis,this.burstAxis=o.axis;const a=Vt([e.cameraEyeX,e.cameraEyeY,e.cameraEyeZ],ct()),l=k(ln(a)),u=Math.abs(l[1])>.92?[0,0,1]:[0,1,0],c=k(D(l,u)),f=k(D(c,l)),p=xs(l,f,c,e.cameraRoll);yr(a,[0,0,0],p.up,this.view),i==="webgpu"?vr(wn,n,ht,dt,this.proj):wr(wn,n,ht,dt,this.proj),xr(this.proj,this.view,this.frame.viewProj),this.frame.eye=a,this.frame.right=p.right,this.frame.up=p.up;const m=this.flightSmear.sample(e.time,e.cameraRoll,a,e);this.outlineHit=Math.max(0,e.shockStrength),this.writePieces(e.patternVariant,e.patternSeed,e.partScale,e.clusterSpin,e.clusterSpinFalloff,e.clusterSpinTwist,e.clusterAlignToTunnel,e.plateTumble*(Math.max(0,e.shardSpinSpeed)/Math.max(Be.plateTumbleRate,1e-6)),o.axis,p.right,p.up,e.supershapeStretchMin,e.supershapeStretch,e.supershapeStretchHigh,e.supershapeStretchMax,e.supershapeStretchAngle,e.supershapeShotShrink,e.supershapeShotGlow,e.supershapeShotFloor,e.shotFogPower,e.shotFogJoin,e.shotFogMid,e.cameraCut,e.time,e.bpm,a,m),this.writeStreaks(e,a,o.axis),Ms(this.frame.sprites,e,o.axis,a),ks(this.frame.sprites,o,e.tunnelScroll,e.tunnelEnergy,e.tunnelRoll,a,{columns:s.columns,rows:s.rows,sizeJitter:e.tunnelPlateSizeJitter},s.layers,s.count,e),this.frame.metal=e.metal,this.frame.specular=e.specular,this.frame.specularSharpness=e.specularSharpness,this.frame.shardStreakOut=Qe(e.shardStreakOut,d.shardStreakOut),this.frame.shardStreakMelt=Qe(e.shardStreakMelt,d.shardStreakMelt),this.frame.shardStreakTip=Qe(e.shardStreakTip,d.shardStreakTip),this.frame.shardStreakPinch=Qe(e.shardStreakPinch,d.shardStreakPinch);const S=e.shardStreakSoft;this.frame.shardStreakSoft=Number.isFinite(S)?Math.max(0,S):d.shardStreakSoft;const b=e.shardStreakFade;this.frame.shardStreakFade=Number.isFinite(b)?Math.max(0,b):d.shardStreakFade,this.frame.accent=e.accentBlue,this.frame.bloomStrength=hn(e.bloom,e.bloomStrength,e.bloomCompositeBase),this.frame.bloomThreshold=e.bloomThreshold,this.frame.bloomGain=At(e.bloom),this.frame.bloomSigma=e.bloomSigma,this.frame.bloomTapRadius=e.bloomTapRadius,this.frame.bloomTapStep=e.bloomTapStep,this.frame.dofFocus=e.dofFocus,this.frame.dofAperture=e.dofAperture,this.frame.bloomKnee=e.bloomKnee,this.frame.bloomKaris=e.bloomKaris,this.frame.lightX=e.lightX,this.frame.lightY=e.lightY,this.frame.lightZ=e.lightZ,this.frame.lightAmbient=e.lightAmbient,this.frame.lightDiffuse=e.lightDiffuse,this.frame.lightViewAlign=e.lightViewAlign,this.frame.shadingMode=e.shadingMode==="blinnPhong"?"blinnPhong":"flat",this.frame.exposure=e.exposure,this.frame.shotBody=Os(this.shotLight,e.supershapeShotBody);const g=Fe(e);this.frame.fogRed=g.red,this.frame.fogGreen=g.green,this.frame.fogBlue=g.blue,this.frame.fogDistanceStart=e.fogDistanceStart,this.frame.fogDistanceEnd=e.fogDistanceEnd,this.frame.tunnelCylinderSpan=e.tunnelCylinderSpan,this.frame.dashAcross=e.dashAcross,this.frame.dashTipStart=e.dashTipStart,this.frame.dashTipEnd=e.dashTipEnd,this.frame.bloomTintRed=e.bloomTintRed,this.frame.bloomTintGreen=e.bloomTintGreen,this.frame.bloomTintBlue=e.bloomTintBlue;const x=Gs(this.fogLight,e.supershapeShotKnee,e.supershapeShotCap,e.exposure);return this.frame.shotLight=x*Us(this.shotPhase,e.shotFogEarly,e.shotFogEarlyHold,e.shotFogEarlyEnd),this.frame.ringGlowSpread=e.ringGlowSpread,this.frame.ringSideSpread=e.ringSideSpread,this.frame.ringGlowLength=e.ringGlowLength,this.frame.ringGlowStrength=e.ringGlowStrength,this.frame.ringGlowCap=e.ringGlowCap,this.frame.ringCapSide=e.ringCapSide,this.frame.ringEdgeFacing=e.ringEdgeFacing,this.frame.ringEdgeCap=e.ringEdgeCap,this.frame.ringEdgeLength=e.ringEdgeLength,this.frame.ringEdgePull=e.ringEdgePull,this.frame.ringEdgeBody=e.ringEdgeBody,this.frame.ringEdgeGain=e.ringEdgeGain,this.frame.ringEdgeFront=e.ringEdgeFront,this.frame.ringEdgeSpread=e.ringEdgeSpread,this.frame.ringSideLift=e.ringSideLift,this.frame.ringLiftCap=e.ringLiftCap,this.frame.ringHoopNear=e.ringHoopNear,this.frame.ringHoopFar=e.ringHoopFar,this.frame.ringAxial=e.ringAxial,this.frame.ringSideWiden=e.ringSideWiden,this.frame.ringWashBreak=e.ringWashBreak,this.frame.ringWashFrequency=e.ringWashFrequency,this.frame.ringBandNear=e.ringBandNear,this.frame.ringBandFar=e.ringBandFar,this.frame.ringSideGain=e.ringSideGain,this.frame.ringWashPull=e.ringWashPull,this.frame.ringWashEngage=e.ringWashEngage,this.frame.ringHornSpread=e.ringHornSpread,this.frame.ringHornLength=e.ringHornLength,this.frame.ringHornBreak=e.ringHornBreak,this.frame.ringHornPull=e.ringHornPull,this.frame.ringHornSoft=e.ringHornSoft,this.frame.ringHornGain=e.ringHornGain,this.frame.ringHornFrequency=e.ringHornFrequency,this.frame.ringFaceStart=e.ringFaceStart,this.frame.ringFaceEnd=e.ringFaceEnd,this.frame.laserSideAngular=e.laserSideAngular,this.frame.laserDownAngular=e.laserDownAngular,this.frame.tunnelEdgeHard=e.tunnelEdgeHard,this.frame.tunnelEdgeSoft=e.tunnelEdgeSoft,this.frame.tunnelEdgeSpan=e.tunnelEdgeSpan,this.frame.tunnelCover=e.tunnelCover,this.frame}writePieces(e,n,i,r,o,s,a,l,u,c,f,p,m,S,b,g,x,B,_,T,E,P,F,M,O,y,w){for(let V=0;V<this.pieceCount;V++){const z=V*it,Y=V*3;this.spunPosition[Y]=this.target[z],this.spunPosition[Y+1]=this.target[z+1],this.spunPosition[Y+2]=this.target[z+2],this.spunAxis[Y]=this.target[z+3],this.spunAxis[Y+1]=this.target[z+4],this.spunAxis[Y+2]=this.target[z+5]}this.heldOutline=Ao(e);const v=k(u),L=k(y),R=a>1e-8?ws(y,v,a):L;this.turnPose([0,1,0],R),this.rollPoseAroundTunnel(v,r,o,s);const G=Math.hypot(y[0],y[1],y[2]);(this.shotEye===0||Math.abs(G-this.shotEye)>.05)&&(this.shotEye=G,this.shotScale=uo(G));const $=Math.hypot(y[0]-this.stretchEye[0],y[1]-this.stretchEye[1],y[2]-this.stretchEye[2]);(!this.stretchHeld||$>Cs)&&(this.stretchEye=[y[0],y[1],y[2]],this.stretchHeld=!0,this.shotCutTime=M,this.latchStretch(y,c,f,v,p,m,S,b,g));const I=O>1?60/O:.4;F!==this.seenCut&&(this.seenCut=F,this.shotCutTime=M);const J=I>0?Math.min(1,Math.max(0,(M-this.shotCutTime)/I)):0;this.shotPhase=J,this.shotFade=Ns(J,x),this.shotLight=Pn(J,B,_,yi),this.fogLight=Pn(J,B,_,V=>Ds(V,T,E,P)),this.frame.shotLight=this.fogLight;const j=this.shotScale*this.shotFade;if(j!==1)for(let V=0;V<this.pieceCount;V++){const z=V*3;this.spunPosition[z]*=j,this.spunPosition[z+1]*=j,this.spunPosition[z+2]*=j}for(let V=0;V<this.pieceCount;V++)this.writeSpunPiece(this.frame.cluster,V,l,y,w,f,v);this.writeCometGravel(n,i,l,v,r)}latchStretch(e,n,i,r,o,s,a,l,u){const c=k(ln(e)),f=C(r,n),p=C(r,i),m=Math.hypot(f,p),S=m>1e-4?Math.atan2(Math.abs(p),Math.abs(f)):Math.PI/2;let b;if(m>As){const T=k([n[0]*f+i[0]*p,n[1]*f+i[1]*p,n[2]*f+i[2]*p]),E=D(c,T),P=H(E)>1e-6?k(E):[i[0],i[1],i[2]];b=S<Rs?T:P}else{const T=po(vt(e,2.3),u),P=(vt(e,5.7)<.5?-1:1)*T*Math.PI/180,F=Math.cos(P),M=Math.sin(P);b=[n[0]*F+i[0]*M,n[1]*F+i[1]*M,n[2]*F+i[2]*M]}this.shotAlong=b;const g=D(c,b),x=H(g)>1e-6?k(g):[i[0],i[1],i[2]];this.shotAcross=x;const B=this.viewLongShort(n,i),_=ho(vt(e,9.1),o,s,a);this.shotStretch=fo(_,B,l),this.shotNearHeight=this.shotEye<Hs?Is:1}viewLongShort(e,n){let i=0,r=0,o=0,s=0,a=0,l=0;for(let T=0;T<this.pieceCount;T++){const E=T*3,P=this.spunPosition[E]*e[0]+this.spunPosition[E+1]*e[1]+this.spunPosition[E+2]*e[2],F=this.spunPosition[E]*n[0]+this.spunPosition[E+1]*n[1]+this.spunPosition[E+2]*n[2];i+=1,r+=P,o+=F,s+=P*P,a+=F*F,l+=P*F}if(i<8)return 1;const u=r/i,c=o/i,f=s-i*u*u,p=a-i*c*c,m=l-i*u*c,S=f+p,b=f*p-m*m,g=Math.max(0,S*.5*(S*.5)-b),x=S*.5+Math.sqrt(g),B=S*.5-Math.sqrt(g);if(!(B>1e-8))return 8;const _=Math.sqrt(x/B);return Number.isFinite(_)&&_>0?_:1}writeCometGravel(e,n,i,r,o){if(this.heldOutline!=="tail"){this.frame.crystalTailCount=0,Ut=this.pieceCount;return}1+Math.min(.3,this.outlineHit*.3);const s=Math.abs(o)>1e-6;for(let a=0;a<tt;a++){const l=Fo(a,e,n,r),u=s?ke(r,o,l.position):l.position,c=s?ke(r,o,l.axis):l.axis,f=En(_t(c),l.faceRoll+i*Bn(Xe+a,this.patternSeed,this.cohortCount));Bt(this.frame.cluster,Xe+a,u,f.x,f.y,f.z,l.sizeX,l.sizeY,l.sizeZ,l.red,l.green,l.blue,l.emissive)}this.frame.crystalTailCount=tt,Ut=this.pieceCount+tt}turnPose(e,n){for(let i=0;i<this.pieceCount;i++){const r=i*3,o=_n(e,n,[this.spunPosition[r],this.spunPosition[r+1],this.spunPosition[r+2]]),s=_n(e,n,[this.spunAxis[r],this.spunAxis[r+1],this.spunAxis[r+2]]);this.spunPosition[r]=o[0],this.spunPosition[r+1]=o[1],this.spunPosition[r+2]=o[2],this.spunAxis[r]=s[0],this.spunAxis[r+1]=s[1],this.spunAxis[r+2]=s[2]}}rollPoseAroundTunnel(e,n,i,r){if(Math.abs(n)<1e-6)return;const o=!(Number.isFinite(i)&&Math.abs(i)>1e-8),s=r==="abs"?"abs":"signed";let a=0,l=0;if(!o){a=1/0,l=-1/0;for(let u=0;u<this.pieceCount;u++){const c=u*3,f=this.spunPosition[c]*e[0]+this.spunPosition[c+1]*e[1]+this.spunPosition[c+2]*e[2];f<a&&(a=f),f>l&&(l=f)}}for(let u=0;u<this.pieceCount;u++){const c=u*3,f=[this.spunPosition[c],this.spunPosition[c+1],this.spunPosition[c+2]],p=o?n:n*_s(vs(C(f,e),a,l),i,s),m=ke(e,p,f),S=ke(e,p,[this.spunAxis[c],this.spunAxis[c+1],this.spunAxis[c+2]]);this.spunPosition[c]=m[0],this.spunPosition[c+1]=m[1],this.spunPosition[c+2]=m[2],this.spunAxis[c]=S[0],this.spunAxis[c+1]=S[1],this.spunAxis[c+2]=S[2]}}writeStreaks(e,n,i){const r=Ko({variant:e.patternVariant,seed:e.patternSeed,partScale:e.partScale,tunnelAxis:i,eye:n,strength:Math.max(0,e.rippleStrength),time:e.time,sideMargin:e.laserSideMargin,downMargin:e.laserDownMargin,sideScale:e.laserSideScale,sideFullRadial:e.laserSideFullRadial,thickness:e.laserThickness,body:e.laserBody});this.frame.laserReach=os(i,n,e.laserSideFullRadial)?e.laserReach:0;const o=_t(r.axis);Bt(this.frame.streaks,0,r.position,o.x,o.y,o.z,r.thickness,r.length,r.thickness,r.red,r.green,r.blue,r.emissive,0)}writeSpunPiece(e,n,i,r,o,s,a){var O,y;const l=this.target,u=n*it,c=n*3,f=[this.spunPosition[c],this.spunPosition[c+1],this.spunPosition[c+2]],p=rt(f,this.shotAlong,this.shotAcross,this.shotStretch,s,this.shotNearHeight),m=Ls(p,this.burstAxis,this.outlineHit),S=[this.spunAxis[c],this.spunAxis[c+1],this.spunAxis[c+2]],b=En(_t(S),l[u+6]+i*Bn(n,this.patternSeed,this.cohortCount)),g=this.shotScale*this.shotFade,x={position:m,xAxis:b.x,yAxis:b.y,zAxis:b.z,sizeX:l[u+7]*g,sizeY:l[u+8]*g,sizeZ:l[u+9]*g,emissive:l[u+13],spark:0},B=this.heldOutline==="tail"?x:cs(m,b,l[u+7]*g,l[u+8]*g,l[u+9]*g,l[u+13],r,o,this.activeParams??void 0),_=us(B,a,((O=this.activeParams)==null?void 0:O.clusterSpinRate)??0,this.activeParams??void 0),T=.5*Math.max(_.sizeX,_.sizeY,_.sizeZ),E=Ts(_.position,r,T);_.sizeX*=E,_.sizeY*=E,_.sizeZ*=E;const P=zs(_.xAxis,_.sizeX,_.yAxis,_.sizeY,_.zAxis,_.sizeZ,this.shotAlong,this.shotAcross,this.shotStretch,s,this.shotNearHeight),F=ys(l[u+10],l[u+11],l[u+12],l[u+13],this.heldOutline,this.outlineHit),M=((y=this.activeParams)==null?void 0:y.shardEdgeSoft)??0;Bt(e,n,_.position,P.x,P.y,P.z,P.sx,P.sy,P.sz,F[0],F[1],F[2],_.emissive,0,Number.isFinite(M)?Math.min(1.5,Math.max(0,M)):0,_.spark)}}let Ye=null;function Ws(t){const e=new URLSearchParams(t.startsWith("?")?t.slice(1):t).get("log");if(e===null||e.trim()==="")return 1;const n=Number(e.trim());return Number.isFinite(n)?Math.min(3,Math.max(0,Math.floor(n))):1}function Vs(t){Ye=Ws(t)}function $s(){return Ye}function qs(t){Ye=Math.min(3,Math.max(0,Math.floor(t)))}function W(t,e){Ye===null||Ye<t||console.info(e)}function he(t){if(typeof t=="boolean")return t?"1":"0";if(typeof t!="number")return t;if(!Number.isFinite(t))return"0";const e=Math.round(t*1e6)/1e6;return String(e)}function vi(t,e){if(typeof t=="number"&&typeof e=="number"){if(!Number.isFinite(t)||!Number.isFinite(e))return!1;const n=Math.max(1,Math.abs(t),Math.abs(e));return Math.abs(t-e)<=n*1e-6}return String(t)===String(e)}function Xs(t,e,n,i){const r=Math.hypot(t[0],t[1],t[2]);if(!(r>1e-8))return"oblique";const o=Math.abs((t[0]*Math.sin(e)+t[2]*Math.cos(e))/r);return o>=n?"tunnel":o<=i?"side":"oblique"}const js=1500,Ys="[grokgraphic]",Zs=new Set(["1","true","yes"]);function Tt(t,e){const n=new URLSearchParams(t).get(e);return n!==null&&Zs.has(n.toLowerCase())}function Ks(t=.08){let e=0,n=0;return{sample(i){const r=Math.min(100,Math.max(.5,i));if(n+=1,n===1){e=r;return}e+=(r-e)*t},fps(){return e>0?1e3/e:0},frameMs(){return e}}}function Js(t){let e=!1,n=0;return{due(i){return e?i<n?!1:(n=i+t,!0):(e=!0,n=i+t,!1)},reset(i){e=!0,n=i+t}}}function Qs(t){const e=[`${Ys} ${t.fps.toFixed(1)} fps`,`${t.frameMs.toFixed(1)} ms`,t.backend,t.sceneId,`${t.width}×${t.height} @${t.dpr.toFixed(2)}x`,`bpm ${t.bpm.toFixed(1)}`,`pulse ${t.pulse.toFixed(2)}`,`time ${t.time.toFixed(2)}s`];if(t.deepness){const n=t.deepness,i=n.cluster+n.tunnel+n.streaks+n.sprites;e.push(`rings ${Math.round(n.ringCount)}`,`variant ${Math.round(n.patternVariant)}`,`instances ${i} (cluster ${n.cluster}, tunnel ${n.tunnel}, streaks ${n.streaks}, sprites ${n.sprites})`)}return e.join(" · ")}function kn(){W(1,"ready")}function ea(t){W(1,t?"debug on":"debug off")}const Ze=120;function ta(){return{bpm:Ze,pulse:0,beat:!1,t:0,time:0}}function _i(t){if((typeof t.type=="string"?t.type.toLowerCase():"")==="beat")return!0;const n=t.beat;return n===!0||n===1}function Bi(t,e){Number.isFinite(e)&&e>0&&(t.bpm=e)}function na(t,e){Bi(t,e.bpm),Number.isFinite(e.t)&&(t.t=e.t),_i(e)&&(t.beat=!0,t.pulse=1)}const Re=3,Ei="quiet",Ti="gave-up";function ia(t,e,n){const i=n!=null&&t>=n,r=i||t>=Re,o=t===Re,s=i&&n!=null&&t===n&&n<Re;return{delayMs:i?null:r?Math.max(e,15e3):e,announceQuiet:o||s,quiet:r}}function ra(){return typeof location>"u"?"ws://127.0.0.1:8765":`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/bridge`}const oa=ra();function sa(t,e=oa,n={}){let i=null,r=!1,o=500,s=0,a=!1;const l=n.giveUpAfterFailures??null,u=()=>{r||(s<Re&&t.onStatus("connecting",e),i=new WebSocket(e),i.onopen=()=>{s=0,a=!1,o=500,t.onStatus("open",e)},i.onmessage=c=>{try{const f=JSON.parse(String(c.data));t.onMessage(f)}catch{}},i.onerror=()=>{s<Re&&t.onStatus("error","socket error")},i.onclose=()=>{if(r){t.onStatus("closed");return}s+=1;const c=ia(s,o,l);if(c.announceQuiet&&!a?(a=!0,console.info(c.delayMs==null?"[grokgraphic] bridge unreachable — internal beat clock":"[grokgraphic] bridge unreachable — retrying quietly"),t.onStatus("closed",c.delayMs==null?Ti:Ei)):c.quiet||t.onStatus("closed"),c.delayMs==null)return;const f=c.delayMs;o=Math.min(o*1.6,c.quiet?3e4:5e3),window.setTimeout(u,f)})};return u(),{close:()=>{r=!0,i==null||i.close()}}}const Pi=4,aa=.35;function la(t){const e=new URLSearchParams(t).get("beat");if(e==null||e.trim()==="")return"auto";const n=e.trim().toLowerCase();return n==="clock"||n==="bridge"||n==="auto"?n:(console.warn(`unknown beat source "${e}", using auto`),"auto")}function ca(t,e=Ze){const n=new URLSearchParams(t).get("bpm");if(n==null||n.trim()==="")return e;const i=Number(n);return!Number.isFinite(i)||i<=0?e:i}function Ot(t){const e=Math.round(t*10)/10;return Number.isFinite(e)?Number.isInteger(e)?String(Math.trunc(e)):e.toFixed(1):"0"}class ua{constructor(e=Ze,n=Pi){h(this,"bpm");h(this,"beatsPerBar");h(this,"beatCount",0);h(this,"nextBeat",0);h(this,"lastBeatTime",Number.NEGATIVE_INFINITY);h(this,"running",!1);this.bpm=e,this.beatsPerBar=Math.max(1,Math.floor(n))}start(e=0){this.running=!0,this.nextBeat=e}stop(){this.running=!1}interval(){return 60/this.bpm}pull(e){if(!this.running||!(this.bpm>0)||e+1e-9<this.nextBeat)return null;const n=this.nextBeat;this.beatCount+=1,this.lastBeatTime=n;let i=n+this.interval();return i<=e&&(i=e+this.interval()),this.nextBeat=i,{type:"beat",bpm:this.bpm,beat:!0,t:n}}markExternal(e){this.beatCount+=1,this.lastBeatTime=e,this.nextBeat=e+this.interval()}hold(e){this.nextBeat=Math.max(this.nextBeat,e+this.interval())}overlapsLast(e){if(this.beatCount<=0)return!1;const n=e-this.lastBeatTime;return n>=-1e-6&&n<this.interval()*aa}phase(e){const n=this.interval();if(!(n>0))return 0;const i=this.nextBeat-n;return Mn((e-i)/n,0,1)}get bar(){return Math.floor(this.beatCount/this.beatsPerBar)}get beatInBar(){return this.beatCount<=0?0:(this.beatCount-1)%this.beatsPerBar}setBpm(e,n){if(!Number.isFinite(e)||e<=0||e===this.bpm)return;if(this.beatCount<=0){this.bpm=e;return}const i=60/this.bpm,r=this.nextBeat-i,o=Mn((n-r)/i,0,1);this.bpm=e,this.nextBeat=n+(1-o)*this.interval()}}class ha{constructor(e){h(this,"preference");h(this,"clock");h(this,"listener");h(this,"connect");h(this,"staticBuild");h(this,"socket",null);h(this,"bridgeOpen",!1);h(this,"bridgeMaster",!1);h(this,"now",0);h(this,"playing");this.preference=e.preference??"auto",this.clock=new ua(e.bpm??Ze,e.beatsPerBar??Pi),this.listener=e.listener,this.connect=e.connect??sa,this.staticBuild=e.staticBuild??!1,this.playing=e.playing??(()=>!0),this.bridgeMaster=this.preference==="bridge"}get kind(){return this.preference==="clock"?"clock":this.preference==="bridge"||this.bridgeOpen&&this.bridgeMaster?"bridge":"clock"}get bpm(){return this.clock.bpm}set bpm(e){this.clock.setBpm(e,this.now)}get beatsPerBar(){return this.clock.beatsPerBar}get beatCount(){return this.clock.beatCount}get bar(){return this.clock.bar}get beatInBar(){return this.clock.beatInBar}phase(e){return this.clock.phase(e)}hudLabel(e){const n=e?"●":"○";return`${this.kind==="clock"?`beat: clock ${Ot(this.bpm)}`:`beat: bridge ${Ot(this.bpm)}`}  ${n}  ${this.beatCount}`}start(){this.clock.start(0),this.preference!=="clock"&&(this.socket=this.connect({onMessage:e=>this.onBridgeMessage(e),onStatus:(e,n)=>this.onBridgeStatus(e,n)},void 0,this.staticBuild?{giveUpAfterFailures:Re}:{}))}stop(){var e;this.clock.stop(),(e=this.socket)==null||e.close(),this.socket=null}pull(e){if(this.now=e,!this.playing()||this.preference==="bridge"||this.bridgeMaster)return null;const n=this.clock.pull(e);return n?(this.listener.onMessage(n),n):null}onBridgeStatus(e,n){e==="open"&&(this.bridgeOpen=!0),e==="closed"&&(this.bridgeOpen=!1,this.preference!=="bridge"&&(this.bridgeMaster=!1)),this.listener.onStatus(e,n)}onBridgeMessage(e){if(this.preference==="clock")return;if(!_i(e)){Number.isFinite(e.bpm)&&e.bpm>0&&(this.bpm=e.bpm),this.listener.onMessage(e);return}if(!this.playing()){Number.isFinite(e.bpm)&&e.bpm>0&&(this.bpm=e.bpm),this.listener.onMessage({type:"bpm",bpm:this.bpm,beat:!1,t:e.t});return}const i=this.preference!=="bridge"&&!this.bridgeMaster&&this.clock.overlapsLast(this.now);if(Number.isFinite(e.bpm)&&e.bpm>0&&(this.bpm=e.bpm),i?this.clock.hold(this.now):this.clock.markExternal(this.now),this.bridgeMaster=!0,i){this.listener.onMessage({type:"bpm",bpm:this.bpm,beat:!1,t:e.t});return}this.listener.onMessage(e)}}function da(t){return new ha(t)}function Mn(t,e,n){return Math.min(n,Math.max(e,t))}const Ne=64,Fi=.06711056,ki=.00583715,Mi=52.9829189,Li=1e-6,Ln=56;function fa(t){if(t===null)return null;const e=t.trim().toLowerCase();return e==="off"||e==="feedback"||e==="reprojection"?e:null}function jt(t){return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0}function ft(t){return t==="webgpu"?{clipZScale:1,clipZBias:0,ndcYScale:-2,ndcYBias:1,ndcToPixelY:-1}:{clipZScale:2,clipZBias:-1,ndcYScale:2,ndcYBias:-1,ndcToPixelY:1}}function pa(t){return!(!t.enabled||!t.hasHistory||!(t.samples>=2)||!(Math.abs(t.strength)>1e-8)||!(t.maxPixels>0)||!(Math.abs(t.velocityScale)>1e-8||Math.abs(t.objectScale)>1e-8)||t.resetOnCut&&t.cameraCut!==t.seenCut)}function Ri(t){const e=Math.round(t.motionBlurSamples),n=Number.isFinite(e)?Math.min(Ne,Math.max(1,e)):Ne,i=Number.isFinite(t.motionBlurDepthNear)?t.motionBlurDepthNear:.06;let r=Number.isFinite(t.motionBlurDepthFar)?t.motionBlurDepthFar:48;return r>i||(r=i+1),{motionBlurMode:t.motionBlurMode,motionBlurStrength:Number.isFinite(t.motionBlurStrength)?t.motionBlurStrength:1,motionBlurFeedbackWeight:jt(t.motionBlurFeedbackWeight),motionBlurSamples:n,motionBlurMaxPixels:Number.isFinite(t.motionBlurMaxPixels)?Math.max(0,t.motionBlurMaxPixels):64,motionBlurVelocityScale:Number.isFinite(t.motionBlurVelocityScale)?t.motionBlurVelocityScale:1,motionBlurDepthScale:Number.isFinite(t.motionBlurDepthScale)?t.motionBlurDepthScale:1,motionBlurDepthNear:i,motionBlurDepthFar:r,motionBlurObjectScale:Number.isFinite(t.motionBlurObjectScale)?t.motionBlurObjectScale:1,motionBlurResetOnCut:t.motionBlurResetOnCut,motionBlurJitter:Number.isFinite(t.motionBlurJitter)?t.motionBlurJitter:1,motionBlurTapSpacing:Number.isFinite(t.motionBlurTapSpacing)&&t.motionBlurTapSpacing>0?t.motionBlurTapSpacing:1}}const ga=new Set(["1","true","on","yes"]),ma=new Set(["0","false","off","no"]);function Rn(t){if(t===null)return null;const e=t.trim().toLowerCase();return ga.has(e)?!0:ma.has(e)?!1:null}function se(t){if(t===null)return null;const e=Number(t.trim());return Number.isFinite(e)?e:null}function ba(t){const e=new URLSearchParams(t.startsWith("?")?t.slice(1):t),n={},i=fa(e.get("mblurMode"));i&&(n.motionBlurMode=i),Rn(e.get("mblur"))===!1&&(n.motionBlurMode="off");const o=se(e.get("mblurStrength"));o!==null&&(n.motionBlurStrength=o,n.motionBlurFeedbackWeight=jt(o));const s=se(e.get("mblurSamples"));s!==null&&(n.motionBlurSamples=s);const a=se(e.get("mblurMaxPx"));a!==null&&(n.motionBlurMaxPixels=a);const l=se(e.get("mblurVelocity"));l!==null&&(n.motionBlurVelocityScale=l);const u=se(e.get("mblurDepth"));u!==null&&(n.motionBlurDepthScale=u);const c=se(e.get("mblurDepthNear"));c!==null&&(n.motionBlurDepthNear=c);const f=se(e.get("mblurDepthFar"));f!==null&&(n.motionBlurDepthFar=f);const p=se(e.get("mblurObject"));p!==null&&(n.motionBlurObjectScale=p);const m=Rn(e.get("mblurCutReset"));m!==null&&(n.motionBlurResetOnCut=m);const S=se(e.get("mblurJitter"));S!==null&&(n.motionBlurJitter=S);const b=se(e.get("mblurTapSpacing"));return b!==null&&(n.motionBlurTapSpacing=b),n}function Sa(t,e){const n=new Float32Array(16),i=new Float32Array(16);n.set(t),i[0]=1,i[5]=1,i[10]=1,i[15]=1;for(let r=0;r<4;r++){let o=r,s=Math.abs(n[r*4+r]);for(let l=r+1;l<4;l++){const u=Math.abs(n[r*4+l]);u>s&&(s=u,o=l)}if(!(s>1e-12))return!1;if(o!==r)for(let l=0;l<4;l++){const u=l*4+r,c=l*4+o,f=n[u];n[u]=n[c],n[c]=f;const p=i[u];i[u]=i[c],i[c]=p}const a=n[r*4+r];for(let l=0;l<4;l++)n[l*4+r]/=a,i[l*4+r]/=a;for(let l=0;l<4;l++){if(l===r)continue;const u=n[r*4+l];if(u!==0)for(let c=0;c<4;c++)n[c*4+l]-=u*n[c*4+r],i[c*4+l]-=u*i[c*4+r]}}return e.set(i),!0}class Ai{constructor(){h(this,"hasHistory",!1);h(this,"seenCut",0);h(this,"prevSpin",0);h(this,"prevViewProj",new Float32Array(16));h(this,"invViewProj",new Float32Array(16))}prepare(e){return!pa({enabled:e.enabled,resetOnCut:e.resetOnCut,strength:e.strength,samples:e.samples,maxPixels:e.maxPixels,velocityScale:e.velocityScale,objectScale:e.objectScale,cameraCut:e.cameraCut,hasHistory:this.hasHistory,seenCut:this.seenCut})||!Sa(e.viewProj,this.invViewProj)?{apply:!1,objectRadians:0}:{apply:!0,objectRadians:e.clusterSpin-this.prevSpin}}commit(e,n,i){this.prevViewProj.set(i),this.prevSpin=n,this.seenCut=e,this.hasHistory=!0}reset(){this.hasHistory=!1}}function xa(t,e){t.set(e.invViewProj,0),t.set(e.prevViewProj,16),t[32]=e.strength,t[33]=e.samples,t[34]=e.maxPixels,t[35]=e.velocityScale,t[36]=e.depthScale,t[37]=e.objectScale,t[38]=e.objectRadians,t[39]=e.depthFar,t[40]=e.clip.clipZScale,t[41]=e.clip.clipZBias,t[42]=e.clip.ndcYScale,t[43]=e.clip.ndcYBias,t[44]=e.width,t[45]=e.height,t[46]=e.clip.ndcToPixelY,t[47]=e.depthNear,t[48]=e.eyeX,t[49]=e.eyeY,t[50]=e.eyeZ,t[51]=Li,t[52]=e.jitter,t[53]=e.tapSpacing,t[54]=0,t[55]=0}const ya=`
struct MotionBlurU {
  invViewProj: mat4x4<f32>,
  prevViewProj: mat4x4<f32>,
  shutter: vec4f,
  depth: vec4f,
  clip: vec4f,
  targetInfo: vec4f,
  eye: vec4f,
  gather: vec4f,
}

@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var sceneTex: texture_2d<f32>;
@group(0) @binding(2) var depthTex: texture_depth_2d;
@group(0) @binding(3) var<uniform> u: MotionBlurU;

struct VsOut {
  @builtin(position) clip: vec4f,
}

@vertex
fn vs(@location(0) pos: vec2f) -> VsOut {
  var o: VsOut;
  o.clip = vec4f(pos, 0.0, 1.0);
  return o;
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let size = vec2f(u.targetInfo.x, u.targetInfo.y);
  let uv = frag.xy / size;
  let center = textureSampleLevel(sceneTex, samp, uv, 0.0);
  let depth = textureLoad(depthTex, vec2i(i32(frag.x), i32(frag.y)), 0);
  let ndcX = uv.x * 2.0 - 1.0;
  let ndcY = uv.y * u.clip.z + u.clip.w;
  let clipZ = depth * u.clip.x + u.clip.y;
  var world = u.invViewProj * vec4f(ndcX, ndcY, clipZ, 1.0);
  let eps = u.eye.w;
  if (abs(world.w) < eps) {
    return center;
  }
  world = world / world.w;
  let prev = u.prevViewProj * vec4f(world.xyz, 1.0);
  if (abs(prev.w) < eps) {
    return center;
  }
  let prevNdc = prev.xy / prev.w;
  let velNdc = vec2f(ndcX - prevNdc.x, ndcY - prevNdc.y);
  var velPx = vec2f(velNdc.x * size.x * 0.5, velNdc.y * size.y * 0.5 * u.targetInfo.z) * u.shutter.w;

  let dist = length(world.xyz - u.eye.xyz);
  let span = max(u.depth.w - u.targetInfo.w, eps);
  let norm = clamp((dist - u.targetInfo.w) / span, 0.0, 1.0);
  let depthWeight = mix(1.0, 1.0 - norm, u.depth.x);
  let ySign = u.targetInfo.z;
  let offset = frag.xy - size * 0.5;
  let offsetUpY = offset.y * ySign;
  let velUp = vec2f(u.depth.z * -offsetUpY, u.depth.z * offset.x);
  let objectPx = vec2f(velUp.x, velUp.y * ySign) * u.depth.y * depthWeight;
  velPx = (velPx + objectPx) * u.shutter.x;

  let maxPx = max(u.shutter.z, 0.0);
  var velLen = length(velPx);
  if (velLen > maxPx && velLen > eps) {
    velPx = velPx * (maxPx / velLen);
    velLen = maxPx;
  }
  let spacing = max(u.gather.y, eps);
  if (velLen < spacing * 0.5) {
    return center;
  }
  let sampleCount = i32(clamp(ceil(velLen / spacing), 2.0, min(u.shutter.y, ${Ne}.0)));
  let ign = fract(${Mi} * fract(dot(frag.xy, vec2f(${Fi}, ${ki}))));
  let phase = ign * u.gather.x;
  var sum = vec3f(0.0);
  for (var i = 0; i < ${Ne}; i++) {
    if (i >= sampleCount) {
      break;
    }
    let t = (f32(i) + phase) / f32(sampleCount) - 0.5;
    let tapUv = uv + (velPx * t) / size;
    sum += textureSampleLevel(sceneTex, samp, tapUv, 0.0).rgb;
  }
  return vec4f(sum / f32(sampleCount), 1.0);
}
`,wa=`#version 300 es
precision highp float;
out vec4 outColor;
uniform sampler2D u_scene;
uniform sampler2D u_depth;
uniform mat4 u_invViewProj;
uniform mat4 u_prevViewProj;
uniform float u_strength;
uniform float u_samples;
uniform float u_maxPixels;
uniform float u_velocityScale;
uniform float u_depthScale;
uniform float u_objectScale;
uniform float u_objectRadians;
uniform float u_depthFar;
uniform float u_clipZScale;
uniform float u_clipZBias;
uniform float u_ndcYScale;
uniform float u_ndcYBias;
uniform float u_ndcToPixelY;
uniform vec2 u_targetSize;
uniform float u_depthNear;
uniform vec3 u_eye;
uniform float u_epsilon;
uniform float u_jitter;
uniform float u_tapSpacing;

void main() {
  vec2 uv = gl_FragCoord.xy / u_targetSize;
  vec4 center = textureLod(u_scene, uv, 0.0);
  float depth = texture(u_depth, uv).r;
  float ndcX = uv.x * 2.0 - 1.0;
  float ndcY = uv.y * u_ndcYScale + u_ndcYBias;
  float clipZ = depth * u_clipZScale + u_clipZBias;
  vec4 world = u_invViewProj * vec4(ndcX, ndcY, clipZ, 1.0);
  if (abs(world.w) < u_epsilon) {
    outColor = center;
    return;
  }
  world /= world.w;
  vec4 prev = u_prevViewProj * vec4(world.xyz, 1.0);
  if (abs(prev.w) < u_epsilon) {
    outColor = center;
    return;
  }
  vec2 prevNdc = prev.xy / prev.w;
  vec2 velNdc = vec2(ndcX - prevNdc.x, ndcY - prevNdc.y);
  vec2 velPx = vec2(velNdc.x * u_targetSize.x * 0.5, velNdc.y * u_targetSize.y * 0.5 * u_ndcToPixelY) * u_velocityScale;

  float dist = length(world.xyz - u_eye);
  float span = max(u_depthFar - u_depthNear, u_epsilon);
  float norm = clamp((dist - u_depthNear) / span, 0.0, 1.0);
  float depthWeight = mix(1.0, 1.0 - norm, u_depthScale);
  float ySign = u_ndcToPixelY;
  vec2 offset = gl_FragCoord.xy - u_targetSize * 0.5;
  float offsetUpY = offset.y * ySign;
  vec2 velUp = vec2(u_objectRadians * -offsetUpY, u_objectRadians * offset.x);
  vec2 objectPx = vec2(velUp.x, velUp.y * ySign) * u_objectScale * depthWeight;
  velPx = (velPx + objectPx) * u_strength;

  float maxPx = max(u_maxPixels, 0.0);
  float velLen = length(velPx);
  if (velLen > maxPx && velLen > u_epsilon) {
    velPx *= maxPx / velLen;
    velLen = maxPx;
  }
  float spacing = max(u_tapSpacing, u_epsilon);
  if (velLen < spacing * 0.5) {
    outColor = center;
    return;
  }
  int sampleCount = int(clamp(ceil(velLen / spacing), 2.0, min(u_samples, float(${Ne}))));
  float ign = fract(${Mi} * fract(dot(gl_FragCoord.xy, vec2(${Fi}, ${ki}))));
  float phase = ign * u_jitter;
  vec3 sum = vec3(0.0);
  for (int i = 0; i < ${Ne}; i++) {
    if (i >= sampleCount) break;
    float t = (float(i) + phase) / float(sampleCount) - 0.5;
    vec2 tapUv = uv + (velPx * t) / u_targetSize;
    sum += textureLod(u_scene, tapUv, 0.0).rgb;
  }
  outColor = vec4(sum / float(sampleCount), 1.0);
}
`,va={bloomPulse:{group:"bloom",min:0,max:1,description:"Pulse added to bloom each frame."},bloomCompositeBase:{group:"bloom",min:0,max:2,description:"Composite bloom scale before bloomStrength."},bloomTintRed:{group:"bloom",min:0,max:2,description:"Bloom tint red at full accent."},bloomTintGreen:{group:"bloom",min:0,max:2,description:"Bloom tint green at full accent."},bloomTintBlue:{group:"bloom",min:0,max:2,description:"Bloom tint blue at full accent."},dashAcross:{group:"laser",min:0,max:40,description:"Laser dash cross-section sharpness."},dashTipStart:{group:"laser",min:0,max:1,description:"Laser dash tip fade start."},dashTipEnd:{group:"laser",min:0,max:1.5,description:"Laser dash tip fade end."},fogSampleExposure:{group:"fog",min:.5,max:8,description:"Exposure the fog gap gray was sampled at."},fogGapRed:{group:"fog",min:0,max:.5,description:"Fog gap red before the live exposure."},fogGapGreen:{group:"fog",min:0,max:.5,description:"Fog gap green before the live exposure."},fogGapBlue:{group:"fog",min:0,max:.5,description:"Fog gap blue before the live exposure."},fogDistanceStart:{group:"fog",min:0,max:40,description:"Distance where linear fog starts."},fogDistanceEnd:{group:"fog",min:1,max:80,description:"Distance where linear fog is full."},shotFogEarly:{group:"fog",min:0,max:1,description:"Open-field light at the cut, as a fraction of the kneed fog. 1 is the mid-shot grey."},shotFogEarlyHold:{group:"fog",min:0,max:1,description:"Shot phase that stays on the cut field darkness."},shotFogEarlyEnd:{group:"fog",min:0,max:1,description:"Shot phase where the open field is back on the mid-shot grey."},tunnelBody:{group:"tunnel",min:0,max:.2,description:"Near-black body of a tunnel square."},tunnelSquareSize:{group:"tunnel",min:.1,max:4,description:"Shared tunnel square size."},tunnelCylinderSpan:{group:"tunnel",min:4,max:80,description:"Length of each tunnel cylinder."},tunnelEnergyDecay:{group:"tunnel",min:0,max:20,description:"How fast tunnel beat energy falls."},tunnelScreenCap:{group:"tunnel",min:.02,max:.5,description:"Close square size as a fraction of distance."},tunnelScreenCapNear:{group:"tunnel",min:.05,max:2,description:"Distance floor for the square screen cap."},tunnelInnerGray:{group:"tunnel",min:0,max:1,description:"Inner cylinder gray as a fraction of the fog."},tunnelOuterGray:{group:"tunnel",min:0,max:1,description:"Outer cylinder gray as a fraction of the fog."},tunnelEdgeHard:{group:"tunnel",min:0,max:1,description:"Where a sharp plate starts to feather."},tunnelEdgeSoft:{group:"tunnel",min:0,max:1,description:"Where a soft plate starts to feather."},tunnelEdgeSpan:{group:"tunnel",min:.05,max:1.5,description:"Softness that reaches the soft feather."},tunnelCover:{group:"tunnel",min:0,max:1,description:"Peak plate alpha. Lower sits the square on the fog."},cameraRollWobble:{group:"camera",min:0,max:3,description:"Resting camera-roll wobble."},cameraRollWobbleGain:{group:"camera",min:0,max:3,description:"First roll-wobble gain."},cameraRollWobbleRate:{group:"camera",min:0,max:40,description:"First roll-wobble rate."},cameraRollWobbleGainB:{group:"camera",min:0,max:3,description:"Second roll-wobble gain."},cameraRollWobbleRateB:{group:"camera",min:0,max:40,description:"Second roll-wobble rate."},cameraRollSnap:{group:"camera",min:0,max:8,description:"Roll snap on a beat."},cameraRollSnapSpan:{group:"camera",min:0,max:6,description:"Extra hashed roll snap."},cameraRollBurst:{group:"camera",min:0,max:20,description:"Fast roll burst on a beat."},cameraRollBurstDecay:{group:"camera",min:0,max:80,description:"How fast the roll burst dies."},cameraDriftInward:{group:"camera",min:0,max:.2,description:"Inward eye drift over one beat."},cameraDriftOrbit:{group:"camera",min:0,max:.5,description:"Eye orbit over one beat, radians."},cameraOrbitLift:{group:"camera",min:0,max:2,description:"Lift of the hashed orbit axis."},tunnelWallRadius:{group:"camera",min:1,max:10,description:"Tunnel wall radius."},clusterCoreRadius:{group:"camera",min:.05,max:2,description:"Dense core the eye must not enter."},eyeNominalInner:{group:"camera",min:.2,max:4,description:"Close end of the eye band."},eyeStormEdge:{group:"camera",min:.2,max:6,description:"Outer edge of the loose cloud."},eyeNominalOuter:{group:"camera",min:.2,max:6,description:"Far end of the eye band."},eyeInsideDepth:{group:"camera",min:0,max:1,description:"How far a cut may step inside."},eyeOutsideDepth:{group:"camera",min:0,max:1,description:"How far a cut may step outside."},eyeInsideFraction:{group:"camera",min:0,max:1,description:"Share of beats that step inside."},eyeOutsideFraction:{group:"camera",min:0,max:1,description:"Share of beats that step outside."},packedMassRadius:{group:"flight",min:.2,max:4,description:"Radius of the packed mass that can smear."},eyeCutRate:{group:"flight",min:0,max:8,description:"Eye speed that counts as a cut."},shutterSeconds:{group:"flight",min:0,max:1,description:"Shutter time for the flight smear."},flightDrawRate:{group:"flight",min:0,max:8,description:"Fastest roll the smear will draw."},maxRollRadians:{group:"flight",min:0,max:4,description:"Largest flight-smear angle."},zoomUnitsPerRadian:{group:"flight",min:0,max:3,description:"Outward smear per radian of roll."},maxAddedTail:{group:"flight",min:0,max:.5,description:"Longest tail added to a wedge."},flightEmissiveMin:{group:"flight",min:0,max:1,description:"Emissive below which a wedge does not smear."},flightLateralMin:{group:"flight",min:0,max:.5,description:"Off-axis distance before a wedge smears."},flightExtraMin:{group:"flight",min:0,max:.5,description:"Smear length below which a wedge stays put."},flightHistoryFps:{group:"flight",min:1,max:480,description:"Fastest step the smear history accepts."},flightHistoryMax:{group:"flight",min:.01,max:1,description:"Slowest step the smear history accepts."},shardStreakTime:{group:"flight",min:0,max:4,description:"Seconds of tunnel-axis spin drawn as a shard streak. The #183 floor is 1.25."},shardStreakMax:{group:"flight",min:0,max:3,description:"Longest spin streak added to a shard. The #183 floor is 0.95."},shardEdgeSoft:{group:"flight",min:0,max:1.5,description:"Soft skirt outside a shard, as a fraction of its size. 0 is the hard box."},shardStreakRadial:{group:"flight",min:0,max:1,description:"Streak aim from spin tangent toward the outward radial. 0 is the tangent bar."},shardStreakOut:{group:"flight",min:0,max:1,description:"Share of the streak that grows outward. 0 is a centered bar."},shardStreakMelt:{group:"flight",min:0,max:1,description:"How far the streak tail dissolves into the fog. 0 is the rigid bar."},shardStreakTip:{group:"flight",min:0,max:1,description:"Tail width at the tip, as a fraction of the shard. 1 is the full bar."},shardStreakPinch:{group:"flight",min:.02,max:1,description:"How far along the tail the width eases to the tip. 0.1 is the short needle."},shardStreakSoft:{group:"flight",min:0,max:28,description:"Gaussian falloff across a streak tail. 0 is the hard taper."},shardStreakFade:{group:"flight",min:0,max:12,description:"How fast a streak tail dissolves. Dark tails go first."},shockDecay:{group:"shock",min:0,max:12,description:"Shell flash decay per second."},rippleDecay:{group:"shock",min:0,max:20,description:"Laser flash decay per second."},ringSideSpread:{group:"rings",min:1,max:8,description:"Side-on wash width. The face-on wash stays on ringGlowSpread. 5.7 was a dome."},ringAxial:{group:"rings",min:0,max:6,description:"Side-on thickness along the tunnel axis. 2.5 was the solid wings."},ringSideWiden:{group:"rings",min:0,max:2,description:"In-plane widen from the side-on lift. 0 leaves the dash width."},ringWashBreak:{group:"rings",min:0,max:1,description:"Gaps in the side-on wash. 0 is a solid wing."},ringWashFrequency:{group:"rings",min:0,max:8,description:"How often the side-on wash breaks across the cluster. 0 is continuous."},ringBandNear:{group:"rings",min:0,max:3,description:"Distance where the side-on wash starts. Inside the cloud, not the outer rim."},ringBandFar:{group:"rings",min:0,max:4,description:"Distance where the side-on wash is fully on."},ringSideGain:{group:"rings",min:0,max:4,description:"Side-on glow gain. 2 was the solid wing. 1 matches the face-on wash."},ringWashPull:{group:"rings",min:.05,max:1,description:"Edge-on ring radius as a fraction of the lathe. 1 leaves the wings outside the cloud."},ringWashEngage:{group:"rings",min:.05,max:1,description:"Side-on amount where the inward pull is complete. 1 waits for a fully edge-on ring."},ringFaceStart:{group:"rings",min:.3,max:1,description:"Tunnel alignment where a down-axis ring starts to become one arc."},ringFaceEnd:{group:"rings",min:.3,max:1,description:"Tunnel alignment where only the core arc remains. Oblique rings stay below the start."},ringFaceArc:{group:"rings",min:.05,max:1,description:"Fraction of the hoop kept when looking down the tunnel. 1 is the full dashed ring."},ringFaceScale:{group:"rings",min:.05,max:1,description:"Down-tunnel arc radius as a fraction of the lathe. 1 leaves it on the outer hoop."},ringHornSpread:{group:"rings",min:1,max:8,description:"Outer-ring wash width. The side-on wash stays on ringSideSpread."},ringHornLength:{group:"rings",min:1,max:8,description:"Outer-ring wash length in core lengths. The side-on wash keeps ringGlowLength."},ringHornBreak:{group:"rings",min:0,max:1,description:"Gaps in the outer-ring wash. 0 is the solid horn."},ringHornPull:{group:"rings",min:.05,max:1,description:"Outer-ring radius as a fraction of the lathe. 1 leaves the horn on the rim."},ringHornSoft:{group:"rings",min:0,max:1,description:"Soften of the outer-ring wash. 0 keeps the hard horn body."},ringHornGain:{group:"rings",min:0,max:2,description:"Outer-ring wash strength. 1 matches the face-on glow."},ringHornFrequency:{group:"rings",min:0,max:8,description:"How often the outer-ring wash breaks. The side-on wash keeps ringWashFrequency."},ringCapSide:{group:"rings",min:0,max:1,description:"Side at which the in-plane glow cap turns on. 1 misses a frame just under the step."},ringEdgeFacing:{group:"rings",min:0,max:1,description:"Plane facing below this uses the tight edge cap. 0 leaves that cap off."},ringEdgeCap:{group:"rings",min:0,max:.3,description:"Deep edge-on width and axial cap, as a fraction of distance."},ringEdgeLength:{group:"rings",min:1,max:8,description:"Deep edge-on wash length in core lengths. The side-on wash keeps ringGlowLength."},ringEdgePull:{group:"rings",min:0,max:1,description:"Deep edge-on radius as a fraction of the lathe. 0 leaves the hoop pull in charge."},ringEdgeBody:{group:"rings",min:0,max:1,description:"Deep edge-on wash body. 0 is the thin arc. 1 is the side-on wash on the pulled ring."},ringEdgeGain:{group:"rings",min:0,max:2,description:"Deep edge-on wash strength. 1 matches the side-on wash. Lower stays a wash when dashes stack."},ringEdgeFront:{group:"rings",min:0,max:1,description:"1 draws a deep edge-on ring over the shards when the hoop is closed. 0 keeps the depth test."},ringEdgeSpread:{group:"rings",min:0,max:.6,description:"Camera-facing half-width of the deep edge-on wash, as a fraction of distance."},ringFlashRise0:{group:"rings",min:0,max:2,description:"Ring flash rise start, in beats."},ringFlashRise1:{group:"rings",min:0,max:2,description:"Ring flash rise end, in beats."},ringFlashFall0:{group:"rings",min:0,max:3,description:"Ring flash fall start, in beats."},ringFlashFall1:{group:"rings",min:0,max:3,description:"Ring flash fall end, in beats."},ringFlashLife:{group:"rings",min:.2,max:4,description:"Beats a ring flash stays armed."},phraseBigBoost:{group:"shock",min:1,max:3,description:"Hit boost on a big phrase."},phraseSmallBoost:{group:"shock",min:1,max:3,description:"Hit boost on a small phrase."},shockHit:{group:"shock",min:0,max:3,description:"Base hit strength."},shockHitCap:{group:"shock",min:0,max:4,description:"Maximum hit strength."},dofFocus:{group:"bloom",min:.05,max:48,description:"World distance that stays sharp when depth of field is on."},supershapeFillCap:{group:"shape",min:.15,max:2,description:"Largest shard fill. Above 1 the neighbours overlap."},supershapePresetIndex:{group:"shape",min:0,max:Ve.length-1,description:"Preset row. The bracket keys walk the same index."},lightViewAlign:{group:"light",min:0,max:1,description:"Blend of the key light toward the eye. 1 puts the specular lobe on the facing faces."},dofAperture:{group:"bloom",min:0,max:8,description:"Depth of field. 0 leaves the bloom kernel unchanged."}};function _a(t){return t.startsWith("bloom")||t.startsWith("dash")?"bloom":t.startsWith("fog")||t.startsWith("shotFog")?"fog":t.startsWith("tunnel")||t.startsWith("eye")?"tunnel":t.startsWith("laser")?"laser":t.startsWith("ring")?"rings":t.startsWith("camera")||t.startsWith("clusterCore")?"camera":t.startsWith("flight")||t.startsWith("packed")||t.startsWith("maxRoll")||t.startsWith("shutter")||t.startsWith("zoom")?"flight":t.startsWith("shock")||t.startsWith("ripple")||t.startsWith("phrase")?"shock":t.startsWith("motion")?"motion":t.startsWith("supershape")||t.startsWith("shard")?"shape":t.startsWith("light")||t==="exposure"||t==="specular"||t==="specularSharpness"||t==="metal"||t==="accentBlue"?"light":"cluster"}function Yt(){const t=[];for(const e of Object.keys(d)){if(typeof d[e]!="number")continue;const n=va[e],i=d[e];t.push({name:e,group:(n==null?void 0:n.group)??_a(e),min:(n==null?void 0:n.min)??Math.min(0,i),max:(n==null?void 0:n.max)??Math.max(1,Math.abs(i)*4,i),description:(n==null?void 0:n.description)??e})}return t}function ot(t){return d[t]}const pt=[{query:"bloom",field:"bloomStrength",also:["bloom"]},{query:"bloomLift",field:"bloom"},{query:"spinFalloff",field:"clusterSpinFalloff"},{query:"thickness",field:"supershapeThickness"},{query:"face",field:"supershapeFace"},{query:"shardSpin",field:"shardSpinSpeed"},{query:"spinRate",field:"clusterSpinRate"},{query:"alignTunnel",field:"clusterAlignToTunnel"},{query:"supershape",field:"supershapePresetIndex"},{query:"mblurStrength",field:"motionBlurStrength",alsoFeedback:!0},{query:"mblurSamples",field:"motionBlurSamples"},{query:"mblurMaxPx",field:"motionBlurMaxPixels"},{query:"mblurVelocity",field:"motionBlurVelocityScale"},{query:"mblurDepth",field:"motionBlurDepthScale"},{query:"mblurDepthNear",field:"motionBlurDepthNear"},{query:"mblurDepthFar",field:"motionBlurDepthFar"},{query:"mblurObject",field:"motionBlurObjectScale"},{query:"mblurJitter",field:"motionBlurJitter"},{query:"mblurTapSpacing",field:"motionBlurTapSpacing"}],An=["session","clock","bloom","light","fog","tunnel","laser","rings","camera","cluster","flight","shock","motion","shape"];function Ba(t,e,n){if(Number.isInteger(n)&&Number.isInteger(t)&&Number.isInteger(e)&&e-t>=1)return 1;const i=Math.abs(e-t),r=(i>0?i:Math.abs(n)||1)/200,s=10**Math.floor(Math.log10(Math.max(r,1e-6))),a=r/s;return(a<1.5?1:a<3.5?2:a<7.5?5:10)*s}function st(t,e,n){t[e]=n}function Gt(t,e){const n=t[e];return typeof n=="number"?n:0}function Ea(t,e,n){const i=new URLSearchParams(t.startsWith("?")?t.slice(1):t);vi(n,e.defaultValue)?i.delete(e.query):i.set(e.query,he(n));for(const o of e.clears)o!==e.query&&i.delete(o);const r=i.toString();return r?`?${r}`:""}function Ta(t,e,n,i){const r=[];for(const s of Yt()){const a=t[s.name];typeof a=="number"&&(vi(a,ot(s.name))||r.push(`${s.name} ${he(a)}`))}return t.shadingMode!==d.shadingMode&&r.push(`shadingMode ${t.shadingMode}`),t.clusterSpinTwist!==d.clusterSpinTwist&&r.push(`spinTwist ${t.clusterSpinTwist}`),t.motionBlurMode!==d.motionBlurMode&&r.push(`mblurMode ${t.motionBlurMode}`),t.motionBlurResetOnCut!==d.motionBlurResetOnCut&&r.push(`mblurCutReset ${t.motionBlurResetOnCut?1:0}`),`settings: ${r.length>0?`${r.join(", ")}, rest default`:"defaults"}, bpm ${he(e)}, ${n}, ${i}`}function Pa(t){const e=[];for(const n of Yt())e.push(`${n.name}=${he(Gt(t,n.name))}`);return e.push(`shadingMode=${t.shadingMode}`),e.push(`spinTwist=${t.clusterSpinTwist}`),e.push(`mblurMode=${t.motionBlurMode}`),e.push(`mblurCutReset=${t.motionBlurResetOnCut?1:0}`),e.join(" ")}function Fa(t){const{look:e}=t,n=[],i=new Map;for(const r of pt){const o=i.get(r.field)??[];o.push(r.query),i.set(r.field,o)}for(const r of Yt()){const o=r.name,s=ka(o);n.push({name:o,group:r.group,min:r.min,max:r.max,step:Ba(r.min,r.max,ot(o)),query:s,apply:"live",description:r.description,clears:(i.get(o)??[]).filter(a=>a!==s),defaultValue:ot(o),read:()=>Gt(e,o),write:a=>st(e,o,Number(a))})}for(const r of pt){if(n.some(l=>l.query===r.query))continue;const o=n.find(l=>l.name===r.field),s=r.field,a=r.also??[];n.push({name:r.query,group:(o==null?void 0:o.group)??Ma(s),min:(o==null?void 0:o.min)??0,max:(o==null?void 0:o.max)??1,step:(o==null?void 0:o.step)??.01,query:r.query,apply:"live",description:(o==null?void 0:o.description)??r.query,clears:[s,...a,...i.get(s)??[],...a.flatMap(l=>i.get(l)??[])].filter(l=>l!==r.query),defaultValue:(o==null?void 0:o.defaultValue)??ot(s),read:()=>Gt(e,s),write:l=>{const u=Number(l);st(e,s,u);for(const c of a)st(e,c,u);r.alsoFeedback&&(e.motionBlurFeedbackWeight=jt(u))}})}return n.push(Pt(e,"shadingMode","light",["flat","blinnPhong"],d.shadingMode,"Flat face, or the old shared-eye glint."),Pt(e,"spinTwist","cluster",["signed","abs"],d.clusterSpinTwist,"Twist sign. URL key spinTwist.","clusterSpinTwist"),Pt(e,"mblurMode","motion",["off","feedback","reprojection"],d.motionBlurMode,"Motion blur path.","motionBlurMode",["mblur"]),Ee({name:"mblur",group:"motion",query:"mblur",description:"0 forces motion blur off.",clears:["mblurMode"],defaultValue:1,read:()=>e.motionBlurMode==="off"?0:1,write:r=>{e.motionBlurMode=Number(r)>=.5?d.motionBlurMode:"off"}}),Ee({name:"mblurCutReset",group:"motion",query:"mblurCutReset",description:"Drop blur history on a camera cut.",clears:[],defaultValue:d.motionBlurResetOnCut?1:0,read:()=>e.motionBlurResetOnCut?1:0,write:r=>{e.motionBlurResetOnCut=Number(r)>=.5}}),Ft({name:"bpm",group:"clock",min:40,max:240,step:1,query:"bpm",apply:"live",description:"Beat clock tempo.",defaultValue:Ze,read:()=>t.bpm(),write:r=>t.setBpm(Number(r))}),Cn({name:"beat",group:"clock",query:"beat",choices:["auto","clock","bridge"],description:"Who emits beats. Takes effect on reload.",defaultValue:"auto",read:()=>t.beat()}),Cn({name:"scene",group:"session",query:"scene",choices:t.scenes,description:"Active scene. Takes effect on reload.",defaultValue:"deepness",read:()=>t.scene()}),Ft({name:"capture",group:"session",min:0,max:60,step:1,query:"capture",apply:"reload",description:"Capture frame rate. 0 is live playback.",defaultValue:0,read:()=>t.capture(),write:()=>{}}),Ft({name:"seconds",group:"session",min:1,max:120,step:1,query:"seconds",apply:"reload",description:"Capture length. Takes effect on reload.",defaultValue:20,read:()=>t.seconds(),write:()=>{}}),Ee({name:"debug",group:"session",query:"debug",description:"Stats line on an interval.",clears:[],defaultValue:0,read:()=>t.debug()?1:0,write:r=>t.setDebug(Number(r)>=.5)}),Ee({name:"pause",group:"session",query:"pause",description:"Hold the clock.",clears:[],defaultValue:0,read:()=>t.pause()?1:0,write:r=>t.setPause(Number(r)>=.5)}),Ee({name:"log",group:"session",query:"log",description:"Story detail. 0 settings, 1 beats, 2 timing, 3 raw.",clears:[],defaultValue:1,min:0,max:3,step:1,read:()=>t.logLevel(),write:r=>t.setLogLevel(Number(r))}),Ee({name:"hud",group:"session",query:"hud",description:"Settings panel. H toggles it.",clears:[],defaultValue:0,read:()=>t.hudOpen()?1:0,write:r=>t.setHudOpen(Number(r)>=.5)})),n}function ka(t){var n;return pt.some(i=>i.query===t&&i.field!==t)?((n=pt.find(i=>i.field===t&&i.query!==t))==null?void 0:n.query)??t:t}function Ma(t){return t.startsWith("motion")?"motion":t.startsWith("bloom")?"bloom":t.startsWith("supershape")||t.startsWith("shard")?"shape":(t.startsWith("cluster"),"cluster")}function Pt(t,e,n,i,r,o,s=e,a=[]){return{name:e,group:n,min:0,max:Math.max(0,i.length-1),step:1,query:e,apply:"live",description:o,choices:i,clears:a,defaultValue:r,read:()=>String(t[s]??r),write:l=>{const u=String(l);st(t,s,i.includes(u)?u:r)}}}function Ee(t){return{...t,min:t.min??0,max:t.max??1,step:t.step??1,apply:"live"}}function Ft(t){return{...t,clears:[]}}function Cn(t){return{...t,min:0,max:Math.max(0,t.choices.length-1),step:1,apply:"reload",clears:[],write:()=>{}}}function La(t,e,n){t.replaceChildren();const i=document.createElement("input");i.type="search",i.placeholder="filter",i.className="look-filter",i.spellcheck=!1,t.append(i);const r=new Map;for(const c of e)r.set(c.name,(r.get(c.name)??0)+1);const o=new Map,s=[];for(const c of e){let f=o.get(c.group);if(!f){f=document.createElement("section"),f.className="look-group",f.dataset.group=c.group;const B=document.createElement("h3");B.textContent=c.group,f.append(B),o.set(c.group,f)}const p=document.createElement("label");p.className="look-row",p.title=c.description;const m=document.createElement("span");m.className="look-name",m.textContent=(r.get(c.name)??0)>1&&c.query!==c.name?`${c.name} (${c.query})`:c.name;const S=document.createElement("span");S.className="look-range",S.textContent=c.choices?c.choices.join(" "):`${he(c.min)}–${he(c.max)}`,p.append(m,S);let b=null,g=null,x=null;if(c.choices){x=document.createElement("select");for(const B of c.choices){const _=document.createElement("option");_.value=B,_.textContent=B,x.append(_)}x.addEventListener("change",()=>l(c,x.value)),p.append(x)}else{b=document.createElement("input"),b.type="range",b.min=String(c.min),b.max=String(c.max),b.step=String(c.step),g=document.createElement("input"),g.type="number",g.step=String(c.step);const B=()=>l(c,Number(b.value)),_=()=>{if(g.value.trim()==="")return;const T=Number(g.value);Number.isFinite(T)&&l(c,T)};c.apply==="reload"?(b.addEventListener("change",B),g.addEventListener("change",_)):(b.addEventListener("input",B),g.addEventListener("input",_)),p.append(b,g)}f.append(p),s.push({control:c,range:b,number:g,select:x,row:p})}const a=[...o.entries()].sort((c,f)=>Nn(c[0])-Nn(f[0])||c[0].localeCompare(f[0]));for(const[,c]of a)t.append(c);i.addEventListener("input",()=>{const c=i.value.trim().toLowerCase();for(const f of s){const p=c===""||f.control.name.toLowerCase().includes(c)||f.control.group.includes(c);f.row.hidden=!p}for(const f of o.values()){const p=[...f.querySelectorAll(".look-row")].some(m=>!m.hidden);f.hidden=!p}});function l(c,f){const p=c.read();Ra(p,f)||(n(c,p,f),u(c))}function u(c){for(const f of s){if(c&&f.control!==c||document.activeElement===f.number||document.activeElement===f.select)continue;const p=f.control.read();if(f.select){f.select.value=String(p);continue}if(f.number&&document.activeElement!==f.number&&(f.number.value=he(p)),f.range){const m=typeof p=="number"?p:Number(p),S=Math.min(f.control.max,Math.max(f.control.min,m));f.range.value=String(Number.isFinite(S)?S:f.control.min)}}}return u(),{refresh(){u()},setOpen(c){t.hidden=!c,c&&u()},isOpen(){return!t.hidden}}}function Nn(t){const e=An.indexOf(t);return e<0?An.length:e}function Ra(t,e){if(typeof t=="number"&&typeof e=="number"){const n=Math.max(1,Math.abs(t),Math.abs(e));return Math.abs(t-e)<=n*1e-9}return String(t)===String(e)}function Aa(t){const e=new URLSearchParams(t),n=Number(e.get("capture"));if(!Number.isFinite(n)||n<=0)return null;const i=Number(e.get("bpm")??"120"),r=Number(e.get("seconds")??"20");return{fps:n,bpm:Number.isFinite(i)&&i>0?i:120,seconds:Number.isFinite(r)&&r>0?r:20,frame:0}}function Ca(t,e){const n=1/e.fps,i=e.frame*n,r=60/e.bpm,o=Math.floor(i/r+1e-6),s=e.frame===0?-1:Math.floor((e.frame-1)*n/r+1e-6),a=o!==s;t.bpm=e.bpm,t.time=i,t.t=i,t.pulse=Math.max(0,t.pulse-n*2.6),t.beat=a,a&&(t.pulse=1);const l=e.frame;return e.frame+=1,{frame:l,time:i,beat:a,deltaSeconds:n}}function Zt(t){return Number.isFinite(t)?Math.min(1,Math.max(0,t)):0}class Ci{constructor(){h(this,"hasHistory",!1);h(this,"seenCut",0)}reset(){this.hasHistory=!1}step(e,n,i){if(!(Zt(e)>0))return this.hasHistory=!1,"off";const r=!this.hasHistory||n&&i!==this.seenCut;return this.seenCut=i,this.hasHistory=!0,r?"reset":"blend"}}const Na=`
@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var currentTex: texture_2d<f32>;
@group(0) @binding(2) var historyTex: texture_2d<f32>;
@group(0) @binding(3) var<uniform> u: vec4f;

struct VsOut { @builtin(position) clip: vec4f }

@vertex
fn vs(@location(0) pos: vec2f) -> VsOut {
  var o: VsOut;
  o.clip = vec4f(pos, 0.0, 1.0);
  return o;
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let uv = frag.xy / vec2f(textureDimensions(currentTex));
  let current = textureSampleLevel(currentTex, samp, uv, 0.0).rgb;
  let history = textureSampleLevel(historyTex, samp, uv, 0.0).rgb;
  return vec4f(mix(current, history, u.x), 1.0);
}
`,Da=`#version 300 es
precision highp float;
uniform sampler2D u_current;
uniform sampler2D u_history;
uniform float u_strength;
out vec4 outColor;
void main() {
  vec2 uv = gl_FragCoord.xy / vec2(textureSize(u_current, 0));
  vec3 current = texture(u_current, uv).rgb;
  vec3 history = texture(u_history, uv).rgb;
  outColor = vec4(mix(current, history, u_strength), 1.0);
}
`;function te(t,e,n,i,r,o){for(const s of[n,i,r,n,r,o])t.push(s[0],s[1],s[2],e[0],e[1],e[2])}function Ua(){const t=[],e=(r,o,s)=>[r,o,s];te(t,[0,0,1],e(-.5,-.5,.5),e(.5,-.5,.5),e(.5,.5,.5),e(-.5,.5,.5)),te(t,[0,0,-1],e(.5,-.5,-.5),e(-.5,-.5,-.5),e(-.5,.5,-.5),e(.5,.5,-.5)),te(t,[1,0,0],e(.5,-.5,.5),e(.5,-.5,-.5),e(.5,.5,-.5),e(.5,.5,.5)),te(t,[-1,0,0],e(-.5,-.5,-.5),e(-.5,-.5,.5),e(-.5,.5,.5),e(-.5,.5,-.5)),te(t,[0,1,0],e(-.5,.5,.5),e(.5,.5,.5),e(.5,.5,-.5),e(-.5,.5,-.5)),te(t,[0,-1,0],e(-.5,-.5,-.5),e(.5,-.5,-.5),e(.5,-.5,.5),e(-.5,-.5,.5));const n=new ArrayBuffer(t.length*4),i=new Float32Array(n);return i.set(t),i}const Ni=Ua(),Di=36,Ui=6;function Oa(t,e,n){const i=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=[n[0]-t[0],n[1]-t[1],n[2]-t[2]];let o=i[1]*r[2]-i[2]*r[1],s=i[2]*r[0]-i[0]*r[2],a=i[0]*r[1]-i[1]*r[0];const l=Math.hypot(o,s,a)||1;o/=l,s/=l,a/=l;const u=(t[0]+e[0]+n[0])/3,c=(t[1]+e[1]+n[1])/3,f=(t[2]+e[2]+n[2])/3;return o*u+s*c+a*f<0&&(o=-o,s=-s,a=-a),[o,s,a]}const Ga=[[-.11,.5,-.07],[.14,.47,-.02],[0,.45,.1],[-.24,.24,-.16],[.26,.22,-.12],[.06,.18,.26],[-.08,.16,.18],[-.34,.04,-.22],[.36,.06,-.14],[.02,-.02,.32],[-.2,-.22,-.14],[.22,-.2,-.08],[.04,-.24,.18],[-.12,-.5,-.08],[.15,-.46,-.03],[0,-.48,.11]],Ha=1,Dn=.02,Ia=.18,za=.22,Wa=.12;function gt(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function ee(t,e){return[t[0]+e[0],t[1]+e[1],t[2]+e[2]]}function ie(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2]]}function K(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function ne(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function _e(t){return Math.hypot(t[0],t[1],t[2])}function Kt(t){const e=_e(t)||1;return K(t,1/e)}function Va(t,e,n){return ee(t,K(ie(e,t),n))}function $a(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function qa(t){const e=[],n=t.length;for(let i=0;i<n;i++)for(let r=i+1;r<n;r++)for(let o=r+1;o<n;o++){const s=t[i],a=t[r],l=t[o],u=gt(ie(a,s),ie(l,s));if(_e(u)<1e-6)continue;let c=Kt(u);const f=K(ee(ee(s,a),l),1/3);ne(c,f)<0&&(c=K(c,-1));const p=ne(c,s);let m=0,S=0;for(let g=0;g<n;g++){if(g===i||g===r||g===o)continue;const x=ne(c,t[g])-p;x>1e-5?m+=1:x<-1e-5&&(S+=1)}if(m>0&&S>0)continue;e.find(g=>Math.abs(ne(g.normal,c)-1)<2e-4&&Math.abs(g.offset-p)<2e-4)||e.push({normal:c,offset:p,points:[]})}for(const i of t)for(const r of e){if(Math.abs(ne(r.normal,i)-r.offset)>2e-4)continue;r.points.some(s=>_e(ie(s,i))<1e-4)||r.points.push(i)}return e.filter(i=>i.points.length>=3)}function Xa(t){const e=t.points.length;let n=[0,0,0];for(const u of t.points)n=ee(n,u);n=K(n,1/e);const i=Math.abs(t.normal[1])>.85?[1,0,0]:[0,1,0],r=Kt(gt(i,t.normal)),o=gt(t.normal,r),s=t.points.map(u=>{const c=ie(u,n),f=Math.atan2(ne(c,o),ne(c,r));return{point:u,angle:f}}).sort((u,c)=>u.angle-c.angle),a=[],l=s[0].point;for(let u=1;u<s.length-1;u++)a.push({a:l,b:s[u].point,c:s[u+1].point});return a}function ja(t,e){const n=o=>Math.round(o*1e4),i=`${n(t[0])},${n(t[1])},${n(t[2])}`,r=`${n(e[0])},${n(e[1])},${n(e[2])}`;return i<r?`${i}|${r}`:`${r}|${i}`}function Ya(t){const e=new Map,n=(r,o)=>{const s=ja(r,o),a=e.get(s);if(a)return a;const l=K(ee(r,o),.5);return e.set(s,l),l},i=[];for(const r of t){const o=n(r.a,r.b),s=n(r.b,r.c),a=n(r.c,r.a);i.push({a:r.a,b:o,c:a},{a:o,b:r.b,c:s},{a,b:s,c:r.c},{a:o,b:s,c:a})}return i}function kt(t,e,n){const i=ie(n,e),r=ne(i,i);if(r<1e-12)return _e(ie(t,e));const o=ne(ie(t,e),i)/r,s=Math.max(0,Math.min(1,o));return _e(ie(t,ee(e,K(i,s))))}function Un(t,e){let n=0;for(const i of e){const r=ne(i.normal,t)-i.offset;r>n&&(n=r)}return n}function Za(t,e,n,i){const r=ee(t,K(e,n));if(Un(r,i)<=Dn)return r;let o=0,s=n;for(let a=0;a<12;a++){const l=(o+s)*.5,u=ee(t,K(e,l));Un(u,i)<=Dn?o=l:s=l}return ee(t,K(e,o))}function Ka(t,e){const n=[];return t.forEach((i,r)=>{const o=gt(ie(i.b,i.a),ie(i.c,i.a)),s=_e(o);if(s<1e-6)return;const a=K(ee(ee(i.a,i.b),i.c),1/3);let l=K(o,1/s);ne(l,a)<0&&(l=K(l,-1));const u=Math.min(kt(a,i.a,i.b),kt(a,i.b,i.c),kt(a,i.c,i.a));if(u<1e-4)return;const c=$a(r*9.17+2.4),f=c<.34?i.a:c<.67?i.b:i.c,p=Va(a,f,.28),m=c>.36,S=u*(m?Ia:za),b=m?l:K(l,-1),g=m?Za(p,b,S,e):ee(p,K(b,S));n.push({a:i.a,b:i.b,c:g},{a:i.b,b:i.c,c:g},{a:i.c,b:i.a,c:g})}),n}function Ja(){const t=qa(Ga);let e=[];for(const o of t)e.push(...Xa(o));for(let o=0;o<Ha;o++)e=Ya(e);e=Ka(e,t);const n=[];Qa(n,e);const i=new ArrayBuffer(n.length*4),r=new Float32Array(i);return r.set(n),r}function Qa(t,e){const n=[],i=[];for(const o of e){const s=Oa(o.a,o.b,o.c);n.push(o.a,o.b,o.c),i.push(s,s,s)}const r=n.length;for(let o=0;o<r;o++){let s=[0,0,0];const a=n[o],l=i[o];for(let c=0;c<r;c++)_e(ie(a,n[c]))>1e-4||ne(l,i[c])<Wa||(s=ee(s,i[c]));const u=Kt(s);t.push(a[0],a[1],a[2],u[0],u[1],u[2])}}const Jt=Ja(),Oi=Jt.length/Ui,el=12;function tl(t){const e=[],n=(s,a,l)=>[s,a,l],i=s=>-.5+s/t;for(let s=0;s<t;s++){const a=i(s),l=i(s+1);te(e,[0,0,1],n(-.5,a,.5),n(.5,a,.5),n(.5,l,.5),n(-.5,l,.5)),te(e,[0,0,-1],n(.5,a,-.5),n(-.5,a,-.5),n(-.5,l,-.5),n(.5,l,-.5)),te(e,[1,0,0],n(.5,a,.5),n(.5,a,-.5),n(.5,l,-.5),n(.5,l,.5)),te(e,[-1,0,0],n(-.5,a,-.5),n(-.5,a,.5),n(-.5,l,.5),n(-.5,l,-.5))}te(e,[0,-1,0],n(-.5,-.5,-.5),n(.5,-.5,-.5),n(.5,-.5,.5),n(-.5,-.5,.5)),te(e,[0,1,0],n(-.5,.5,.5),n(.5,.5,.5),n(.5,.5,-.5),n(-.5,.5,-.5));const r=new ArrayBuffer(e.length*4),o=new Float32Array(r);return o.set(e),o}const Qt=tl(el),Gi=Qt.length/Ui,Hi=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);function nl(){const t=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,-.5,0,.5,.5,0,-.5,.5,0],e=new ArrayBuffer(t.length*4),n=new Float32Array(e);return n.set(t),n}const en=nl(),Ii=en.length/3,il=.08;function rl(){const t=il*.5,e=[[-.5,-.5,t],[.5,-.5,t],[.5,.5,t],[-.5,.5,t],[-.5,-.5,-t],[.5,-.5,-t],[.5,.5,-t],[-.5,.5,-t]],n=[[0,1,2,0,2,3],[5,4,7,5,7,6],[1,5,6,1,6,2],[4,0,3,4,3,7],[3,2,6,3,6,7],[4,5,1,4,1,0]],i=[];for(const s of n)for(const a of s)i.push(e[a][0],e[a][1],e[a][2]);const r=new ArrayBuffer(i.length*4),o=new Float32Array(r);return o.set(i),o}const tn=rl(),zi=tn.length/3;function de(t){const e=String(t);return e.includes(".")||e.includes("e")?e:`${e}.0`}const Wi=de(Cr),Vi=de(Nr),$i=de(Dr),qi=de(Zn),Xi=de(_r),ji=de(Br),ye=de(Er),St=de(Tr),Yi=de(kr),re=String(Ar),ol=`
struct Camera {
  viewProj: mat4x4<f32>,
  eyeMetal: vec4f,
  flags: vec4f,
  rightPad: vec4f,
  upPad: vec4f,
  // x is fog and plate light. y is the mass diffuse scale. z is the bloom cap.
  // Specular does not read this.
  shot: vec4f,
  // Sprite glow. Mesh does not read it. Present so the light sits after it.
  glow: vec4f,
  // xyz is the directional light. The mesh normalizes it.
  light: vec4f,
  // Ring lift. The mesh does not read it. Same slot as the sprite camera.
  liftCap: vec4f,
  // x ambient, y diffuse, z mode (0 flat, 1 blinnPhong). w blends the light toward the eye.
  shade: vec4f,
  // Sprite tail. Unread. An empty vec4 keeps spark on the same offset.
  spritePad0: vec4f,
  spritePad1: vec4f,
  spritePad2: vec4f,
  spritePad3: vec4f,
  spritePad4: vec4f,
  spritePad5: vec4f,
  // Unread. Holds the streak and the sprite horn on the shared offsets.
  meshPad: vec4f,
  // x outward shift, y tail dissolve, z tip width, w pinch distance.
  // The laser stores spark 0. 0 melt keeps the rigid bar (clip 2.25 s).
  // w is how far along the tail the width eases to the tip. 0.1 is the needle.
  spark: vec4f,
  // x feathers the streak across its width. 0 is the hard taper.
  // y is the tail fade. The sprite shader does not read this (clip 2.25 s).
  streakSoft: vec4f,
}

struct VsIn {
  @location(0) pos: vec3f,
  @location(1) nrm: vec3f,
  @location(2) m0: vec4f,
  @location(3) m1: vec4f,
  @location(4) m2: vec4f,
  @location(5) m3: vec4f,
  @location(6) col: vec4f,
}

struct VsOut {
  @builtin(position) clip: vec4f,
  @location(0) world: vec3f,
  @location(1) nrm: vec3f,
  @location(2) col: vec4f,
  @location(3) localPos: vec3f,
  // Box face center. The same value at every vertex of the face.
  @location(4) faceCenter: vec3f,
  // Skirt fraction. The same value at every vertex. 0 is the hard box.
  @location(5) edgeSoft: f32,
  // Streak taper pack. 0 is a plain box. The same value on every face.
  @location(6) spark: f32,
}

@group(0) @binding(0) var<uniform> cam: Camera;

// m0.w is the streak's circular sweep in radians. Plates and tunnel blocks store 0.
// A nonzero sweep lays the long axis on a circle around the world origin.
// The rotation matches pointOnCircularArc in orbitStreaks.ts.
fn bendDashAroundOrigin(pos: vec3f, m0: vec4f, m1: vec4f, m2: vec4f, m3: vec4f, sweep: f32) -> vec4f {
  let center = m3.xyz;
  let radius = length(center);
  let tangent = m1.xyz;
  let tangentLength = length(tangent);
  if (radius < 0.001 || tangentLength < 0.001) {
    return mat4x4<f32>(vec4f(m0.xyz, 0.0), m1, m2, m3) * vec4f(pos, 1.0);
  }
  let radial = center / radius;
  let tangentDir = tangent / tangentLength;
  let normal = cross(radial, tangentDir);
  let normalLength = length(normal);
  if (normalLength < 0.001) {
    return mat4x4<f32>(vec4f(m0.xyz, 0.0), m1, m2, m3) * vec4f(pos, 1.0);
  }
  let axis = normal / normalLength;
  let angle = pos.y * sweep;
  let cosine = cos(angle);
  let sine = sin(angle);
  let spunRadial = radial * cosine + cross(axis, radial) * sine;
  let spunX = m0.xyz * cosine + cross(axis, m0.xyz) * sine + axis * dot(axis, m0.xyz) * (1.0 - cosine);
  let spunZ = m2.xyz * cosine + cross(axis, m2.xyz) * sine + axis * dot(axis, m2.xyz) * (1.0 - cosine);
  return vec4f(spunRadial * radius + spunX * pos.x + spunZ * pos.z, 1.0);
}

@vertex
fn vs(in: VsIn) -> VsOut {
  // m1.w is the skirt. The columns stay xyz so that value is not a translation.
  let edgeSoft = max(in.m1.w, 0.0);
  let local = in.pos * (1.0 + edgeSoft);
  let sweep = in.m0.w;
  var world: vec4f;
  if (abs(sweep) < 0.001) {
    let model = mat4x4<f32>(
      vec4f(in.m0.xyz, 0.0),
      vec4f(in.m1.xyz, 0.0),
      vec4f(in.m2.xyz, 0.0),
      vec4f(in.m3.xyz, 1.0),
    );
    world = model * vec4f(local, 1.0);
    // Laser only. Side views keep the 0.95 shaft (0:07.2, 0:10.4).
    // Looking down the beam, that shaft is the searchlight (0:12.0), so the
    // on-screen width cap fades in. A distance cap at every range thinned the bar.
    if (cam.flags.y > 0.5) {
      let centerline = in.m3.xyz + in.m1.xyz * in.pos.y;
      let dist = length(centerline - cam.eyeMetal.xyz);
      let beamDir = normalize(in.m1.xyz);
      let forward = normalize(-cam.eyeMetal.xyz);
      let downBeam = smoothstep(0.45, 0.53, abs(dot(forward, beamDir)));
      let halfWidth = 0.5 * length(in.m0.xyz);
      // rightPad.w is the side-on half-angle, upPad.w the down-beam one.
      // Side-on, 7.2 s stays the full 0.95 bar. The near section of a close
      // side view tapers (10.4 s). Down the beam, 0.085 keeps 12.0 s a bar.
      let sideAngle = cam.rightPad.w;
      // WGSL has no ternary. select(false, true, cond).
      let sideCap = select(halfWidth, min(halfWidth, max(dist * sideAngle, 0.04)), sideAngle > 0.0);
      let downCap = min(halfWidth, max(dist * cam.upPad.w, 0.04));
      let maxHalf = mix(sideCap, downCap, downBeam);
      let scale = min(1.0, maxHalf / max(halfWidth, 1e-4));
      world = vec4f(centerline + in.m0.xyz * local.x * scale + in.m2.xyz * local.z * scale, 1.0);
    }
  } else {
    world = bendDashAroundOrigin(local, in.m0, in.m1, in.m2, in.m3, sweep);
  }
  let c0 = in.m0.xyz;
  let c1 = in.m1.xyz;
  let c2 = in.m2.xyz;
  var o: VsOut;
  o.clip = cam.viewProj * world;
  o.world = world.xyz;
  o.nrm = cross(c1, c2) * in.nrm.x + cross(c2, c0) * in.nrm.y + cross(c0, c1) * in.nrm.z;
  o.col = in.col;
  o.localPos = local;
  // Local face sits at ±0.5 on its normal, so this is the face center.
  o.faceCenter = in.m3.xyz + (in.m0.xyz * in.nrm.x + in.m1.xyz * in.nrm.y + in.m2.xyz * in.nrm.z) * 0.5;
  o.edgeSoft = edgeSoft;
  o.spark = in.m3.w;
  return o;
}

// Round glow down the beam. Local Y is the long axis.
// Distance from that axis dies before the square edge, so the end cap
// is a soft disk and not a white cube (0:08).
fn dashGlow(localPosition: vec3f) -> f32 {
  let radial = length(localPosition.xz);
  let across = exp(-radial * radial * ${Wi});
  let tip = 1.0 - smoothstep(${Vi}, ${$i}, abs(localPosition.y));
  return across * tip;
}

// Coverage of the streak tail. 1 is the solid root. The laser passes spark 0.
fn streakSpark(localPos: vec3f, spark: f32, outMix: f32, melt: f32, tip: f32, pinch: f32, soft: f32, fadeRate: f32) -> f32 {
  if (spark < 0.5 || (melt <= 0.001 && outMix <= 0.001)) {
    return 1.0;
  }
  let axis = floor(spark + 0.0001);
  let body = clamp(spark - axis, 0.0, 0.999);
  var along = localPos.x;
  var crossA = localPos.y;
  var crossB = localPos.z;
  if (axis > 1.5 && axis < 2.5) {
    along = localPos.y;
    crossA = localPos.x;
    crossB = localPos.z;
  } else if (axis > 2.5) {
    along = localPos.z;
    crossA = localPos.x;
    crossB = localPos.y;
  }
  // The original shard stays centered. The tail is whatever was added.
  let solidAlong = clamp(along, -0.5, 0.5);
  let bodyHalf = 0.5 * body;
  let tailSpan = max(0.5 - bodyHalf, 0.001);
  let forward = clamp((solidAlong - bodyHalf) / tailSpan, 0.0, 1.0);
  let back = clamp((-bodyHalf - solidAlong) / tailSpan, 0.0, 1.0);
  let outward = clamp(outMix, 0.0, 1.0);
  // out 1 drops the back half, so the visible tail is the forward added length.
  let backKeep = 1.0 - back * outward;
  if (backKeep < 0.02) {
    return 0.0;
  }
  let t = max(forward, back * (1.0 - outward));
  // The width eases over pinch of the tail. 0.1 is the #193 needle.
  // The root stays the hard box. Only the added tail feathers (clip 2.25 s).
  let reach = max(pinch, 0.02);
  let eased = smoothstep(0.0, reach, t);
  // The root stays the hard box. Only the added tail feathers (clip 2.25 s).
  if (t <= 0.001 || melt <= 0.001) {
    return backKeep;
  }
  let halfWidth = mix(0.5, 0.5 * clamp(tip, 0.0, 1.0), eased);
  // The face sits at ±0.5 on its normal. That plane is not the streak's width.
  let aAlong = abs(along);
  let aA = abs(crossA);
  let aB = abs(crossB);
  var widthDist = max(aA, aB);
  if (aB >= aAlong && aB >= aA) {
    widthDist = aA;
  } else if (aA >= aAlong && aA >= aB) {
    widthDist = aB;
  }
  let hard = 1.0 - smoothstep(max(halfWidth - 0.06, 0.0), halfWidth, widthDist);
  var across = hard;
  if (soft > 0.001) {
    let n = widthDist / max(halfWidth, 0.02);
    across = exp(-n * n * soft);
  }
  // A linear mix stays a white bar: the face specular is huge, so the tail
  // falls off fast. Dark tails die first; the bright ones stay long (clip 2.25 s).
  let fade = exp(-t * max(fadeRate, 0.0) * clamp(melt, 0.0, 1.0));
  return fade * across * backKeep;
}

fn linearFog(world: vec3f) -> f32 {
  let d = length(world - cam.eyeMetal.xyz);
  return clamp((d - ${ye}) / (${St} - ${ye}), 0.0, 1.0);
}

@fragment
fn fs(in: VsOut) -> @location(0) vec4f {
  if (cam.flags.y > 0.5) {
    // Laser. Premultiplied coverage, so the shaft replaces the warm boxes
    // instead of mixing into lavender. White only at the hot core.
    // The square end of a thick shaft is the solid ball (0:08, 0:07.2). The middle stays a bar.
    let glow = dashGlow(in.localPos) * (1.0 - smoothstep(0.16, 0.36, abs(in.localPos.y)));
    let emissive = in.col.a;
    if (emissive < 0.04) {
      return vec4f(0.0);
    }
    var tone = in.col.rgb * emissive;
    // Tight knot at the origin. A wide white core left two blue edges (4.0 s).
    let core = 1.0 - smoothstep(0.04, 0.12, length(in.world));
    tone = mix(tone, vec3f(emissive), core * 0.35);
    // Plateau across the shaft so the centre matches the shoulders.
    var cover = clamp(glow * 4.5, 0.0, 1.0) * (1.0 - linearFog(in.world));
    // Far wing of a side-on bar fades. The near wing stays (7.2 s).
    let reach = cam.shot.w;
    if (reach > 0.2) {
      let away = length(in.world - cam.eyeMetal.xyz);
      cover = cover * (1.0 - smoothstep(reach * 0.62, reach, away));
    }
    return vec4f(tone * cover, cover);
  }
  // One normal per face. Flat: H from the face center, constant on the face.
  // shade.z > 0 is the old reflect() glint from the shared eye direction.
  let normal = normalize(in.nrm);
  let rawLight = cam.light.xyz;
  // shade.w 0 is this division alone, the same light as before the knob.
  let fixedLight = rawLight / max(length(rawLight), 1e-4);
  let align = clamp(cam.shade.w, 0.0, 1.0);
  var lightDirection = fixedLight;
  if (align > 0.0) {
    let eyeDir = cam.eyeMetal.xyz / max(length(cam.eyeMetal.xyz), 1e-4);
    lightDirection = normalize(mix(fixedLight, eyeDir, align));
  }
  let facingLight = max(dot(normal, lightDirection), 0.0);
  var alignment: f32;
  if (cam.shade.z > 0.5) {
    let viewDirection = normalize(cam.eyeMetal.xyz);
    let reflected = reflect(-lightDirection, normal);
    alignment = max(dot(reflected, viewDirection), 0.0);
  } else {
    let viewDirection = normalize(cam.eyeMetal.xyz - in.faceCenter);
    let halfVector = normalize(lightDirection + viewDirection);
    alignment = max(dot(normal, halfVector), 0.0);
  }
  let shotLight = max(cam.shot.x, 0.05);
  let bodyScale = max(cam.shot.y, 0.05);
  let cap = max(cam.shot.z, 0.05);
  let baseLit = in.col.rgb * (cam.shade.x + cam.shade.y * facingLight);
  // Body only. A face already over the bloom cap keeps that excess,
  // so the extract does not grow a new core when the shot is bright (0:04.50).
  let body = min(baseLit, vec3f(cap));
  var color = min(body * bodyScale, vec3f(cap)) + max(baseLit - vec3f(cap), vec3f(0.0));
  // One exponent on every face. flags.w is specularSharpness.
  let sharpness = max(cam.flags.w, 1.0);
  var specular = pow(alignment, sharpness) * cam.flags.z * cam.eyeMetal.w;
  if (cam.shade.z > 0.5) {
    specular = specular * step(0.0, dot(normal, lightDirection));
  }
  color += vec3f(specular);
  let fogGray = vec3f(${qi}, ${Xi}, ${ji}) * shotLight;
  color = mix(color, fogGray, linearFog(in.world));
  // Coverage only. The shade above is one value for the face. The skirt sits
  // outside the old box and dissolves into the fog, so a streak is a soft
  // spark and the solid core keeps the 2.25 s length. 0 is the hard rectangle.
  let edgeSoft = in.edgeSoft;
  var cover = 1.0;
  if (edgeSoft > 0.0) {
    let skirtReach = 0.5 * (1.0 + edgeSoft);
    let a = abs(in.localPos);
    let hi = max(a.x, max(a.y, a.z));
    let lo = min(a.x, min(a.y, a.z));
    let edge = a.x + a.y + a.z - hi - lo;
    cover = 1.0 - smoothstep(0.5, skirtReach, edge);
  }
  // Tail only. The shade above is one value for the face. The root stays
  // the #183 box; the added length pinches and dissolves (clip 2.25 s).
  let spark = streakSpark(in.localPos, in.spark, cam.spark.x, cam.spark.y, cam.spark.z, cam.spark.w, cam.streakSoft.x, cam.streakSoft.y);
  if (spark < 0.02) {
    discard;
  }
  color = mix(fogGray, color, cover * spark);
  // Opaque. Bloom keys off luminance, not this alpha (0:00, 0:01, 0:03).
  return vec4f(color, 1.0);
}
`,sl=`
struct Camera {
  viewProj: mat4x4<f32>,
  eyeMetal: vec4f,
  flags: vec4f,
  rightPad: vec4f,
  upPad: vec4f,
  // x is the in-shot light. Tunnel plates use it. Rings do not.
  shot: vec4f,
  // x spread, y length, z strength, w side lift. The mesh camera buffer is the same size.
  // Tunnel squares ignore it. Dashes use it for the soft volume (17.8 s, 19.45 s).
  // w is the side-on thickness (6.75 s, 16.2 s, 17.8 s).
  glow: vec4f,
  // Mesh light. Sprites do not read it. Keeps the shared camera buffer aligned.
  light: vec4f,
  // x is the ceiling on the side-on ring lift.
  liftCap: vec4f,
  // Mesh shade. Squares do not light. Present so plate sits after it.
  shade: vec4f,
  // x hard core, y soft core, z softness span, w peak alpha (clip 3.20 s).
  plate: vec4f,
  // x axial thickness, y in-plane widen, z wash break, w gaps along a dash.
  // Side-on rings use this so the band stays a broken wash (6.75 s).
  wash: vec4f,
  // x y is where the side-on wash turns on, by distance from the origin.
  // z is the side-on glow gain. The old 2 painted a solid wing.
  // w pulls an edge-on ring in toward the shard cloud (6.75 s).
  band: vec4f,
  // x is the side-on amount where that pull is complete.
  // y caps the in-plane glow width as a fraction of distance (0.40 s, 8.40 s).
  // z is the deep edge-on radius fraction. The hoop pull is 0 at 0.40 s.
  // w is the deep edge-on wash body. 0 leaves the thin arc (0.40 s, 8.40 s).
  engage: vec4f,
  // x plane facing below which the ring is deeply edge-on (0.40 s, 8.40 s).
  // y is the tighter width and axial cap. z is that wash length.
  // w is the side at which the ordinary cap turns on. 1 missed 8.35 s.
  edge: vec4f,
  // x scales the deep edge-on wash. y is its camera-facing half-width
  // as a fraction of distance. The 6.75 s wash does not read x or y.
  // w is the side-on wash width (6.75 s). Face-on keeps glow.x.
  deep: vec4f,
  // Mesh tail. Unread here so the horn sits after the shared camera prefix.
  meshPad: vec4f,
  padSpark: vec4f,
  padStreak: vec4f,
  // Outer-ring swirl (17.80 s, 19.40 s). x spread, y length, z break, w pull.
  // The side-on wash and the deep edge wash leave this at horn 0.
  horn: vec4f,
  // x soften, y gain, z w the down-tunnel face gate. That arc stays off the horn.
  swirl: vec4f,
  // x is how often the outer wash breaks. The side-on wash keeps wash.w.
  hornFreq: vec4f,
}

struct VsOut {
  @builtin(position) clip: vec4f,
  @location(0) local: vec3f,
  @location(1) color: vec3f,
  @location(2) mode: f32,
  @location(3) world: vec3f,
  @location(4) endFade: f32,
  // x is the width growth actually drawn, y the length. The core uses this
  // so a screen cap does not fatten the dash (0:14.80, 0:17.8).
  @location(5) glowScale: vec2f,
  // How much side-on lift this dash drew. The fragment softens the wash with it.
  @location(6) sideLift: f32,
  // Deep edge-on wash amount. 0 on the 6.75 s path, so that gain stays off.
  @location(7) edgeBody: f32,
  // Outer-ring horn amount. 0 on the side-on wash and the deep edge wash.
  @location(8) horn: f32,
}

@group(0) @binding(0) var<uniform> cam: Camera;

@vertex
fn vs(
  @location(0) pos: vec3f,
  @location(1) center: vec3f,
  @location(2) dashLength: f32,
  @location(3) color: vec3f,
  @location(4) mode: f32,
  @location(5) tangent: vec3f,
  @location(6) radial: vec3f,
  @location(7) width: f32,
) -> VsOut {
  var o: VsOut;
  var world: vec3f;
  if (mode > 0.75) {
    // Length along the tangent, width along the radius. Both shrink near the
    // lens so a dash stays a short thin arc (0:11.45, 0:17.8, 0:19.45).
    let dist = max(length(center - cam.eyeMetal.xyz), 0.05);
    // A dash on the lens shrinks away. The 0:00.2 edge blocks were this case.
    let gate = smoothstep(0.25, 0.55, dist);
    // Short streak on screen. A larger cap became a panel out in the tunnel (0:11.45).
    // Thin streak. A wider cap read as a chip beside the lens (0:14.80).
    // These caps size the bright core only.
    let coreLen = min(dashLength, dist * 0.18);
    let coreWid = min(width, dist * 0.035);
    let dashLen = coreLen * gate;
    let dashWid = coreWid * gate;
    // The wash is longer than that core so neighbors meet (17.8 s gaps were
    // ~180 px while the gated wash was ~100 px). It still dies inside the lens.
    let washGate = smoothstep(0.12, 0.40, dist);
    // Side-on the ring plane flattens (6.75 s, 16.2 s, 17.8 s). Looking down
    // the tunnel, facing stays high and this lift stays off (3.5 s, 13.1 s).
    let axis = normalize(cross(tangent, radial));
    // One facing for the ring plane. A per-dash facing swelled the rim of a
    // face-on hoop into a tube (9.90 s). Down the tunnel this stays off.
    let planeFacing = abs(dot(axis, normalize(cam.eyeMetal.xyz)));
    let side = smoothstep(0.40, 0.75, 1.0 - planeFacing);
    // Deeply edge-on only. 6.75 s facing is about 0.44, so this stays off.
    let deep = cam.edge.x > 0.0 && planeFacing < cam.edge.x;
    // 5.7 on a side-on ring is a solid dome over the mass (6.75 s).
    // Face-on keeps that wide wash so the dashes still meet (17.8 s).
    // Deep edge-on caps its own width (0.40 s, 8.40 s).
    let spreadBase = max(cam.glow.x, 1.0);
    let spreadSide = max(cam.deep.w, 1.0);
    // Full side spread by 0.55. A linear mix still left a dome at side 0.67 (6.75 s).
    let sideAmt = smoothstep(0.25, 0.55, side);
    let spread = select(mix(spreadBase, spreadSide, sideAmt), spreadBase, deep);
    let lengthen = select(max(cam.glow.y, 1.0), max(cam.edge.z, 1.0), deep);
    // Side-lift only while the eye is near the cluster. Farther off the axis
    // the same ring is a ribbon, and the lift stays off.
    let offAxis = length(cross(cam.eyeMetal.xyz, axis));
    let hoop = 1.0 - smoothstep(cam.liftCap.y, max(cam.liftCap.z, cam.liftCap.y + 1e-3), offAxis);
    // Behind the cluster (6.75 s). A dash nearer the eye than the origin does not swell.
    let eyeDist = length(cam.eyeMetal.xyz);
    let behind = smoothstep(0.15, 0.75, dist - eyeDist);
    // Inside the shard cloud, not only the outer rim. The old 0.35–1.15 band
    // was the solid wings beside the mass.
    let around = smoothstep(cam.band.x, max(cam.band.y, cam.band.x + 1e-3), length(center));
    // Hoop is 0 at 0.40 s and behind is 0 on the near half, so this lift
    // stays off and the cap leaves a thin arc (0.40 s, 8.40 s).
    let sideLift = max(cam.glow.w, 0.0) * side * hoop * behind * around;
    // Dashes sit outside the shards. Edge-on, pull them into the cloud (6.75 s).
    // Face-on, side is 0 and the lathe radius stays.
    let radius = dot(center, radial);
    let engage = smoothstep(0.0, max(cam.engage.x, 1e-3), side * hoop);
    let washPull = mix(1.0, clamp(cam.band.w, 0.0, 1.0), engage);
    // Hoop is 0 at 0.40 s, so the wash pull never leaves the outer lathe.
    // Deep edge-on uses its own radius. 6.75 s is not deep and stays on washPull.
    let pull = select(washPull, clamp(cam.engage.z, 0.0, 1.0), deep && cam.engage.z > 0.0);
    // Continuous outer wash: the side-on break is off, the deep edge wash is
    // off, and the width cap is off. That wash is the thick horn
    // (17.80 s, 19.40 s). 6.75 s has engage. 0.40 s and 8.40 s are deep.
    let faceOn = smoothstep(cam.swirl.z, max(cam.swirl.w, cam.swirl.z + 1e-4), planeFacing);
    let horn = step(engage, 1e-3) * (1.0 - faceOn) * select(1.0, 0.0, deep) * (1.0 - step(cam.edge.w, side));
    let placedPull = mix(pull, clamp(cam.horn.w, 0.0, 1.0), horn);
    let spreadUsed = mix(spread, max(cam.horn.x, 1.0), horn);
    let lengthUsed = mix(lengthen, max(cam.horn.y, 1.0), horn);
    // Same side-on volume, on the pulled ring. Hoop and behind stay out of it:
    // the hoop is closed at 0.40 s, and behind drops the near half that has to
    // sit in the cloud once the radius is pulled in (8.40 s). 6.75 s is not deep,
    // so this lift stays the side-on one and that frame does not move.
    let body = select(0.0, clamp(cam.engage.w, 0.0, 1.0), deep);
    var lift = sideLift;
    if (body > 0.0) {
      lift = max(sideLift, max(cam.glow.w, 0.0) * side * around * body);
    }
    let placed = center - radial * radius * (1.0 - placedPull);
    let liftCap = min(lift, max(cam.liftCap.x, 0.0));
    // Capped. 6.8 with no cap became a blue cloud over the whole shot.
    // Widen and axial come from the look. 0.85 and 2.5 were the solid wings (6.75 s).
    let sideBoost = max(1.0 + cam.wash.y * liftCap, 0.0);
    // Length barely grows, so a side-on dash does not become a spoke (6.75 s).
    // The center is pulled in, but the arc was still the lathe length, so the
    // wash sat on the cloud as a solid dome (6.75 s). Face-on pull is 1.
    // Deep edge-on keeps that length (0.40 s, 8.40 s).
    let arcFit = select(pull, 1.0, deep);
    let glowLen = coreLen * lengthUsed * washGate * mix(1.0, sideBoost, 0.15) * arcFit;
    let glowWidRaw = coreWid * spreadUsed * washGate * sideBoost;
    // Ordinary cap once side has reached ringCapSide. A hard step at 1 left
    // the 8.35 s frame (side about 0.997) on the raw width. 6.75 s is about 0.45.
    let glowCap = dist * max(cam.engage.y, 0.0);
    let capped = select(glowWidRaw, min(glowWidRaw, glowCap), glowCap > 0.0);
    let glowWidBase = select(glowWidRaw, capped, side >= cam.edge.w);
    // Deep edge-on (0.40 s, 8.40 s). Body 0 keeps the hairline. Body 1 opens
    // that cap into the wash the lift just built. 6.75 s stays off.
    let edgeCap = dist * max(cam.edge.y, 0.0);
    let useEdge = deep && cam.edge.y > 0.0;
    let glowWid = select(glowWidBase, min(glowWidBase, mix(edgeCap, glowWidBase, body)), useEdge);
    let axialRaw = coreWid * spreadUsed * washGate * liftCap * max(cam.wash.x, 0.0);
    let axial = select(axialRaw, min(axialRaw, mix(edgeCap, axialRaw, body)), useEdge);
    // Edge-on, radial points at the eye, so the stroke is a thin arc (0.40 s, 8.40 s).
    // Lay the wash across the screen around the pulled ring. Body 0 keeps the stroke,
    // which is the 6.75 s path.
    // Body 0 is the old stroke, same multiply order, so 6.75 s stays put.
    // Edge-on, radial points at the eye and that stroke is a thin arc (0.40 s, 8.40 s).
    if (body > 0.0) {
      let screenWide = cross(cam.eyeMetal.xyz - placed, tangent);
      let screenLen = length(screenWide);
      // pos.y is ±0.5, so the 2 makes cam.deep.y a half-width.
      if (screenLen > 1e-3) {
        let reach = dist * max(cam.deep.y, 0.0) * 2.0;
        world = placed + tangent * pos.x * glowLen + screenWide / screenLen * reach * pos.y;
      } else {
        world = placed + tangent * pos.x * glowLen + radial * pos.y * glowWid + axis * pos.y * axial;
      }
    } else {
      world = placed + tangent * pos.x * glowLen + radial * pos.y * glowWid + axis * pos.y * axial;
    }
    o.glowScale = vec2f(glowWid / max(dashWid, 1e-4), glowLen / max(dashLen, 1e-4));
    o.sideLift = lift;
    o.edgeBody = body;
    o.horn = horn;
    o.endFade = 0.0;
  } else {
    // Thin plate on the cylinder. Tangent is along the axis, radial is around it,
    // and their cross is the outward normal (clip 1.0 s, 13.1 s).
    let outward = cross(tangent, radial);
    // Width and height jitter independently, about ±30% (clip 1.0 s, 13.1 s).
    world = center + tangent * pos.x * dashLength + radial * pos.y * width + outward * pos.z * dashLength;
    // Dissolve before the cylinder's end so the tunnel has no hard mouth (1.0 s, 13.1 s).
    let alongPos = dot(center, tangent);
    let edge = abs(alongPos) / (${Yi} * 0.5);
    o.endFade = smoothstep(0.55, 1.0, edge);
    o.glowScale = vec2f(1.0);
    o.sideLift = 0.0;
    o.edgeBody = 0.0;
    o.horn = 0.0;
  }
  o.clip = cam.viewProj * vec4f(world, 1.0);
  o.local = pos;
  o.color = color;
  o.mode = mode;
  o.world = world;
  return o;
}

fn linearFog(world: vec3f) -> f32 {
  let d = length(world - cam.eyeMetal.xyz);
  return clamp((d - ${ye}) / (${St} - ${ye}), 0.0, 1.0);
}

@fragment
fn fs(in: VsOut) -> @location(0) vec4f {
  let keep = 1.0 - linearFog(in.world);
  if (in.mode > 0.75) {
    // Bright core stays the old dash. Local is the grown quad, so scale it
    // back by the growth actually drawn (clip 17.8 s, 19.45 s).
    let spread = max(in.glowScale.x, 1.0);
    let lengthen = max(in.glowScale.y, 1.0);
    let along = 1.0 - smoothstep(0.32, 0.55, abs(in.local.x) * lengthen);
    let core = exp(-in.local.y * in.local.y * spread * spread * 14.0);
    let fringe = exp(-in.local.y * in.local.y * spread * spread * 5.5) * 0.28;
    let coreMark = along * max(core, fringe);
    // Soft cyan band. The body stays full enough that overlapping dashes read
    // as one wash, and the rim still dies so it is not a tile (17.8 s, 19.45 s).
    // A side-on lift widens that body so the far ring is a swirl, not a hairline
    // (6.75 s, 16.2 s, 17.8 s). No lift keeps the #142 falloff.
    // Horn 0 is the side-on soften alone, so 6.75 s stays put.
    let soften = clamp(max(in.sideLift / 1.6, in.horn * cam.swirl.x), 0.0, 1.0);
    let alongGlow = exp(-in.local.x * in.local.x * mix(0.9, 0.45, soften));
    let acrossGlow = exp(-in.local.y * in.local.y * mix(2.2, 0.9, soften));
    let rim = 1.0 - smoothstep(mix(0.55, 0.78, soften), 1.08, length(in.local.xy) * 2.0);
    // Shared holes. A per-dash gap let the next dash fill it, which is how
    // the side-on ring fused into two wings (6.75 s). Frequency 0 stays continuous.
    let broken = clamp(cam.wash.z, 0.0, 1.0);
    // Horn 0 keeps the side-on frequency, so 6.75 s stays put.
    let freq = mix(max(cam.wash.w, 0.0), max(cam.hornFreq.x, 0.0), in.horn);
    let waveA = sin(dot(in.world, vec3f(6.5, 1.7, 2.9)) * freq);
    let waveB = sin(dot(in.world, vec3f(1.3, 7.1, 3.4)) * freq);
    let teeth = mix(1.0, 0.5 + 0.5 * waveA * waveB, step(1e-4, freq));
    let gap = mix(1.0, teeth, max(soften * broken, in.horn * clamp(cam.horn.z, 0.0, 1.0)));
    // The side-on body has to stay cyan. At 1.2 the band between dashes
    // clipped pale and dropped out of the blue test (6.75 s).
    var glow = alongGlow * acrossGlow * rim * max(cam.glow.z, 0.0) * mix(1.0, max(cam.band.z, 0.0), soften) * gap;
    glow *= mix(1.0, max(cam.swirl.y, 0.0), in.horn);
    // Stacked edge-on dashes at full strength are a solid bar (0.40 s, 8.40 s).
    // Body 0 leaves the 6.75 s wash on the unscaled strength.
    if (in.edgeBody > 1e-4) {
      glow *= max(cam.deep.x, 0.0);
    }
    let mark = max(coreMark, glow);
    if (mark < 0.02) {
      discard;
    }
    // Lifted wash stays cyan. The full core clips white, so the blue test
    // only counted the two edges of the band (6.75 s).
    var rgb = in.color * mark;
    rgb = mix(rgb, in.color * min(mark, 0.22), soften);
    return vec4f(rgb * keep, mark * keep);
  }
  // Neither a ring nor a square. discard alone does not end the function in WGSL,
  // and naga (Firefox) rejects a return placed after it, so discard up front.
  if (!(in.mode > 0.02)) {
    discard;
  }
  // Square falloff. Softness feathers the core: near layers stay a little sharper,
  // far layers dissolve (clip 1.0 s, 3.20 s, 13.1 s). The numbers are the plate uniform.
  let edge = max(abs(in.local.x), abs(in.local.y)) * 2.0;
  let span = max(cam.plate.z, 1e-3);
  let soft = clamp(in.mode / span, 0.0, 1.0);
  let inner = mix(cam.plate.x, cam.plate.y, soft);
  let cover = clamp(cam.plate.w, 0.0, 1.0);
  // Soft falloff only. A solid thin-side rim drew a hard black frame (1.0 s, 13.1 s).
  let alpha = cover * (1.0 - smoothstep(max(inner, 0.0), 1.0, edge)) * (1.0 - in.endFade);
  if (alpha < 0.02) {
    discard;
  }
  // Radius already sets the tone, from the dark inner gray toward the outer gray.
  // A second mix into the fog washed those plates into the clear (1.0 s, 13.1 s).
  // Same knee as the clear. Rings returned above and are not in it (10.05 s).
  return vec4f(in.color * max(cam.shot.x, 0.05) * alpha, alpha);
}
`,al=`
struct BloomU {
  targetSize: vec2f,
  texel: vec2f,
  threshold: f32,
  gain: f32,
  knee: f32,
  karis: f32,
}

@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var srcTex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> u: BloomU;

struct VsOut {
  @builtin(position) clip: vec4f,
}

@vertex
fn vs(@location(0) pos: vec2f) -> VsOut {
  var o: VsOut;
  o.clip = vec4f(pos, 0.0, 1.0);
  return o;
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let textureCoordinate = frag.xy / u.targetSize;
  // u.texel is one scene pixel, not a bloom pixel: the target is quarter resolution.
  let sceneTexel = u.texel;
  // Karis average of the 4×4, same weight as bloomExtractWeight. A max here
  // promoted one sub-pixel glint to a whole bloom texel (the square beads).
  var weighted = vec3f(0.0);
  var weightSum = 0.0;
  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 4; column++) {
      let offset = (vec2f(f32(column), f32(row)) - vec2f(1.5)) * sceneTexel;
      let sample = textureSampleLevel(srcTex, samp, textureCoordinate + offset, 0.0);
      let luminance = max(sample.r, max(sample.g, sample.b));
      let weight = 1.0 / (1.0 + u.karis * luminance);
      weighted += sample.rgb * weight;
      weightSum += weight;
    }
  }
  let color = weighted / max(weightSum, 1e-4);
  let lum = max(color.r, max(color.g, color.b));
  // Specular threshold only. Axis weight turned a few hits into soft orbs (0:00, 0:01, 0:03).
  let knee = smoothstep(u.threshold, u.threshold + max(u.knee, 1e-4), lum);
  return vec4f(color * knee * u.gain, 1.0);
}
`,ll=`
struct BloomU {
  targetSize: vec2f,
  texel: vec2f,
  sigma: f32,
  tapRadius: f32,
  pad0: f32,
  pad1: f32,
}

@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var srcTex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> u: BloomU;

struct VsOut {
  @builtin(position) clip: vec4f,
}

@vertex
fn vs(@location(0) pos: vec2f) -> VsOut {
  var o: VsOut;
  o.clip = vec4f(pos, 0.0, 1.0);
  return o;
}

fn bloomGauss(offset: f32, sigma: f32) -> f32 {
  let x = offset / sigma;
  return exp(-0.5 * x * x);
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let uv = frag.xy / u.targetSize;
  // One bloom texel times the look's tap step. 1 keeps every neighbour.
  let d = u.texel;
  let sigma = max(u.sigma, 0.25);
  let radius = clamp(u.tapRadius, 1.0, ${re}.0);
  var sum = bloomGauss(0.0, sigma);
  for (var tap = 1; tap <= ${re}; tap++) {
    let ft = f32(tap);
    if (ft <= radius) {
      sum += 2.0 * bloomGauss(ft, sigma);
    }
  }
  var sampleColor = textureSample(srcTex, samp, uv);
  var c = sampleColor.rgb * (bloomGauss(0.0, sigma) / sum);
  var a = sampleColor.a * (bloomGauss(0.0, sigma) / sum);
  for (var outTap = 1; outTap <= ${re}; outTap++) {
    let ft = f32(outTap);
    if (ft <= radius) {
      let weight = bloomGauss(ft, sigma) / sum;
      sampleColor = textureSample(srcTex, samp, uv + d * ft);
      c += sampleColor.rgb * weight;
      a += sampleColor.a * weight;
      sampleColor = textureSample(srcTex, samp, uv - d * ft);
      c += sampleColor.rgb * weight;
      a += sampleColor.a * weight;
    }
  }
  return vec4f(c, a);
}
`,cl=`
struct BloomU {
  targetSize: vec2f,
  texel: vec2f,
  sigma: f32,
  tapRadius: f32,
  aperture: f32,
  focus: f32,
  nearFar: vec2f,
  clipZ: vec2f,
  pad: vec2f,
}

@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var srcTex: texture_2d<f32>;
@group(0) @binding(2) var<uniform> u: BloomU;
@group(0) @binding(3) var depthTex: texture_depth_2d;

struct VsOut {
  @builtin(position) clip: vec4f,
}

@vertex
fn vs(@location(0) pos: vec2f) -> VsOut {
  var o: VsOut;
  o.clip = vec4f(pos, 0.0, 1.0);
  return o;
}

fn bloomGauss(offset: f32, sigma: f32) -> f32 {
  let x = offset / sigma;
  return exp(-0.5 * x * x);
}

fn eyeDistance(windowDepth: f32) -> f32 {
  let clipZ = windowDepth * u.clipZ.x + u.clipZ.y;
  let nearPlane = u.nearFar.x;
  let farPlane = u.nearFar.y;
  if (u.clipZ.x > 1.5) {
    return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - clipZ * (farPlane - nearPlane));
  }
  return (nearPlane * farPlane) / max(farPlane - clipZ * (farPlane - nearPlane), 1e-4);
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let uv = frag.xy / u.targetSize;
  let sceneSize = vec2f(textureDimensions(depthTex));
  let depth = textureLoad(depthTex, vec2i(uv * sceneSize), 0);
  let factor = abs(eyeDistance(depth) - u.focus) * u.aperture;
  let d = u.texel * factor;
  let sigma = max(u.sigma, 0.25);
  let radius = clamp(u.tapRadius, 1.0, ${re}.0);
  var sum = bloomGauss(0.0, sigma);
  for (var tap = 1; tap <= ${re}; tap++) {
    let ft = f32(tap);
    if (ft <= radius) {
      sum += 2.0 * bloomGauss(ft, sigma);
    }
  }
  var sampleColor = textureSample(srcTex, samp, uv);
  var c = sampleColor.rgb * (bloomGauss(0.0, sigma) / sum);
  var a = sampleColor.a * (bloomGauss(0.0, sigma) / sum);
  for (var outTap = 1; outTap <= ${re}; outTap++) {
    let ft = f32(outTap);
    if (ft <= radius) {
      let weight = bloomGauss(ft, sigma) / sum;
      sampleColor = textureSample(srcTex, samp, uv + d * ft);
      c += sampleColor.rgb * weight;
      a += sampleColor.a * weight;
      sampleColor = textureSample(srcTex, samp, uv - d * ft);
      c += sampleColor.rgb * weight;
      a += sampleColor.a * weight;
    }
  }
  return vec4f(c, a);
}
`,ul=`
struct CompU {
  strength: f32,
  exposure: f32,
  accent: f32,
  pad: f32,
}

@group(0) @binding(0) var samp: sampler;
@group(0) @binding(1) var sceneTex: texture_2d<f32>;
@group(0) @binding(2) var bloomTex: texture_2d<f32>;
@group(0) @binding(3) var<uniform> u: CompU;

struct VsOut {
  @builtin(position) clip: vec4f,
}

@vertex
fn vs(@location(0) pos: vec2f) -> VsOut {
  var o: VsOut;
  o.clip = vec4f(pos, 0.0, 1.0);
  return o;
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let size = vec2f(textureDimensions(sceneTex));
  let textureCoordinate = frag.xy / size;
  let scene = textureSample(sceneTex, samp, textureCoordinate).rgb;
  let bloom = textureSample(bloomTex, samp, textureCoordinate).rgb;
  // Warm white. A blue tint turned the silver faces into plaster (0:05, 0:11).
  let tint = mix(vec3f(1.0), vec3f(${ti}, ${ni}, ${ii}), u.accent);
  var color = scene + bloom * u.strength * tint;
  color = vec3f(1.0) - exp(-max(color, vec3f(0.0)) * u.exposure);
  return vec4f(color, 1.0);
}
`,Zi=`
uniform mat4 u_viewProj;
uniform vec3 u_eye;
uniform float u_emissiveOnly;
uniform float u_laserSideAngular;
uniform float u_laserDownAngular;
uniform float u_laserReach;
attribute vec3 a_pos;
attribute vec3 a_nrm;
attribute vec4 i_m0;
attribute vec4 i_m1;
attribute vec4 i_m2;
attribute vec4 i_m3;
attribute vec4 i_col;
varying vec3 v_world;
varying vec3 v_nrm;
varying vec4 v_col;
varying vec3 v_local;
varying vec3 v_faceCenter;
varying float v_edgeSoft;
varying float v_spark;
// i_m0.w is the streak's circular sweep in radians. Plates and tunnel blocks store 0.
// Same rotation as bendDashAroundOrigin in the WGSL mesh shader.
vec4 bendDashAroundOrigin(vec3 pos, vec4 m0, vec4 m1, vec4 m2, vec4 m3, float sweep) {
  vec3 center = m3.xyz;
  float radius = length(center);
  vec3 tangent = m1.xyz;
  float tangentLength = length(tangent);
  if (radius < 0.001 || tangentLength < 0.001) {
    return mat4(vec4(m0.xyz, 0.0), m1, m2, m3) * vec4(pos, 1.0);
  }
  vec3 radial = center / radius;
  vec3 tangentDir = tangent / tangentLength;
  vec3 normal = cross(radial, tangentDir);
  float normalLength = length(normal);
  if (normalLength < 0.001) {
    return mat4(vec4(m0.xyz, 0.0), m1, m2, m3) * vec4(pos, 1.0);
  }
  vec3 axis = normal / normalLength;
  float angle = pos.y * sweep;
  float cosine = cos(angle);
  float sine = sin(angle);
  vec3 spunRadial = radial * cosine + cross(axis, radial) * sine;
  vec3 spunX = m0.xyz * cosine + cross(axis, m0.xyz) * sine + axis * dot(axis, m0.xyz) * (1.0 - cosine);
  vec3 spunZ = m2.xyz * cosine + cross(axis, m2.xyz) * sine + axis * dot(axis, m2.xyz) * (1.0 - cosine);
  return vec4(spunRadial * radius + spunX * pos.x + spunZ * pos.z, 1.0);
}

void main() {
  float sweep = i_m0.w;
  vec4 world;
  // i_m1.w is the skirt. The columns stay xyz so that value is not a translation.
  float edgeSoft = max(i_m1.w, 0.0);
  vec3 local = a_pos * (1.0 + edgeSoft);
  if (abs(sweep) < 0.001) {
    mat4 model = mat4(
      vec4(i_m0.xyz, 0.0),
      vec4(i_m1.xyz, 0.0),
      vec4(i_m2.xyz, 0.0),
      vec4(i_m3.xyz, 1.0)
    );
    world = model * vec4(local, 1.0);
    // Laser only. Same down-beam cap as the WGSL mesh (0:12.0 cone, 0:07.2 bar).
    if (u_emissiveOnly > 0.5) {
      vec3 centerline = i_m3.xyz + i_m1.xyz * a_pos.y;
      float dist = length(centerline - u_eye);
      vec3 beamDir = normalize(i_m1.xyz);
      vec3 forward = normalize(-u_eye);
      float downBeam = smoothstep(0.45, 0.53, abs(dot(forward, beamDir)));
      float halfWidth = 0.5 * length(i_m0.xyz);
      // Same half-angles as the WGSL mesh. 7.2 s full bar, 12.0 s crisp bar.
      float sideCap = u_laserSideAngular > 0.0 ? min(halfWidth, max(dist * u_laserSideAngular, 0.04)) : halfWidth;
      float downCap = min(halfWidth, max(dist * u_laserDownAngular, 0.04));
      float maxHalf = mix(sideCap, downCap, downBeam);
      float scale = min(1.0, maxHalf / max(halfWidth, 1e-4));
      world = vec4(centerline + i_m0.xyz * a_pos.x * scale + i_m2.xyz * a_pos.z * scale, 1.0);
    }
  } else {
    world = bendDashAroundOrigin(a_pos, i_m0, i_m1, i_m2, i_m3, sweep);
  }
  vec3 c0 = i_m0.xyz;
  vec3 c1 = i_m1.xyz;
  vec3 c2 = i_m2.xyz;
  v_world = world.xyz;
  v_nrm = cross(c1, c2) * a_nrm.x + cross(c2, c0) * a_nrm.y + cross(c0, c1) * a_nrm.z;
  v_col = i_col;
  v_local = local;
  v_edgeSoft = edgeSoft;
  v_spark = i_m3.w;
  // Local face sits at ±0.5 on its normal, so this is the face center.
  v_faceCenter = i_m3.xyz + (i_m0.xyz * a_nrm.x + i_m1.xyz * a_nrm.y + i_m2.xyz * a_nrm.z) * 0.5;
  gl_Position = u_viewProj * world;
}
`,Ki=`
precision highp float;
uniform vec3 u_eye;
uniform float u_metal;
uniform float u_specular;
uniform float u_sharpness;
uniform float u_emissiveOnly;
uniform float u_shotLight;
uniform float u_shotBody;
uniform float u_bloomCap;
uniform vec3 u_light;
uniform float u_lightAmbient;
uniform float u_lightDiffuse;
uniform float u_lightViewAlign;
uniform float u_shadingMode;
uniform float u_streakOut;
uniform float u_streakMelt;
uniform float u_streakTip;
uniform float u_streakPinch;
uniform float u_streakSoft;
uniform float u_streakFade;
uniform float u_laserReach;
varying vec3 v_world;
varying vec3 v_nrm;
varying vec4 v_col;
varying vec3 v_local;
varying vec3 v_faceCenter;
varying float v_edgeSoft;
varying float v_spark;
float streakSpark(vec3 localPos, float spark, float outMix, float melt, float tip, float pinch, float soft, float fadeRate);
// Same round beam as the WGSL mesh. End-on is a soft disk (0:08).
float dashGlow(vec3 localPosition) {
  float radial = length(localPosition.xz);
  float across = exp(-radial * radial * ${Wi});
  float tip = 1.0 - smoothstep(${Vi}, ${$i}, abs(localPosition.y));
  return across * tip;
}

float linearFog(vec3 world) {
  float d = length(world - u_eye);
  return clamp((d - ${ye}) / (${St} - ${ye}), 0.0, 1.0);
}

void main() {
  if (u_emissiveOnly > 0.5) {
    // Laser. Premultiplied coverage, so the shaft replaces the warm boxes
    // instead of mixing into lavender. White only at the hot core.
    // The square end of a thick shaft is the solid ball (0:08, 0:07.2). The middle stays a bar.
    float glow = dashGlow(v_local) * (1.0 - smoothstep(0.16, 0.36, abs(v_local.y)));
    float emissive = v_col.a;
    if (emissive < 0.04) {
      gl_FragColor = vec4(0.0);
      return;
    }
    vec3 tone = v_col.rgb * emissive;
    // Tight knot at the origin. A wide white core left two blue edges (4.0 s).
    float core = 1.0 - smoothstep(0.04, 0.12, length(v_world));
    tone = mix(tone, vec3(emissive), core * 0.35);
    // Plateau across the shaft so the centre matches the shoulders.
    float cover = clamp(glow * 4.5, 0.0, 1.0) * (1.0 - linearFog(v_world));
    // Far wing of a side-on bar fades. The near wing stays (7.2 s).
    if (u_laserReach > 0.2) {
      float away = length(v_world - u_eye);
      cover *= 1.0 - smoothstep(u_laserReach * 0.62, u_laserReach, away);
    }
    gl_FragColor = vec4(tone * cover, cover);
    return;
  }
  // One normal per face. Flat: H from the face center, constant on the face.
  // u_shadingMode > 0 is the old reflect() glint from the shared eye direction.
  vec3 normal = normalize(v_nrm);
  // 0 is this division alone, the same light as before the knob.
  vec3 fixedLight = u_light / max(length(u_light), 1e-4);
  vec3 lightDirection = fixedLight;
  if (u_lightViewAlign > 0.0) {
    vec3 eyeDir = u_eye / max(length(u_eye), 1e-4);
    lightDirection = normalize(mix(fixedLight, eyeDir, clamp(u_lightViewAlign, 0.0, 1.0)));
  }
  float facingLight = max(dot(normal, lightDirection), 0.0);
  float alignment;
  if (u_shadingMode > 0.5) {
    vec3 viewDirection = normalize(u_eye);
    vec3 reflected = reflect(-lightDirection, normal);
    alignment = max(dot(reflected, viewDirection), 0.0);
  } else {
    vec3 viewDirection = normalize(u_eye - v_faceCenter);
    vec3 halfVector = normalize(lightDirection + viewDirection);
    alignment = max(dot(normal, halfVector), 0.0);
  }
  float shotLight = max(u_shotLight, 0.05);
  float bodyScale = max(u_shotBody, 0.05);
  float cap = max(u_bloomCap, 0.05);
  vec3 baseLit = v_col.rgb * (u_lightAmbient + u_lightDiffuse * facingLight);
  // Body only. A face already over the bloom cap keeps that excess,
  // so the extract does not grow a new core when the shot is bright (0:04.50).
  vec3 body = min(baseLit, vec3(cap));
  vec3 color = min(body * bodyScale, vec3(cap)) + max(baseLit - vec3(cap), vec3(0.0));
  // One exponent on every face. u_sharpness is specularSharpness.
  float sharpness = max(u_sharpness, 1.0);
  float specular = pow(alignment, sharpness) * u_specular * u_metal;
  if (u_shadingMode > 0.5) {
    specular *= step(0.0, dot(normal, lightDirection));
  }
  color += vec3(specular);
  vec3 fogGray = vec3(${qi}, ${Xi}, ${ji}) * shotLight;
  color = mix(color, fogGray, linearFog(v_world));
  // Coverage only. The shade above is one value for the face. The skirt sits
  // outside the old box and dissolves into the fog, so a streak is a soft
  // spark and the solid core keeps the 2.25 s length. 0 is the hard rectangle.
  float cover = 1.0;
  if (v_edgeSoft > 0.0) {
    float skirtReach = 0.5 * (1.0 + v_edgeSoft);
    vec3 a = abs(v_local);
    float hi = max(a.x, max(a.y, a.z));
    float lo = min(a.x, min(a.y, a.z));
    float edge = a.x + a.y + a.z - hi - lo;
    cover = 1.0 - smoothstep(0.5, skirtReach, edge);
  }
  // Tail only. The shade above is one value for the face (clip 2.25 s).
  float spark = streakSpark(v_local, v_spark, u_streakOut, u_streakMelt, u_streakTip, u_streakPinch, u_streakSoft, u_streakFade);
  if (spark < 0.02) {
    discard;
  }
  color = mix(fogGray, color, cover * spark);
  // Opaque. Bloom keys off luminance, not this alpha (0:00, 0:01, 0:03).
  gl_FragColor = vec4(color, 1.0);
}

float streakSpark(vec3 localPos, float spark, float outMix, float melt, float tip, float pinch, float soft, float fadeRate) {
  if (spark < 0.5 || (melt <= 0.001 && outMix <= 0.001)) {
    return 1.0;
  }
  float axis = floor(spark + 0.0001);
  float body = clamp(spark - axis, 0.0, 0.999);
  float along = localPos.x;
  float crossA = localPos.y;
  float crossB = localPos.z;
  if (axis > 1.5 && axis < 2.5) {
    along = localPos.y;
    crossA = localPos.x;
    crossB = localPos.z;
  } else if (axis > 2.5) {
    along = localPos.z;
    crossA = localPos.x;
    crossB = localPos.y;
  }
  // The original shard stays centered. The tail is whatever was added.
  float solidAlong = clamp(along, -0.5, 0.5);
  float bodyHalf = 0.5 * body;
  float tailSpan = max(0.5 - bodyHalf, 0.001);
  float forward = clamp((solidAlong - bodyHalf) / tailSpan, 0.0, 1.0);
  float back = clamp((-bodyHalf - solidAlong) / tailSpan, 0.0, 1.0);
  float outward = clamp(outMix, 0.0, 1.0);
  // out 1 drops the back half, so the visible tail is the forward added length.
  float backKeep = 1.0 - back * outward;
  if (backKeep < 0.02) {
    return 0.0;
  }
  float t = max(forward, back * (1.0 - outward));
  // The width eases over pinch of the tail. 0.1 is the #193 needle.
  // The root stays the hard box. Only the added tail feathers (clip 2.25 s).
  float reach = max(pinch, 0.02);
  float eased = smoothstep(0.0, reach, t);
  if (t <= 0.001 || melt <= 0.001) {
    return backKeep;
  }
  float halfWidth = mix(0.5, 0.5 * clamp(tip, 0.0, 1.0), eased);
  // The face sits at ±0.5 on its normal. That plane is not the streak's width.
  float aAlong = abs(along);
  float aA = abs(crossA);
  float aB = abs(crossB);
  float widthDist = max(aA, aB);
  if (aB >= aAlong && aB >= aA) {
    widthDist = aA;
  } else if (aA >= aAlong && aA >= aB) {
    widthDist = aB;
  }
  float hard = 1.0 - smoothstep(max(halfWidth - 0.06, 0.0), halfWidth, widthDist);
  float across = hard;
  if (soft > 0.001) {
    float n = widthDist / max(halfWidth, 0.02);
    across = exp(-n * n * soft);
  }
  // A linear mix stays a white bar: the face specular is huge, so the tail
  // falls off fast. Dark tails die first; the bright ones stay long (clip 2.25 s).
  float fade = exp(-t * max(fadeRate, 0.0) * clamp(melt, 0.0, 1.0));
  return fade * across * backKeep;
}
`,hl=Ki.replace("varying vec3 v_world;","in vec3 v_world;").replace("varying vec3 v_nrm;","in vec3 v_nrm;").replace("varying vec4 v_col;","in vec4 v_col;").replace("varying vec3 v_local;","in vec3 v_local;").replace("varying vec3 v_faceCenter;","in vec3 v_faceCenter;").replace("varying float v_edgeSoft;","in float v_edgeSoft;").replace("varying float v_spark;","in float v_spark;").replace(/gl_FragColor/g,"outColor"),dl=Zi.replace(/attribute /g,"in ").replace("varying vec3 v_world;","out vec3 v_world;").replace("varying vec3 v_nrm;","out vec3 v_nrm;").replace("varying vec4 v_col;","out vec4 v_col;").replace("varying vec3 v_local;","out vec3 v_local;").replace("varying vec3 v_faceCenter;","out vec3 v_faceCenter;").replace("varying float v_edgeSoft;","out float v_edgeSoft;").replace("varying float v_spark;","out float v_spark;"),fl=Zi,pl=Ki,gl=`#version 300 es
${dl}`,ml=`#version 300 es
precision highp float;
out vec4 outColor;
${hl.replace(`precision highp float;
`,"")}`,Ji=`
uniform mat4 u_viewProj;
uniform vec3 u_right;
uniform vec3 u_up;
uniform vec3 u_eye;
uniform float u_ringGlowSpread;
uniform float u_ringGlowLength;
uniform float u_ringGlowStrength;
uniform float u_ringSideLift;
uniform float u_ringLiftCap;
uniform float u_ringHoopNear;
uniform float u_ringHoopFar;
uniform float u_ringAxial;
uniform float u_ringSideWiden;
uniform float u_ringBandNear;
uniform float u_ringBandFar;
uniform float u_ringWashPull;
uniform float u_ringWashEngage;
uniform float u_ringGlowCap;
uniform float u_ringCapSide;
uniform float u_ringEdgeFacing;
uniform float u_ringEdgeCap;
uniform float u_ringEdgeLength;
uniform float u_ringEdgePull;
uniform float u_ringEdgeBody;
uniform float u_ringEdgeGain;
uniform float u_ringEdgeSpread;
uniform float u_ringSideSpread;
uniform float u_ringHornSpread;
uniform float u_ringHornLength;
uniform float u_ringHornPull;
uniform float u_ringFaceStart;
uniform float u_ringFaceEnd;
attribute vec3 a_pos;
attribute vec3 i_center;
attribute float i_length;
attribute vec3 i_color;
attribute float i_mode;
attribute vec3 i_tangent;
attribute vec3 i_radial;
attribute float i_width;
varying vec3 v_local;
varying vec3 v_color;
varying float v_mode;
varying vec3 v_world;
varying float v_endFade;
varying vec2 v_glowScale;
varying float v_sideLift;
varying float v_edgeBody;
varying float v_horn;
void main() {
  vec3 world;
  if (i_mode > 0.75) {
    float dist = length(i_center - u_eye);
    float gate = smoothstep(0.25, 0.55, dist);
    // Short streak on screen. A larger cap became a panel out in the tunnel (0:11.45).
    // Thin streak. A wider cap read as a chip beside the lens (0:14.80).
    // These caps size the bright core only.
    float coreLen = min(i_length, dist * 0.18);
    float coreWid = min(i_width, dist * 0.035);
    float dashLen = coreLen * gate;
    float dashWid = coreWid * gate;
    // The wash is longer than that core so neighbors meet (17.8 s gaps were
    // ~180 px while the gated wash was ~100 px). It still dies inside the lens.
    float washGate = smoothstep(0.12, 0.40, dist);
    // Side-on the ring plane flattens (6.75 s, 16.2 s, 17.8 s). Looking down
    // the tunnel, facing stays high and this lift stays off (3.5 s, 13.1 s).
    vec3 axis = normalize(cross(i_tangent, i_radial));
    // One facing for the ring plane. A per-dash facing swelled the rim of a
    // face-on hoop into a tube (9.90 s). Down the tunnel this stays off.
    float planeFacing = abs(dot(axis, normalize(u_eye)));
    float side = smoothstep(0.40, 0.75, 1.0 - planeFacing);
    // Deeply edge-on only. 6.75 s facing is about 0.44, so this stays off.
    bool deep = u_ringEdgeFacing > 0.0 && planeFacing < u_ringEdgeFacing;
    // 5.7 on a side-on ring is a solid dome over the mass (6.75 s).
    // Face-on keeps that wide wash so the dashes still meet (17.8 s).
    // Deep edge-on caps its own width (0.40 s, 8.40 s).
    float spreadBase = max(u_ringGlowSpread, 1.0);
    float spreadSide = max(u_ringSideSpread, 1.0);
    // Full side spread by 0.55. A linear mix still left a dome at side 0.67 (6.75 s).
    float sideAmt = smoothstep(0.25, 0.55, side);
    float spread = deep ? spreadBase : mix(spreadBase, spreadSide, sideAmt);
    float lengthen = deep ? max(u_ringEdgeLength, 1.0) : max(u_ringGlowLength, 1.0);
    // Out by the hoop the same ring surrounds the lens (10.05 s). Leave it thin.
    // Side-lift only while the eye is near the cluster. Farther off the axis
    // the same ring is a ribbon, and the lift stays off.
    float offAxis = length(cross(u_eye, axis));
    float hoop = 1.0 - smoothstep(u_ringHoopNear, max(u_ringHoopFar, u_ringHoopNear + 1e-3), offAxis);
    // Behind the cluster (6.75 s). A dash nearer the eye than the origin does not swell.
    float eyeDist = length(u_eye);
    float behind = smoothstep(0.15, 0.75, dist - eyeDist);
    // Inside the shard cloud, not only the outer rim. The old 0.35–1.15 band
    // was the solid wings beside the mass.
    float around = smoothstep(u_ringBandNear, max(u_ringBandFar, u_ringBandNear + 1e-3), length(i_center));
    // Hoop is 0 at 0.40 s and behind is 0 on the near half, so this lift
    // stays off and the cap leaves a thin arc (0.40 s, 8.40 s).
    float sideLift = max(u_ringSideLift, 0.0) * side * hoop * behind * around;
    // Dashes sit outside the shards. Edge-on, pull them into the cloud (6.75 s).
    // Face-on, side is 0 and the lathe radius stays.
    float radius = dot(i_center, i_radial);
    float engage = smoothstep(0.0, max(u_ringWashEngage, 1e-3), side * hoop);
    float pull = mix(1.0, clamp(u_ringWashPull, 0.0, 1.0), engage);
    // Hoop is 0 at 0.40 s, so the wash pull never leaves the outer lathe.
    // Deep edge-on uses its own radius. 6.75 s is not deep and stays on the wash pull.
    if (deep && u_ringEdgePull > 0.0) {
      pull = clamp(u_ringEdgePull, 0.0, 1.0);
    }
    // Continuous outer wash: the side-on break is off, the deep edge wash is
    // off, and the width cap is off. That wash is the thick horn
    // (17.80 s, 19.40 s). 6.75 s has engage. 0.40 s and 8.40 s are deep.
    float faceOn = smoothstep(u_ringFaceStart, max(u_ringFaceEnd, u_ringFaceStart + 1e-4), planeFacing);
    float horn = step(engage, 1e-3) * (1.0 - faceOn) * (deep ? 0.0 : 1.0) * (1.0 - step(u_ringCapSide, side));
    float placedPull = mix(pull, clamp(u_ringHornPull, 0.0, 1.0), horn);
    float spreadUsed = mix(spread, max(u_ringHornSpread, 1.0), horn);
    float lengthUsed = mix(lengthen, max(u_ringHornLength, 1.0), horn);
    // Same side-on volume, on the pulled ring. Hoop and behind stay out of it:
    // the hoop is closed at 0.40 s, and behind drops the near half that has to
    // sit in the cloud once the radius is pulled in (8.40 s). 6.75 s is not deep,
    // so this lift stays the side-on one and that frame does not move.
    float body = deep ? clamp(u_ringEdgeBody, 0.0, 1.0) : 0.0;
    float lift = sideLift;
    if (body > 0.0) {
      lift = max(sideLift, max(u_ringSideLift, 0.0) * side * around * body);
    }
    vec3 placed = i_center - i_radial * radius * (1.0 - placedPull);
    float liftCap = min(lift, max(u_ringLiftCap, 0.0));
    // Capped. 6.8 with no cap became a blue cloud over the whole shot.
    // Widen and axial come from the look. 0.85 and 2.5 were the solid wings (6.75 s).
    float sideBoost = max(1.0 + u_ringSideWiden * liftCap, 0.0);
    // Length barely grows, so a side-on dash does not become a spoke (6.75 s).
    // The center is pulled in, but the arc was still the lathe length, so the
    // wash sat on the cloud as a solid dome (6.75 s). Face-on pull is 1.
    // Deep edge-on keeps that length (0.40 s, 8.40 s).
    float arcFit = deep ? 1.0 : pull;
    float glowLen = coreLen * lengthUsed * washGate * mix(1.0, sideBoost, 0.15) * arcFit;
    float glowWidRaw = coreWid * spreadUsed * washGate * sideBoost;
    // Ordinary cap once side has reached u_ringCapSide. A hard step at 1 left
    // the 8.35 s frame (side about 0.997) on the raw width. 6.75 s is about 0.45.
    float glowCap = dist * max(u_ringGlowCap, 0.0);
    float capped = glowCap > 0.0 ? min(glowWidRaw, glowCap) : glowWidRaw;
    float glowWid = side >= u_ringCapSide ? capped : glowWidRaw;
    // Deep edge-on (0.40 s, 8.40 s). Body 0 keeps the hairline. Body 1 opens
    // that cap into the wash the lift just built. 6.75 s stays off.
    float edgeCap = dist * max(u_ringEdgeCap, 0.0);
    if (deep && u_ringEdgeCap > 0.0) {
      glowWid = min(glowWid, mix(edgeCap, glowWid, body));
    }
    float axial = coreWid * spreadUsed * washGate * liftCap * max(u_ringAxial, 0.0);
    if (deep && u_ringEdgeCap > 0.0) {
      axial = min(axial, mix(edgeCap, axial, body));
    }
    // Edge-on, radial points at the eye, so the stroke is a thin arc (0.40 s, 8.40 s).
    // Lay the wash across the screen around the pulled ring. Body 0 keeps the stroke,
    // which is the 6.75 s path.
    // Body 0 is the old stroke, same multiply order, so 6.75 s stays put.
    // Edge-on, radial points at the eye and that stroke is a thin arc (0.40 s, 8.40 s).
    if (body > 0.0) {
      vec3 screenWide = cross(u_eye - placed, i_tangent);
      float screenLen = length(screenWide);
      // a_pos.y is ±0.5, so the 2 makes u_ringEdgeSpread a half-width.
      if (screenLen > 1e-3) {
        float reach = dist * max(u_ringEdgeSpread, 0.0) * 2.0;
        world = placed + i_tangent * a_pos.x * glowLen + screenWide / screenLen * reach * a_pos.y;
      } else {
        world = placed + i_tangent * a_pos.x * glowLen + i_radial * a_pos.y * glowWid + axis * a_pos.y * axial;
      }
    } else {
      world = placed + i_tangent * a_pos.x * glowLen + i_radial * a_pos.y * glowWid + axis * a_pos.y * axial;
    }
    v_glowScale = vec2(glowWid / max(dashWid, 1e-4), glowLen / max(dashLen, 1e-4));
    v_sideLift = lift;
    v_edgeBody = body;
    v_horn = horn;
    v_endFade = 0.0;
  } else {
    // Thin plate on the cylinder. Tangent is along the axis, radial is around it,
    // and their cross is the outward normal (clip 1.0 s, 13.1 s).
    vec3 outward = cross(i_tangent, i_radial);
    // Width and height jitter independently, about ±30% (clip 1.0 s, 13.1 s).
    world = i_center + i_tangent * a_pos.x * i_length + i_radial * a_pos.y * i_width + outward * a_pos.z * i_length;
    // Dissolve before the cylinder's end so the tunnel has no hard mouth (1.0 s, 13.1 s).
    float alongPos = dot(i_center, i_tangent);
    float edge = abs(alongPos) / (${Yi} * 0.5);
    v_endFade = smoothstep(0.55, 1.0, edge);
    v_glowScale = vec2(1.0);
    v_sideLift = 0.0;
    v_edgeBody = 0.0;
    v_horn = 0.0;
  }
  v_local = a_pos;
  v_color = i_color;
  v_mode = i_mode;
  v_world = world;
  gl_Position = u_viewProj * vec4(world, 1.0);
}
`,Qi=`
precision highp float;
uniform vec3 u_eye;
uniform float u_ringGlowSpread;
uniform float u_ringGlowLength;
uniform float u_ringGlowStrength;
uniform float u_shotLight;
uniform float u_tunnelEdgeHard;
uniform float u_tunnelEdgeSoft;
uniform float u_tunnelEdgeSpan;
uniform float u_tunnelCover;
uniform float u_ringWashBreak;
uniform float u_ringWashFrequency;
uniform float u_ringSideGain;
uniform float u_ringEdgeGain;
uniform float u_ringHornBreak;
uniform float u_ringHornSoft;
uniform float u_ringHornGain;
uniform float u_ringHornFrequency;
varying vec3 v_local;
varying vec3 v_color;
varying float v_mode;
varying vec3 v_world;
varying float v_endFade;
varying vec2 v_glowScale;
varying float v_sideLift;
varying float v_edgeBody;
varying float v_horn;
float linearFog(vec3 world) {
  float d = length(world - u_eye);
  return clamp((d - ${ye}) / (${St} - ${ye}), 0.0, 1.0);
}

void main() {
  float keep = 1.0 - linearFog(v_world);
  if (v_mode > 0.75) {
    // Bright core stays the old dash. Local is the grown quad, so scale it
    // back by the growth actually drawn (clip 17.8 s, 19.45 s).
    float spread = max(v_glowScale.x, 1.0);
    float lengthen = max(v_glowScale.y, 1.0);
    float along = 1.0 - smoothstep(0.32, 0.55, abs(v_local.x) * lengthen);
    float core = exp(-v_local.y * v_local.y * spread * spread * 14.0);
    float fringe = exp(-v_local.y * v_local.y * spread * spread * 5.5) * 0.28;
    float coreMark = along * max(core, fringe);
    // Soft cyan band. The body stays full enough that overlapping dashes read
    // as one wash, and the rim still dies so it is not a tile (17.8 s, 19.45 s).
    // A side-on lift widens that body so the far ring is a swirl, not a hairline
    // (6.75 s, 16.2 s, 17.8 s). No lift keeps the #142 falloff.
    // Horn 0 is the side-on soften alone, so 6.75 s stays put.
    float soften = clamp(max(v_sideLift / 1.6, v_horn * u_ringHornSoft), 0.0, 1.0);
    float alongGlow = exp(-v_local.x * v_local.x * mix(0.9, 0.45, soften));
    float acrossGlow = exp(-v_local.y * v_local.y * mix(2.2, 0.9, soften));
    float rim = 1.0 - smoothstep(mix(0.55, 0.78, soften), 1.08, length(v_local.xy) * 2.0);
    // Shared holes. A per-dash gap let the next dash fill it, which is how
    // the side-on ring fused into two wings (6.75 s). Frequency 0 stays continuous.
    float broken = clamp(u_ringWashBreak, 0.0, 1.0);
    // Horn 0 keeps the side-on frequency, so 6.75 s stays put.
    float freq = mix(max(u_ringWashFrequency, 0.0), max(u_ringHornFrequency, 0.0), v_horn);
    float waveA = sin(dot(v_world, vec3(6.5, 1.7, 2.9)) * freq);
    float waveB = sin(dot(v_world, vec3(1.3, 7.1, 3.4)) * freq);
    float teeth = mix(1.0, 0.5 + 0.5 * waveA * waveB, step(1e-4, freq));
    float gap = mix(1.0, teeth, max(soften * broken, v_horn * clamp(u_ringHornBreak, 0.0, 1.0)));
    // The side-on body has to stay cyan. At 1.2 the band between dashes
    // clipped pale and dropped out of the blue test (6.75 s).
    float glow = alongGlow * acrossGlow * rim * max(u_ringGlowStrength, 0.0) * mix(1.0, max(u_ringSideGain, 0.0), soften) * gap;
    glow *= mix(1.0, max(u_ringHornGain, 0.0), v_horn);
    // Stacked edge-on dashes at full strength are a solid bar (0.40 s, 8.40 s).
    // Body 0 leaves the 6.75 s wash on the unscaled strength.
    if (v_edgeBody > 1e-4) {
      glow *= max(u_ringEdgeGain, 0.0);
    }
    float mark = max(coreMark, glow);
    if (mark < 0.02) discard;
    // Lifted wash stays cyan. The full core clips white, so the blue test
    // only counted the two edges of the band (6.75 s).
    vec3 rgb = v_color * mark;
    rgb = mix(rgb, v_color * min(mark, 0.22), soften);
    gl_FragColor = vec4(rgb * keep, mark * keep);
    return;
  }
  if (v_mode > 0.02) {
    // Square falloff. Softness feathers the core: near layers stay a little sharper,
    // far layers dissolve (clip 1.0 s, 3.20 s, 13.1 s). The numbers are the plate uniforms.
    float edge = max(abs(v_local.x), abs(v_local.y)) * 2.0;
    float span = max(u_tunnelEdgeSpan, 0.001);
    float soft = clamp(v_mode / span, 0.0, 1.0);
    float inner = mix(u_tunnelEdgeHard, u_tunnelEdgeSoft, soft);
    float cover = clamp(u_tunnelCover, 0.0, 1.0);
    // Soft falloff only. A solid thin-side rim drew a hard black frame (1.0 s, 13.1 s).
    float alpha = cover * (1.0 - smoothstep(max(inner, 0.0), 1.0, edge)) * (1.0 - v_endFade);
    if (alpha < 0.02) discard;
    // Radius already sets the tone, from the dark inner gray toward the outer gray.
    // A second mix into the fog washed those plates into the clear (1.0 s, 13.1 s).
    // Same knee as the clear. Rings returned above and are not in it (10.05 s).
    gl_FragColor = vec4(v_color * max(u_shotLight, 0.05) * alpha, alpha);
    return;
  }
  discard;
}
`,bl=Ji.replace(/attribute /g,"in ").replace("varying vec3 v_local;","out vec3 v_local;").replace("varying vec3 v_color;","out vec3 v_color;").replace("varying float v_mode;","out float v_mode;").replace("varying vec3 v_world;","out vec3 v_world;").replace("varying float v_endFade;","out float v_endFade;").replace("varying vec2 v_glowScale;","out vec2 v_glowScale;").replace("varying float v_sideLift;","out float v_sideLift;").replace("varying float v_edgeBody;","out float v_edgeBody;").replace("varying float v_horn;","out float v_horn;"),Sl=Qi.replace("varying vec3 v_local;","in vec3 v_local;").replace("varying vec3 v_color;","in vec3 v_color;").replace("varying float v_mode;","in float v_mode;").replace("varying vec3 v_world;","in vec3 v_world;").replace("varying float v_endFade;","in float v_endFade;").replace("varying vec2 v_glowScale;","in vec2 v_glowScale;").replace("varying float v_sideLift;","in float v_sideLift;").replace("varying float v_edgeBody;","in float v_edgeBody;").replace("varying float v_horn;","in float v_horn;").replace(/gl_FragColor/g,"outColor"),xl=Ji,yl=Qi,wl=`#version 300 es
${bl}`,vl=`#version 300 es
precision highp float;
out vec4 outColor;
${Sl.replace(`precision highp float;
`,"")}`,er=`
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,tr=`
precision highp float;
uniform sampler2D u_src;
uniform vec2 u_invRes;
uniform vec2 u_sceneTexel;
uniform float u_threshold;
uniform float u_gain;
uniform float u_knee;
uniform float u_karis;
void main() {
  vec2 textureCoordinate = gl_FragCoord.xy * u_invRes;
  // u_sceneTexel is one scene pixel. Karis average of the 4×4, same weight
  // as bloomExtractWeight. A max promoted one glint to a whole bloom texel.
  vec3 weighted = vec3(0.0);
  float weightSum = 0.0;
  for (int row = 0; row < 4; row++) {
    for (int column = 0; column < 4; column++) {
      vec2 offset = (vec2(float(column), float(row)) - 1.5) * u_sceneTexel;
      vec3 sampleColor = texture2D(u_src, textureCoordinate + offset).rgb;
      float luminance = max(sampleColor.r, max(sampleColor.g, sampleColor.b));
      float weight = 1.0 / (1.0 + u_karis * luminance);
      weighted += sampleColor * weight;
      weightSum += weight;
    }
  }
  vec3 color = weighted / max(weightSum, 1e-4);
  float lum = max(color.r, max(color.g, color.b));
  // Specular threshold only. Axis weight turned a few hits into soft orbs (0:00, 0:01, 0:03).
  float knee = smoothstep(u_threshold, u_threshold + max(u_knee, 1e-4), lum);
  gl_FragColor = vec4(color * knee * u_gain, 1.0);
}
`,nr=`
precision highp float;
uniform sampler2D u_src;
uniform vec2 u_invRes;
uniform vec2 u_dir;
uniform float u_sigma;
uniform float u_tapRadius;
void main() {
  vec2 uv = gl_FragCoord.xy * u_invRes;
  vec2 d = u_dir;
  float sigma = max(u_sigma, 0.25);
  float radius = clamp(u_tapRadius, 1.0, ${re}.0);
  float sum = 1.0;
  for (int tap = 1; tap <= ${re}; tap++) {
    float ft = float(tap);
    if (ft > radius) continue;
    float x = ft / sigma;
    sum += 2.0 * exp(-0.5 * x * x);
  }
  vec4 sampleColor = texture2D(u_src, uv);
  vec3 c = sampleColor.rgb / sum;
  float a = sampleColor.a / sum;
  for (int tap = 1; tap <= ${re}; tap++) {
    float ft = float(tap);
    if (ft > radius) continue;
    float x = ft / sigma;
    float weight = exp(-0.5 * x * x) / sum;
    sampleColor = texture2D(u_src, uv + d * ft);
    c += sampleColor.rgb * weight;
    a += sampleColor.a * weight;
    sampleColor = texture2D(u_src, uv - d * ft);
    c += sampleColor.rgb * weight;
    a += sampleColor.a * weight;
  }
  gl_FragColor = vec4(c, a);
}
`,_l=`
precision highp float;
uniform sampler2D u_src;
uniform sampler2D u_depth;
uniform vec2 u_invRes;
uniform vec2 u_dir;
uniform float u_sigma;
uniform float u_tapRadius;
uniform float u_aperture;
uniform float u_focus;
uniform vec2 u_nearFar;
uniform vec2 u_clipZ;
float eyeDistance(float windowDepth) {
  float clipZ = windowDepth * u_clipZ.x + u_clipZ.y;
  float nearPlane = u_nearFar.x;
  float farPlane = u_nearFar.y;
  if (u_clipZ.x > 1.5) {
    return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - clipZ * (farPlane - nearPlane));
  }
  return (nearPlane * farPlane) / max(farPlane - clipZ * (farPlane - nearPlane), 1e-4);
}
void main() {
  vec2 uv = gl_FragCoord.xy * u_invRes;
  vec2 d = u_dir;
  float depth = texture2D(u_depth, uv).r;
  d *= abs(eyeDistance(depth) - u_focus) * u_aperture;
  float sigma = max(u_sigma, 0.25);
  float radius = clamp(u_tapRadius, 1.0, ${re}.0);
  float sum = 1.0;
  for (int tap = 1; tap <= ${re}; tap++) {
    float ft = float(tap);
    if (ft > radius) continue;
    float x = ft / sigma;
    sum += 2.0 * exp(-0.5 * x * x);
  }
  vec4 sampleColor = texture2D(u_src, uv);
  vec3 c = sampleColor.rgb / sum;
  float a = sampleColor.a / sum;
  for (int tap = 1; tap <= ${re}; tap++) {
    float ft = float(tap);
    if (ft > radius) continue;
    float x = ft / sigma;
    float weight = exp(-0.5 * x * x) / sum;
    sampleColor = texture2D(u_src, uv + d * ft);
    c += sampleColor.rgb * weight;
    a += sampleColor.a * weight;
    sampleColor = texture2D(u_src, uv - d * ft);
    c += sampleColor.rgb * weight;
    a += sampleColor.a * weight;
  }
  gl_FragColor = vec4(c, a);
}
`,ir=`
precision highp float;
uniform sampler2D u_scene;
uniform sampler2D u_bloom;
uniform vec2 u_sceneTexel;
uniform float u_strength;
uniform float u_exposure;
uniform float u_accent;

void main() {
  vec2 textureCoordinate = gl_FragCoord.xy * u_sceneTexel;
  vec3 scene = texture2D(u_scene, textureCoordinate).rgb;
  vec3 bloom = texture2D(u_bloom, textureCoordinate).rgb;
  // Warm-white bloom. The blue accent stays on the laser and the rings.
  vec3 tint = mix(vec3(1.0), vec3(${ti}, ${ni}, ${ii}), u_accent);
  vec3 color = scene + bloom * u_strength * tint;
  color = vec3(1.0) - exp(-max(color, vec3(0.0)) * u_exposure);
  gl_FragColor = vec4(color, 1.0);
}
`;function xt(t,e=""){return`#version 300 es
precision highp float;
out vec4 outColor;
${e}
${t.replace(`precision highp float;
`,"").replace(/texture2D/g,"texture").replace(/gl_FragColor/g,"outColor")}`}const Mt=er,Te=`#version 300 es
${er.replace("attribute ","in ")}`,Bl=tr,El=nr,Tl=ir,Pl=xt(tr),Fl=xt(nr),kl=xt(_l),Ml=xt(ir);function On(t,e,n){const i=t.createShader(e);return i?(t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.warn(t.getShaderInfoLog(i)),t.deleteShader(i),null)):null}function me(t,e,n,i){const r=On(t,t.VERTEX_SHADER,e),o=On(t,t.FRAGMENT_SHADER,n);if(!r||!o)return null;const s=t.createProgram();if(!s)return null;t.attachShader(s,r),t.attachShader(s,o);for(const[a,l]of i)t.bindAttribLocation(s,a,l);return t.linkProgram(s),t.deleteShader(r),t.deleteShader(o),t.getProgramParameter(s,t.LINK_STATUS)?s:(console.warn(t.getProgramInfoLog(s)),t.deleteProgram(s),null)}function Ll(t,e){const n=i=>t.getUniformLocation(e,i);return{scene:n("u_scene"),depth:n("u_depth"),invViewProj:n("u_invViewProj"),prevViewProj:n("u_prevViewProj"),strength:n("u_strength"),samples:n("u_samples"),maxPixels:n("u_maxPixels"),velocityScale:n("u_velocityScale"),depthScale:n("u_depthScale"),objectScale:n("u_objectScale"),objectRadians:n("u_objectRadians"),depthFar:n("u_depthFar"),clipZScale:n("u_clipZScale"),clipZBias:n("u_clipZBias"),ndcYScale:n("u_ndcYScale"),ndcYBias:n("u_ndcYBias"),ndcToPixelY:n("u_ndcToPixelY"),targetSize:n("u_targetSize"),depthNear:n("u_depthNear"),eye:n("u_eye"),epsilon:n("u_epsilon"),jitter:n("u_jitter"),tapSpacing:n("u_tapSpacing")}}function Rl(t){if(typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext){const n=t;return{divisor:(i,r)=>n.vertexAttribDivisor(i,r),draw:(i,r,o,s)=>n.drawArraysInstanced(i,r,o,s)}}const e=t.getExtension("ANGLE_instanced_arrays");return e?{divisor:(n,i)=>e.vertexAttribDivisorANGLE(n,i),draw:(n,i,r,o)=>e.drawArraysInstancedANGLE(n,i,r,o)}:null}const Al=[[0,"a_pos"],[1,"a_nrm"],[2,"i_m0"],[3,"i_m1"],[4,"i_m2"],[5,"i_m3"],[6,"i_col"]],Cl=[[0,"a_pos"],[1,"i_center"],[2,"i_length"],[3,"i_color"],[4,"i_mode"],[5,"i_tangent"],[6,"i_radial"],[7,"i_width"]];class mt{constructor(e,n,i,r){h(this,"layout",new wi);h(this,"is2");h(this,"inst");h(this,"meshProg");h(this,"spriteProg");h(this,"extractProg");h(this,"blurProg");h(this,"dofBlurProg");h(this,"compProg");h(this,"motionProg");h(this,"motionLoc");h(this,"motionHistory",new Ai);h(this,"feedbackProg");h(this,"feedbackHistory",new Ci);h(this,"meshLoc");h(this,"spriteLoc");h(this,"boxBuf");h(this,"crystalBuf");h(this,"streakRibbonBuf");h(this,"spriteQuad");h(this,"plateBuf");h(this,"fsQuad");h(this,"clusterBuf");h(this,"streakBuf");h(this,"spriteBuf");h(this,"spriteFloats",je*ue);h(this,"useFloat");h(this,"sceneSamplesDepth",!1);h(this,"scene",null);h(this,"bloomA",null);h(this,"bloomB",null);h(this,"blurColor",null);h(this,"feedbackHistoryTex",null);h(this,"feedbackColor",null);h(this,"width",0);h(this,"height",0);this.gl=e,this.is2=e instanceof WebGL2RenderingContext,this.inst=n,this.useFloat=r,this.meshProg=i.mesh,this.spriteProg=i.sprite,this.extractProg=i.extract,this.blurProg=i.blur,this.dofBlurProg=i.dofBlur,this.compProg=i.comp,this.motionProg=i.motion,this.motionLoc=i.motion?Ll(e,i.motion):null,this.feedbackProg=i.feedback,this.meshLoc={viewProj:e.getUniformLocation(i.mesh,"u_viewProj"),eye:e.getUniformLocation(i.mesh,"u_eye"),metal:e.getUniformLocation(i.mesh,"u_metal"),specular:e.getUniformLocation(i.mesh,"u_specular"),sharpness:e.getUniformLocation(i.mesh,"u_sharpness"),emissiveOnly:e.getUniformLocation(i.mesh,"u_emissiveOnly"),laserSideAngular:e.getUniformLocation(i.mesh,"u_laserSideAngular"),laserDownAngular:e.getUniformLocation(i.mesh,"u_laserDownAngular"),laserReach:e.getUniformLocation(i.mesh,"u_laserReach"),shotLight:e.getUniformLocation(i.mesh,"u_shotLight"),shotBody:e.getUniformLocation(i.mesh,"u_shotBody"),bloomCap:e.getUniformLocation(i.mesh,"u_bloomCap"),light:e.getUniformLocation(i.mesh,"u_light"),lightAmbient:e.getUniformLocation(i.mesh,"u_lightAmbient"),lightDiffuse:e.getUniformLocation(i.mesh,"u_lightDiffuse"),lightViewAlign:e.getUniformLocation(i.mesh,"u_lightViewAlign"),shadingMode:e.getUniformLocation(i.mesh,"u_shadingMode"),streakOut:e.getUniformLocation(i.mesh,"u_streakOut"),streakMelt:e.getUniformLocation(i.mesh,"u_streakMelt"),streakTip:e.getUniformLocation(i.mesh,"u_streakTip"),streakPinch:e.getUniformLocation(i.mesh,"u_streakPinch"),streakSoft:e.getUniformLocation(i.mesh,"u_streakSoft"),streakFade:e.getUniformLocation(i.mesh,"u_streakFade")},this.spriteLoc={viewProj:e.getUniformLocation(i.sprite,"u_viewProj"),right:e.getUniformLocation(i.sprite,"u_right"),up:e.getUniformLocation(i.sprite,"u_up"),eye:e.getUniformLocation(i.sprite,"u_eye"),ringGlowSpread:e.getUniformLocation(i.sprite,"u_ringGlowSpread"),ringGlowLength:e.getUniformLocation(i.sprite,"u_ringGlowLength"),ringGlowStrength:e.getUniformLocation(i.sprite,"u_ringGlowStrength"),ringSideLift:e.getUniformLocation(i.sprite,"u_ringSideLift"),ringLiftCap:e.getUniformLocation(i.sprite,"u_ringLiftCap"),ringHoopNear:e.getUniformLocation(i.sprite,"u_ringHoopNear"),ringHoopFar:e.getUniformLocation(i.sprite,"u_ringHoopFar"),ringAxial:e.getUniformLocation(i.sprite,"u_ringAxial"),ringSideWiden:e.getUniformLocation(i.sprite,"u_ringSideWiden"),ringWashBreak:e.getUniformLocation(i.sprite,"u_ringWashBreak"),ringWashFrequency:e.getUniformLocation(i.sprite,"u_ringWashFrequency"),ringBandNear:e.getUniformLocation(i.sprite,"u_ringBandNear"),ringBandFar:e.getUniformLocation(i.sprite,"u_ringBandFar"),ringSideGain:e.getUniformLocation(i.sprite,"u_ringSideGain"),ringWashPull:e.getUniformLocation(i.sprite,"u_ringWashPull"),ringWashEngage:e.getUniformLocation(i.sprite,"u_ringWashEngage"),ringGlowCap:e.getUniformLocation(i.sprite,"u_ringGlowCap"),ringCapSide:e.getUniformLocation(i.sprite,"u_ringCapSide"),ringEdgeFacing:e.getUniformLocation(i.sprite,"u_ringEdgeFacing"),ringEdgeCap:e.getUniformLocation(i.sprite,"u_ringEdgeCap"),ringEdgeLength:e.getUniformLocation(i.sprite,"u_ringEdgeLength"),ringEdgePull:e.getUniformLocation(i.sprite,"u_ringEdgePull"),ringEdgeBody:e.getUniformLocation(i.sprite,"u_ringEdgeBody"),ringEdgeGain:e.getUniformLocation(i.sprite,"u_ringEdgeGain"),ringEdgeSpread:e.getUniformLocation(i.sprite,"u_ringEdgeSpread"),shotLight:e.getUniformLocation(i.sprite,"u_shotLight"),tunnelEdgeHard:e.getUniformLocation(i.sprite,"u_tunnelEdgeHard"),tunnelEdgeSoft:e.getUniformLocation(i.sprite,"u_tunnelEdgeSoft"),tunnelEdgeSpan:e.getUniformLocation(i.sprite,"u_tunnelEdgeSpan"),tunnelCover:e.getUniformLocation(i.sprite,"u_tunnelCover"),ringSideSpread:e.getUniformLocation(i.sprite,"u_ringSideSpread"),ringHornSpread:e.getUniformLocation(i.sprite,"u_ringHornSpread"),ringHornLength:e.getUniformLocation(i.sprite,"u_ringHornLength"),ringHornPull:e.getUniformLocation(i.sprite,"u_ringHornPull"),ringHornBreak:e.getUniformLocation(i.sprite,"u_ringHornBreak"),ringHornSoft:e.getUniformLocation(i.sprite,"u_ringHornSoft"),ringHornGain:e.getUniformLocation(i.sprite,"u_ringHornGain"),ringHornFrequency:e.getUniformLocation(i.sprite,"u_ringHornFrequency"),ringFaceStart:e.getUniformLocation(i.sprite,"u_ringFaceStart"),ringFaceEnd:e.getUniformLocation(i.sprite,"u_ringFaceEnd")},this.boxBuf=this.staticBuf(Ni),this.crystalBuf=this.staticBuf(Jt),this.streakRibbonBuf=this.staticBuf(Qt),this.spriteQuad=this.staticBuf(en),this.plateBuf=this.staticBuf(tn),this.fsQuad=this.staticBuf(Hi),this.clusterBuf=this.dynamicBuf(Xt*ce),this.streakBuf=this.dynamicBuf(Ce*ce),this.spriteBuf=this.dynamicBuf(je*ue)}static create(e){const n=Rl(e);if(!n)return console.warn("Deepness WebGL: instancing is unavailable"),null;const i=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext,r=me(e,i?gl:fl,i?ml:pl,Al),o=me(e,i?wl:xl,i?vl:yl,Cl),s=me(e,i?Te:Mt,i?Pl:Bl,[[0,"a_pos"]]),a=me(e,i?Te:Mt,i?Fl:El,[[0,"a_pos"]]),l=i?me(e,Te,kl,[[0,"a_pos"]]):a,u=me(e,i?Te:Mt,i?Ml:Tl,[[0,"a_pos"]]);if(!r||!o||!s||!a||!l||!u)return null;const c=i?me(e,Te,wa,[[0,"a_pos"]]):null;i&&!c&&console.warn("Deepness WebGL: motion blur shader failed; blur stays off");const f=i?me(e,Te,Da,[[0,"a_pos"]]):null,p=i&&!!e.getExtension("EXT_color_buffer_float")&&!!e.getExtension("OES_texture_float_linear");return new mt(e,n,{mesh:r,sprite:o,extract:s,blur:a,dofBlur:l,comp:u,motion:c,feedback:f},p)}draw(e,n,i){if(n<1||i<1)return;this.ensureTargets(n,i,e.motionBlurMode==="reprojection"||e.dofAperture>0);const r=this.scene,o=this.bloomA,s=this.bloomB;if(!r||!o||!s)return;const a=this.layout.build(e,n/i,"webgl"),l=this.gl;this.ensureSpriteBuf(a.sprites.length),this.upload(this.clusterBuf,a.cluster),this.upload(this.streakBuf,a.streaks),this.upload(this.spriteBuf,a.sprites),l.bindFramebuffer(l.FRAMEBUFFER,r.fbo),l.viewport(0,0,r.width,r.height);const u=a.shotLight;l.clearColor(a.fogRed*u,a.fogGreen*u,a.fogBlue*u,0),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.enable(l.DEPTH_TEST),l.disable(l.CULL_FACE),l.depthFunc(l.LESS),l.depthMask(!1),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),this.drawSprites(a,xe,a.tunnelPlateCount,this.plateBuf,zi),l.disable(l.BLEND),l.depthFunc(l.LEQUAL),l.depthMask(!0),this.drawCluster(a),this.blitExtract(r,o,a);for(let m=0;m<Ge;m++)this.blitBlur(o,s,!0,a),this.blitBlur(s,o,!1,a);l.bindFramebuffer(l.FRAMEBUFFER,r.fbo),l.viewport(0,0,r.width,r.height),l.enable(l.BLEND),l.depthMask(!1),l.disable(l.DEPTH_TEST),l.blendFunc(l.ONE,l.ONE),this.drawStreaks(a),l.enable(l.DEPTH_TEST);const c=a.ringEdgeFront>0&&gi(a)&&pi(a)===0;l.depthFunc(c?l.ALWAYS:l.LEQUAL),l.depthMask(!1),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),this.drawSprites(a,0,xe);const f=e.motionBlurMode;f!=="reprojection"&&this.motionHistory.reset(),f!=="feedback"&&this.feedbackHistory.reset();const p=f==="feedback"?this.applyFeedback(r,e):f==="reprojection"?this.blitMotionBlur(r,a,e):null;this.composite(p??r,o,a,n,i),l.disable(l.BLEND),l.depthMask(!0),l.disable(l.DEPTH_TEST)}destroy(){const e=this.gl;this.destroyTarget(this.scene),this.destroyTarget(this.bloomA),this.destroyTarget(this.bloomB),this.destroyTarget(this.blurColor),this.destroyTarget(this.feedbackHistoryTex),this.destroyTarget(this.feedbackColor),e.deleteProgram(this.meshProg),e.deleteProgram(this.spriteProg),e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compProg),this.motionProg&&e.deleteProgram(this.motionProg),this.feedbackProg&&e.deleteProgram(this.feedbackProg);for(const n of[this.boxBuf,this.crystalBuf,this.streakRibbonBuf,this.spriteQuad,this.plateBuf,this.fsQuad,this.clusterBuf,this.streakBuf,this.spriteBuf])e.deleteBuffer(n)}drawCluster(e){var i;const n=this.gl;n.bindFramebuffer(n.FRAMEBUFFER,((i=this.scene)==null?void 0:i.fbo)??null),n.viewport(0,0,this.width,this.height),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.disable(n.BLEND),n.disable(n.CULL_FACE),this.setMeshCamera(e,e.metal,0),this.bindMesh(this.boxBuf),this.bindInstances(this.clusterBuf),this.inst.draw(n.TRIANGLES,0,Di,e.clusterPieceCount),e.crystalTailCount>0&&(this.bindMesh(this.crystalBuf),this.bindInstances(this.clusterBuf,Xe),this.inst.draw(n.TRIANGLES,0,Oi,e.crystalTailCount))}setMeshCamera(e,n,i){const r=this.gl;r.useProgram(this.meshProg),r.uniformMatrix4fv(this.meshLoc.viewProj,!1,e.viewProj),r.uniform3f(this.meshLoc.eye,e.eye[0],e.eye[1],e.eye[2]),r.uniform1f(this.meshLoc.metal,n),r.uniform1f(this.meshLoc.specular,e.specular),r.uniform1f(this.meshLoc.sharpness,e.specularSharpness),r.uniform1f(this.meshLoc.emissiveOnly,i),r.uniform1f(this.meshLoc.laserSideAngular,e.laserSideAngular),r.uniform1f(this.meshLoc.laserDownAngular,e.laserDownAngular),r.uniform1f(this.meshLoc.laserReach,e.laserReach),r.uniform1f(this.meshLoc.shotLight,e.shotLight),r.uniform1f(this.meshLoc.shotBody,e.shotBody),r.uniform1f(this.meshLoc.bloomCap,e.bloomThreshold),r.uniform3f(this.meshLoc.light,e.lightX,e.lightY,e.lightZ),r.uniform1f(this.meshLoc.lightAmbient,e.lightAmbient),r.uniform1f(this.meshLoc.lightDiffuse,e.lightDiffuse),r.uniform1f(this.meshLoc.lightViewAlign,e.lightViewAlign),r.uniform1f(this.meshLoc.shadingMode,e.shadingMode==="blinnPhong"?1:0),r.uniform1f(this.meshLoc.streakOut,e.shardStreakOut),r.uniform1f(this.meshLoc.streakMelt,e.shardStreakMelt),r.uniform1f(this.meshLoc.streakTip,e.shardStreakTip),r.uniform1f(this.meshLoc.streakPinch,e.shardStreakPinch),r.uniform1f(this.meshLoc.streakSoft,e.shardStreakSoft),r.uniform1f(this.meshLoc.streakFade,e.shardStreakFade)}drawStreaks(e){const n=this.gl;this.setMeshCamera(e,0,1),this.bindStreakRibbon(),this.bindInstances(this.streakBuf),this.inst.draw(n.TRIANGLES,0,Gi,Ce)}drawSprites(e,n,i,r=this.spriteQuad,o=Ii){const s=this.gl;s.useProgram(this.spriteProg),s.uniformMatrix4fv(this.spriteLoc.viewProj,!1,e.viewProj),s.uniform3f(this.spriteLoc.right,e.right[0],e.right[1],e.right[2]),s.uniform3f(this.spriteLoc.up,e.up[0],e.up[1],e.up[2]),s.uniform3f(this.spriteLoc.eye,e.eye[0],e.eye[1],e.eye[2]),s.uniform1f(this.spriteLoc.ringGlowSpread,e.ringGlowSpread),s.uniform1f(this.spriteLoc.ringGlowLength,e.ringGlowLength),s.uniform1f(this.spriteLoc.ringGlowStrength,e.ringGlowStrength),s.uniform1f(this.spriteLoc.ringSideLift,e.ringSideLift),s.uniform1f(this.spriteLoc.ringLiftCap,e.ringLiftCap),s.uniform1f(this.spriteLoc.ringHoopNear,e.ringHoopNear),s.uniform1f(this.spriteLoc.ringHoopFar,e.ringHoopFar),s.uniform1f(this.spriteLoc.ringAxial,e.ringAxial),s.uniform1f(this.spriteLoc.ringSideWiden,e.ringSideWiden),s.uniform1f(this.spriteLoc.ringWashBreak,e.ringWashBreak),s.uniform1f(this.spriteLoc.ringWashFrequency,e.ringWashFrequency),s.uniform1f(this.spriteLoc.ringBandNear,e.ringBandNear),s.uniform1f(this.spriteLoc.ringBandFar,e.ringBandFar),s.uniform1f(this.spriteLoc.ringSideGain,e.ringSideGain),s.uniform1f(this.spriteLoc.ringWashPull,e.ringWashPull),s.uniform1f(this.spriteLoc.ringWashEngage,e.ringWashEngage),s.uniform1f(this.spriteLoc.ringGlowCap,e.ringGlowCap),s.uniform1f(this.spriteLoc.ringCapSide,e.ringCapSide),s.uniform1f(this.spriteLoc.ringEdgeFacing,e.ringEdgeFacing),s.uniform1f(this.spriteLoc.ringEdgeCap,e.ringEdgeCap),s.uniform1f(this.spriteLoc.ringEdgeLength,e.ringEdgeLength),s.uniform1f(this.spriteLoc.ringEdgePull,e.ringEdgePull),s.uniform1f(this.spriteLoc.ringEdgeBody,e.ringEdgeBody),s.uniform1f(this.spriteLoc.ringEdgeGain,e.ringEdgeGain),s.uniform1f(this.spriteLoc.ringEdgeSpread,e.ringEdgeSpread),s.uniform1f(this.spriteLoc.shotLight,e.shotLight),s.uniform1f(this.spriteLoc.tunnelEdgeHard,e.tunnelEdgeHard),s.uniform1f(this.spriteLoc.tunnelEdgeSoft,e.tunnelEdgeSoft),s.uniform1f(this.spriteLoc.tunnelEdgeSpan,e.tunnelEdgeSpan),s.uniform1f(this.spriteLoc.tunnelCover,e.tunnelCover),s.uniform1f(this.spriteLoc.ringSideSpread,e.ringSideSpread),s.uniform1f(this.spriteLoc.ringHornSpread,e.ringHornSpread),s.uniform1f(this.spriteLoc.ringHornLength,e.ringHornLength),s.uniform1f(this.spriteLoc.ringHornPull,e.ringHornPull),s.uniform1f(this.spriteLoc.ringHornBreak,e.ringHornBreak),s.uniform1f(this.spriteLoc.ringHornSoft,e.ringHornSoft),s.uniform1f(this.spriteLoc.ringHornGain,e.ringHornGain),s.uniform1f(this.spriteLoc.ringHornFrequency,e.ringHornFrequency),s.uniform1f(this.spriteLoc.ringFaceStart,e.ringFaceStart),s.uniform1f(this.spriteLoc.ringFaceEnd,e.ringFaceEnd),s.bindBuffer(s.ARRAY_BUFFER,r),s.enableVertexAttribArray(0),this.inst.divisor(0,0),s.vertexAttribPointer(0,3,s.FLOAT,!1,12,0),s.bindBuffer(s.ARRAY_BUFFER,this.spriteBuf);for(let u=1;u<=7;u++)s.enableVertexAttribArray(u),this.inst.divisor(u,1);const a=ue*4,l=n*a;s.vertexAttribPointer(1,3,s.FLOAT,!1,a,l),s.vertexAttribPointer(2,1,s.FLOAT,!1,a,l+12),s.vertexAttribPointer(3,3,s.FLOAT,!1,a,l+16),s.vertexAttribPointer(4,1,s.FLOAT,!1,a,l+28),s.vertexAttribPointer(5,3,s.FLOAT,!1,a,l+32),s.vertexAttribPointer(6,3,s.FLOAT,!1,a,l+48),s.vertexAttribPointer(7,1,s.FLOAT,!1,a,l+44),this.inst.draw(s.TRIANGLES,0,o,i);for(let u=1;u<=7;u++)this.inst.divisor(u,0),s.disableVertexAttribArray(u)}blitExtract(e,n,i){const r=this.gl;r.bindFramebuffer(r.FRAMEBUFFER,n.fbo),r.viewport(0,0,n.width,n.height),r.disable(r.BLEND),r.disable(r.DEPTH_TEST),r.useProgram(this.extractProg),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,e.tex),r.uniform1i(r.getUniformLocation(this.extractProg,"u_src"),0),r.uniform2f(r.getUniformLocation(this.extractProg,"u_invRes"),1/n.width,1/n.height),r.uniform2f(r.getUniformLocation(this.extractProg,"u_sceneTexel"),1/e.width,1/e.height),r.uniform1f(r.getUniformLocation(this.extractProg,"u_threshold"),i.bloomThreshold),r.uniform1f(r.getUniformLocation(this.extractProg,"u_gain"),i.bloomGain),r.uniform1f(r.getUniformLocation(this.extractProg,"u_knee"),i.bloomKnee),r.uniform1f(r.getUniformLocation(this.extractProg,"u_karis"),i.bloomKaris),this.drawFullscreen()}blitBlur(e,n,i,r){var u,c;const o=this.gl;o.bindFramebuffer(o.FRAMEBUFFER,n.fbo),o.viewport(0,0,n.width,n.height),o.disable(o.BLEND),o.disable(o.DEPTH_TEST);const s=r.dofAperture>0&&this.dofBlurProg&&((u=this.scene)==null?void 0:u.depthTex),a=s?this.dofBlurProg:this.blurProg;o.useProgram(a),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,e.tex),o.uniform1i(o.getUniformLocation(a,"u_src"),0),o.uniform2f(o.getUniformLocation(a,"u_invRes"),1/n.width,1/n.height);const l=r.bloomTapStep;if(o.uniform2f(o.getUniformLocation(a,"u_dir"),i?l/e.width:0,i?0:l/e.height),o.uniform1f(o.getUniformLocation(a,"u_sigma"),r.bloomSigma),o.uniform1f(o.getUniformLocation(a,"u_tapRadius"),r.bloomTapRadius),s&&((c=this.scene)!=null&&c.depthTex)){const f=ft("webgl");o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.scene.depthTex),o.uniform1i(o.getUniformLocation(a,"u_depth"),1),o.uniform1f(o.getUniformLocation(a,"u_aperture"),r.dofAperture),o.uniform1f(o.getUniformLocation(a,"u_focus"),r.dofFocus),o.uniform2f(o.getUniformLocation(a,"u_nearFar"),ht,dt),o.uniform2f(o.getUniformLocation(a,"u_clipZ"),f.clipZScale,f.clipZBias)}this.drawFullscreen()}composite(e,n,i,r,o){const s=this.gl;s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,r,o),s.disable(s.BLEND),s.useProgram(this.compProg),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,e.tex),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,n.tex),s.uniform1i(s.getUniformLocation(this.compProg,"u_scene"),0),s.uniform1i(s.getUniformLocation(this.compProg,"u_bloom"),1),s.uniform2f(s.getUniformLocation(this.compProg,"u_sceneTexel"),1/e.width,1/e.height),s.uniform1f(s.getUniformLocation(this.compProg,"u_strength"),i.bloomStrength),s.uniform1f(s.getUniformLocation(this.compProg,"u_exposure"),i.exposure),s.uniform1f(s.getUniformLocation(this.compProg,"u_accent"),i.accent),this.drawFullscreen(),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,null),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,null),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,null)}drawFullscreen(){const e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.fsQuad),e.enableVertexAttribArray(0),this.inst.divisor(0,0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);for(let n=1;n<=6;n++)e.disableVertexAttribArray(n);e.drawArrays(e.TRIANGLES,0,6)}bindStreakRibbon(){this.bindMesh(this.streakRibbonBuf)}bindMesh(e){const n=this.gl;n.bindBuffer(n.ARRAY_BUFFER,e),n.enableVertexAttribArray(0),n.enableVertexAttribArray(1),this.inst.divisor(0,0),this.inst.divisor(1,0),n.vertexAttribPointer(0,3,n.FLOAT,!1,24,0),n.vertexAttribPointer(1,3,n.FLOAT,!1,24,12)}bindInstances(e,n=0){const i=this.gl;i.bindBuffer(i.ARRAY_BUFFER,e);const r=ce*4,o=n*r;for(let s=0;s<4;s++){const a=2+s;i.enableVertexAttribArray(a),this.inst.divisor(a,1),i.vertexAttribPointer(a,4,i.FLOAT,!1,r,o+s*16)}i.enableVertexAttribArray(6),this.inst.divisor(6,1),i.vertexAttribPointer(6,4,i.FLOAT,!1,r,o+64)}ensureTargets(e,n,i){const r=i&&this.is2;if(this.scene&&this.width===e&&this.height===n&&this.sceneSamplesDepth===r)return;this.destroyTarget(this.scene),this.destroyTarget(this.bloomA),this.destroyTarget(this.bloomB),this.destroyTarget(this.blurColor),this.width=e,this.height=n,this.sceneSamplesDepth=r;const o=Math.max(1,e>>2),s=Math.max(1,n>>2);this.scene=this.makeTarget(e,n,!0,r),!this.scene&&this.useFloat&&(this.useFloat=!1,this.scene=this.makeTarget(e,n,!0,r)),this.bloomA=this.makeTarget(o,s,!1,!1),this.bloomB=this.makeTarget(o,s,!1,!1),this.blurColor=r?this.makeTarget(e,n,!1,!1):null}makeTarget(e,n,i,r){const o=this.gl,s=o.createTexture(),a=o.createFramebuffer();if(!s||!a)return null;if(o.bindTexture(o.TEXTURE_2D,s),this.useFloat&&this.is2){const f=o;f.texImage2D(f.TEXTURE_2D,0,f.RGBA16F,e,n,0,f.RGBA,f.HALF_FLOAT,null)}else o.texImage2D(o.TEXTURE_2D,0,o.RGBA,e,n,0,o.RGBA,o.UNSIGNED_BYTE,null);o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.bindFramebuffer(o.FRAMEBUFFER,a),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,s,0);let l=null,u=null;if(i&&r&&this.is2){if(u=o.createTexture(),!u)return null;const f=o;o.bindTexture(o.TEXTURE_2D,u),o.texImage2D(o.TEXTURE_2D,0,f.DEPTH_COMPONENT24,e,n,0,o.DEPTH_COMPONENT,o.UNSIGNED_INT,null),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,u,0),o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE&&(console.warn("Deepness: depth texture incomplete, blur has no depth"),o.deleteTexture(u),u=null)}if(i&&!u){if(l=o.createRenderbuffer(),!l)return null;o.bindRenderbuffer(o.RENDERBUFFER,l),this.is2?o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_COMPONENT24,e,n):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_COMPONENT16,e,n),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,l)}const c=o.checkFramebufferStatus(o.FRAMEBUFFER);return o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindTexture(o.TEXTURE_2D,null),c!==o.FRAMEBUFFER_COMPLETE?(console.warn("Deepness framebuffer incomplete",c),o.deleteTexture(s),o.deleteFramebuffer(a),l&&o.deleteRenderbuffer(l),u&&o.deleteTexture(u),null):{tex:s,fbo:a,depth:l,depthTex:u,width:e,height:n}}applyFeedback(e,n){const i=Zt(n.motionBlurFeedbackWeight);if(!(i>0)||!this.feedbackProg||!this.is2)return this.feedbackHistory.reset(),null;(!this.feedbackHistoryTex||!this.feedbackColor||this.feedbackHistoryTex.width!==e.width||this.feedbackHistoryTex.height!==e.height)&&(this.destroyTarget(this.feedbackHistoryTex),this.destroyTarget(this.feedbackColor),this.feedbackHistoryTex=this.makeTarget(e.width,e.height,!1,!1),this.feedbackColor=this.makeTarget(e.width,e.height,!1,!1),this.feedbackHistory.reset());const r=this.feedbackHistory.step(i,n.motionBlurResetOnCut,n.cameraCut),o=this.feedbackHistoryTex,s=this.feedbackColor;if(!o||!s)return null;if(r==="reset")return this.blitCopy(e,o),null;const a=this.gl;return a.bindFramebuffer(a.FRAMEBUFFER,s.fbo),a.viewport(0,0,s.width,s.height),a.disable(a.BLEND),a.disable(a.DEPTH_TEST),a.useProgram(this.feedbackProg),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e.tex),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,o.tex),a.uniform1i(a.getUniformLocation(this.feedbackProg,"u_current"),0),a.uniform1i(a.getUniformLocation(this.feedbackProg,"u_history"),1),a.uniform1f(a.getUniformLocation(this.feedbackProg,"u_strength"),i),this.drawFullscreen(),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),this.blitCopy(s,o),s}blitCopy(e,n){const i=this.gl;i.bindFramebuffer(i.READ_FRAMEBUFFER,e.fbo),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,n.fbo),i.blitFramebuffer(0,0,e.width,e.height,0,0,n.width,n.height,i.COLOR_BUFFER_BIT,i.NEAREST),i.bindFramebuffer(i.FRAMEBUFFER,null)}blitMotionBlur(e,n,i){const r=Ri(i),o=this.blurColor,s=this.motionHistory.prepare({enabled:!!this.motionProg&&!!e.depthTex&&!!o,resetOnCut:r.motionBlurResetOnCut,strength:r.motionBlurStrength,samples:r.motionBlurSamples,maxPixels:r.motionBlurMaxPixels,velocityScale:r.motionBlurVelocityScale,objectScale:r.motionBlurObjectScale,cameraCut:i.cameraCut,clusterSpin:i.clusterSpin,viewProj:n.viewProj}),a=this.motionLoc;if(!s.apply||!this.motionProg||!a||!e.depthTex||!o)return this.motionHistory.commit(i.cameraCut,i.clusterSpin,n.viewProj),null;const l=this.gl,u=ft("webgl");return l.bindFramebuffer(l.FRAMEBUFFER,o.fbo),l.viewport(0,0,o.width,o.height),l.disable(l.BLEND),l.disable(l.DEPTH_TEST),l.useProgram(this.motionProg),l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e.tex),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,e.depthTex),l.uniform1i(a.scene,0),l.uniform1i(a.depth,1),l.uniformMatrix4fv(a.invViewProj,!1,this.motionHistory.invViewProj),l.uniformMatrix4fv(a.prevViewProj,!1,this.motionHistory.prevViewProj),l.uniform1f(a.strength,r.motionBlurStrength),l.uniform1f(a.samples,r.motionBlurSamples),l.uniform1f(a.maxPixels,r.motionBlurMaxPixels),l.uniform1f(a.velocityScale,r.motionBlurVelocityScale),l.uniform1f(a.depthScale,r.motionBlurDepthScale),l.uniform1f(a.objectScale,r.motionBlurObjectScale),l.uniform1f(a.objectRadians,s.objectRadians),l.uniform1f(a.depthFar,r.motionBlurDepthFar),l.uniform1f(a.clipZScale,u.clipZScale),l.uniform1f(a.clipZBias,u.clipZBias),l.uniform1f(a.ndcYScale,u.ndcYScale),l.uniform1f(a.ndcYBias,u.ndcYBias),l.uniform1f(a.ndcToPixelY,u.ndcToPixelY),l.uniform2f(a.targetSize,o.width,o.height),l.uniform1f(a.depthNear,r.motionBlurDepthNear),l.uniform3f(a.eye,n.eye[0],n.eye[1],n.eye[2]),l.uniform1f(a.epsilon,Li),l.uniform1f(a.jitter,r.motionBlurJitter),l.uniform1f(a.tapSpacing,r.motionBlurTapSpacing),this.drawFullscreen(),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),this.motionHistory.commit(i.cameraCut,i.clusterSpin,n.viewProj),o}destroyTarget(e){if(!e)return;const n=this.gl;n.deleteTexture(e.tex),n.deleteFramebuffer(e.fbo),e.depth&&n.deleteRenderbuffer(e.depth),e.depthTex&&n.deleteTexture(e.depthTex)}staticBuf(e){const n=this.gl,i=n.createBuffer();if(!i)throw new Error("buffer");return n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),i}dynamicBuf(e){const n=this.gl,i=n.createBuffer();if(!i)throw new Error("buffer");return n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,e*4,n.DYNAMIC_DRAW),i}ensureSpriteBuf(e){e<=this.spriteFloats||(this.gl.deleteBuffer(this.spriteBuf),this.spriteBuf=this.dynamicBuf(e),this.spriteFloats=e)}upload(e,n){const i=this.gl;i.bindBuffer(i.ARRAY_BUFFER,e),i.bufferSubData(i.ARRAY_BUFFER,0,n)}}const rr={color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}},Lt={color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}};async function Nl(t){const e=t.createShaderModule({code:`
      @vertex fn vs() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }
      @fragment fn fs() -> @location(0) vec4f { return vec4f(1.0, 1.0, 1.0, 1.0); }
    `});t.pushErrorScope("validation"),t.createRenderPipeline({layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:e,entryPoint:"fs",targets:[{format:"rgba16float",blend:rr}]},primitive:{topology:"triangle-list"}});const n=await t.popErrorScope();return n&&console.warn(`Deepness: rgba16float blend unavailable, using rgba8unorm (${n.message})`),!n}async function Pe(t,e){const i=(await t.getCompilationInfo()).messages.filter(r=>r.type==="error");for(const r of i)console.warn(`Deepness WebGPU ${e}: ${r.message} (L${r.lineNum}:${r.linePos})`);return i.length===0&&W(1,`shader ${e}`),i.length===0}class nn{constructor(e,n,i,r,o,s,a,l,u,c){h(this,"layout",new wi);h(this,"camPack",new Float32Array(100));h(this,"bloomPack",new Float32Array(8));h(this,"blurPack",new Float32Array(16));h(this,"compPack",new Float32Array(4));h(this,"motionPack",new Float32Array(Ln));h(this,"motionHistory",new Ai);h(this,"feedbackPipe");h(this,"feedbackU");h(this,"feedbackPack",new Float32Array(4));h(this,"feedbackHistory",new Ci);h(this,"meshPipe");h(this,"streakPipe");h(this,"squarePipe");h(this,"spritePipe");h(this,"spriteFrontPipe");h(this,"extractPipe");h(this,"blurPipe");h(this,"dofBlurPipe");h(this,"motionPipe");h(this,"compPipe");h(this,"sampler");h(this,"boxBuf");h(this,"crystalBuf");h(this,"streakRibbonBuf");h(this,"quadBuf");h(this,"plateBuf");h(this,"fsQuad");h(this,"clusterBuf");h(this,"streakBuf");h(this,"spriteBuf");h(this,"spriteBytes",je*ue*4);h(this,"camBufs");h(this,"camBinds");h(this,"squareBind");h(this,"spriteBind");h(this,"spriteFrontBind");h(this,"extractU");h(this,"bloomBlurUniforms");h(this,"compU");h(this,"motionU");h(this,"sceneTex",null);h(this,"depthTex",null);h(this,"bloomA",null);h(this,"bloomB",null);h(this,"blurTex",null);h(this,"sceneView",null);h(this,"depthView",null);h(this,"bloomAView",null);h(this,"bloomBView",null);h(this,"blurView",null);h(this,"extractBind",null);h(this,"bloomBlurBinds",[]);h(this,"dofBlurBinds",null);h(this,"motionBind",null);h(this,"compBind",null);h(this,"compBindBlur",null);h(this,"feedbackHistoryTex",null);h(this,"feedbackColorTex",null);h(this,"feedbackColorView",null);h(this,"feedbackBind",null);h(this,"compBindFeedback",null);h(this,"feedbackW",0);h(this,"feedbackH",0);h(this,"width",0);h(this,"height",0);h(this,"depthIsSampleable",!1);h(this,"bloomW",1);h(this,"bloomH",1);this.device=e,this.context=n,this.sceneFormat=r;const f=[{arrayStride:24,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x3"}]},{arrayStride:ce*4,stepMode:"instance",attributes:[{shaderLocation:2,offset:0,format:"float32x4"},{shaderLocation:3,offset:16,format:"float32x4"},{shaderLocation:4,offset:32,format:"float32x4"},{shaderLocation:5,offset:48,format:"float32x4"},{shaderLocation:6,offset:64,format:"float32x4"}]}],p={format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"};this.meshPipe=e.createRenderPipeline({layout:"auto",vertex:{module:o,entryPoint:"vs",buffers:f},fragment:{module:o,entryPoint:"fs",targets:[{format:r}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:p}),this.streakPipe=e.createRenderPipeline({layout:"auto",vertex:{module:o,entryPoint:"vs",buffers:f},fragment:{module:o,entryPoint:"fs",targets:[{format:r,blend:rr}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{...p,depthWriteEnabled:!1,depthCompare:"always"}});const m=[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]},{arrayStride:ue*4,stepMode:"instance",attributes:[{shaderLocation:1,offset:0,format:"float32x3"},{shaderLocation:2,offset:12,format:"float32"},{shaderLocation:3,offset:16,format:"float32x3"},{shaderLocation:4,offset:28,format:"float32"},{shaderLocation:5,offset:32,format:"float32x3"},{shaderLocation:6,offset:48,format:"float32x3"},{shaderLocation:7,offset:44,format:"float32"}]}];this.squarePipe=e.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"vs",buffers:m},fragment:{module:s,entryPoint:"fs",targets:[{format:r,blend:Lt}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{...p,depthWriteEnabled:!1,depthCompare:"less"}}),this.spritePipe=e.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"vs",buffers:m},fragment:{module:s,entryPoint:"fs",targets:[{format:r,blend:Lt}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{...p,depthWriteEnabled:!1,depthCompare:"less"}}),this.spriteFrontPipe=e.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"vs",buffers:m},fragment:{module:s,entryPoint:"fs",targets:[{format:r,blend:Lt}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{...p,depthWriteEnabled:!1,depthCompare:"always"}});const S={arrayStride:8,attributes:[{shaderLocation:0,offset:0,format:"float32x2"}]};this.extractPipe=e.createRenderPipeline({layout:"auto",vertex:{module:a,entryPoint:"vs",buffers:[S]},fragment:{module:a,entryPoint:"fs",targets:[{format:r}]},primitive:{topology:"triangle-list"}}),this.blurPipe=e.createRenderPipeline({layout:"auto",vertex:{module:l,entryPoint:"vs",buffers:[S]},fragment:{module:l,entryPoint:"fs",targets:[{format:r}]},primitive:{topology:"triangle-list"}});const b=e.createShaderModule({code:cl});this.dofBlurPipe=e.createRenderPipeline({layout:"auto",vertex:{module:b,entryPoint:"vs",buffers:[S]},fragment:{module:b,entryPoint:"fs",targets:[{format:r}]},primitive:{topology:"triangle-list"}});const g=e.createShaderModule({code:Na});this.feedbackPipe=e.createRenderPipeline({layout:"auto",vertex:{module:g,entryPoint:"vs",buffers:[S]},fragment:{module:g,entryPoint:"fs",targets:[{format:r}]},primitive:{topology:"triangle-list"}}),this.feedbackU=this.uniformBuf(16),this.motionPipe=e.createRenderPipeline({layout:"auto",vertex:{module:c,entryPoint:"vs",buffers:[S]},fragment:{module:c,entryPoint:"fs",targets:[{format:r}]},primitive:{topology:"triangle-list"}}),this.compPipe=e.createRenderPipeline({layout:"auto",vertex:{module:u,entryPoint:"vs",buffers:[S]},fragment:{module:u,entryPoint:"fs",targets:[{format:i}]},primitive:{topology:"triangle-list"}}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.boxBuf=this.staticBuf(Ni),this.crystalBuf=this.staticBuf(Jt),this.streakRibbonBuf=this.staticBuf(Qt),this.quadBuf=this.staticBuf(en),this.plateBuf=this.staticBuf(tn),this.fsQuad=this.staticBuf(Hi),this.clusterBuf=this.dynamicBuf(Xt*ce*4),this.streakBuf=this.dynamicBuf(Ce*ce*4),this.spriteBuf=this.dynamicBuf(je*ue*4),this.camBufs=[0,1].map(()=>e.createBuffer({size:400,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const x=B=>e.createBindGroup({layout:this.meshPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:B}}]});this.camBinds=[x(this.camBufs[0]),e.createBindGroup({layout:this.streakPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.camBufs[1]}}]})],this.squareBind=e.createBindGroup({layout:this.squarePipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.camBufs[0]}}]}),this.spriteBind=e.createBindGroup({layout:this.spritePipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.camBufs[0]}}]}),this.spriteFrontBind=e.createBindGroup({layout:this.spriteFrontPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.camBufs[0]}}]}),this.extractU=this.uniformBuf(32),this.bloomBlurUniforms=Array.from({length:Ge},()=>({horizontal:this.uniformBuf(64),vertical:this.uniformBuf(64)})),this.compU=this.uniformBuf(16),this.motionU=this.uniformBuf(Ln*4)}static async create(e,n,i){try{const r=e.createShaderModule({code:ol}),o=e.createShaderModule({code:sl}),s=e.createShaderModule({code:al}),a=e.createShaderModule({code:ll}),l=e.createShaderModule({code:ul}),u=e.createShaderModule({code:ya});if((await Promise.all([Pe(r,"mesh"),Pe(o,"sprite"),Pe(s,"extract"),Pe(a,"blur"),Pe(l,"composite"),Pe(u,"motion")])).some(S=>!S))return null;const f=await Nl(e)?"rgba16float":"rgba8unorm";e.pushErrorScope("validation");const p=new nn(e,n,i,f,r,o,s,a,l,u),m=await e.popErrorScope();return m?(console.warn(`Deepness WebGPU pipeline: ${m.message}`),p.destroy(),null):(W(1,`pipeline ${f}`),p)}catch(r){return console.warn("Deepness WebGPU pass failed",r),null}}draw(e,n,i){if(n<1||i<1)return;this.ensureTargets(n,i,e.motionBlurMode==="reprojection"||e.dofAperture>0);const r=this.layout.build(e,n/i,"webgpu"),o=this.device.queue;this.ensureSpriteBuf(r.sprites.byteLength),o.writeBuffer(this.clusterBuf,0,r.cluster),o.writeBuffer(this.streakBuf,0,r.streaks),o.writeBuffer(this.spriteBuf,0,r.sprites),this.writeCam(this.camBufs[0],r,r.metal,0),this.writeCam(this.camBufs[1],r,0,1),this.writeBloomExtractUniforms(r),this.writeBlurUniforms(r),this.compPack[0]=r.bloomStrength,this.compPack[1]=r.exposure,this.compPack[2]=r.accent,this.compPack[3]=0,o.writeBuffer(this.compU,0,this.compPack);const s=e.motionBlurMode;s!=="reprojection"&&this.motionHistory.reset(),s!=="feedback"&&this.feedbackHistory.reset();const a=s==="reprojection"&&this.prepareMotionBlur(r,e),l=this.sceneView,u=this.depthView,c=this.bloomAView,f=this.bloomBView,p=this.extractBind,m=this.bloomBlurBinds,S=this.compBind;if(!l||!u||!c||!f||!p||!S||m.length!==Ge)return;const b=this.device.createCommandEncoder(),g=b.beginRenderPass({colorAttachments:[{view:l,loadOp:"clear",storeOp:"store",clearValue:{r:r.fogRed*r.shotLight,g:r.fogGreen*r.shotLight,b:r.fogBlue*r.shotLight,a:0}}],depthStencilAttachment:{view:u,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});g.setPipeline(this.squarePipe),g.setBindGroup(0,this.squareBind),g.setVertexBuffer(0,this.plateBuf),g.setVertexBuffer(1,this.spriteBuf),g.draw(zi,r.tunnelPlateCount,0,xe),g.setPipeline(this.meshPipe),g.setBindGroup(0,this.camBinds[0]),g.setVertexBuffer(1,this.clusterBuf),g.setVertexBuffer(0,this.boxBuf),g.draw(Di,r.clusterPieceCount),r.crystalTailCount>0&&(g.setVertexBuffer(0,this.crystalBuf),g.draw(Oi,r.crystalTailCount,0,Xe)),g.end(),this.fullscreen(b,this.extractPipe,p,c);const x=r.dofAperture>0&&this.dofBlurBinds,B=x?this.dofBlurPipe:this.blurPipe,_=x?this.dofBlurBinds:m;for(const w of _)this.fullscreen(b,B,w.horizontal,f),this.fullscreen(b,B,w.vertical,c);const T=b.beginRenderPass({colorAttachments:[{view:l,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:u,depthLoadOp:"load",depthStoreOp:"store"}});T.setPipeline(this.streakPipe),T.setVertexBuffer(0,this.streakRibbonBuf),T.setBindGroup(0,this.camBinds[1]),T.setVertexBuffer(1,this.streakBuf),T.draw(Gi,Ce);const E=r.ringEdgeFront>0&&gi(r)&&pi(r)===0;T.setPipeline(E?this.spriteFrontPipe:this.spritePipe),T.setVertexBuffer(0,this.quadBuf),T.setBindGroup(0,E?this.spriteFrontBind:this.spriteBind),T.setVertexBuffer(1,this.spriteBuf),T.draw(Ii,xe),T.end();const P=this.blurView,F=this.motionBind;let M=S;if(a&&P&&F)this.fullscreen(b,this.motionPipe,F,P),this.compBindBlur&&(M=this.compBindBlur);else if(s==="feedback"){const w=this.runFeedback(b,n,i,e);w&&(M=w)}const O=this.context.getCurrentTexture().createView(),y=b.beginRenderPass({colorAttachments:[{view:O,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});y.setPipeline(this.compPipe),y.setBindGroup(0,M),y.setVertexBuffer(0,this.fsQuad),y.draw(6),y.end(),o.submit([b.finish()])}destroy(){this.destroyTargets();for(const e of[this.boxBuf,this.crystalBuf,this.streakRibbonBuf,this.quadBuf,this.plateBuf,this.fsQuad,this.clusterBuf,this.streakBuf,this.spriteBuf,this.extractU,...this.bloomBlurUniforms.flatMap(n=>[n.horizontal,n.vertical]),this.compU,this.motionU,this.feedbackU,...this.camBufs])e.destroy()}fullscreen(e,n,i,r){const o=e.beginRenderPass({colorAttachments:[{view:r,loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:1}}]});o.setPipeline(n),o.setBindGroup(0,i),o.setVertexBuffer(0,this.fsQuad),o.draw(6),o.end()}writeBloomExtractUniforms(e){this.bloomPack[0]=this.bloomW,this.bloomPack[1]=this.bloomH,this.bloomPack[2]=this.width>0?1/this.width:0,this.bloomPack[3]=this.height>0?1/this.height:0,this.bloomPack[4]=e.bloomThreshold,this.bloomPack[5]=e.bloomGain,this.bloomPack[6]=e.bloomKnee,this.bloomPack[7]=e.bloomKaris,this.device.queue.writeBuffer(this.extractU,0,this.bloomPack)}writeBlurUniforms(e){const n=ft("webgpu"),i=(o,s,a)=>{this.blurPack[0]=this.bloomW,this.blurPack[1]=this.bloomH,this.blurPack[2]=s,this.blurPack[3]=a,this.blurPack[4]=e.bloomSigma,this.blurPack[5]=e.bloomTapRadius,this.blurPack[6]=e.dofAperture,this.blurPack[7]=e.dofFocus,this.blurPack[8]=ht,this.blurPack[9]=dt,this.blurPack[10]=n.clipZScale,this.blurPack[11]=n.clipZBias,this.blurPack[12]=0,this.blurPack[13]=0,this.blurPack[14]=0,this.blurPack[15]=0,this.device.queue.writeBuffer(o,0,this.blurPack)},r=e.bloomTapStep;for(const o of this.bloomBlurUniforms)i(o.horizontal,this.bloomW>0?r/this.bloomW:0,0),i(o.vertical,0,this.bloomH>0?r/this.bloomH:0)}writeCam(e,n,i,r){const o=this.camPack;o.set(n.viewProj,0),o[16]=n.eye[0],o[17]=n.eye[1],o[18]=n.eye[2],o[19]=i,o[20]=n.accent,o[21]=r,o[22]=n.specular,o[23]=n.specularSharpness,o[24]=n.right[0],o[25]=n.right[1],o[26]=n.right[2],o[27]=n.laserSideAngular,o[28]=n.up[0],o[29]=n.up[1],o[30]=n.up[2],o[31]=n.laserDownAngular,o[32]=n.shotLight,o[33]=n.shotBody,o[34]=n.bloomThreshold,o[35]=n.laserReach,o[36]=n.ringGlowSpread,o[37]=n.ringGlowLength,o[38]=n.ringGlowStrength,o[39]=n.ringSideLift,o[40]=n.lightX,o[41]=n.lightY,o[42]=n.lightZ,o[43]=0,o[44]=n.ringLiftCap,o[45]=n.ringHoopNear,o[46]=n.ringHoopFar,o[47]=0,o[48]=n.lightAmbient,o[49]=n.lightDiffuse,o[50]=n.shadingMode==="blinnPhong"?1:0,o[51]=n.lightViewAlign,o[52]=n.tunnelEdgeHard,o[53]=n.tunnelEdgeSoft,o[54]=n.tunnelEdgeSpan,o[55]=n.tunnelCover,o[56]=n.ringAxial,o[57]=n.ringSideWiden,o[58]=n.ringWashBreak,o[59]=n.ringWashFrequency,o[60]=n.ringBandNear,o[61]=n.ringBandFar,o[62]=n.ringSideGain,o[63]=n.ringWashPull,o[64]=n.ringWashEngage,o[65]=n.ringGlowCap,o[66]=n.ringEdgePull,o[67]=n.ringEdgeBody,o[68]=n.ringEdgeFacing,o[69]=n.ringEdgeCap,o[70]=n.ringEdgeLength,o[71]=n.ringCapSide,o[72]=n.ringEdgeGain,o[73]=n.ringEdgeSpread,o[74]=0,o[75]=n.ringSideSpread,o[88]=n.ringHornSpread,o[89]=n.ringHornLength,o[90]=n.ringHornBreak,o[91]=n.ringHornPull,o[92]=n.ringHornSoft,o[93]=n.ringHornGain,o[94]=n.ringFaceStart,o[95]=n.ringFaceEnd,o[96]=n.ringHornFrequency,o[76]=0,o[77]=0,o[78]=0,o[79]=0,o[80]=n.shardStreakOut,o[81]=n.shardStreakMelt,o[82]=n.shardStreakTip,o[83]=n.shardStreakPinch,o[84]=n.shardStreakSoft,o[85]=n.shardStreakFade,this.device.queue.writeBuffer(e,0,o)}ensureTargets(e,n,i){var c;if(this.sceneTex&&this.width===e&&this.height===n&&this.depthIsSampleable===i)return;this.destroyTargets(),this.width=e,this.height=n,this.depthIsSampleable=i,this.bloomW=Math.max(1,e>>2),this.bloomH=Math.max(1,n>>2),this.sceneTex=this.colorTex(e,n),this.depthTex=this.device.createTexture({size:[e,n],format:"depth24plus",usage:i?GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING:GPUTextureUsage.RENDER_ATTACHMENT}),this.bloomA=this.colorTex(this.bloomW,this.bloomH),this.bloomB=this.colorTex(this.bloomW,this.bloomH),this.blurTex=i?this.colorTex(e,n):null;const r=this.sceneTex.createView(),o=this.depthTex.createView(),s=((c=this.blurTex)==null?void 0:c.createView())??null;this.sceneView=r,this.depthView=o,this.blurView=s;const a=this.bloomA.createView(),l=this.bloomB.createView();this.bloomAView=a,this.bloomBView=l,this.bloomBlurBinds=Array.from({length:Ge},(f,p)=>{const m=this.bloomBlurUniforms[p];return{horizontal:this.texBind(this.blurPipe,a,m.horizontal),vertical:this.texBind(this.blurPipe,l,m.vertical)}}),this.dofBlurBinds=i?Array.from({length:Ge},(f,p)=>{const m=this.bloomBlurUniforms[p];return{horizontal:this.dofTexBind(a,o,m.horizontal),vertical:this.dofTexBind(l,o,m.vertical)}}):null,this.writeBloomExtractUniforms({bloomThreshold:d.bloomThreshold,bloomGain:At(d.bloom),bloomKnee:d.bloomKnee,bloomKaris:d.bloomKaris}),this.extractBind=this.texBind(this.extractPipe,this.sceneView,this.extractU);const u=f=>[{binding:0,resource:this.sampler},{binding:1,resource:f},{binding:2,resource:a},{binding:3,resource:{buffer:this.compU}}];this.compBind=this.device.createBindGroup({layout:this.compPipe.getBindGroupLayout(0),entries:u(this.sceneView)}),i&&s&&(this.compBindBlur=this.device.createBindGroup({layout:this.compPipe.getBindGroupLayout(0),entries:u(s)}),this.motionBind=this.device.createBindGroup({layout:this.motionPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.sampler},{binding:1,resource:r},{binding:2,resource:o},{binding:3,resource:{buffer:this.motionU}}]}))}prepareMotionBlur(e,n){const i=Ri(n),r=this.motionHistory.prepare({enabled:!!this.motionBind&&!!this.blurView&&!!this.compBindBlur,resetOnCut:i.motionBlurResetOnCut,strength:i.motionBlurStrength,samples:i.motionBlurSamples,maxPixels:i.motionBlurMaxPixels,velocityScale:i.motionBlurVelocityScale,objectScale:i.motionBlurObjectScale,cameraCut:n.cameraCut,clusterSpin:n.clusterSpin,viewProj:e.viewProj});return r.apply?(xa(this.motionPack,{invViewProj:this.motionHistory.invViewProj,prevViewProj:this.motionHistory.prevViewProj,strength:i.motionBlurStrength,samples:i.motionBlurSamples,maxPixels:i.motionBlurMaxPixels,velocityScale:i.motionBlurVelocityScale,depthScale:i.motionBlurDepthScale,objectScale:i.motionBlurObjectScale,objectRadians:r.objectRadians,depthFar:i.motionBlurDepthFar,clip:ft("webgpu"),width:this.width,height:this.height,depthNear:i.motionBlurDepthNear,eyeX:e.eye[0],eyeY:e.eye[1],eyeZ:e.eye[2],jitter:i.motionBlurJitter,tapSpacing:i.motionBlurTapSpacing}),this.device.queue.writeBuffer(this.motionU,0,this.motionPack),this.motionHistory.commit(n.cameraCut,n.clusterSpin,e.viewProj),!0):(this.motionHistory.commit(n.cameraCut,n.clusterSpin,e.viewProj),!1)}dofTexBind(e,n,i){return this.device.createBindGroup({layout:this.dofBlurPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.sampler},{binding:1,resource:e},{binding:2,resource:{buffer:i}},{binding:3,resource:n}]})}texBind(e,n,i){return this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:[{binding:0,resource:this.sampler},{binding:1,resource:n},{binding:2,resource:{buffer:i}}]})}colorTex(e,n){return this.device.createTexture({size:[e,n],format:this.sceneFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}staticBuf(e){const n=this.device.createBuffer({size:e.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(n,0,e),n}ensureSpriteBuf(e){e<=this.spriteBytes||(this.spriteBuf.destroy(),this.spriteBuf=this.dynamicBuf(e),this.spriteBytes=e)}dynamicBuf(e){return this.device.createBuffer({size:e,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}uniformBuf(e){return this.device.createBuffer({size:e,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}runFeedback(e,n,i,r){const o=Zt(r.motionBlurFeedbackWeight),s=this.feedbackHistory.step(o,r.motionBlurResetOnCut,r.cameraCut);if(s==="off"||!this.sceneTex||!this.sceneView||!this.bloomAView)return null;this.ensureFeedback(n,i);const a=this.feedbackHistoryTex,l=this.feedbackColorTex;return!a||!l||!this.feedbackBind||!this.feedbackColorView||!this.compBindFeedback?null:s==="reset"?(e.copyTextureToTexture({texture:this.sceneTex},{texture:a},{width:n,height:i}),null):(this.feedbackPack[0]=o,this.device.queue.writeBuffer(this.feedbackU,0,this.feedbackPack),this.fullscreen(e,this.feedbackPipe,this.feedbackBind,this.feedbackColorView),e.copyTextureToTexture({texture:l},{texture:a},{width:n,height:i}),this.compBindFeedback)}ensureFeedback(e,n){var u,c;if(this.feedbackHistoryTex&&this.feedbackW===e&&this.feedbackH===n&&this.feedbackBind)return;(u=this.feedbackHistoryTex)==null||u.destroy(),(c=this.feedbackColorTex)==null||c.destroy();const i=this.colorTex(e,n),r=this.colorTex(e,n),o=i.createView(),s=r.createView(),a=this.sceneView,l=this.bloomAView;this.feedbackHistoryTex=i,this.feedbackColorTex=r,this.feedbackColorView=s,this.feedbackW=e,this.feedbackH=n,!(!a||!l)&&(this.feedbackBind=this.device.createBindGroup({layout:this.feedbackPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.sampler},{binding:1,resource:a},{binding:2,resource:o},{binding:3,resource:{buffer:this.feedbackU}}]}),this.compBindFeedback=this.device.createBindGroup({layout:this.compPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.sampler},{binding:1,resource:s},{binding:2,resource:l},{binding:3,resource:{buffer:this.compU}}]}))}destroyTargets(){var e,n,i,r,o,s,a;(e=this.sceneTex)==null||e.destroy(),(n=this.depthTex)==null||n.destroy(),(i=this.bloomA)==null||i.destroy(),(r=this.bloomB)==null||r.destroy(),(o=this.blurTex)==null||o.destroy(),this.sceneTex=null,this.depthTex=null,this.bloomA=null,this.bloomB=null,this.blurTex=null,this.sceneView=null,this.depthView=null,this.bloomAView=null,this.bloomBView=null,this.blurView=null,this.extractBind=null,this.bloomBlurBinds=[],this.dofBlurBinds=null,this.motionBind=null,this.compBind=null,this.compBindBlur=null,(s=this.feedbackHistoryTex)==null||s.destroy(),(a=this.feedbackColorTex)==null||a.destroy(),this.feedbackHistoryTex=null,this.feedbackColorTex=null,this.feedbackColorView=null,this.feedbackBind=null,this.compBindFeedback=null,this.feedbackW=0,this.feedbackH=0,this.feedbackHistory.reset()}}const Dl=`
struct Uniforms {
  resolution: vec2f,
  time: f32,
  pulse: f32,
  bpm: f32,
  rings: f32,
  grid: f32,
  hue: f32,
  flash: f32,
  _pad0: f32,
  _pad1: f32,
  _pad2: f32,
}
@group(0) @binding(0) var<uniform> u: Uniforms;

@vertex
fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f( 3.0, -1.0),
    vec2f(-1.0,  3.0),
  );
  return vec4f(pos[i], 0.0, 1.0);
}

fn shade(uv: vec2f) -> vec3f {
  let r = length(uv);
  let ang = atan2(uv.y, uv.x);
  let spin = u.time * 0.22;
  let ringFreq = mix(8.0, 24.0, clamp(u.rings, 0.0, 1.0));
  let wave = 0.5 + 0.5 * sin(r * ringFreq - u.time * (u.bpm / 60.0) * 6.2831853 - u.pulse * 4.0);
  let spoke = abs(fract((ang / 6.2831853) * 8.0 + spin * 0.15) - 0.5);
  let ringLine = abs(fract(r * (3.0 + u.grid * 8.0) - u.pulse * 0.45) - 0.5);
  let gridLine = smoothstep(0.07 + (1.0 - u.grid) * 0.05, 0.0, min(spoke * 1.35, ringLine));
  let glow = exp(-r * (2.05 - u.pulse * 0.9));
  let flash = u.flash * exp(-r * 3.1);
  let h = 0.5 + 0.5 * sin(u.hue + ang);
  let a = vec3f(0.95, 0.12, 0.42);
  let b = vec3f(0.05, 0.78, 0.95);
  let c = vec3f(0.55, 0.22, 1.0);
  var base = mix(mix(a, b, h), c, 0.22 + 0.22 * sin(u.hue * 0.7 + r * 2.0));
  var col = base * (0.16 + 0.84 * wave) * (0.28 + 0.72 * glow);
  col += vec3f(0.65, 0.92, 1.0) * gridLine * (0.12 + 0.88 * u.grid);
  col += vec3f(1.0, 0.9, 0.97) * flash;
  col *= smoothstep(1.2, 0.15, r);
  return col;
}

@fragment
fn fs(@builtin(position) frag: vec4f) -> @location(0) vec4f {
  let uv = (frag.xy - 0.5 * u.resolution) / min(u.resolution.x, u.resolution.y);
  return vec4f(shade(uv), 1.0);
}
`,Ul=`#version 300 es
void main() {
  vec2 pos = vec2(
    float((gl_VertexID << 1) & 2) * 2.0 - 1.0,
    float(gl_VertexID & 2) * 2.0 - 1.0
  );
  gl_Position = vec4(pos, 0.0, 1.0);
}
`,Ol=`
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,or=`
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_pulse;
uniform float u_bpm;
uniform float u_rings;
uniform float u_grid;
uniform float u_hue;
uniform float u_flash;

vec3 shade(vec2 uv) {
  float r = length(uv);
  float ang = atan(uv.y, uv.x);
  float spin = u_time * 0.22;
  float ringFreq = mix(8.0, 24.0, clamp(u_rings, 0.0, 1.0));
  float wave = 0.5 + 0.5 * sin(r * ringFreq - u_time * (u_bpm / 60.0) * 6.2831853 - u_pulse * 4.0);
  float spoke = abs(fract((ang / 6.2831853) * 8.0 + spin * 0.15) - 0.5);
  float ringLine = abs(fract(r * (3.0 + u_grid * 8.0) - u_pulse * 0.45) - 0.5);
  float gridLine = smoothstep(0.07 + (1.0 - u_grid) * 0.05, 0.0, min(spoke * 1.35, ringLine));
  float glow = exp(-r * (2.05 - u_pulse * 0.9));
  float flash = u_flash * exp(-r * 3.1);
  float h = 0.5 + 0.5 * sin(u_hue + ang);
  vec3 a = vec3(0.95, 0.12, 0.42);
  vec3 b = vec3(0.05, 0.78, 0.95);
  vec3 c = vec3(0.55, 0.22, 1.0);
  vec3 base = mix(mix(a, b, h), c, 0.22 + 0.22 * sin(u_hue * 0.7 + r * 2.0));
  vec3 col = base * (0.16 + 0.84 * wave) * (0.28 + 0.72 * glow);
  col += vec3(0.65, 0.92, 1.0) * gridLine * (0.12 + 0.88 * u_grid);
  col += vec3(1.0, 0.9, 0.97) * flash;
  col *= smoothstep(1.2, 0.15, r);
  return col;
}
`,Gl=`
${or}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
  gl_FragColor = vec4(shade(uv), 1.0);
}
`,Hl=`#version 300 es
${or}
out vec4 outColor;
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
  outColor = vec4(shade(uv), 1.0);
}
`;function Il(t,e,n){const i=new ArrayBuffer(48);return new Float32Array(i).set([t,e,n.time,n.pulse,n.bpm,n.rings,n.grid,n.hue,n.flash,0,0,0]),i}function Gn(t,e,n){const i=t.createShader(e);return i?(t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.warn(t.getShaderInfoLog(i)),t.deleteShader(i),null)):null}function Hn(t,e,n){const i=Gn(t,t.VERTEX_SHADER,e),r=Gn(t,t.FRAGMENT_SHADER,n);if(!i||!r)return null;const o=t.createProgram();return o?(t.attachShader(o,i),t.attachShader(o,r),t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)?o:(console.warn(t.getProgramInfoLog(o)),null)):null}function In(t,e){return{res:t.getUniformLocation(e,"u_resolution"),time:t.getUniformLocation(e,"u_time"),pulse:t.getUniformLocation(e,"u_pulse"),bpm:t.getUniformLocation(e,"u_bpm"),rings:t.getUniformLocation(e,"u_rings"),grid:t.getUniformLocation(e,"u_grid"),hue:t.getUniformLocation(e,"u_hue"),flash:t.getUniformLocation(e,"u_flash")}}async function zl(t){const e=navigator.gpu;if(!e)return null;try{const n=await e.requestAdapter();if(!n)return null;const i=await n.requestDevice();W(1,"WebGPU device");const r=t.getContext("webgpu");if(!r)return null;const o=e.getPreferredCanvasFormat();r.configure({device:i,format:o,alphaMode:"opaque"});const s=i.createShaderModule({code:Dl}),l=(await s.getCompilationInfo()).messages.filter(b=>b.type==="error");if(l.length){for(const b of l)console.warn(`WebGPU pulse shader: ${b.message} (L${b.lineNum}:${b.linePos})`);return i.destroy(),null}W(1,"shader pulse");const u=i.createRenderPipeline({layout:"auto",vertex:{module:s,entryPoint:"vs"},fragment:{module:s,entryPoint:"fs",targets:[{format:o}]}});i.lost.then(b=>{console.error(`WebGPU device lost: ${b.message}`)}),i.addEventListener("uncapturederror",b=>{console.error(`WebGPU: ${b.error.message}`)});const c=await nn.create(i,r,o);if(!c)return i.destroy(),null;const f=i.createBuffer({size:48,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),p=i.createBindGroup({layout:u.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:f}}]});let m=t.width,S=t.height;return{backend:"WebGPU",resize(b,g,x){m=Math.max(1,Math.floor(b*x)),S=Math.max(1,Math.floor(g*x)),t.width=m,t.height=S},draw(b){i.queue.writeBuffer(f,0,Il(m,S,b));const g=i.createCommandEncoder(),x=g.beginRenderPass({colorAttachments:[{view:r.getCurrentTexture().createView(),clearValue:{r:.015,g:.018,b:.028,a:1},loadOp:"clear",storeOp:"store"}]});x.setPipeline(u),x.setBindGroup(0,p),x.draw(3),x.end(),i.queue.submit([g.finish()])},drawDeepness(b){c.draw(b,m,S)},finish(){return i.queue.onSubmittedWorkDone()},destroy(){c.destroy(),f.destroy(),i.destroy()}}}catch(n){return console.warn("WebGPU init failed",n),null}}function zn(t){return{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t}}function Wn(){if(typeof location>"u")return!1;const t=Number(new URLSearchParams(location.search).get("capture"));return Number.isFinite(t)&&t>0}function Wl(t){const e=t.getContext("webgl2",zn(Wn()));if(e){const u=Hn(e,Ul,Hl),c=u?mt.create(e):null;if(!u||!c)return u&&e.deleteProgram(u),null;const f=In(e,u),p=e.createVertexArray();return e.bindVertexArray(p),{backend:"WebGL2",resize(m,S,b){const g=Math.max(1,Math.floor(m*b)),x=Math.max(1,Math.floor(S*b));t.width=g,t.height=x,e.viewport(0,0,g,x)},draw(m){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,t.width,t.height),e.useProgram(u),e.uniform2f(f.res,t.width,t.height),e.uniform1f(f.time,m.time),e.uniform1f(f.pulse,m.pulse),e.uniform1f(f.bpm,m.bpm),e.uniform1f(f.rings,m.rings),e.uniform1f(f.grid,m.grid),e.uniform1f(f.hue,m.hue),e.uniform1f(f.flash,m.flash),e.bindVertexArray(p),e.drawArrays(e.TRIANGLES,0,3)},drawDeepness(m){e.bindVertexArray(null),c.draw(m,t.width,t.height),e.bindVertexArray(p)},finish(){return e.finish(),Promise.resolve()},destroy(){c.destroy(),e.deleteProgram(u),e.deleteVertexArray(p)}}}const n=t.getContext("webgl",zn(Wn()));if(!n)return null;const i=Hn(n,Ol,Gl),r=i?mt.create(n):null;if(!i||!r)return i&&n.deleteProgram(i),null;const o=In(n,i),s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);const a=n.getAttribLocation(i,"a_pos"),l=u=>{n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(u),n.vertexAttribPointer(u,2,n.FLOAT,!1,0,0)};return{backend:"WebGL1",resize(u,c,f){const p=Math.max(1,Math.floor(u*f)),m=Math.max(1,Math.floor(c*f));t.width=p,t.height=m,n.viewport(0,0,p,m)},draw(u){n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,t.width,t.height),n.useProgram(i),l(a),n.uniform2f(o.res,t.width,t.height),n.uniform1f(o.time,u.time),n.uniform1f(o.pulse,u.pulse),n.uniform1f(o.bpm,u.bpm),n.uniform1f(o.rings,u.rings),n.uniform1f(o.grid,u.grid),n.uniform1f(o.hue,u.hue),n.uniform1f(o.flash,u.flash),n.drawArrays(n.TRIANGLES,0,3)},drawDeepness(u){r.draw(u,t.width,t.height)},finish(){return n.finish(),Promise.resolve()},destroy(){r.destroy(),n.deleteProgram(i),n.deleteBuffer(s)}}}async function Vl(t){const e=await zl(t);if(e)return e;const n=Wl(t);if(n)return n;throw new Error("No WebGPU or WebGL available")}class $l{constructor(e=Be){h(this,"id","deepness-bar-clock");h(this,"beatCount",0);h(this,"barIndex",0);h(this,"phraseSmall",0);h(this,"phraseBig",0);h(this,"lastSmallBar",-1);h(this,"lastBigBar",-1);this.rates=e}update(e,n){if(!n.beat)return;this.beatCount+=1;const i=Math.max(1,Math.floor(this.rates.beatsPerBar));this.barIndex=Math.floor(this.beatCount/i);const r=Math.max(1,Math.floor(this.rates.smallPhraseBars)),o=Math.max(1,Math.floor(this.rates.bigPhraseBars));this.barIndex>0&&this.barIndex%r===0&&this.barIndex!==this.lastSmallBar&&(this.lastSmallBar=this.barIndex,this.phraseSmall+=1),this.barIndex>0&&this.barIndex%o===0&&this.barIndex!==this.lastBigBar&&(this.lastBigBar=this.barIndex,this.phraseBig+=1)}render(e,n){e.barIndex=this.barIndex,e.phraseSmall=this.phraseSmall,e.phraseBig=this.phraseBig}getPhraseSmall(){return this.phraseSmall}getPhraseBig(){return this.phraseBig}getBarIndex(){return this.barIndex}getBeatInBar(){const e=Math.max(1,Math.floor(this.rates.beatsPerBar));return this.beatCount<=0?0:(this.beatCount-1)%e}}function ql(t){const e=ct(),n=e.outerRadius-e.innerRadius,i=$n(t.cameraJumpDistanceInner),r=$n(t.cameraJumpDistanceOuter),o=Math.min(i,r),s=Math.max(i,r);return{innerRadius:e.innerRadius+n*o,outerRadius:e.innerRadius+n*s}}class Xl{shellFraction(e){const n=e.shell.innerRadius,r=e.shell.outerRadius-n;if(r<=1e-6)return 0;const o=We(e.beatSerial*5.17+8.1),s=We(e.beatSerial*19.17+2.6),a=We(e.beatSerial*8.91+.37),l=.35+.65*s;let u=Ie+a*(lt-Ie);return o<dn?u=Ie-ri*l:o<dn+Gr&&(u=lt+Or*l),Math.min(1,Math.max(0,(u-n)/r))}}class jl{directionFromOrigin(e){const n=We(e.beatSerial*12.9898+.31)*2-1,i=We(e.beatSerial*78.233+4.2)*Math.PI*2,r=Math.sqrt(Math.max(0,1-n*n));return[r*Math.cos(i),n,r*Math.sin(i)]}}function sr(){return{jumpDistance:new Xl,poseDirection:new jl}}function Vn(t,e){const n=e.poseDirection.directionFromOrigin(t),i=Math.hypot(n[0],n[1],n[2]),r=i<1e-8?[0,0,1]:[n[0]/i,n[1]/i,n[2]/i],o=Hr(t.shell,e.jumpDistance.shellFraction(t));return[r[0]*o,r[1]*o,r[2]*o]}function $n(t){return!Number.isFinite(t)||t<0?0:t>1?1:t}function We(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}class Yl{constructor(e=Be,n,i=sr(),r=d){h(this,"id","deepness-camera");h(this,"tunnelHeading",.4);h(this,"roll",.6);h(this,"rollSign",1);h(this,"rollBurst",0);h(this,"cutEye",[0,0,ct().innerRadius]);h(this,"eye",[0,0,ct().innerRadius]);h(this,"secondsSinceCut",0);h(this,"beatSerial",0);this.rates=e,this.barClock=n,this.placement=i,this.look=r,this.cutEye=Vn(this.buildEyeJumpContext(),this.placement),this.eye=[this.cutEye[0],this.cutEye[1],this.cutEye[2]]}update(e,n){var o,s;this.tunnelHeading+=e*this.rates.cameraSpinRate;const i=this.look.cameraRollWobble+Math.abs(Math.sin(n.time*this.look.cameraRollWobbleRate))*this.look.cameraRollWobbleGain+Math.abs(Math.sin(n.time*this.look.cameraRollWobbleRateB))*this.look.cameraRollWobbleGainB;if(n.beat){this.beatSerial+=1,this.rollSign=Ht(this.beatSerial*3.7+1.9)<.5?-1:1;const a=this.look.cameraRollSnap+Ht(this.beatSerial*9.4+.4)*this.look.cameraRollSnapSpan;this.roll+=a*this.rollSign,this.rollBurst=this.look.cameraRollBurst,this.cutEye=Vn(this.buildEyeJumpContext(),this.placement),this.secondsSinceCut=0;const l=((o=this.barClock)==null?void 0:o.getBarIndex())??0,u=((s=this.barClock)==null?void 0:s.getBeatInBar())??0,c=Xs(this.cutEye,this.tunnelHeading,this.look.ringFaceStart,this.look.ringEdgeFacing);W(1,u===0?`bar ${l}: cut to shot ${this.beatSerial} (${c})`:`bar ${l} beat ${u}: cut to shot ${this.beatSerial} (${c})`);const f=Math.max(1,Math.floor(this.rates.beatsPerBar))-1;u===f&&W(1,`next bar: cut to shot ${this.beatSerial+1}`)}else this.secondsSinceCut+=e;this.eye=Zl(this.cutEye,this.secondsSinceCut,this.beatSerial,Jl(n.bpm),this.look);const r=(this.rates.cameraRollRate*i+this.rollBurst)*this.rollSign;this.roll+=e*r,this.rollBurst=Math.max(0,this.rollBurst-e*this.look.cameraRollBurstDecay)}render(e,n){const i=Vt(this.eye,Wt(this.look));this.eye=i,e.cameraSpin=this.tunnelHeading,e.cameraRoll=this.roll,e.cameraEyeX=i[0],e.cameraEyeY=i[1],e.cameraEyeZ=i[2],e.cameraDistance=Math.hypot(i[0],i[1],i[2]),e.cameraCut=this.beatSerial}buildEyeJumpContext(){var e,n,i;return{beatSerial:this.beatSerial,barIndex:((e=this.barClock)==null?void 0:e.getBarIndex())??0,phraseSmall:((n=this.barClock)==null?void 0:n.getPhraseSmall())??0,phraseBig:((i=this.barClock)==null?void 0:i.getPhraseBig())??0,previousEye:this.cutEye,shell:ql(this.rates)}}}function Ht(t){const e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Zl(t,e,n,i=.5,r=d){const o=Kl(e,i);if(o<=0)return[t[0],t[1],t[2]];const s=ec(t,Ql(t,n,r),r.cameraDriftOrbit*o),a=1-r.cameraDriftInward*o,l=[s[0]*a,s[1]*a,s[2]*a];return Vt(l,Wt(r))}function Kl(t,e){if(!(t>0)||!(e>0))return 0;const n=t/e;return n<1?n:1}function Jl(t){return!Number.isFinite(t)||t<=0?.5:60/t}function Ql(t,e,n=d){const i=Ht(e*2.17+.6)*Math.PI*2,r=[Math.cos(i),n.cameraOrbitLift,Math.sin(i)];let o=D(t,r);return H(o)<1e-6&&(o=D(t,[0,1,0])),H(o)<1e-6&&(o=D(t,[1,0,0])),k(o)}function ec(t,e,n){const i=Math.cos(n),r=Math.sin(n),o=q(e,C(t,e)),s=[t[0]-o[0],t[1]-o[1],t[2]-o[2]],a=D(e,t);return[o[0]+s[0]*i+a[0]*r,o[1]+s[1]*i+a[1]*r,o[2]+s[2]*i+a[2]*r]}class tc{constructor(e=Be,n){h(this,"id","deepness-cluster-orbit");h(this,"spin",0);h(this,"plateTumble",0);this.rates=e,this.look=n}update(e,n){var o;const i=(o=this.look)==null?void 0:o.clusterSpinRate,r=i!==void 0&&Number.isFinite(i)?i:this.rates.clusterSpinRate;this.spin+=e*r,this.plateTumble+=e*this.rates.plateTumbleRate}render(e,n){e.clusterSpin=this.spin,e.clusterOrbit=0,e.plateTumble=this.plateTumble}}class nc{constructor(e=d){h(this,"id","deepness-look");this.look=e}update(e,n){}render(e,n){e.bloom=this.look.bloom<=0?0:Math.min(1,this.look.bloom+n.pulse*this.look.bloomPulse),e.bloomStrength=this.look.bloomStrength,e.bloomSigma=this.look.bloomSigma,e.bloomTapRadius=this.look.bloomTapRadius,e.bloomTapStep=this.look.bloomTapStep,e.bloomKnee=this.look.bloomKnee,e.bloomKaris=this.look.bloomKaris,e.lightX=this.look.lightX,e.lightY=this.look.lightY,e.lightZ=this.look.lightZ,e.lightAmbient=this.look.lightAmbient,e.lightDiffuse=this.look.lightDiffuse;const i=this.look.lightViewAlign;e.lightViewAlign=Math.min(1,Math.max(0,Number.isFinite(i)?i:0)),e.shadingMode=this.look.shadingMode==="blinnPhong"?"blinnPhong":"flat",e.bloomThreshold=this.look.bloomThreshold,e.exposure=this.look.exposure,e.specular=this.look.specular,e.specularSharpness=this.look.specularSharpness,e.accentBlue=this.look.accentBlue,e.metal=this.look.metal,e.clusterCohortCount=this.look.clusterCohortCount,e.clusterNormalJitter=this.look.clusterNormalJitter,e.shardSpinSpeed=this.look.shardSpinSpeed,e.clusterSpinRate=this.look.clusterSpinRate,e.clusterSpinFalloff=this.look.clusterSpinFalloff,e.clusterSpinTwist=this.look.clusterSpinTwist==="abs"?"abs":"signed";const r=this.look.clusterAlignToTunnel;e.clusterAlignToTunnel=Math.min(1,Math.max(0,Number.isFinite(r)?r:0));const o=Rt(this.look.supershapePresetIndex);e.clusterPieceCount=this.look.supershapeThetaSteps*this.look.supershapePhiSteps,e.supershapePresetIndex=this.look.supershapePresetIndex,e.supershapeM=o.m,e.supershapeN1=o.n1,e.supershapeN2=o.n2,e.supershapeN3=o.n3,e.supershapeA=o.a,e.supershapeB=o.b,e.supershapeM2=o.m2,e.supershapeN12=o.n12,e.supershapeN22=o.n22,e.supershapeN32=o.n32,e.supershapeA2=o.a2,e.supershapeB2=o.b2,e.supershapeOutline=o.outline,e.supershapeScale=o.scale,e.supershapeTiltX=o.tiltX,e.supershapeTiltY=o.tiltY,e.supershapeTiltZ=o.tiltZ,e.supershapeThetaSteps=this.look.supershapeThetaSteps,e.supershapePhiSteps=this.look.supershapePhiSteps,e.supershapeArcBlend=o.arcBlend,e.supershapeFill=this.look.supershapeFill,e.supershapeFillCap=this.look.supershapeFillCap,e.supershapeMaxShard=this.look.supershapeMaxShard,e.supershapeMinShard=this.look.supershapeMinShard,e.supershapeThickness=this.look.supershapeThickness,e.supershapeFace=this.look.supershapeFace,e.supershapeBoundPercentile=this.look.supershapeBoundPercentile,e.supershapeClusterScale=this.look.supershapeClusterScale,e.supershapeStretchMin=this.look.supershapeStretchMin,e.supershapeStretch=this.look.supershapeStretch,e.supershapeStretchHigh=this.look.supershapeStretchHigh,e.supershapeStretchMax=this.look.supershapeStretchMax,e.supershapeStretchAngle=this.look.supershapeStretchAngle,e.supershapeShotShrink=this.look.supershapeShotShrink,e.supershapeShotGlow=this.look.supershapeShotGlow,e.supershapeShotFloor=this.look.supershapeShotFloor,e.supershapeShotBody=this.look.supershapeShotBody,e.supershapeShotKnee=this.look.supershapeShotKnee,e.supershapeShotCap=this.look.supershapeShotCap,e.tunnelPlateColumns=this.look.tunnelPlateColumns,e.tunnelPlateRows=this.look.tunnelPlateRows,e.tunnelPlateSizeJitter=this.look.tunnelPlateSizeJitter,e.tunnelInnerGray=this.look.tunnelInnerGray,e.tunnelOuterGray=this.look.tunnelOuterGray,e.tunnelSquareSize=this.look.tunnelSquareSize,e.tunnelScreenCap=this.look.tunnelScreenCap,e.tunnelSoft0=this.look.tunnelSoft0,e.tunnelSoft1=this.look.tunnelSoft1,e.tunnelSoft2=this.look.tunnelSoft2,e.tunnelSoft3=this.look.tunnelSoft3,e.tunnelSoft4=this.look.tunnelSoft4,e.tunnelEdgeHard=this.look.tunnelEdgeHard,e.tunnelEdgeSoft=this.look.tunnelEdgeSoft,e.tunnelEdgeSpan=this.look.tunnelEdgeSpan,e.tunnelCover=this.look.tunnelCover,e.ringGlowSpread=this.look.ringGlowSpread,e.ringSideSpread=this.look.ringSideSpread,e.ringGlowLength=this.look.ringGlowLength,e.ringGlowStrength=this.look.ringGlowStrength;const s=this.look.ringGlowCap;e.ringGlowCap=Number.isFinite(s)?s:d.ringGlowCap;const a=this.look.ringCapSide;e.ringCapSide=Number.isFinite(a)?a:d.ringCapSide;const l=this.look.ringEdgeFacing;e.ringEdgeFacing=Number.isFinite(l)?l:d.ringEdgeFacing;const u=this.look.ringEdgeCap;e.ringEdgeCap=Number.isFinite(u)?u:d.ringEdgeCap;const c=this.look.ringEdgeLength;e.ringEdgeLength=Number.isFinite(c)?c:d.ringEdgeLength;const f=this.look.ringEdgePull;e.ringEdgePull=Number.isFinite(f)?f:d.ringEdgePull;const p=this.look.ringEdgeBody;e.ringEdgeBody=Number.isFinite(p)?p:d.ringEdgeBody;const m=this.look.ringEdgeGain;e.ringEdgeGain=Number.isFinite(m)?m:d.ringEdgeGain;const S=this.look.ringEdgeFront;e.ringEdgeFront=Number.isFinite(S)?S:d.ringEdgeFront;const b=this.look.ringEdgeSpread;e.ringEdgeSpread=Number.isFinite(b)?b:d.ringEdgeSpread,e.ringSideLift=this.look.ringSideLift,e.ringLiftCap=this.look.ringLiftCap,e.ringHoopNear=this.look.ringHoopNear,e.ringHoopFar=this.look.ringHoopFar;const g=this.look.ringAxial,x=this.look.ringSideWiden,B=this.look.ringWashBreak,_=this.look.ringWashFrequency,T=this.look.ringBandNear,E=this.look.ringBandFar,P=this.look.ringSideGain,F=this.look.ringWashPull,M=this.look.ringWashEngage;e.ringAxial=Number.isFinite(g)?g:d.ringAxial,e.ringSideWiden=Number.isFinite(x)?x:d.ringSideWiden,e.ringWashBreak=Number.isFinite(B)?B:d.ringWashBreak,e.ringWashFrequency=Number.isFinite(_)?_:d.ringWashFrequency,e.ringBandNear=Number.isFinite(T)?T:d.ringBandNear,e.ringBandFar=Number.isFinite(E)?E:d.ringBandFar,e.ringSideGain=Number.isFinite(P)?P:d.ringSideGain,e.ringWashPull=Number.isFinite(F)?F:d.ringWashPull,e.ringWashEngage=Number.isFinite(M)?M:d.ringWashEngage;const O=this.look.ringFaceStart,y=this.look.ringFaceEnd;e.ringFaceStart=Number.isFinite(O)?O:d.ringFaceStart,e.ringFaceEnd=Number.isFinite(y)?y:d.ringFaceEnd;const w=this.look.ringFaceArc,v=this.look.ringFaceScale;e.ringFaceArc=Number.isFinite(w)?w:d.ringFaceArc,e.ringFaceScale=Number.isFinite(v)?v:d.ringFaceScale;const L=this.look.ringHornSpread,R=this.look.ringHornLength,G=this.look.ringHornBreak,$=this.look.ringHornPull,I=this.look.ringHornSoft,J=this.look.ringHornGain,j=this.look.ringHornFrequency;e.ringHornSpread=Number.isFinite(L)?L:d.ringHornSpread,e.ringHornLength=Number.isFinite(R)?R:d.ringHornLength,e.ringHornBreak=Number.isFinite(G)?G:d.ringHornBreak,e.ringHornPull=Number.isFinite($)?$:d.ringHornPull,e.ringHornSoft=Number.isFinite(I)?I:d.ringHornSoft,e.ringHornGain=Number.isFinite(J)?J:d.ringHornGain,e.ringHornFrequency=Number.isFinite(j)?j:d.ringHornFrequency,e.shotFogPower=this.look.shotFogPower,e.shotFogJoin=this.look.shotFogJoin;const V=this.look.shotFogMid;e.shotFogMid=Number.isFinite(V)?V:d.shotFogMid,e.shotFogEarly=be(this.look.shotFogEarly,d.shotFogEarly),e.shotFogEarlyHold=be(this.look.shotFogEarlyHold,d.shotFogEarlyHold),e.shotFogEarlyEnd=be(this.look.shotFogEarlyEnd,d.shotFogEarlyEnd),e.laserSideMargin=this.look.laserSideMargin,e.laserDownMargin=this.look.laserDownMargin,e.laserSideScale=this.look.laserSideScale,e.laserSideFullRadial=this.look.laserSideFullRadial,e.laserSideAngular=this.look.laserSideAngular,e.laserDownAngular=this.look.laserDownAngular,e.laserReach=this.look.laserReach,e.laserThickness=this.look.laserThickness,e.laserBody=this.look.laserBody,e.motionBlurMode=this.look.motionBlurMode,e.motionBlurStrength=this.look.motionBlurStrength,e.motionBlurFeedbackWeight=this.look.motionBlurFeedbackWeight,e.motionBlurSamples=this.look.motionBlurSamples,e.motionBlurMaxPixels=this.look.motionBlurMaxPixels,e.motionBlurVelocityScale=this.look.motionBlurVelocityScale,e.motionBlurDepthScale=this.look.motionBlurDepthScale,e.motionBlurDepthNear=this.look.motionBlurDepthNear,e.motionBlurDepthFar=this.look.motionBlurDepthFar,e.motionBlurObjectScale=this.look.motionBlurObjectScale,e.motionBlurResetOnCut=this.look.motionBlurResetOnCut,e.motionBlurJitter=this.look.motionBlurJitter,e.motionBlurTapSpacing=this.look.motionBlurTapSpacing;const z=this.look.shardStreakTime,Y=this.look.shardStreakMax;e.shardStreakTime=Number.isFinite(z)?z:d.shardStreakTime,e.shardStreakMax=Number.isFinite(Y)?Y:d.shardStreakMax;const ae=this.look.shardEdgeSoft;e.shardEdgeSoft=Number.isFinite(ae)?Math.min(1.5,Math.max(0,ae)):d.shardEdgeSoft,e.shardStreakRadial=be(this.look.shardStreakRadial,d.shardStreakRadial),e.shardStreakOut=be(this.look.shardStreakOut,d.shardStreakOut),e.shardStreakMelt=be(this.look.shardStreakMelt,d.shardStreakMelt),e.shardStreakTip=be(this.look.shardStreakTip,d.shardStreakTip),e.shardStreakPinch=be(this.look.shardStreakPinch,d.shardStreakPinch);const Ue=this.look.shardStreakSoft;e.shardStreakSoft=Number.isFinite(Ue)?Math.max(0,Ue):d.shardStreakSoft;const fe=this.look.shardStreakFade;e.shardStreakFade=Number.isFinite(fe)?Math.max(0,fe):d.shardStreakFade,e.pulse=n.pulse,e.bpm=n.bpm,e.time=n.time}}function be(t,e){return Number.isFinite(t)?t<0?0:t>1?1:t:e}class ic{constructor(e=0,n=0){h(this,"lastPhraseSmall");h(this,"lastPhraseBig");this.lastPhraseSmall=e,this.lastPhraseBig=n}poseForBeat(e){const n=e.phraseBig!==this.lastPhraseBig,i=e.phraseSmall!==this.lastPhraseSmall;return this.lastPhraseSmall=e.phraseSmall,this.lastPhraseBig=e.phraseBig,n?rc(e):i?oc(e):null}}function ar(t){return new ic((t==null?void 0:t.getPhraseSmall())??0,(t==null?void 0:t.getPhraseBig())??0)}function rc(t){const e=Math.max(1,Math.floor(t.layoutCount));let n=Math.floor(bt(t.phraseBig+2.2)*e);const i=cr(Math.floor(t.patternVariant),e);return e>1&&n===i&&(n=(n+1)%e),{patternVariant:n,patternSeed:lr(t),partScale:d.partScale,ringCount:5+Math.floor(bt(t.phraseBig+5.5)*3)}}function oc(t){const e=Math.max(1,Math.floor(t.layoutCount)),n=1+Math.floor(bt(t.phraseSmall)*2);return{patternVariant:cr(Math.floor(t.patternVariant)+n,e),patternSeed:lr(t),partScale:d.partScale,ringCount:5+Math.floor(bt(t.phraseSmall+4.4)*2)}}function lr(t){return 1+t.phraseSmall*1.31+t.phraseBig*2.17}function bt(t){const e=Math.sin(t*91.7+19.3)*43758.5453;return e-Math.floor(e)}function cr(t,e){if(e<=0)return 0;const n=t%e;return n<0?n+e:n}class sc{constructor(e=d,n,i=ar(n)){h(this,"id","deepness-ring-pattern");h(this,"patternSeed",1);h(this,"patternVariant",0);h(this,"partScale",d.partScale);h(this,"ringCount",d.ringCount);this.barClock=n,this.phrasePolicy=i,this.partScale=e.partScale,this.ringCount=e.ringCount}update(e,n){var o,s;if(!n.beat)return;const i=((o=this.barClock)==null?void 0:o.getPhraseBig())??0,r=this.phrasePolicy.poseForBeat({phraseSmall:((s=this.barClock)==null?void 0:s.getPhraseSmall())??0,phraseBig:i,layoutCount:Ir(),patternVariant:this.patternVariant});r&&(this.patternSeed=r.patternSeed,this.patternVariant=r.patternVariant,this.partScale=r.partScale,this.ringCount=r.ringCount)}render(e,n){e.patternSeed=this.patternSeed,e.patternVariant=this.patternVariant,e.partScale=this.partScale,e.ringCount=this.ringCount}}class ac{constructor(e=Be,n,i=d){h(this,"id","deepness-shockwave");h(this,"strength",0);h(this,"rippleStrength",0);h(this,"latheRingStrength",0);h(this,"ringAge",0);h(this,"ringHit",0);h(this,"ringLive",!1);h(this,"beatIndex",-1);h(this,"decay",d.shockDecay);h(this,"rippleDecay",d.rippleDecay);h(this,"lastPhraseBig",-1);h(this,"lastPhraseSmall",-1);this.rates=e,this.barClock=n,this.look=i,this.rates}update(e,n){var p,m,S,b;this.decay=this.look.shockDecay,this.rippleDecay=this.look.rippleDecay,this.strength=Math.max(0,this.strength-e*this.decay),this.rippleStrength=Math.max(0,this.rippleStrength-e*this.rippleDecay);const i=n.bpm>1?60/n.bpm:.4;if(this.ringLive){this.ringAge+=e;const g=this.ringAge/i;this.latheRingStrength=cc(g,this.look)*this.ringHit,g>this.look.ringFlashLife&&(this.ringLive=!1)}if(!n.beat)return;const r=((p=this.barClock)==null?void 0:p.getPhraseBig())??0,o=((m=this.barClock)==null?void 0:m.getPhraseSmall())??0,s=r!==this.lastPhraseBig,a=o!==this.lastPhraseSmall;let l=1;s?(this.lastPhraseBig=r,this.lastPhraseSmall=o,l=this.look.phraseBigBoost):a&&(this.lastPhraseSmall=o,l=this.look.phraseSmallBoost);const u=Math.min(this.look.shockHitCap,this.look.shockHit*l);this.strength=u,this.beatIndex+=1;const c=((S=this.barClock)==null?void 0:S.getBeatInBar())??this.beatIndex%4,f=((b=this.barClock)==null?void 0:b.getBarIndex())??0;lc(c)&&(this.rippleStrength=u,W(1,`bar ${f} beat ${c}: laser`)),c===0&&(this.ringLive=!0,this.ringAge=0,this.ringHit=u,this.latheRingStrength=0,W(1,`bar ${f}: rings arm`)),W(l===1?2:1,`bar ${f} beat ${c}: flash`)}render(e,n){e.shockStrength=this.strength,e.rippleStrength=this.rippleStrength,e.latheRingStrength=this.latheRingStrength}}function lc(t){return t===2}function cc(t,e=d){const n=qn(e.ringFlashRise0,e.ringFlashRise1,t),i=1-qn(e.ringFlashFall0,e.ringFlashFall1,t);return n*i}function qn(t,e,n){const i=e-t;if(i<=1e-6)return n>=e?1:0;const r=Math.min(1,Math.max(0,(n-t)/i));return r*r*(3-2*r)}class uc{constructor(e=Be,n=d){h(this,"id","deepness-tunnel");h(this,"scroll",0);h(this,"roll",0);h(this,"energy",0);this.rates=e,this.look=n}update(e,n){if(this.scroll+=e*this.rates.tunnelSpeed,this.roll+=e*this.rates.tunnelRollRate,n.beat){this.energy=1;return}this.energy=Math.max(0,this.energy-e*this.look.tunnelEnergyDecay)}render(e,n){e.tunnelScroll=this.scroll,e.tunnelRoll=this.roll,e.tunnelEnergy=this.energy}}class Me{constructor(e={},n={}){h(this,"id","deepness");h(this,"name","Deepness");h(this,"rates");h(this,"look");h(this,"barClock");h(this,"effects");this.rates={...Be,...e},this.look={...d,...n},e.clusterSpinRate!==void 0&&n.clusterSpinRate===void 0&&(this.look.clusterSpinRate=this.rates.clusterSpinRate),this.barClock=new $l(this.rates),this.effects=[this.barClock,new tc(this.rates,this.look),new uc(this.rates,this.look),new Yl(this.rates,this.barClock,sr(),this.look),new sc(this.look,this.barClock,ar(this.barClock)),new ac(this.rates,this.barClock,this.look),new nc(this.look)]}currentLook(){return this.look}setSupershapePreset(e){const n=Rt(e),i=Ve.findIndex(r=>r.name===n.name);return this.look.supershapePresetIndex=i<0?0:i,{index:this.look.supershapePresetIndex,name:n.name}}supershapePresetLabel(){return`${Rt(this.look.supershapePresetIndex).name} ${this.look.supershapePresetIndex}`}update(e,n){for(const i of this.effects)i.update(e,n)}render(e,n){const i=Sr(n.time,n.bpm,this.look);for(const r of this.effects)r.render(i,n);e.drawDeepness(i)}}class hc{constructor(){h(this,"id","beat-flash");h(this,"flash",0)}update(e,n){n.beat?this.flash=1:this.flash=Math.max(0,this.flash-e*4.2)}render(e,n){e.flash=this.flash}}class dc{constructor(){h(this,"id","beat-grid");h(this,"level",.15)}update(e,n){n.beat?this.level=1:this.level=Math.max(.12,this.level-e*1.6)}render(e,n){e.grid=this.level}}class fc{constructor(){h(this,"id","hue-drift");h(this,"hue",0)}update(e,n){this.hue+=e*(.06+n.bpm/700)}render(e,n){e.hue=this.hue}}class pc{constructor(){h(this,"id","ring-pulse");h(this,"energy",.35)}update(e,n){const i=.3+.7*n.pulse,r=Math.min(1,e*10);this.energy+=(i-this.energy)*r}render(e,n){e.rings=this.energy}}function gc(t){return{time:t.time,pulse:t.pulse,bpm:t.bpm,rings:0,grid:0,hue:0,flash:0}}class mc{constructor(){h(this,"id","pulse-rings");h(this,"name","Pulse Rings");h(this,"effects",[new pc,new dc,new fc,new hc])}update(e,n){for(const i of this.effects)i.update(e,n)}render(e,n){const i=gc(n);for(const r of this.effects)r.render(i,n);e.draw(i)}}function bc(t){if(t===null||t.trim()==="")return null;const e=Number(t.trim());return Number.isFinite(e)?Math.max(0,e):null}function we(t){if(t===null)return null;const e=t.trim();if(e==="")return null;const n=Number(e);return Number.isFinite(n)?n:null}function Sc(t){return we(t)}function xc(t){if(t===null)return null;const e=t.trim().toLowerCase();return e==="flat"?"flat":e==="blinnphong"?"blinnPhong":null}function yc(t){if(t===null)return null;const e=t.trim().toLowerCase();return e==="signed"||e==="abs"?e:null}function wc(t){if(t===null)return null;const e=t.trim();if(e==="")return null;const n=Number(e);if(Number.isFinite(n))return n;const i=Ve.findIndex(r=>r.name.toLowerCase()===e.toLowerCase());return i<0?null:i}function vc(t,e){const n=t.get(e);if(n===null||n.trim()==="")return null;const i=Number(n.trim());return Number.isFinite(i)?i:null}function _c(t){const e=new URLSearchParams(t),n={},i=bc(e.get("bloom"));i!==null&&(n.bloomStrength=i);const r=(S,b=S)=>{const g=vc(e,b);g!==null&&(n[S]=g)};for(const S of Object.keys(d))typeof d[S]=="number"&&r(S);const o=we(e.get("bloomLift"));o!==null&&(n.bloom=o);const s=Sc(e.get("spinFalloff"));s!==null&&(n.clusterSpinFalloff=s);const a=we(e.get("thickness"));a!==null&&(n.supershapeThickness=a);const l=we(e.get("face"));l!==null&&(n.supershapeFace=l);const u=we(e.get("shardSpin"));u!==null&&(n.shardSpinSpeed=u);const c=we(e.get("spinRate"));c!==null&&(n.clusterSpinRate=c);const f=yc(e.get("spinTwist"));f!==null&&(n.clusterSpinTwist=f);const p=we(e.get("alignTunnel"));p!==null&&(n.clusterAlignToTunnel=Math.min(1,Math.max(0,p)));const m=xc(e.get("shadingMode"));return m!==null&&(n.shadingMode=m),n}function Bc(){if(typeof window>"u")return new Me;const t=window.location.search,e=wc(new URLSearchParams(t).get("supershape")),n={..._c(t),...ba(t)};return e!==null&&(n.supershapePresetIndex=e),new Me({},n)}class Ec{constructor(){h(this,"factories",new Map);h(this,"defaultId",null)}register(e,n,i){if(this.factories.has(e))throw new Error(`scene already registered: ${e}`);this.factories.set(e,n),(i!=null&&i.isDefault||this.defaultId===null)&&(this.defaultId=e)}create(e){const n=e??this.defaultId;if(!n)throw new Error("no scenes registered");const i=this.factories.get(n);if(!i)throw new Error(`unknown scene: ${n}`);return i()}list(){return[...this.factories.keys()]}getDefaultId(){return this.defaultId}}function Tc(){const t=new Ec;return t.register("pulse-rings",()=>new mc),t.register("deepness",()=>Bc(),{isDefault:!0}),t}const Oe=document.getElementById("stage"),Xn=document.getElementById("status"),jn=document.getElementById("bpm"),Pc=document.getElementById("backend"),Yn=document.getElementById("scene"),Fc=document.getElementById("pause"),A=ta();let Se,U,N=null,oe=!1;function le(t,e){Xn.className=t,Xn.textContent=e}function kc(t){const e=A.bpm;oe?Bi(A,t.bpm):na(A,t),A.bpm!==e&&W(0,`bpm ${Ot(A.bpm)} live`),He()}function He(){if(N){jn.textContent=N.hudLabel(A.pulse>.45);return}const t=A.pulse>.45?"●":"○";jn.textContent=`BPM ${A.bpm.toFixed(1)}  ${t}`}function Mc(t){const e=new URLSearchParams(window.location.search).get("scene");if(e){if(t.list().includes(e))return e;console.warn(`unknown scene "${e}", using default ${t.getDefaultId()}`)}}function Lc(t){return t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}async function Rc(){var O;Vs(window.location.search),Se=await Vl(Oe);const t=Tc();U=t.create(Mc(t)),(O=U.onActivate)==null||O.call(U);const e=()=>U instanceof Me?` · ${U.supershapePresetLabel()}`:"";Pc.textContent=`renderer ${Se.backend}`,Yn.textContent=`${U.name} (${U.id})${e()}`,W(1,`renderer ${Se.backend}`);let n=!1,i=0,r=0,o=zt;const s={draw:y=>{n=!1,Se.draw(y)},drawDeepness:y=>{n=!0,i=y.ringCount,r=y.patternVariant,o=Jn(y.tunnelPlateColumns,y.tunnelPlateRows).count,Se.drawDeepness(y)}};let a=1,l="";const u=y=>{const w=window.devicePixelRatio||1;return y==="deepness"?Math.min(w,1.25):Math.min(w,2)},c=()=>{a=u(U.id),Se.resize(window.innerWidth,window.innerHeight,a);const y=`resize ${Oe.width}×${Oe.height} @${a.toFixed(2)}`;y!==l&&(l=y,W(1,y))};window.addEventListener("resize",c),c();const f=Aa(window.location.search);if(f){const y=document.getElementById("hud");y&&(y.style.display="none"),A.bpm=f.bpm,le("ok",`capture ${f.fps} fps`)}else{const y=la(window.location.search);A.bpm=ca(window.location.search,A.bpm),N=da({preference:y,bpm:A.bpm,staticBuild:!0,playing:()=>!oe,listener:{onMessage:kc,onStatus:(w,v)=>{w==="open"?le("ok",`bridge ${v??""}`.trim()):w==="connecting"?le("warn",`connecting ${v??""}`.trim()):w==="error"?le("err",v??"error"):v===Ti||v===Ei?le("warn",(N==null?void 0:N.kind)==="clock"?"bridge unavailable — beat clock":"bridge unavailable"):(N==null?void 0:N.kind)==="clock"?le("warn","bridge disconnected — beat clock"):le("warn","bridge disconnected — retrying"),He()}}}),N.start(),y==="clock"&&le("ok","internal clock"),He()}if(U instanceof Me){const y=f?"capture":(N==null?void 0:N.kind)??"clock";W(0,Ta(U.currentLook(),A.bpm,y,U.id)),W(3,Pa(U.currentLook()))}const p=Ks(),m=Js(js);let S=Tt(window.location.search,"debug"),b=null,g=null,x=[],B=()=>{},_=0,T=0;function E(){const y=N==null?void 0:N.kind;if(y){if(b===null){b=y;return}y!==b&&(b=y,W(1,`beat source ${y}`))}}const P=y=>{if(oe)return;_=requestAnimationFrame(P);const w=y-T;T=y;const v=Math.min(.1,Math.max(0,w)/1e3);w>0&&p.sample(w),A.time+=v,A.pulse=Math.max(0,A.pulse-v*2.6),N&&(A.bpm=N.bpm,N.pull(A.time),A.beat&&N.beatInBar===0&&(W(1,`bar ${N.bar}: ${N.kind}`),W(2,`bar ${N.bar}: ${p.fps().toFixed(0)} fps, ${p.frameMs().toFixed(0)} ms`))),U.update(v,A),U.render(s,A),E(),A.beat&&(g==null||g.refresh()),A.beat=!1,He(),S&&m.due(y)&&console.info(Qs({fps:p.fps(),frameMs:p.frameMs(),backend:Se.backend,sceneId:U.id,width:Oe.width,height:Oe.height,dpr:a,bpm:A.bpm,pulse:A.pulse,time:A.time,deepness:n?{ringCount:i,patternVariant:r,cluster:Ss(),tunnel:o,streaks:Ce,sprites:xe}:void 0}))};function F(y){if(oe!==y){if(oe=y,Fc.hidden=!oe,oe){cancelAnimationFrame(_),_=0;return}T=performance.now(),_=requestAnimationFrame(P)}}const M=document.getElementById("look-panel");if(M&&U instanceof Me&&!f){const y=U.currentLook();x=Fa({look:y,scenes:t.list(),bpm:()=>(N==null?void 0:N.bpm)??A.bpm,setBpm:w=>{N&&(N.bpm=w),A.bpm=w},beat:()=>new URLSearchParams(window.location.search).get("beat")??"auto",scene:()=>U.id,debug:()=>S,setDebug:w=>{S=w,m.reset(performance.now())},pause:()=>oe,setPause:w=>F(w),capture:()=>{const w=Number(new URLSearchParams(window.location.search).get("capture"));return Number.isFinite(w)&&w>0?w:0},seconds:()=>{const w=Number(new URLSearchParams(window.location.search).get("seconds"));return Number.isFinite(w)&&w>0?w:20},logLevel:()=>$s()??1,setLogLevel:w=>qs(w),hudOpen:()=>(g==null?void 0:g.isOpen())??!1,setHudOpen:w=>g==null?void 0:g.setOpen(w)}),B=(w,v,L)=>{if(String(v)===String(L))return;w.apply==="live"&&w.write(L);const R=Ea(window.location.search,w,L);if(history.replaceState(null,"",`${window.location.pathname}${R}${window.location.hash}`),W(0,w.apply==="live"?`${w.name} ${he(L)} live`:`${w.name} ${he(L)}`),w.apply==="reload"){W(0,"reloading with new URL"),window.location.reload();return}g==null||g.refresh()},g=La(M,x,B),Tt(window.location.search,"hud")&&g.setOpen(!0),g.refresh()}if(E(),window.addEventListener("keydown",y=>{if(!(y.repeat||y.metaKey||y.ctrlKey||y.altKey||Lc(y.target))){if(y.code==="KeyH"){const w=x.find(v=>v.name==="hud");if(!w||!g)return;y.preventDefault(),B(w,w.read(),g.isOpen()?0:1);return}if(y.code==="KeyP"||y.code==="Space"){y.preventDefault();const w=x.find(v=>v.name==="pause");w?B(w,w.read(),oe?0:1):(F(!oe),W(1,oe?"paused":"resumed"));return}if(y.code==="KeyD"){y.preventDefault();const w=x.find(v=>v.name==="debug");w?B(w,w.read(),S?0:1):(S=!S,m.reset(performance.now()),ea(S));return}if((y.code==="BracketLeft"||y.code==="BracketRight")&&U instanceof Me){y.preventDefault();const w=x.find($=>$.name==="supershapePresetIndex"),v=U.currentLook().supershapePresetIndex,L=Number(U.supershapePresetLabel().split(" ").pop()),R=y.code==="BracketRight"?1:-1,G=U.setSupershapePreset((Number.isFinite(L)?L:0)+R);Yn.textContent=`${U.name} (${U.id}) · ${G.name} ${G.index}`,w?B(w,v,G.index):g==null||g.refresh()}}}),f){window.deepnessCapture={fps:f.fps,bpm:f.bpm,seconds:f.seconds,get frame(){return f.frame},step(){return new Promise((y,w)=>{requestAnimationFrame(()=>{const v=Ca(A,f);U.update(v.deltaSeconds,A),U.render(s,A),A.beat=!1,He(),Se.finish().then(()=>y({frame:v.frame,time:v.time,beat:v.beat}),w)})})}},kn();return}Tt(window.location.search,"pause")?(F(!0),W(1,"paused")):(T=performance.now(),_=requestAnimationFrame(P)),kn()}Rc().catch(t=>{le("err",String(t)),console.error(t)});
