import { analytics } from "@/utils/analytics";
const Analytics = async () => {
	const pageview = await analytics.retrive("pageview", "11/02/2024");
	return <div  className="text-white">{JSON.stringify(pageview)}</div>;
};

export default Analytics;
