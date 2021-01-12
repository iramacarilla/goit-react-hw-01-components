import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({avatar, name, tag, location, stats}) {
    return (
        <div className={styles.profile}>
  <div className="description">
    <img
      src={avatar}
      alt={name}
      className={styles.avatar}
    />
    <p className={styles.avatar}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
   <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )}

    Profile.defaultProps = {
        imgUrl:
          'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
        name: 'user,'
      };

    Profile.propTypes = {
        name: PropTypes.string.isRequired,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
         stats: PropTypes.objectOf(
        PropTypes.exact({
            followers: PropTypes.string.isRequired,
            views: PropTypes.string.isRequired,
            likes: PropTypes.string.isRequired,
        }),
      ).isRequired,
    };

export default Profile;    