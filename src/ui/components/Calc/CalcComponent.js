import React, {Component} from "react";
import './Calc.scss';

class CalcComponent extends Component {
	constructor() {
		super();
		this.state = {
			result: 0
		}

	}

	static getDerivedStateFromProps(props, state) {
		return {rate: props.rate}
	}

	calcRate = (e) => {
		e.preventDefault()
		let elements = e.target.elements
		let currentCurrency = elements['current-currency'].value;
		let typeCurrency = elements['type-currency'].value;
		this.setState({
			result: (currentCurrency / this.state.rate[typeCurrency]).toFixed(2)
		})

	}


	render() {
		return (
			<div className='calculator'>
				<h3>Калькулятор обмена</h3>
				<div className="block">
					<div>Укажите сумму и требуемую валюту</div>
					<div>
						<form onSubmit={this.calcRate}>
							<input type="number" defaultValue='150' name='current-currency'/>
							<select name="type-currency" id="">
								{Object.keys(this.props.rate).map((keyName, i) => (
									<option key={keyName} value={keyName}>{keyName}</option>
								))}
							</select>
							<input type="submit" defaultValue='calc'/>
						</form>
					</div>
					<h4>Результат</h4>
					<div className="calc-res">
						<span>EUR {this.state.result}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default CalcComponent;