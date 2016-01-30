import jsonfriends from '../mock_data/friends.json'

export default function getFriends(actionContext, payload, done) {
    setTimeout(function () { // simulate async
        actionContext.dispatch('RECEIVED_FRIENDS_ACTION', jsonfriends);
        done();
    }, 500);
}

export function sayHello(actionContext, payload, done) {
    actionContext.dispatch('HELLO_FRIEND', payload);
    //ALWAY RUN THE CALLBACK (any errors can be wrapped in an error object)
    done()
}
