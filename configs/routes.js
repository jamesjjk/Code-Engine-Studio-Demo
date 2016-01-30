import { sayHello } from '../actions/apiActions';

export default {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/Home')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        handler: require('../components/About')
    },
    friends: {
        path: '/friends',
        method: 'get',
        page: 'friends',
        title: 'Friends',
        handler: require('../components/Friends')
    },
    friend: {
        path: '/friends/:friend',
        method: 'get',
        title: 'Friend',
        handler: require('../components/Friends'),
        action: function (context, payload, done) {
          let friend = payload.get('params').get('friend');
          context.executeAction(sayHello, friend, (err)=>{
            if(err) return done(err);
            done();
          });
        }
    }
};
