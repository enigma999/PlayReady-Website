import React from 'react';
import './Button.css';
import Loader from '../loader/Loader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

function Button({children, onclick, loading, disabled, confirmed, type}) {
  function handleClick() {
    if (!disabled && onclick) {
      onclick();
    }
  }

  return (
    <button
      onClick={handleClick}
      className={
        disabled ? 'disabled' :
        loading ? 'loading' :
        confirmed && 'confirmed'
      }
      type={type}
    >
      {loading && <div className={`overlay`}><Loader/></div>}
      {confirmed && <div className={`overlay`}>
        <FontAwesomeIcon icon={faCheck}/>
      </div>}
      <div>
        {children}
      </div>
    </button>
  );
}

export default Button;
