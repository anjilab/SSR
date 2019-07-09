import React,{Component} from 'react'
export default class Childthing extends Component{
	state={
		color:'red'
	}
	changeColorRed=(e) =>{
		this.setState({
			
			color: 'red'

		})

	}
	changeColorGreen=() =>{
		this.setState({

			color: 'green'
		})
	}
	changeColorBlue=() =>{
		this.setState({

			color:'blue'
		})
	}
	




	render(){
		console.log('value of color is ',this.state.color)

		return(
			<div>
			<button onClick={this.changeColorRed} value1={this.state.color}>Change Me To Red</button>
			<button onClick={this.changeColorGreen} value={this.state.color}>Change Me To Green</button>
			<button onClick={this.changeColorBlue} value={this.state.color}>Change Me To Blue</button>
			</div>
			)
	}

}