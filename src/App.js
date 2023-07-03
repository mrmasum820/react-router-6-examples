import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Main from './layout/Main'
import Friends from './components/friends/Friends';
import FriendDetails from './components/friendDetails/FriendDetails';
import PostDetails from './components/postDetails/PostDetails';
import Posts from './components/posts/Posts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        {
          path: 'friends',
          element: <Friends></Friends>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    { path: '*', element: <div>This route isnot found</div> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
