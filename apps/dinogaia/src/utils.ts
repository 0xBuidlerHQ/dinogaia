const timestampToAgeInDays = (timestamp: bigint) => {
	const now = BigInt(Math.floor(Date.now() / 1000));
	if (now <= timestamp) return "0";

	return ((now - timestamp) / 86_400n).toString();
};

export { timestampToAgeInDays };
