import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Admin from "./Admin";
import NotFound from "./not-found";
import Demographic from "./Demographic";
import Consume from "./Consume";
import Interest from "./Interest";

export const createRoutes = store => ([
  {
    path: '/',
    indexRoute: Home
  }, {
    path: '/login',
    indexRoute: Login
  }, {
    path: '/about',
    indexRoute: About
  }, {
    path: '/admin',
    indexRoute: Admin
  }, {
    path: '/demographic',
    indexRoute: Demographic
  }, {
    path: '/consume',
    indexRoute: Consume
  },{
    path: '/intresets',
    indexRoute: Interest
  },  {
    path: '(.*)',
    indexRoute: NotFound
  }]
);

export default createRoutes;



