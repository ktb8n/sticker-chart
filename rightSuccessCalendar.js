//shows boxes that correlate to frequency of tasks per time (set according to user eventually - but sorta like githubs)

function RightSuccessCalendar(props) {
	return (
		<>
			<aside>
				<PlusMinus section='aside' handle={props.handle} />
				<div className='rightSuccessCalendar, section'>Success Calendar:{props.data.rightSuccessCalendar}</div>
				<Data data={props.data} />
			</aside>
		</>
	);
}