mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
      container: 'map', 
      style: 'mapbox://styles/mapbox/streets-v11', 
      center: [-74.5, 40], 
      zoom: 6, 
      projection: 'globe' 
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });