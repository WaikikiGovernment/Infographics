(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[63],{7852:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var r=s(498);var t=s.n(r);var l=s(7853);var i=s(7741);var o=s(7742);var h=s(7750);var n=Object.assign({},i.default);n.instanceClass=l.Pyramid,n.setupChartSheetOptionsItem=function(e){var a;a=t().has(e,"dynamicShape")&&!t().has(e,"regularEdge")?!e.dynamicShape:!!t().has(e,"regularEdge")&&e.regularEdge;var s={categories:{colors:t().merge([],this.themeColors,e.colors||this.colors)},pyramid:{showValues:!!t().has(e,"showValues")&&e.showValues,showText:!t().has(e,"showText")||e.showText,direction:t().has(e,"direction")?e.direction:"up",endType:t().has(e,"endType")?e.endType:"zero",regularEdge:a,singleColor:t().get(e,"singleColor.enabled")},axis:[{}]};return(0,o.default)(s,e,this.charts),s.legend.enabled=t().get(e,"showLegend",!1),(0,h.assignNumberFormatLabels)({sheetOptions:s,custom:e,affixes:[{id:"x",path:"",defaultValue:!0},{id:"label",path:"",defaultValue:!0}],inputDecimalSeparator:this.inputDecimalSeparator}),s};let d=Object.freeze(n)}}]);