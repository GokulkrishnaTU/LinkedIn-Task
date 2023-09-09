import React, { useState } from 'react';

function Like() {
	const [ change, setChange ] = useState(true);
	return (
		<div className="">
			<button onClick={() => setChange(!change)} className="">
				<img className="h-10 w-10 " 
        src="https://static-exp1.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l" alt="" />
			</button>

		</div>
	);
}

export default Like;
