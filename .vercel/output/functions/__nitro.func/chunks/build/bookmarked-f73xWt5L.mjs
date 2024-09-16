import { _ as __nuxt_component_2 } from './GroupFilter--Yp-0rmR.mjs';
import { _ as _sfc_main$1 } from './GroupStream-C_IzMAYZ.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { b as bookmarkeds, t as toggleBookmarked, c as asyncBookmarkedsStorage } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bookmarked",
  __ssrInlineRender: true,
  setup(__props) {
    const filter = ref("stream");
    const filters = [
      { name: "Todos", id: "stream" },
      { name: "Filmes", id: "movie" },
      { name: "S\xE9ries", id: "tv" }
    ];
    const bookmarkedLocal = ref([...bookmarkeds.value]);
    const handleFilter = (value) => {
      if (typeof value === "string") {
        filter.value = value;
        bookmarkedLocal.value = [...bookmarkeds.value];
        if (value !== "stream") {
          bookmarkedLocal.value = bookmarkedLocal.value.filter((b) => b.media_type === value);
        }
      }
    };
    const removeBookmarked = (straem) => {
      toggleBookmarked(straem);
      asyncBookmarkedsStorage();
      handleFilter(filter.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainGroupFilter = __nuxt_component_2;
      const _component_MainGroupStream = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "px-6 pt-4 mt-24 sm:px-20",
        style: { "min-height": "calc(100vh - 176px)" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MainGroupFilter, {
        "values-filter": filters,
        filter: unref(filter),
        onHandleFilter: handleFilter
      }, null, _parent));
      _push(ssrRenderComponent(_component_MainGroupStream, { "grup-stream": unref(bookmarkedLocal) }, {
        default: withCtx(({ stream, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
              onClick: ($event) => removeBookmarked(stream),
              icon: unref(faMinus),
              class: "absolute right-4 top-4 p-1 bg-primary text-app rounded-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FontAwesomeIcon), {
                onClick: ($event) => removeBookmarked(stream),
                icon: unref(faMinus),
                class: "absolute right-4 top-4 p-1 bg-primary text-app rounded-full"
              }, null, 8, ["onClick", "icon"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bookmarked.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bookmarked-f73xWt5L.mjs.map
