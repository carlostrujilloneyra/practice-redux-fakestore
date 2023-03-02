import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header-styles.css';

export const Header = () => {

	const [fix, setFix] = useState(false);

	const handleCalculateScrollY = () => {
		(window.scrollY >= 120) ? setFix(true) : setFix(false);
	}

	window.addEventListener('scroll', handleCalculateScrollY);

	const navigate = useNavigate();
	
	const handleReturnHomePage = () => {
		navigate('/', {
			replace: true
		})
	}

	return (
    <>
      <header>
        <div className={`main-header container ${fix ? "sticky-header" : ""}`}>
          <h2
            onClick={handleReturnHomePage}
            className={`logo ${fix ? "change-color-logo" : ""}`}
          >
            FakeStore
          </h2>
          <button style={{ textTransform: "uppercase", fontSize: 13 }}>
            Cerrar Sesión
          </button>
        </div>
      </header>
    </>
  );
}