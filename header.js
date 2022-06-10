//header duh: have a small hamburger nav where a user can access/edit their goals and also see the data of their accomplishments

function Header(props) {
	return (
		<>
			<header>
				<PlusMinus section='header' handle={props.handle} />
				<div className='header, section'>Footer:{props.data.header}</div>
				<Data data={props.data} />
			</header>
		</>
	);
}