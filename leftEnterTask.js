//form/field to enter tasks. All fields must be selected. Upon first entry users will be guided to set a goal. The goal will be broken down into smaller benchmarks. A bigger/better sticker and/or sticker set will be available upon achievement

function leftEnterTask(props) {
	return (
		<>
			<aside>
				<PlusMinus section='leftEnterTask' handle={props.handle} />
				<div className='leftEnterTasK, section'>Enter new task:{props.data.leftEnterTask}</div>
				<Data data={props.data} />
			</aside>
		</>
	);
}