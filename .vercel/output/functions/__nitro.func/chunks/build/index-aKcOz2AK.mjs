import { useSSRContext, defineComponent, withCtx, unref, createVNode, ref, watch, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { u as useStreamsStore, d as checkBookmarked, _ as _export_sfc } from './server.mjs';
import { faPlay, faBookmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { s as setInterval, _ as _sfc_main$2 } from './RecentsBookmarkeds-QkyZzzA0.mjs';
import { _ as _sfc_main$3 } from './GroupStream-C_IzMAYZ.mjs';
import defaultSection from './defaultSection-CTg8jT7L.mjs';
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
import 'vue-router';
import 'pinia';
import 'axios';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PopularStream",
  __ssrInlineRender: true,
  setup(__props) {
    const streamStore = useStreamsStore();
    const indexStream = ref(streamStore.getIndexPopularStream);
    const btnConfigBookmarked = ref({
      iSave: false,
      titleSave: "Adicionar \xE0 lista",
      titleUnsave: "Adicionado a lista"
    });
    watch(
      () => streamStore.popularStreams,
      (newStreams) => {
        if (newStreams.length > 0) {
          btnConfigBookmarked.value.iSave = checkBookmarked(streamStore.getPopularStreams[indexStream.value]);
          setInterval();
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-background flex flex-col w-100 flex flex-col justify-items-end" }, _attrs))} data-v-94f1e1ba><div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:py-24 sm:px-5 sm:bg-fixed sm:grid" style="${ssrRenderStyle(`background-image: url('https://image.tmdb.org/t/p/original${(_a = unref(streamStore).getPopularStreams[unref(indexStream)]) == null ? void 0 : _a.poster_path}');`)}" data-v-94f1e1ba><div class="custom-background-desc w-full absolute bottom-0" data-v-94f1e1ba><div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/2 md:w-1/3" data-v-94f1e1ba><span class="text-content text-3xl font-bold sm:text-5xl" data-v-94f1e1ba>${ssrInterpolate((_b = unref(streamStore).getPopularStreams[unref(indexStream)]) == null ? void 0 : _b.title)}</span><p class="text-subtitle text-base sm:text-xl" data-v-94f1e1ba>${ssrInterpolate((_c = unref(streamStore).getPopularStreams[unref(indexStream)]) == null ? void 0 : _c.overview)}</p><div class="flex gap-4 sm:mt-6 sm:gap-6" data-v-94f1e1ba><a${ssrRenderAttr("href", `https://www.youtube.com/results?search_query=${(_d = unref(streamStore).getPopularStreams[unref(indexStream)]) == null ? void 0 : _d.title} Trailer`)} target="\u201D_blank\u201D" class="custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold" data-v-94f1e1ba>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), { icon: unref(faPlay) }, null, _parent));
      _push(` Trailer </a><button class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15" data-v-94f1e1ba>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(btnConfigBookmarked).iSave ? unref(faBookmark) : unref(faPlusCircle)
      }, null, _parent));
      _push(`<span data-v-94f1e1ba>${ssrInterpolate(unref(btnConfigBookmarked).iSave ? unref(btnConfigBookmarked).titleUnsave : unref(btnConfigBookmarked).titleSave)}</span></button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/PopularStream.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-94f1e1ba"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const streamStore = useStreamsStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainPopularStream = __nuxt_component_0;
      const _component_MainRecentsBookmarkeds = _sfc_main$2;
      const _component_MainGroupStream = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MainPopularStream, null, null, _parent));
      _push(ssrRenderComponent(defaultSection, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MainRecentsBookmarkeds, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MainGroupStream, {
              "grup-stream": unref(streamStore).getStreams
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MainRecentsBookmarkeds),
              createVNode(_component_MainGroupStream, {
                "grup-stream": unref(streamStore).getStreams
              }, null, 8, ["grup-stream"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-aKcOz2AK.mjs.map
