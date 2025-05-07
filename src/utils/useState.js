// src/utils/useState.js
export function useState(initialValue) {
    let value = initialValue;
    const listeners = [];
  
    const get = () => value;
    const set = newValue => {
      value = newValue;
      listeners.forEach(fn => fn(value));
    };
  
    const subscribe = fn => listeners.push(fn);
  
    return [get, set, subscribe];
  }
  