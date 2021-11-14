import React from 'react'
import { useFetch } from './hooks/useFetch'
import Create from './components/Create'
import Map from './components/Map'

const App = () => {
    const { isLoading, response, error } = useFetch("http://localhost:4444/api/shops/all", {})
    if (error) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <h2>{error.message}</h2>
        </div>
      )
    }
    if (isLoading) {
        return (
          <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mb-4"></div>
            <h2>Loading...</h2>
          </div>
        )
    }
    if (!response) {
        return null
    }
    return (
      <div className="w-full h-screen relative">
          <Create />
          <Map data={response}/>
      </div>
    )
}

export default App
