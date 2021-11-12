import React from 'react'
import GoogleMapReact from 'google-map-react'
import { useFetch } from '../hooks/useFetch'

const Map = () => {
    const { isLoading, response, error } = useFetch("http://localhost:4444/api/shops/all", {})
    if (isLoading) {
        return <div>loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    if (!response) {
        return null
    }
    return (
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDU2nosQrZ0UkQGqlfyjOFbavEPQEPfYOQ' }}
        defaultCenter={{lat: 52.5243700, lng: 13.4105300}}
        defaultZoom={13}
      >
        {response.map((map, i) => {
            return <div key={i} className="w-10 h-10 bg-black text-white inline-block" lat={map.lat} lng={map.lng}>{map.name}</div>
        })}
        </GoogleMapReact>
    )
}

export default Map