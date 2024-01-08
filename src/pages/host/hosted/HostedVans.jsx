import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostedVans() {
  const [vans, setVans] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getVans() {
    try {
      const response = await axios.get("/api/host/vans");
      setVans(response.data.vans);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getVans();
  }, []);

  if (loading) return <span className="loader">Loading...</span>;

  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    </section>
  );
}
