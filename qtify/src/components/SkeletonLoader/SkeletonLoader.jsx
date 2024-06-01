import React from "react";
import DummyCard from "./DummyCard";

const SkeletonLoader = ({ name, count }) => {
	switch (name) {
		case "card":
			return <DummyCard count={count} />;

		default:
			break;
	}
};

export default SkeletonLoader;