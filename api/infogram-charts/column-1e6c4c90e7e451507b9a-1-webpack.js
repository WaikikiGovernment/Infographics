(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[39],{7794:(a,e,t)=>{t.r(e),t.d(e,{default:()=>c});var i=t(498);var s=t.n(i);var l=t(7741);var o=t(7742);var r=t(7744);var n=t(7745);var u=t(7748);var h=t(7750);var d=t(7795);var p=Object.assign({},l.default);p.instanceClass=d.Column,p.setupChartOptions=function(){var a,e,t,i;l.default.setupChartOptions.call(this);var s=this.custom,o=this.chartOptions;var r;o.series.data=!0===s.absoluteDistribution?"absolute":"separate",o.style.graph.item.value.hideOverlapping=!1,o.style.graph.item.value.align=null!==(r=null==s?void 0:null===(i=s.labels)||void 0===i?void 0:null===(t=i.graph)||void 0===t?void 0:null===(e=t.item)||void 0===e?void 0:null===(a=e.value)||void 0===a?void 0:a.alignVertical)&&void 0!==r?r:"bottom"},p.setupChartSheetOptionsItem=function(a){var e={categories:{colors:s().merge([],this.themeColors,a.colors||this.colors)},grid:{vertical:!1,horizontal:!0},graphOptions:{column:{showValues:!!a.showInLineValues}},axis:[{},{}]};(0,o.default)(e,a,this.charts),e.legend.enabled=!0===a.showLabels,a.categoryWidthAuto||(e.categories.categoryWidth=a.categoryWidth||this.defaultCategoryWidth);var t=e.axis[1];return t.title=a.ylabel||"",e.axis[0].title=a.xlabel||"","number"==typeof a.ymin&&(t.minLimit=a.ymin),"number"==typeof a.ymax&&(t.maxLimit=a.ymax),e.grid.horizontal=(0,r.getGridSettingsHorizontal)(a),e.grid.horizontalZero=(0,n.getZeroBaselineHorizontal)(a),void 0!==a.showInLineValuesOutside&&s().set(e,"graphOptions.column.valuesOutside",a.showInLineValuesOutside),(0,u.assignAxisTickInterval)(e,a),(0,u.assignAxisTicks)(e,a),(0,h.assignNumberFormatValues)({sheetOptions:e,custom:a,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,h.assignNumberFormatLabels)({sheetOptions:e,custom:a,affixes:[{id:"y",path:""},{id:"label",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,u.assignCategoryLabelLayout)(e,a),e};let c=Object.freeze(p)}}]);