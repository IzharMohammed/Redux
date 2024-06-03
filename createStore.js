import { createStore , bindActionCreators } from "redux";

/*
State :-
State (also called the state tree) is a broad term, but in the Redux API it usually refers to the single state
 value that is managed by the store and returned by getState(). It represents the entire state of a Redux application, 
 which is often a deeply nested object.

Action :-
An action is a plain object that represents an intention to change the state. Actions are the only way to get data
 into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to 
 eventually be dispatched as actions.

 Store :-
 A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it

Action Creator :-
An action creator is, quite simply, a function that creates an action. Do not confuse the two terms—again, an action is a payload 
of information, and an action creator is a factory that creates an action.
Calling an action creator only produces an action, but does not dispatch it. You need to call the store's dispatch function to actually 
cause the mutation. Sometimes we say bound action creators to mean functions that call an action creator and immediately dispatch its result to a specific store instance.

 */

function demoReducer(state, action) {
    if (action.type == 'add_item') {
        return [...state, { name: action.itemName, quantity: action.itemQuantity }]
    }
    return state;
}

const initialState = [{ name: 'izhar' }, { name: 'mohammed' }];

// These functions are called as action creators
const add_item = (name, quantity) => (
    {
        type: 'add_item',
        itemName: name,
        itemQuantity: ((quantity) ? quantity : 1)
    }
)

const store = createStore(demoReducer, initialState);

const actions = bindActionCreators({add_item},store.dispatch);

console.log(store.getState())

store.dispatch(add_item('mango',5));
console.log(store.getState())


store.dispatch(add_item('apple',1));
console.log(store.getState());

actions.add_item("pineApple",3);
console.log(store.getState());