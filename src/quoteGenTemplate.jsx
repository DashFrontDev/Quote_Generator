const QuoteGenTemplate = (props) => {
  return(
    <div>
    <p><span className="hightlight">Quote:</span> {props.quote}</p>
    <p><span className="hightlight">Author:</span> {props.author}</p>
    <p><span className="hightlight">Category:</span> {props.category}</p>
    </div>
    );
}


export default QuoteGenTemplate