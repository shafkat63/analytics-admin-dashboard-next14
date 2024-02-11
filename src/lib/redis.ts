import { Redis } from "@upstash/redis";

export const redis = new Redis({
	url: "https://eu2-charming-owl-31340.upstash.io",
	token: process.env.REDIS_KEY!,
});

// const data = await redis.set('foo', 'bar');
