const storeSync = store => next => action => {
  next(action);
  localStorage.setItem('app', JSON.stringify(store.getState().app));
};

export default storeSync;
