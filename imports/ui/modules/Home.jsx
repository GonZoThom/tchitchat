import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

// console.log(userId);
const Home = () => {    
    return (
        <div>
            <h2>THIS IS A LANDING HOME PAGE !</h2>
            <p>Bienvenue sur Tchitchat - <br/> 
                <em>L'application de messageire du futur</em></p>
            <Link to="/signin" >Se Connecter</Link>
            <Link to="/signup" >S'inscrire</Link>
        </div>
    )
};

// export default Home;
export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Home);