export interface Props {
  articles?: [
    article: {
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
    },
  ];
  title?: string;
  weatherNews?: {
    current: {
      temp: number;
      clouds: number;
      weater: [
        conditions: {
          main: string;
          icon: string;
        },
      ];
    };
    daily: [
      date: {
        dt: number;
        clouds: number;
        temp: {
          min: number;
          max: number;
        };
        weater: [
          conditions: {
            id: number;
            icon: string;
          },
        ];
      },
    ];
  };
}
