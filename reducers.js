import { createStore, combineReducers, bindActionCreators } from "redux";

const state = {
    users: [
        {
            id: 1,
            name: 'izhar'
        },
        {
            id: 2,
            name: 'mohammed'
        },
        {
            id: 3,
            name: "random"
        }
    ],

    todos: [
        {
            userId: 1,
            todoId: 1,
            name: 'learn nextJS'
        },
        {
            userId: 1,
            todoId: 2,
            name: "learn express"
        },
        {
            userId: 3,
            todoId: 1,
            name: "learn JS"
        },
        {
            userId: 2,
            todoId: 1,
            name: "learn java"
        }
    ]
}

const ADD_USER = 'add_user';
const EDIT_TODO = 'edit_todo';

// These functions are called as action creators
const add_user = (id, name) => (
    {
        type: ADD_USER,
        userId: id,
        userName: name
    }
)

// These functions are called as action creators
const edit_todo = (userId, todoId, name) => (
    {
        type: EDIT_TODO,
        userId: userId,
        todoId: todoId,
        name: name
    }
)

//These are reducer functions
function userReducer(users = state.users, action) {
    if (action.type == ADD_USER) {
        let newUser = { id: action.userId, name: action.userName };
        let newUsers = [ ...users, newUser ];
        return newUsers;
    }
    return users;
}

//These are reducer functions
function todoReducer(todos = state.todos, action) {
    if (action.type == EDIT_TODO) {
        let newTodos = todos.map(todo => {
            if (todo.todoId == action.todoId && todo.userId == action.userId) {
                todo.name = action.name;
            }
            return todo;
        })
        return newTodos;
    }
    return todos;
}





// combineReducers :- used for combining multiple reducres
const combinedReducer = combineReducers({ users: userReducer, todos: todoReducer });
const store = createStore(combinedReducer, {});

//
const actions = bindActionCreators({ add_user ,edit_todo}, store.dispatch)



actions.add_user(10,'smartest')
actions.add_user(20,'Dummy')

actions.edit_todo(1,1,'explore shadcn !!!')

console.log(store.getState());

