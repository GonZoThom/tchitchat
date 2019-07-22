import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

const Landing = () => {    
    return (
        <div>
            <h2>THIS IS A LANDING PAGE !</h2>
            <p>Bienvenue sur Tchitchat - <br/> 
                <em>L'application de messagerie du futur</em></p>
            <Link to="/signin" className="link">Se Connecter</Link>
            <Link to="/signup" className="link">S'inscrire</Link>
        </div>
    )
};

export default withTracker(() => ({
    userId: Meteor.userId(),
}))(Landing);