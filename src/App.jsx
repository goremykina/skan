import HomePage from "./pages/home/home-page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authorization from "./pages/authorization/authorization.jsx";
import Main from "./components/main/main.jsx";
import Search from "./pages/search/search.jsx";
import SearchResult from "./pages/search_result/search-result.jsx";


const router = createBrowserRouter([
    {
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'authorization',
                element: <Authorization />
            },
            {
                path: 'search',
                element: <Search />
            },
            {
                path: '/search_result',
                element: <SearchResult />
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
  )
}

export default App
