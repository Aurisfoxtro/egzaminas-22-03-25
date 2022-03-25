import "./Joke.css"

function Joke(props) {
    
    return (
      <div className="jokecard">
        <p className="content">{props.content}</p>
      </div>
    );
  }
  
  export default Joke;