//This is the article of the holy grail layout. When a sticker is earned (a user enters a new completed task) they are given the option of a set of stickers (the tier their currently at). They can place that sticker anywhere on the sticker wall - they can zoom in and out of the sticker wall, but once it's placed it cannot be moved. The stickers can overlap each other.

function Article(props){
    return (<>
        <article>
            <PlusMinus section="article" handle={props.handle}/>
            <div className="section">Sticker Board:{props.data.article}</div>
            <Data data={props.data}/>
        </article>
    </>);
}