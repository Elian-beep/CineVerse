import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GroupFilter",
  __ssrInlineRender: true,
  props: {
    valuesFilter: {},
    onHandleFilter: { type: Function },
    filter: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom_scroll scrollbar-thin flex flex-row max-w-100 gap-6 flex-nowrap overflow-x-auto justify-start" }, _attrs))} data-v-f2e8dce5><!--[-->`);
      ssrRenderList(_ctx.valuesFilter, (btnFilter, index) => {
        _push(`<div class="flex flex-row" data-v-f2e8dce5><button class="${ssrRenderClass([_ctx.filter === btnFilter.id ? "selected_btn" : "unselected_btn", "default_btn"])}" data-v-f2e8dce5>${ssrInterpolate(btnFilter.name)}</button></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/GroupFilter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2e8dce5"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=GroupFilter--Yp-0rmR.mjs.map
