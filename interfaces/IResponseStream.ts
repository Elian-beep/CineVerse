import type { IMovie } from "./IMovie";
import type { IStream } from "./IStream";
import type { ITv } from "./ITv";

export interface IResponseStream {
    page: number;
    results: IStream[] | IMovie[] | ITv[];
    total_pages: number;
    total_results: number;
}