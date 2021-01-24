import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import plants from '../plants';

const PlantScreen = ({ match }) => {
  const plant = plants.find((p) => p._id === match.params.id);

  return (
    <>
      <header>
        <div className='container text-left plant-profile-container'>
          <Link className='btn btn-light' to='/'>
            Go Back
          </Link>
          <div className='row'>
            <div class='col-md-7 col-sm-12'>
              <h6>{plant.genusName}</h6>
              <h1>{plant.name}</h1>
              <h2>Plant</h2>
              <p className='text-muted'>{plant.description}</p>
              <Rating value={plant.rating} text={`${plant.numReviews} reviews`}></Rating>
              <a href='#scroll-target' class='btn px-5 py-2'>
                See More
              </a>
            </div>
            <div class='col-md-5 col-sm-12 my-auto'>
              <img src={plant.image} alt={plant.name} />
            </div>
          </div>
        </div>
      </header>

      <div className='main-info' id='scroll-target'>
        <div className='container info p-0'>
          <div className='plant-info row text-center'>
            <div className='col-4'>
              <h6>Season</h6>
              <h4>{plant.season}</h4>
              <p>Blooming season</p>
            </div>
            <div className='col-4'>
              <h6>Plant Type</h6>
              <h4>{plant.type}</h4>
              <p>Type of plant</p>
            </div>

            <div className='col-4'>
              <h6>Light</h6>
              <h4>{plant.light}</h4>
              <p>Amount of light</p>
            </div>
          </div>
        </div>
      </div>

      <div className='main-info2 container text-center p-0'>
        <div className='row justify-content-between'>
          <div className='col-md-4'>
            <h3>Properties</h3>
            <p className='d-block'>
              <span className='plant-prop'>Height</span>
              <span className='plant-value'>{plant.height}</span>
            </p>
            <p className='d-block'>
              <span className='plant-prop'>Width</span>
              <span className='plant-value'>{plant.width}</span>
            </p>
            <p className='d-block'>
              <span className='plant-prop'>Propagation</span>
              <span className='plant-value'>{plant.propagation}</span>
            </p>
            <p className='d-block'>
              <span className='plant-prop'>Flower Color</span>
              <span className='plant-value'>{plant.flowerColor}</span>
            </p>
            {/* <p className='d-block'>
              <span className='plant-prop'>Foliage Color</span>
              <span className='plant-value'>{plant.}</span>
            </p> */}

            <Link to='#' className='btn px-5 py-2'>
              Plant
            </Link>
          </div>
          <div className='col-md-7'>
            <h3>Care Must Know</h3>

            <p>
              Sunflowers thrive in full sun and moist, well-drained soil. Start
              plants from seed indoors six to eight weeks before the last frost
              or sow them directly in the garden once soil has warmed in spring.
              In the garden, plant seeds about 1 inch deep and about 6 inches
              apart. Water as needed to keep the soil moist. Seedlings emerge in
              about two weeks. When seedlings are about 3 inches tall, thin them
              so there is one plant every 12 to 18 inches. Well-spaced seedlings
              are key to strong, upright sunflowers later in the season. Plants
              will develop weak and wobbly stems if they grow too closely
              together, or if they don't get enough light.
            </p>

            <h3>Harvest Tips</h3>
            <p>
              A few varieties of sunflowers are grown for their edible seeds.
              'Giant Grey Stripe' and 'Mammoth Russian' are two popular
              varieties. These sunflowers form a single large flower head atop a
              stem that may reach 10 feet or more. Allow the seed heads of these
              varieties to start to dry and turn yellow before cutting the head
              off the stalk. Store the head in a dry, well-ventilated place
              where the seeds can fully mature. Seeds are ready to store or eat
              when the disk at the back of the flower has turned dark brown.
            </p>
          </div>
        </div>
      </div>

      <div className='varieties container'>
        <h2 style={{ textAlign: 'center' }}>Other Varieties</h2>
        <div className='row mb-2'>
          <div className='col-md-12 col-lg-6'>
            <div className='card flex-md-row mb-4 box-shadow h-md-250'>
              <img
                className='card-img-right flex-auto d-none d-md-block'
                data-src='holder.js/200x250?theme=thumb'
                alt='Thumbnail [200x250]'
                src='./assets/sun-1.jpeg'
                style={{ width: '200px' }}
                data-holder-rendered='true'
              />
              <div className='card-body d-flex flex-column align-items-start'>
                <h3 className='mb-0'>'Autumn Beauty' sunflower</h3>

                <p className='card-text mb-auto'>
                  This Helianthus variety bears large reddish-orange flowers on
                  5-foot-tall plants.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className='card flex-md-row mb-4 box-shadow h-md-250'>
              <img
                className='card-img-right flex-auto d-none d-md-block'
                data-src='holder.js/200x250?theme=thumb'
                alt='Thumbnail [200x250]'
                src='./assets/sun-2.jpeg'
                style={{ width: '200px' }}
                data-holder-rendered='true'
              />
              <div className='card-body d-flex flex-column align-items-start'>
                <h3 className='mb-0'>'Autumn Beauty' sunflower</h3>

                <p className='card-text mb-auto'>
                  This Helianthus variety bears large reddish-orange flowers on
                  5-foot-tall plants.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-md-12 col-lg-6'>
            <div className='card flex-md-row mb-4 box-shadow h-md-250'>
              <img
                className='card-img-right flex-auto d-none d-md-block'
                data-src='holder.js/200x250?theme=thumb'
                alt='Thumbnail [200x250]'
                src='./assets/sun-1.jpeg'
                style={{ width: '200px' }}
                data-holder-rendered='true'
              />
              <div className='card-body d-flex flex-column align-items-start'>
                <h3 className='mb-0'>'Autumn Beauty' sunflower</h3>

                <p className='card-text mb-auto'>
                  This Helianthus variety bears large reddish-orange flowers on
                  5-foot-tall plants.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className='card flex-md-row mb-4 box-shadow h-md-250'>
              <img
                className='card-img-right flex-auto d-none d-md-block'
                data-src='holder.js/200x250?theme=thumb'
                alt='Thumbnail [200x250]'
                src='./assets/sun-2.jpeg'
                style={{ width: '200px' }}
                data-holder-rendered='true'
              />
              <div className='card-body d-flex flex-column align-items-start'>
                <h3 className='mb-0'>'Autumn Beauty' sunflower</h3>

                <p className='card-text mb-auto'>
                  This Helianthus variety bears large reddish-orange flowers on
                  5-foot-tall plants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container comment-section'>
        <div className='row bootstrap snippets'>
          <div className='col-md-12 col-sm-12'>
            <div className='panel-heading'>Comment Panel</div>

            <div className='comment-wrapper'>
              <div className='panel panel-info'>
                <div className='panel-body'>
                  <textarea
                    className='form-control'
                    placeholder='write a comment...'
                    rows='3'
                  ></textarea>
                  <br />

                  <button type='button' className='btn btn-info pull-right'>
                    Post
                  </button>
                  <div className='clearfix'></div>
                  <hr />
                  <ul className='media-list'>
                    <li className='media'>
                      <Link to='#' className='pull-left'>
                        <img
                          src='https://bootdey.com/img/Content/user_1.jpg'
                          alt=''
                          className='img-circle'
                        />
                      </Link>
                      <div className='media-body'>
                        <span className='text-muted pull-right'> </span>
                        <strong className='text-success'>@MartinoMont</strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet,
                          <Link to='#'>#consecteturadipiscing </Link>.
                        </p>
                        <button to='#' type='button' className='btn btn-react'>
                          <i className='far fa-thumbs-up'></i>
                          <span className='react'>
                            Like <span>0</span>
                          </span>
                        </button>
                        <button type='button' className='btn btn-react'>
                          <i className='far fa-thumbs-down'></i>
                          <span className='react'>
                            Dislike <span>0</span>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className='media'>
                      <Link to='#' className='pull-left'>
                        <img
                          src='https://bootdey.com/img/Content/user_2.jpg'
                          alt=''
                          className='img-circle'
                        />
                      </Link>
                      <div className='media-body'>
                        <span className='text-muted pull-right'> </span>
                        <strong className='text-success'>
                          @LaurenceCorreil
                        </strong>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor{' '}
                          <Link to='#'>#ipsumdolor </Link>adipiscing elit.
                        </p>
                        <button to='#' type='button' className='btn btn-react'>
                          <i className='far fa-thumbs-up'></i>
                          <span className='react'>
                            Like <span>0</span>
                          </span>
                        </button>
                        <button type='button' className='btn btn-react'>
                          <i className='far fa-thumbs-down'></i>
                          <span className='react'>
                            Dislike <span>0</span>
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className='media'>
                      <Link to='#' className='pull-left'>
                        <img
                          src='https://bootdey.com/img/Content/user_3.jpg'
                          alt=''
                          className='img-circle'
                        />
                      </Link>
                      <div className='media-body'>
                        <span className='text-muted pull-right'> </span>
                        <strong className='text-success'>@JohnNida</strong>
                        <p>
                          Lorem ipsum dolor <Link to='#'>#sitamet</Link> sit
                          amet, consectetur adipiscing elit.
                        </p>
                        <button to='#' type='button' className='btn btn-react'>
                          <i className='far fa-thumbs-up'></i>
                          <span className='react'>
                            Like <span>0</span>{' '}
                          </span>
                        </button>
                        <button type='button' className='btn btn-react'>
                          <i className='far fa-thumbs-down'></i>
                          <span className='react'>
                            Dislike <span>0</span>{' '}
                          </span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantScreen;



