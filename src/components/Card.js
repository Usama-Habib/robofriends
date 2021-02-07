import React from 'react';


const Card = (props) =>	{
	return (
		<div className='bg-light-green br3 pd3 ma1 bw2 shadow-5 grow dib tc'>
				<img alt="robot" src={`https://robohash.org/${props.id}?size:50x50`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>

	);
}

export default Card;