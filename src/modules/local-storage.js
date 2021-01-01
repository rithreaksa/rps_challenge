const stateKey = 'state';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey);
    if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(stateKey, serializedState);
};

const LocalStorage = {
  load: loadState,
  save: saveState,
};

export default LocalStorage;
