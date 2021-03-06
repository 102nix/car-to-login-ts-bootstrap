import React from 'react'
import './Info.scss'

const Info: React.FC = () => {
  
   return (
    <div className="info">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">В данном проекте задействованы:</div>
            <div className="card-body">
              <p>React, React-router-dom, React Function Components, React hooks, React-Typescript.</p>
              <p>Redux, Redux-form, Redux-thunk, React-redux.</p>
              <p>Bootstrap, React-bootstrap, Node-sass, CSS Flexbox.</p>
              <p>Axios.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Info