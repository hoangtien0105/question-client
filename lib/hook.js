import { useEffect, useRef, useState } from 'react';

import useSWR from 'swr';
import { get, sortBy } from 'lodash';

import { getBaseURL } from './api/requester';

const MEDIA = {
  LG: 'LG',
  MD: 'MD',
  SM: 'SM',
};

const safeNumberSlides = (expectNumber, images) =>
  expectNumber <= images.length ? expectNumber : images.length;

export const useSlideResponsive = (images = [], md = 762, sm = 600) => {
  const imageLength = images.length;

  const mediaRef = useRef();

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: safeNumberSlides(3, images),
    slidesToScroll: safeNumberSlides(3, images),
  });

  const setLg = () => {
    mediaRef.current = MEDIA.LG;

    imageLength >= 3 &&
      setSettings(currentSetting => ({
        ...currentSetting,
        slidesToShow: safeNumberSlides(3, images),
        slidesToScroll: safeNumberSlides(3, images),
      }));
  };

  const setMd = () => {
    mediaRef.current = MEDIA.MD;

    imageLength >= 3 &&
      setSettings(currentSetting => ({
        ...currentSetting,
        slidesToShow: safeNumberSlides(2, images),
        slidesToScroll: safeNumberSlides(2, images),
      }));
  };

  const setSm = () => {
    mediaRef.current = MEDIA.SM;

    imageLength >= 2 &&
      setSettings(currentSetting => ({
        ...currentSetting,
        slidesToShow: 1,
        slidesToScroll: 1,
      }));
  };

  useEffect(() => {
    const mediaQueryMd = window.matchMedia(`(max-width: ${md}px)`);
    const onMdChange = e => {
      if (e.matches) {
        setMd();
      } else {
        setLg();
      }
    };

    mediaQueryMd.addListener(onMdChange);
    onMdChange(mediaQueryMd);

    const mediaQuerySm = window.matchMedia(`(max-width: ${sm}px)`);
    const onSmChange = e => {
      if (e.matches) {
        setSm();
      } else {
        mediaRef.current === MEDIA.MD ? setMd() : setLg();
      }
    };

    mediaQuerySm.addListener(onSmChange);
    onSmChange(mediaQuerySm);

    return () => {
      mediaQueryMd.removeListener(onMdChange);
      mediaQuerySm.removeListener(onSmChange);
    };
  }, []);

  const shouldShowNavigation =
    (mediaRef.current === MEDIA.LG && imageLength > 3) ||
    (mediaRef.current === MEDIA.MD && imageLength > 2) ||
    (mediaRef.current === MEDIA.SM && imageLength > 1);

  return [settings, shouldShowNavigation];
};

/**
 *
 * @param {*} queries
 * const queries = {
 *    xs: '(max-width: 320px)',
 *    md: '(max-width: 720px)',
 *    lg: '(max-width: 1024px)',
 * }
 * @returns
 */


export const useMergeState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => ({ ...prevState, ...newState }));
  return [state, setMergedState];
};

const fetcher = (...args) => fetch(...args).then(res => res.json());


const swrConfig = {
  revalidateOnFocus: false,
};

export const useQuestions = (query) => {
  const queryParms = new URLSearchParams('');
  
  if(query?.page){
    queryParms.append('page',query?.page)
  }
  const {data, error} = useSWR(
    `${getBaseURL()}/questions?${queryParms.toString()}`,
    fetcher
  )
  return {data, error };
}
export const useQuestionsByTag = (tag, query) => {
  const queryParms = new URLSearchParams('');
  
  if(query?.page && query?.pageSize){
    queryParms.append('pagination[page]',query?.page)
    queryParms.append('pagination[pageSize]', query?.pageSize);
  }
  const {data, error} = useSWR(
    `${getBaseURL()}/questions/tag/${tag}?${queryParms.toString()}`,
    fetcher
  )
  return {data, error };
}
export const usePagination = (initialState) => {
  const [pageSize, setPageSize] = useState(initialState?.pageSize);
  const [page, setPage] = useState(initialState?.page);
  return {pageSize, setPageSize, page, setPage};
}

export const useAnswerByQuestionId = (id) => {
  const {data, error} = useSWR(
    `${getBaseURL()}/answer/question/${id}`,
    fetcher
  )
  return {data, error};
}