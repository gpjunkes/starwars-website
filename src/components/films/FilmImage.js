import React from 'react'

import ImgFilm1 from '../../images/Star-Wars-Phantom-Menace-I.jpeg'
import ImgFilm2 from '../../images/Star-Wars-Attack-Clones-II.jpeg'
import ImgFilm3 from '../../images/Star-Wars-Revenge-Sith-III.jpeg'
import ImgFilm4 from '../../images/Star-Wars-New-Hope-IV.jpeg'
import ImgFilm5 from '../../images/Star-Wars-Empire-Strikes-Back-V.jpeg'
import ImgFilm6 from '../../images/Star-Wars-Return-Jedi-VI.jpeg'
import ImgFilm7 from '../../images/The-Force-Awakens-VII.jpeg'

const FilmImage = props => (
    <img src={(() => {
        switch (props.film.episode_id) {
            case 1:  return ImgFilm1;
            case 2:  return ImgFilm2;
            case 3:  return ImgFilm3;
            case 4:  return ImgFilm4;
            case 5:  return ImgFilm5;
            case 6:  return ImgFilm6;
            case 7:  return ImgFilm7;
            default: return '';
        }
    })()} className="img-responsive margin" style={{width:'100%'}} alt={props.film.title}/>
)

export default FilmImage