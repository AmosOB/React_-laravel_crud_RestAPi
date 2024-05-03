import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className='row mx-2 mt-3 float-end'>
                <div className="col">
                    <Link to={ `/register`}>
                        <h4 className=''>Register</h4>
                    </Link>
                </div>
                <div className="col">
                    <Link to={ `/login`}>
                        <h4 className=''>Login</h4>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
