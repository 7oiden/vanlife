import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HostedVansDetail() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getVan() {
    try {
      const response = await axios.get(`/api/host/vans/${params.id}`);
      setCurrentVan(response.data.vans);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getVan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <span className="loader">Loading...</span>;

  return (
    <>
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}
