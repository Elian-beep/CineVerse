import { useSSRContext, defineComponent, withCtx, unref, createVNode, toDisplayString, ref, watch, mergeProps } from 'vue';
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { e as useMoviesStore, d as checkBookmarked, g as getStream, _ as _export_sfc } from './server.mjs';
import { faChevronLeft, faChevronRight, faPlay, faBookmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { s as setInterval, _ as _sfc_main$2 } from './RecentsBookmarkeds-QkyZzzA0.mjs';
import { _ as __nuxt_component_2 } from './GroupFilter--Yp-0rmR.mjs';
import { _ as _sfc_main$3 } from './GroupStream-C_IzMAYZ.mjs';
import { storeToRefs } from 'pinia';
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
import 'axios';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PopularMovie",
  __ssrInlineRender: true,
  setup(__props) {
    const btnConfigBookmarked = ref({
      iSave: false,
      titleSave: "Adicionar \xE0 lista",
      titleUnsave: "Adicionado a lista"
    });
    const moviesStore = useMoviesStore();
    const index = ref(moviesStore.getIndexPopularMovie);
    watch(
      () => moviesStore.popularMovies,
      (newMovies) => {
        if (newMovies.length > 0) {
          btnConfigBookmarked.value.iSave = checkBookmarked(moviesStore.getPopularMovies[index.value]);
          setInterval();
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom-background flex flex-col w-100 flex flex-col justify-items-end" }, _attrs))} data-v-ff4acf6d><div class="custom-background-size relative bg-cover bg-no-repeat bg-center sm:py-24 sm:px-5 sm:h-screen sm:bg-fixed sm:grid" style="${ssrRenderStyle(`background-image: url('https://image.tmdb.org/t/p/original${(_a = unref(moviesStore).getPopularMovies[unref(index)]) == null ? void 0 : _a.poster_path}');`)}" data-v-ff4acf6d><div class="custom-background-desc w-full absolute bottom-0" data-v-ff4acf6d><div class="w-96 bg-green mx-auto flex flex-col gap-4 sm:m-0 sm:ml-20 sm:gap-6 sm:w-1/2 md:w-1/3" data-v-ff4acf6d><span class="text-content text-3xl font-bold sm:text-5xl" data-v-ff4acf6d>${ssrInterpolate((_b = unref(moviesStore).getPopularMovies[unref(index)]) == null ? void 0 : _b.title)}</span><p class="text-subtitle text-base sm:text-xl" data-v-ff4acf6d>${ssrInterpolate((_c = unref(moviesStore).getPopularMovies[unref(index)]) == null ? void 0 : _c.overview)}</p><div class="flex gap-4 sm:mt-6 sm:gap-6" data-v-ff4acf6d><a${ssrRenderAttr("href", `https://www.youtube.com/results?search_query=${(_d = unref(moviesStore).getPopularMovies[unref(index)]) == null ? void 0 : _d.title} Trailer`)} target="\u201D_blank\u201D" class="custom-hover-trailer transition-transform transition-300 transition-ease bg-primary rounded-full px-4 py-3 flex gap-2 items-center text-app font-bold" data-v-ff4acf6d>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), { icon: unref(faPlay) }, null, _parent));
      _push(` Trailer </a><button class="bg-transparent rounded-full px-4 py-3 text-primary flex gap-2 items-center border-solid border-2 border-primary sm:hover:bg-primary sm:hover:bg-opacity-15" data-v-ff4acf6d>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(btnConfigBookmarked).iSave ? unref(faBookmark) : unref(faPlusCircle)
      }, null, _parent));
      _push(`<span data-v-ff4acf6d>${ssrInterpolate(unref(btnConfigBookmarked).iSave ? unref(btnConfigBookmarked).titleUnsave : unref(btnConfigBookmarked).titleSave)}</span></button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/PopularMovie.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ff4acf6d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "movie",
  __ssrInlineRender: true,
  setup(__props) {
    const movieStore = useMoviesStore();
    const { currentPage, totalPages } = storeToRefs(movieStore);
    const previousPage = () => {
      if (movieStore.currentPage > 1) {
        movieStore.fetchPage(movieStore.currentPage - 1);
      }
    };
    const nextPage = () => {
      if (movieStore.currentPage < movieStore.totalPages) {
        movieStore.fetchPage(movieStore.currentPage + 1);
      }
    };
    const handleFilter = async (value) => {
      if (typeof value === "number") {
        movieStore.setCurrentGenre(value);
        await getStream("movie", movieStore.getCurrentPage, value);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainPopularMovie = __nuxt_component_0;
      const _component_MainRecentsBookmarkeds = _sfc_main$2;
      const _component_MainGroupFilter = __nuxt_component_2;
      const _component_MainGroupStream = _sfc_main$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MainPopularMovie, null, null, _parent));
      _push(ssrRenderComponent(defaultSection, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MainRecentsBookmarkeds, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MainGroupFilter, {
              class: "mt-6 mb-4 sm:mt-12 sm:mb-10",
              filter: unref(movieStore).getCurrentGenre,
              "values-filter": unref(movieStore).getGenres,
              onHandleFilter: handleFilter
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MainGroupStream, {
              class: "pt-0",
              "grup-stream": unref(movieStore).getMovies
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center gap-6 mt-4 font-base text-primary"${_scopeId}><button${ssrIncludeBooleanAttr(unref(currentPage) === 1) ? " disabled" : ""}${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: unref(faChevronLeft) }, null, _parent2, _scopeId));
            _push2(`</button><span${_scopeId}>${ssrInterpolate(unref(currentPage))} - ${ssrInterpolate(unref(totalPages))}</span><button${ssrIncludeBooleanAttr(unref(currentPage) === unref(totalPages)) ? " disabled" : ""}${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: unref(faChevronRight) }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
          } else {
            return [
              createVNode(_component_MainRecentsBookmarkeds),
              createVNode(_component_MainGroupFilter, {
                class: "mt-6 mb-4 sm:mt-12 sm:mb-10",
                filter: unref(movieStore).getCurrentGenre,
                "values-filter": unref(movieStore).getGenres,
                onHandleFilter: handleFilter
              }, null, 8, ["filter", "values-filter"]),
              createVNode(_component_MainGroupStream, {
                class: "pt-0",
                "grup-stream": unref(movieStore).getMovies
              }, null, 8, ["grup-stream"]),
              createVNode("div", { class: "flex justify-center gap-6 mt-4 font-base text-primary" }, [
                createVNode("button", {
                  onClick: previousPage,
                  disabled: unref(currentPage) === 1
                }, [
                  createVNode(unref(FontAwesomeIcon), { icon: unref(faChevronLeft) }, null, 8, ["icon"])
                ], 8, ["disabled"]),
                createVNode("span", null, toDisplayString(unref(currentPage)) + " - " + toDisplayString(unref(totalPages)), 1),
                createVNode("button", {
                  onClick: nextPage,
                  disabled: unref(currentPage) === unref(totalPages)
                }, [
                  createVNode(unref(FontAwesomeIcon), { icon: unref(faChevronRight) }, null, 8, ["icon"])
                ], 8, ["disabled"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=movie-eeIJbnJ4.mjs.map
