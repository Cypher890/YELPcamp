mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: campground.geometry.coordinates, 
      zoom: 8, 
      projection: 'globe' 
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });
     new mapboxgl.Marker()
      .setLngLat(campground.geometry.coordinates)
      .addTo(map);