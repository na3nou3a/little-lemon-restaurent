const getStoredClient = () => {
  return JSON.parse(localStorage.getItem('client'));
};

const storeClient = (client) => {
  localStorage.setItem('client', JSON.stringify(client));
};

const removeStoredClient = () => {
  localStorage.removeItem('client');
};

export { getStoredClient, storeClient, removeStoredClient };
