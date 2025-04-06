import { timelineData } from "../data";
import "../timeline.css";

export default function Timeline() {
	return (
		<div className="timeline-container">
			<div className="timeline-line" />
			{timelineData.map((item, index) => (
				<div
					className={`timeline-item ${
						index % 2 === 0 ? "left" : "right"
					}`}
					key={index}
				>
					<div className="timeline-circle" />
					<div className="timeline-content">
						<p className="type">{item.source_type}</p>
						<h3 className="name">{item.name}</h3>
						<p className="feed-name">{item.source_feed_name}</p>
					</div>
				</div>
			))}
		</div>
	);
}
