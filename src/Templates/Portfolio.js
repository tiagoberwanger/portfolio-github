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
        const reposArray = [];
        response.map((repo) => {
          if (repo.stargazers_count > 0) {
            reposArray.push(repo)
          }
        })
        setCards(reposArray)
        setLoading(false);
      })
      .catch((err) =>{

        console.log(err.message);
      })
    }, [])

    const mainDiv = {
      marginTop: '50px',
      textAlign: 'center'
    }

    return (
      loading ? <p>...loading</p> : (
      <div style={mainDiv}>
        <h2>Portfólio</h2>
        {cards.map((card, index) => <ProjectCard card={card} index={index} /> )}
      </div>
    ));
}

export default Portfolio;