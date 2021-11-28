const weaterKey = process.env.NEXT_PUBLIC_WEATHERKEY;

export const feather = () => {
  return new Promise((resolve, reject) => {
    const Success = async (position) => {
      const lat = position.coords.latitude;

      const lon = position.coords.longitude;

      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weaterKey}&units=metric`,
      );
      const data = await result.json();
      resolve(data);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 30000,
    };
    navigator.geolocation.getCurrentPosition(Success, reject, options);
  });
};
