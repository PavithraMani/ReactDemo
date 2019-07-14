import React from 'react';
import ReactDOM from 'react-dom';
import Print from './Core.js';

class App extends React.Component{
	render() { 
		return (<Print type="react" word="welcome"/>);
	}
}

ReactDOM.render(<App />, document.getElementById('content'));
