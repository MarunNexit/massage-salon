import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Технічні проблеми</h1>
            <p>Наразі виникли труднощі із завантаженням даних. Спробуйте пізніше.</p>
            <Link to="/">Повернутися на головну</Link>
        </div>
    );
};

export default ErrorPage;