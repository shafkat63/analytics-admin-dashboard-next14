import { redis } from "@/lib/redis";
import {getDate} from '@/utils/index'
type AnalyticsArgs = {
	retention?: number;
};
type TrackOptions={
    persists?:boolean
}
export class Analytics {
    static track(arg0: string, arg1: { page: string; country: string | undefined; }) {
        throw new Error("Method not implemented.");
    }
	private retention: number = 60 * 60 * 24 * 7;
	constructor(opts?: AnalyticsArgs) {
		if (opts?.retention) this.retention = opts.retention;
	}
	async track(namespace: string, event: object = {} ,opts?:TrackOptions) {
	let key =`analytics::${namespace}`
    if(!opts?.persists){
        key+=`::${getDate()}`
    }
        //db call to persist this event
        await redis.hincrby(key,JSON.stringify(event),1)
if(!opts?.persists)await redis.expire(key,this.retention)
    }
}
export const analytics = new Analytics()
// const analytics = new Analytics({ retention: 3600 });
// analytics.track()
