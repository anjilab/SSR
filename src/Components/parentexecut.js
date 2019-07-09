import React,{Component} from 'react';
// child ma bhako kura parent le execute i.e child to parent communication
import Childthing from './childkokura';
const divStyle ={
	margin: '40px',
	border: '5px solid black',
	backgroundColor:'violet'
};
export default class CompParent extends Component{
	render(){
		console.log('this.props',this.props)

		return(
			<div style={divStyle}>
			<Childthing color={this.props.value1}/>
			</div>
			)
	}
	
}