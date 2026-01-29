const timestampToAge = (timestamp: bigint) => {
	const now = BigInt(Math.floor(Date.now() / 1000));
	if (now <= timestamp) return { days: 0, hours: 0, minutes: 0 };

	const delta = now - timestamp;
	const day = 86_400n;
	const hour = 3_600n;
	const minute = 60n;

	const days = delta / day;
	const hours = (delta % day) / hour;
	const minutes = (delta % hour) / minute;

	return { days, hours, minutes };
};

export { timestampToAge };
