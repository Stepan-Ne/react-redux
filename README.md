# Getting Started with Create React App

…or create a new repository on the command line
echo "# react-redux" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Stepan-Ne/react-redux.git
git push -u origin main


##  REDUX
{createStore & combineReducers} from redux;
{ Provider } from react-redux;
compose from redux & redux devTools ;
connect from react-redux;
reducer & AC;

flux:
form component has state - state put to AC after submit - connect put AC to dispatch -
dispatching data put to state - state comes to reducer - reducer return new state - mapStatetoProps;

validation: if text.trim();

thunk:
it is middleware for store;
it helps to dispatch async actions;
thunk from redux-thunk & applyMiddleware from redux;

1. appReducer for Loading


