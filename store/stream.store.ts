import { defineStore } from 'pinia'
import type { IMovie } from '~/interfaces/IMovie';
import type { IStream } from '~/interfaces/IStream';
import type { ITv } from '~/interfaces/ITv';

export const useStreamsStore = defineStore('streams', {
    state: () => ({
        strams: [] as Array<IStream>,
        popularStreams: [] as Array<IStream>,
        indexPopularStream: 0 as number,
    }),

    getters: {
        getStreams: (state) => state.strams,
        getPopularStreams: (state) => state.popularStreams,
        getIndexPopularStream: (state) => state.indexPopularStream,
    },

    actions: {
        setStreams(dataStreams: Array<IStream>) {
            this.strams = dataStreams;
        },
        setPopularStreams(dataStreams: Array<IStream>) {
            this.popularStreams = dataStreams;
        },
        setIndexPopularStream(newIndex: number) {
            this.indexPopularStream = newIndex;
        },
    }
})