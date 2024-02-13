import { analytics } from "@/utils/analytics";
const Analytics = async () => {
	const pageview = await analytics.retrieveDays("pageview", 2);
	return <div  className="text-white">{JSON.stringify(pageview)}</div>;
};

export default Analytics;
