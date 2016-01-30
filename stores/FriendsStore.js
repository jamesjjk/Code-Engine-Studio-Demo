import createStore from 'fluxible/addons/createStore';

export default createStore({
    storeName: 'FriendsStore',
    handlers: {
        'RECEIVED_FRIENDS_ACTION': 'handleData',
        'HELLO_FRIEND': 'handleFriend'
        //'NAVIGATE_START': 'handleNavStart' //clear store = clear page
    },
    initialize: function () {
      this.friends = [];
      this.friend = null;
    },
    handleFriend: function(friend) {
      this.friend = friend;
      this.emitChange();
    },
    handleData: function (res) {
        this.friends = res;
        this.emitChange();
    },
    getState: function () {
        return {
            friend: this.friend,
            friends: this.friends
        };
    },
    dehydrate: function () {
        return this.getState();
    },
    rehydrate: function (state) {
        this.friend = state.friend;
        this.friends = state.friends;
    }
});
