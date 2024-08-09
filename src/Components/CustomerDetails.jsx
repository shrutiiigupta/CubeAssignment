import React, { useEffect, useState } from 'react';

const CustomerDetails = ({ customer }) => {
  const [photos, setPhotos] = useState(customer.photos);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(`https://api.unsplash.com/photos/random?count=9&client_id=QtAd_CLiMeOga1ycJrrxV1UMCKQVdSAqaULp6KjzLB0`);
      const data = await response.json();
      setPhotos(data.map(photo => photo.urls.small));
    };

    fetchPhotos();
    const interval = setInterval(fetchPhotos, 3600000); // Change photos every 1 hour (3600000 ms) // Change it to 10000 for every 10 seconds

    return () => clearInterval(interval);
  }, [customer.id]);

  return (
    <div className="customer-details">
      <h2>{customer.name} details here</h2>
      <p>{customer.details}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Customer photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
