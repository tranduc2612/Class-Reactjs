import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "duc",
		};
	}

	handleEvent = () => {
		this.setState({ name: "Linh" });
	};

	componentWillReceiveProps() {
		console.log(1);
	}

	shouldComponentUpdate() {
		console.log(5);
		return false;
	}

	componentDidMount() {
		console.log(6);
	}

	componentDidMount() {
		console.log(2);
	}

	componentWillUnmount() {
		console.log(3);
	}

	render() {
		return (
			<div>
				<h1>Hello {this.state.name}</h1>
				<input
					on="true"
					onChange={(e) => {
						this.setState({ name: e.target.value });
					}}
				/>
				<button onClick={this.handleEvent}>Click me !</button>
			</div>
		);
	}
}

export default App;
