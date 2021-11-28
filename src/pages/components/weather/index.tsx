import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import useSWR from 'swr';
import { feather } from '../../api/weatherData';

import { Props } from '../types/interface';

import styles from '../weather/index.module.scss';

const week = ['日', '月', '火', '水', '木', '金', '土'];

export const WeatherNews: FC<Props> = () => {
  const { data: data } = useSWR('geolocation', feather, {
    refreshInterval: 0,
    revalidateOnFocus: true,
  });
  console.log(data);

  if (!data) return <div>Loading...</div>;
  return (
    <section className={styles.weather}>
      <p>都市</p>
      <h1>{data.name}</h1>
      <div className={styles.weather_main}>
        <div>
          <p>現在の天気</p>
          <p>{data.weather[0].main}</p>
          <p>気温</p>
          <p>{data.main.temp.toString().slice(0, 2)}℃</p>
          <p>湿度</p>
          <p>{data.main.humidity}%</p>
        </div>
      </div>
    </section>
  );
};
