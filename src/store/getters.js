export const getImageUrl = (state) => (path) => {
  const apiUrl = import.meta.env.VITE_APP_STRAPI_API_URL;
  const mode = import.meta.env.MODE;
  if (mode === 'development') {
    return `${apiUrl}${path}`;
  }
  return `${path}`;
};
