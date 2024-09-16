import { defineComponent, unref, useSSRContext } from 'vue';
import { h as useRouter, b as bookmarkeds } from './server.mjs';
import { ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RecentsBookmarkeds",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h3 class="text-content text-base font-bold mb-6 sm:text-2xl">Adicionados recentes \xE0 sua lista</h3><div class="custom_scroll flex flex-row flex-nowrap max-w-100 gap-4 overflow-x-auto justify-start sm:gap-6"><!--[-->`);
      ssrRenderList(("bookmarkeds" in _ctx ? _ctx.bookmarkeds : unref(bookmarkeds)).slice(0, 6), (bookmarked) => {
        _push(`<div class="shrink-0"><img class="h-72 sm:80"${ssrRenderAttr("src", `https://image.tmdb.org/t/p/original${bookmarked.poster_path}`)}${ssrRenderAttr("alt", `P\xF4ster ${bookmarked.id}`)}></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/RecentsBookmarkeds.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, setInterval as s };
//# sourceMappingURL=RecentsBookmarkeds-QkyZzzA0.mjs.map
