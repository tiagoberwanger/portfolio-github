import React, {useState, useEffect } from 'react';
import { fetchName } from '../Services/FetchAPI';
import { Image } from 'react-bootstrap';

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
    return (
      loading ? <p>...loading</p> : (
        <div>
          <Image src={user.avatar_url} rounded />
        </div>
      )
    );
}

export default Header;
