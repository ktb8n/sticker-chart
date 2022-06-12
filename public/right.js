//shows boxes that correlate to frequency of tasks per time (set according to user eventually - but sorta like githubs)

function Right(props) {
	return (
		<>
			<aside>
				<PlusMinus section='right' handle={props.handle} />
				<div className='section'>Success Calendar:{props.data.right}</div>
				<Data data={props.data} />
			</aside>
		</>
	);
}