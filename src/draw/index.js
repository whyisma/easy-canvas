
import { createElement, generateFunc } from './create-element'
import px from './px'



export default function (ctx, options) {
  ctx.scale(options.dpr, options.dpr)
  px.init(options)
  return function (model) {
    const vdom = createElement(model)
    console.log(vdom)
    const renderFunc = generateFunc(vdom, options)
    renderFunc(ctx)
  }
}
