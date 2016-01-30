import React, {Component, PropTypes} from 'react';

import { connectToStores } from 'fluxible-addons-react';

// store
import friendsStore from '../stores/FriendsStore';

import { NavLink } from 'fluxible-router';

// action
import getFriends from '../actions/apiActions';

@connectToStores([friendsStore], (context) => {
  return context.getStore(friendsStore).getState()
})
class Friends extends Component {
    static contextTypes = {
        getStore: PropTypes.func,
        executeAction: PropTypes.func
    }

    static propTypes = {
        friends: PropTypes.array,
        friend: PropTypes.string
    }

    getMyFriends() {
      this.context.executeAction(getFriends);
    }

    constructor(props, context) {
        super(props, context);
    }

    render() {

      let friends = this.props.friends;
      let friend = this.props.friend;
        return (
            <div>
                <h2>Friends</h2>
                {friend && <p>My friend {friend}</p>}
                <button onClick={::this.getMyFriends}>Get my friends</button>
                <ul>
                  {
                    friends.map((f, i) => (<li key={f.id}>{f.name}</li>))
                  }
                </ul>
                <NavLink routeName='friend' navParams={{friend: 'mario'}}>Say hello to mario</NavLink>
            </div>
        );
    }
}

export default Friends;
