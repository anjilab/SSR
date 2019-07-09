import React from 'react'


const Comp2 =(props) =>{
	return (
		<div>
		<h1>This is from child component</h1>
		<button onClick={props.value}>Childcomponent</button>
		</div>
		)
}
export default Comp2;
