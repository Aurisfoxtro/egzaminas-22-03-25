import {useState, useEffect} from "react";
import Joke from "../joke/Joke";

function Main() {

    const [jokes, setJokes] = useState([]);

    useEffect(()=>{
        try{
        fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10`)
            .then(response=>response.json())
            .then(data=>setJokes(data))
        }catch(msg){
            console.log(msg)
        }
    }, [])
    console.log(jokes);
    // console.log(jokes.jokes[0].joke);

    return (
      <>
        {(jokes != null)?jokes.jokes.map((joke, i)=> 
                
                (joke.type == 'single')?(
                <Joke
                    key = {i}
                    content={joke.joke}
                    />
                ):(
                    <Joke
                    key = {i}
                    content={joke.setup + ' ' + joke.delivery}
                    />
                )
                ):(
                 console.log('Krauna')                   
                )}
      </>
    );
  }
  
  export default Main;