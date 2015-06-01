import React from 'react';

const Main = React.createClass({

	render() {
		return (
			<h1>My awesome project!</h1>
		)
	}
});

React.render(<Main/>, document.getElementById('app-container'));
