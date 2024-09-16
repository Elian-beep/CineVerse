import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { faBookmark, faPlusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.stream_type;
    route.params.id;
    const stream = ref();
    const colorAverage = ref("text-danger");
    ref(true);
    const btnConfigBookmarked = ref({
      iSave: false,
      titleSave: "Adicionar \xE0 lista",
      titleUnsave: "Adicionado a lista"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "details text-content" }, _attrs))} data-v-d03ce03d>`);
      if (unref(stream)) {
        _push(`<div class="background relative bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle(`background-image: url('https://image.tmdb.org/t/p/original${(_a = unref(stream)) == null ? void 0 : _a.poster_path}');`)}" data-v-d03ce03d><div class="flex flex-col gap-4 absolute text-content z-10 bottom-1/3 left-6 right-12 sm:left-20 md:right-1/3 xl:right-2/3 xl:bottom-1/4" data-v-d03ce03d><h1 class="font-extrabold text-5xl" data-v-d03ce03d>${ssrInterpolate(((_b = unref(stream)) == null ? void 0 : _b.title) || ((_c = unref(stream)) == null ? void 0 : _c.name))}</h1><div class="flex gap-4 flex-wrap" data-v-d03ce03d><!--[-->`);
        ssrRenderList(unref(stream).genres, (genre) => {
          _push(`<div data-v-d03ce03d><span class="bg-primary_dark py-1 px-2 rounded-md text-sm" data-v-d03ce03d>${ssrInterpolate(genre.name)}</span></div>`);
        });
        _push(`<!--]--></div><p data-v-d03ce03d>${ssrInterpolate(unref(stream).overview)}</p><p class="text-sm" data-v-d03ce03d>M\xEDdia de avalia\xE7\xE3o: <span class="${ssrRenderClass(unref(colorAverage))}" data-v-d03ce03d>${ssrInterpolate(unref(stream).vote_average)}</span></p><div class="flex gap-4" data-v-d03ce03d><button class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15" data-v-d03ce03d>`);
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: unref(btnConfigBookmarked).iSave ? unref(faBookmark) : unref(faPlusCircle)
        }, null, _parent));
        _push(`<span data-v-d03ce03d>${ssrInterpolate(unref(btnConfigBookmarked).iSave ? unref(btnConfigBookmarked).titleUnsave : unref(btnConfigBookmarked).titleSave)}</span></button><a${ssrRenderAttr("href", `https://www.youtube.com/results?search_query=${((_d = unref(stream)) == null ? void 0 : _d.title) || ((_e = unref(stream)) == null ? void 0 : _e.name)} Trailer`)} target="\u201D_blank\u201D" class="custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold" data-v-d03ce03d>`);
        _push(ssrRenderComponent(unref(FontAwesomeIcon), { icon: unref(faPlay) }, null, _parent));
        _push(` Trailer </a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/details/[stream_type]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d03ce03d"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-U6NVSYYf.mjs.map
