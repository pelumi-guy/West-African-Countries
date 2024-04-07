import React, { Fragment, useEffect, useRef, useState, useContext } from 'react';
import axios from 'axios';
import "../../assets/styles/countries.css";
import CountryImage from '../reusables/CountryImage';
import SearchContext from '../../contexts/SearchContext';
import Loader from '../reusables/Loader';

const CountriesList = () => {

    const [allCountries, setAllCountries] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const modalRef = useRef();

    const { keyword } = useContext(SearchContext);


    useEffect(() => {
        const searchCountries = () => {

            const searchTerm = keyword ? keyword.toLowerCase() : keyword;

            const countries = allCountries.filter(c => c.name.common.toLowerCase().includes(searchTerm));
            setSearchResult(countries);

            console.log({ keyword, searchResult });
        }

        searchCountries();
    }, [keyword, allCountries])

    useEffect(() => {
        const getCountries = async () => {
            setLoading(true);

            try {
                const response = await axios.get('https://restcountries.com/v3.1/subregion/Western Africa');

                const data = response.data;
                setAllCountries(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getCountries();
    }, []);

    const filterCountries = () => {
        if (keyword) {
            return searchResult;
        } else {
            return allCountries;
        }
    }

    return (
        <div className='main'>
            <h2 className='text-center'>Click on a country to see details</h2>

            <p className='ms-4 lead'>{`${keyword ? 'Search Result' : 'List of all West African Countries'}`}</p>
            <div className='px-4'>
                <hr />
            </div>

            <i className="fa-brands fa-instagram"></i>

            <div className="container-fluid row d-flex justify-content-evenly mx-0">
                {loading ? <Loader /> :
                    <>
                        {
                            keyword && searchResult.length === 0 ?
                                (<p className='lead text-center mt-5'>Sorry, we couldn&apos;t find any West African countries matching your search terms</p>) : (
                                    filterCountries().map((country, idx) => {
                                        const currency = country.currencies[Object.keys(country.currencies)[0]];
                                        const currencyPrint = `${currency.name} (${currency.symbol})`;

                                        const dailingCodePrefix = country.idd.root
                                        const dailingCodes = dailingCodePrefix + country.idd.suffixes.join(`, ${dailingCodePrefix}`);
                                        // {country.idd.root.suffixes.join(`, {country.idd.root}`)

                                        return (
                                            <Fragment key={idx}>
                                                <button className=" btn col-4 col-md-2 d-flex justify-content-between align-items-center my-3 mx-1 px-3 country-thumbnail" key={idx}
                                                    data-bs-toggle="modal" data-bs-target={`#countryDetailsModal-${idx}`}
                                                // data-bs-whatever={country.name.common}
                                                >
                                                    <p className='country-name my-0 text-start'>{country.name.common}</p>

                                                    {/* <figure className="flag flag-container">
                                        <img
                                            src={country.flags.png}
                                            alt={`${country.name.common}'s flag`}
                                            className="rounded-circle img-fluid"
                                        />
                                    </figure> */}

                                                    <CountryImage classNames={"flag flag-container"} src={country.flags.svg} altText={`${country.name.common}'s flag`} rounded
                                                    />
                                                </button>

                                                <div className="modal fade" id={`countryDetailsModal-${idx}`} tabIndex="-1" aria-labelledby={`countryDetailsModalLabel-${idx}`} aria-hidden="true" ref={modalRef}>
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title"
                                                                    id={`countryDetailsModalLabel-${idx}`}
                                                                >
                                                                    {country.name.common}
                                                                </h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body d-flex justify-content-between">

                                                                <div>
                                                                    <p className='official-name'><span className='fw-bold'>Official Name:</span>&nbsp;{country.name.official}</p>

                                                                    <p><span className='fw-bold'>Capital:</span>&nbsp;{country.capital[0]}</p>

                                                                    <p><span className='fw-bold'>Currency:</span>&nbsp;{currencyPrint}</p>

                                                                    <p><span className='fw-bold'>Top-level Domain (TLD):</span>&nbsp;{country.tld.join(', ')}</p>

                                                                    <p><span className='fw-bold'>International Dialing Code:</span>&nbsp;{dailingCodes}</p>
                                                                </div>

                                                                <div className='modal-images'>
                                                                    <CountryImage classNames={"modal-flag-container"} src={country.flags.svg} altText={`${country.name.common}'s flag`}
                                                                    />


                                                                    <CountryImage classNames={"coat-of-arms"} src={country.coatOfArms.svg} altText={`${country.name.common}'s coat of arms`}
                                                                    />


                                                                </div>

                                                            </div>
                                                            {/* <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        )
                                    })
                                )}
                    </>}
            </div>

        </div>
    )
}

export default CountriesList