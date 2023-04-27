import React, { useContext } from 'react';
import styles from '../card/Card.module.scss';
import { Icon } from '@iconify/react';
import { DataContext } from '../../data/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TvShowCard = ({ id, title, posterPath }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  const { isUserLoggedIn } = useContext(DataContext);
  const navigate = useNavigate();

  const addItemToCollection = async () => {
    try {
      const response = await axios.post("/tvshows/user", { title, posterPath, id });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCardClick = () => {
    if (!isUserLoggedIn) {
      navigate('/login');
    }
    else { addItemToCollection(); }
  }

  return (
    <div className={styles.card}>
      <img className={styles.card_poster} src={posterUrl} alt={title} />
      <div className={styles.card_details}>
        <h2 className={styles.card_title}>{title}</h2>
      </div>
      <div className={styles.btn}>
        <button className={styles.outline}>
          <Icon icon="gg:details-more" color="#401d56" />
        </button>
        <button className={styles.fill} onClick={handleCardClick}>
          <Icon icon="material-symbols:heart-plus-outline" color="white" />{' '}
        </button>
      </div>{' '}
    </div>
  );
};

export default TvShowCard;