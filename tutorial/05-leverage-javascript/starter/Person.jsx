import React from "react";
import avatar from "../../../src/assets/default-avatar.svg";

export function Person({ name, nickName = "unknown", images }) {
	// const img = images[0].small.url;
	// const img = images && images[0] && images[0].small && images[0].small.url;
	// const img = images?.[0]?.small?.url || avatar;
	const img = images?.[0]?.small?.url ?? avatar;

	return (
		<div>
			{/* <img src={img} alt={name} style={{ width: "50px" }} /> */}
			<img src={img} alt={name} style={{ width: "50px" }} />
			<h4>{name || "Unknown"}</h4>
			<p>Nickname: {nickName}</p>
			{/* <p>Nickname: {nickName || "Unknown"}</p> */}
		</div>
	);
}
