import { useOutletContext } from "react-router-dom";

export default function HostedVanPhotos() {
  const { currentVan } = useOutletContext();
  return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}
