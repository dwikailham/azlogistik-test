import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiAlertCircle } from 'react-icons/fi'
import './style.css'

export default function Movie() {

    const [movie, setMovie] = useState([])
    const [movieByGenre, setMovieByGenre] = useState([])
    const [genre, setGenre] = useState([])
    const [search, setSearch] = useState("");
    const [modal, setOpenModal] = useState(false);
    const [sinopsis, setSinopsis] = useState("")
    const [idGenre, setIdGenre] = useState("")

    console.log("ISII MOVIE", movie)
    console.log("ISII GENRE", genre)

    function getMovie() {
        axios("https://api.themoviedb.org/3/discover/movie?api_key=3b2c6df7fedf2d0e3997eeb808e9a4a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false")
            .then((res) => {
                console.log("ISINYA CUUY", res)
                setMovie(res.data.results)
            })
    }

    function getGenre() {
        axios("https://api.themoviedb.org/3/genre/movie/list?api_key=3b2c6df7fedf2d0e3997eeb808e9a4a8")
            .then((res) => {
                console.log("isi genre", res)
                setGenre(res.data.genres)
            })
    }

    function searchTitle(event) {
        setSearch(event.target.value)
    }

    useEffect(() => {
        getMovie()
        getGenre()
    }, [])

    const filterGenre = movie.filter(el => el.genre_ids.map(el => el == idGenre))
    const searchByTitle = filterGenre.filter(el => el.title.toLowerCase().includes(search))

    return (
        <>
            <div className='container'>
                <div className='header-action'>
                    <input className='input-search' type="text" placeholder='Search' onChange={searchTitle} />
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" className='btn-genre'>
                            genre
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                genre.map((el, i) => (
                                    <Dropdown.Item data-cy="sort-selection" tabIndex="0" onClick={() => setIdGenre(el.id)} >
                                        {el.name}
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Poster</th>
                            <th>Judul Film</th>
                            <th>Sinopsis</th>
                        </tr>
                    </thead>
                    {searchByTitle.map((el, i) => (
                        <tbody key={i}>
                            <tr>
                                <td>{i + 1}</td>
                                <td><img src={"https://image.tmdb.org/t/p/w185/" + el.poster_path} alt='poster' /></td>
                                <td>{el.title}</td>
                                <td>
                                    Sinopsis {el.title} <FiAlertCircle className='alert-icon'
                                        onClick={() => {
                                            setOpenModal(true)
                                            setSinopsis(el.overview)
                                        }
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
                <Modal
                    show={modal}
                    onHide={() => setOpenModal(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className='modal-sinopsis'
                >
                    <Modal.Header>
                        <Modal.Title className='pt-4' id="contained-modal-title-vcenter pt-4 ">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {sinopsis}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn btn-secondary' onClick={() => setOpenModal(false)}>Tutup</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}
