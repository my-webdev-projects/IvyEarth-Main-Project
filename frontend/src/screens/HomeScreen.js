import React from 'react';
import Plant from '../components/Plant';
import plants from '../plants';

const HomeScreen = () => {
  return (
    <>
      <div className='container'>
        <div className='dashboard'>
          <div className='row dashboard-row'>
            <div className='col-md-6'>
              <div id='custom-search-input'>
                <div className='input-group col-md-12 narrow'>
                  <input
                    type='text'
                    className='form-control input-lg'
                    placeholder='SEARCH FOR PLANTS'
                  />
                  <span className='input-group-btn'>
                    <button className='btn btn-info btn-lg' type='button'>
                      <i className='fas fa-search'></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h2 className='m-3'>LATEST PLANTS</h2>

          <div className='row' >
            {plants.map((plant) => (
              <Plant key={plant._id} plant={plant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
