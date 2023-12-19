import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import  {loginEpic} from './Epic';
import loginReducer from './Reducer'

const epicMiddleware = createEpicMiddleware();


const rootEpic = combineEpics(
  loginEpic,
);

const store = createStore(loginReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;