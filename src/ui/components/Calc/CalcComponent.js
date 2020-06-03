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
					<div className='mb-2 text-muted'>Укажите сумму и требуемую валюту</div>
					<div>
						<form className='form-group' onSubmit={this.calcRate}>
							<input className='form-control col-5 d-inline-block mr-1' type="number" placeholder='Сумма обмена' name='current-currency'/>
							<select className='form-control col-5 d-inline-block mb-1' name="type-currency" id="">
								{Object.keys(this.props.rate).map((keyName, i) => (
									<option key={keyName} value={keyName}>{keyName}</option>
								))}
							</select>
							<button className='btn btn-success' type="submit" defaultValue='calc'>Обмен</button>
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