import React from 'react';


const SearchBox = ({searchchange}) => {
	return(
		<div className='pa2'>
			<input
			onChange={searchchange} 
			className='b--green pa3 bg-lightest-blue ba'
			type='text' 
			placeholder='Serach Robots'/>
		</div>
		);
}

export default SearchBox;