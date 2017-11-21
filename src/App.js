import React, { Component } from 'react';
import './App.css';

import posts from "./data/posts.js";

import Navbar from "./components/Navbar";
import BlogEntry from "./components/BlogEntry";

class App extends Component {
	state = {
		currentPost: posts[1]
	};

	render() {
		return (
			<div>
				<Navbar siteName={"reactblog"} links = { [ "home" , "features" ] } />
				<div className = "containter">
					<div className = "row">
						<div className = "col-9">
							<BlogEntry 
								post = {this.state.currentPost}
							/>
						</div>
						<div className = "col-3">

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
