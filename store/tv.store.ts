import { defineStore } from 'pinia'
import type { ITv } from '~/interfaces/ITv';

export const useTvsStore = defineStore('tvs', {
    state: () => ({
        popularTvs: [] as Array<ITv>,
        indexPopularTv: 0 as number,
    }),

    getters: {
        getPopularTvs: (state) => state.popularTvs,
        getIndexPopularTv: (state) => state.indexPopularTv,
    },

    actions: {
        setPopularTvs(dataTvs: Array<ITv>) {
            this.popularTvs = dataTvs;
        },
        setIndexPopularTv(newIndex: number) {
            this.indexPopularTv = newIndex;
        },
    }
})