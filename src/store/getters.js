export const getImageUrl = (state) => (path) => {
  const apiUrl = import.meta.env.VITE_APP_STRAPI_API_URL;
  const mode = import.meta.env.MODE;
  if (mode === 'development') {
    return `${apiUrl}${path}`;
  }
  return `${path}`;
};

export const getFormattedDate = (state) => (date) => {
  const publishedDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(publishedDate);
  return formattedDate;
};

export const getTruncatedDescription = (state) => (description) => {
  if (description.length > 140) {
    return description.slice(0, 140) + '...';
  } else {
    return description;
  }
};
