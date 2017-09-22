const storeSync = store => next => action => {
    localStorage.setItem('app', JSON.stringify(store.getState().app));
    next(action);
};

export default storeSync;
