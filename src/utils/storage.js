const getStoredClient = () => {
  return JSON.parse(localStorage.getItem('client'));
};

const storeClient = (client) => {
  localStorage.setItem('client', JSON.stringify(client));
};

const removeStoredClient = () => {
  localStorage.removeItem('client');
};

const getStoredOrders = () => {
  return JSON.parse(localStorage.getItem('orders'));
};

const storeOrders = (orders) => {
  localStorage.setItem('orders', JSON.stringify(orders));
};

const removeStoredOrders = () => {
  localStorage.removeItem('orders');
};
export {
  getStoredClient,
  storeClient,
  removeStoredClient,
  getStoredOrders,
  storeOrders,
  removeStoredOrders,
};
