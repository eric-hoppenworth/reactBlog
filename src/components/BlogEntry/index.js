import React from 'react';
import "./style.css";

class BlogEntry extends React.Component{
	render() {
		return (
			<div className="card">
				<h3 className="card-header">{this.props.post.header}</h3>
				<div className="card-body">
					<h5 className="card-title">{this.props.post.title}</h5>
				</div>
				<div className="card-body">
					<p className="card-text">
						{this.props.post.content}
					</p>
					<a href="#" className="card-link">learn about stuff</a>
					<a href="#" className="card-link">click here</a>
				</div>
				<div className="card-footer text-muted">
					2 days ago
				</div>
			</div>
		);
	}
}

export default BlogEntry;