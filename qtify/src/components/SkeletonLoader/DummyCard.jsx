import React from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "./Skeleton.module.css";

const DummyCard = ({ count }) => {
	return (
		<>
			<div className={styles.card_container}>
				{[...Array(count)].map((each, index) => (
					<Skeleton
						key={index}
						variant="rounded"
						width={200}
						height={220}
						animation="wave"
					/>
				))}
			</div>
		</>
	);
};

export default DummyCard;