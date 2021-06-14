import React, {useState, useEffect } from 'react';
import { fetchName } from '../Services/FetchAPI';
import { Image, Jumbotron} from 'react-bootstrap';
import SocialIcons from '../Components/SocialIcons'
import Languages from '../Components/Languages'

function Header() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetchName('tiagoberwanger')
      .then((response) => {
        setUser(response)
        setLoading(false);
      })
      .catch((err) =>{

        console.log(err.message);
      })
    }, [])

    const headerDiv = {
      textAlign: 'center'
    }

    const imageStyle = {
      borderRadius: '50%',
    }

    return (
      loading ? <p>...loading</p> : (
        <Jumbotron style={headerDiv}>
          <Image style={imageStyle} src={user.avatar_url} fluid />
          <h2>Tiago Berwanger</h2>
          <h4>Fullstack Developer</h4>
          <SocialIcons />
          <Languages />
        </Jumbotron>
      )
    );
}

export default Header;
