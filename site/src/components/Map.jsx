import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ data }) => {
    return (
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDU2nosQrZ0UkQGqlfyjOFbavEPQEPfYOQ' }}
        defaultCenter={{lat: 52.5243700, lng: 13.4105300}}
        defaultZoom={13}
      >
        {data.map((map, i) => {
            return <div key={i} className="w-10 h-10 bg-black text-white inline-block" lat={map.lat} lng={map.lng}>{map.name}</div>
        })}
        </GoogleMapReact>
    )
}

export default Map