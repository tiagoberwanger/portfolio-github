import React, {useState, useEffect} from 'react';
import ProjectCard from '../Components/Card'
import { fetchListRepos } from '../Services/FetchAPI'

function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetchListRepos('tiagoberwanger')
      .then((response) => {
        setCards(response)
        setLoading(false);
      })
      .catch((err) =>{

        console.log(err.message);
      })
    }, [])

    return (
      loading ? <p>...loading</p> : (
      <div>
        Portfólio
        {console.log(cards)}
        {cards.map((card, index) => <ProjectCard card={card} index={index} /> )}
      </div>
    ));
}

export default Portfolio;