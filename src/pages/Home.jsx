import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Smart IT Equipment Advisor</h1>

      <p>
        Find the right IT equipment for your Home, Small Office, Company, or
        Data Center.
      </p>

      <Link to="/equipment">
        <button className="btn">Explore Equipment</button>
      </Link>

      <div className="environments">
        <div className="environmentCard">
          <h3>🏠 Home</h3>
          <p>Devices for personal and home office use.</p>
        </div>

        <div className="environmentCard">
          <h3>🏢 Small Office</h3>
          <p>Essential equipment for small businesses.</p>
        </div>

        <div className="environmentCard">
          <h3>🏭 Company</h3>
          <p>Enterprise solutions for organizations.</p>
        </div>

        <div className="environmentCard">
          <h3>🖥 Data Center</h3>
          <p>High-performance infrastructure and servers.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
