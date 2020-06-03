import React, {Component} from 'react';
import './App.css';
import ExchangeComponent from "./ui/components/Exchange/ExchangeComponent";


class App extends Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<ExchangeComponent/>
				</header>
			</div>
		);
	}
}

export default App;
