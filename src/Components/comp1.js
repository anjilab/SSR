import React,{Component}from 'react';
import ChildComponent from './comp2';

export default class Comp1 extends Component{
	
	render(){
		var clik =()=>{alert('hello from parent')}
		return(
			<div>
			<h2>This is from Parent Component</h2>
			<ChildComponent value={clik}/>
			</div>)
	}

}
// yesma parent ma bhako function execute huna child bata invoke gareko by providing reference
// this is parent to child communication

