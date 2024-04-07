import React,{ useContext } from 'react';
import Search from './Search';
import Map from "../../assets/images/map.png";
import AfricanPrint from "../../assets/images/AfricanPrint.jpeg";
import SearchContext from '../../contexts/SearchContext';

const Header = () => {

    const { setKeyword } = useContext(SearchContext);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid row d-flex justify-content-between">
                <div className="col-9">
                <a className="navbar-brand d-flex align-items-center nav-container" href="#">
                    <img src={Map} alt="Map of West Africa" className="d-inline-block align-text-top img-fluid map me-1"
                    onClick={() => setKeyword('')}
                    />
                    &nbsp;
                    <div className="text-mask-container d-none d-lg-block">
                        <img src={AfricanPrint} alt="African Print" className='african-print img-fluid show-border clipped-image' />
                        <svg width="200" height="120"
                            xmlns="http://www.w3.org/2000/svg">
                            <clipPath id='clip-mask'>
                                <text x="10" y="130" fontSize="50" fill="black" stroke="black" strokeWidth="5px" className='kablammo-header'>West African Countries</text>
                            </clipPath>
                        </svg>
                    </div>

                    <h1 className='d-block d-lg-none top-header'>West African<br />Countries</h1>
                </a>
                </div>


                <div className='col-12 col-lg-3 mt-1 mt-lg-0'>
                    <Search />
                </div>

            </div>
        </nav>
    )
}

export default Header