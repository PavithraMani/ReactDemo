import React from 'react';

class Print extends React.Component{
	render() { 
		return (<p>{this.props.word} to {this.props.type}</p>);
	}
}

export default Print;
