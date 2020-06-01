import React from 'react';
import Blog from '../Functional/Blog';

class Home extends React.Component {
    render() {
        return <div>
            <h1>Blog Update</h1>
            <hr />
            <Blog
                date="20 April 2020"
                judul="Tekonologi Blockchain" />
            <Blog
                date="21 April 2020"
                judul="Tekonologi JWT" />
            <Blog
                date="22 April 2020"
                judul="Tekonologi IoT" />
            <Blog
                date="23 April 2020"
                judul="Tekonologi Rest API" />
            <Blog
                date="24 April 2020"
                judul="Tekonologi Cloud" />
            <Blog
                date="25 April 2020"
                judul="Tekonologi Deno TS" />
        </div>
    }
}

export default Home;