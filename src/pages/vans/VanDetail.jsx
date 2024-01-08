import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getVan() {
    try {
      const response = await axios.get(`/api/vans/${params.id}`);
      setVan(response.data.vans);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const searchUrl = location.state?.search
    ? `..${location.state.search}`
    : "..";
  // alternative solution (.. must be added to the Link search string):
  // const prevUrl = location.state?.search || "";

  const typeOfVan = location.state?.type || "all";

  useEffect(() => {
    getVan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (loading) return <span className="loader">Loading...</span>;

  return (
    <div className="van-detail-container">
      <Link to={searchUrl} relative="path" className="back-button">
        &larr; <span>Back to {typeOfVan} vans</span>
      </Link>
      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}
