export const getOptions = data =>
  data.map(({ id, code, hospitalName, branchId, name }) => ({
    value: String(id) || code || branchId,
    text: name || hospitalName,
  }));

export const getOptionsAsync = async promise => {
  try {
    const response = await promise;
    const data = await response.json();

    return getOptions(data.docs || data);
  } catch {
    return [];
  }
};

export const arrayChunks = (array, chunk_size) =>
  Array(Math.ceil(array.length / chunk_size))
    .fill()
    .map((_, index) => index * chunk_size)
    .map(begin => array.slice(begin, begin + chunk_size));

export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export const thousandify = (number, separator = '.') => {
  if (!number && number !== 0) return;
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}