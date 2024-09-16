import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { h as useRouter } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GroupStream",
  __ssrInlineRender: true,
  props: {
    grupStream: {}
  },
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 pt-6" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.grupStream, (stream) => {
        _push(`<div class="rounded-lg p-2"><div class="relative rounded-xl min-h-56 bg-cover bg-center sm:h-60 xl:h-80" style="${ssrRenderStyle(`background-image: url('https://image.tmdb.org/t/p/original${stream.poster_path}');`)}">`);
        ssrRenderSlot(_ctx.$slots, "default", {
          stream,
          index: stream.id
        }, null, _push, _parent);
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/GroupStream.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GroupStream-C_IzMAYZ.mjs.map
