function PlusMinus(props){
    function handle(e){
        if(e.target.id.includes('minus')){
            props.handle({name:props.section, value: -1});
            return;
        }
        props.handle({name:props.section, value:1});
    }
    return (<>
        <img src={`icons/${props.section}_plus.png`} id="plus" onClick={((e)=> handle(e))}/>
        <img src={`icons/${props.section}_minus.png`} id="minus" onClick={((e)=> handle(e))}/>
        </>);

}

function Data(props){
    return(<div>
        Header: {props.data.header},
        Left: {props.data.left},
        Article: {props.data.article},
        Right: {props.data.right},
        Footer: {props.data.footer}
    </div>)
}

function App(){
//define data that will hold the state of all the sections within the holy grail
    const [data, setData] = React.useState({header:0, left:0, article:0, right:0, footer:0});

//Identify what's being passed in, and update the section
    function handle(section){
        console.log('Pong', section);
        const value = data[section.name] + section.value;
        const object = {[section.name]:value};
        setData({...data, ...object});
    }
// reference each component and pass into each the data and the function handle
    return(<>
        <div className="grid">
            <Header               handle={handle} data={data}/>
            <Left                 handle={handle} data={data}/>
            <Article              handle={handle} data={data}/>
            <Right                handle={handle} data={data}/>
            <Footer               handle={handle} data={data}/>
        </div>
    </>);

};


ReactDOM.render(
    <App/>, document.getElementById('root')
);