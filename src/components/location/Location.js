import React, { useContext } from 'react'
import {LocationContext} from '../providers/LocationProvider'
import './Location.css'
import LocationAnimalModal from './LocationAnimalModal'
import LocationEmployeeModal from './LocationEmployeeModal'

export default props => {
  //subscribes to changes in the locations value of the LocationContext object
  const {locations} = useContext(LocationContext)

  const location = props.location


  return (
      <React.Fragment>
          <div className="card" style={{width: 12 + 'rem'}}>
              <i className="marker fas fa-map-marker-alt fa-7x"></i>
              <div className="card-body">
                  <h4 className="card-title">{location.name}</h4>
                  <div>Address: {location.address}</div>
              </div>
              <div className="buttonFlex">
                <LocationAnimalModal {...props} location={location} animals={location.animals} />
                <LocationEmployeeModal employees={location.employees} />
              </div>
          </div>
      </React.Fragment>
  )
}