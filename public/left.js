//form/field to enter tasks. All fields must be selected. Upon first entry users will be guided to set a goal. The goal will be broken down into smaller benchmarks. A bigger/better sticker and/or sticker set will be available upon achievement

function Left(props) {
	return (
		<>
			<aside>
				<PlusMinus section='left' handle={props.handle} />
				<div className='section'>Enter new task:{props.data.left}</div>
				<Data data={props.data} />
			</aside>
		</>
	);
}