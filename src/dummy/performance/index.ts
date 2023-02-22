/* eslint-disable @typescript-eslint/no-explicit-any */
export const PERFORMANCE_IMMINENT = [
  {
    id: 1,
    title: '르세라핌 공연',
    startDate: '2023-02-23',
    imgUrl: 'https://picsum.photos/375/275?random=1',
  },
  {
    id: 2,
    title: '블랙 핑크 공연',
    startDate: '2023-02-23',
    imgUrl: 'https://picsum.photos/375/275?random=2',
  },
  {
    id: 3,
    title: '김채원 단독 공연',
    startDate: '2023-02-23',
    imgUrl: 'https://picsum.photos/375/275?random=3',
  },
  {
    id: 4,
    title: '제니 단독 공연',
    startDate: '2023-02-23',
    imgUrl: 'https://picsum.photos/375/275?random=4',
  },
]

export const PERFORMANCE_MONTH = [
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-01T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 1,
    numberOfElements: 1,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-02T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 1,
    numberOfElements: 1,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-03T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 1,
    numberOfElements: 1,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-04T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 1,
    numberOfElements: 1,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-05T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 1,
    numberOfElements: 1,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-06T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 1,
    numberOfElements: 1,
  },
]

export const PERFORMANCE_DAY: any = [
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 1,
        performTitle: '공연 하는데 보러 오실분~',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-01T12:00:00',
        performLocation: '부산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 2,
    totalElements: 1,
    numberOfElements: 5,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 15,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-02T12:00:00',
        performLocation: '서울',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '블랙핑크',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 5,
    numberOfElements: 5,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 30,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-03T12:00:00',
        performLocation: '울산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '르세라핌',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 5,
    numberOfElements: 5,
  },
  {
    content: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 0,
    totalElements: 0,
    numberOfElements: 0,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 45,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStartDate: '2023-02-04T12:00:00',
        performLocation: '울산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '르세라핌',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 5,
    numberOfElements: 5,
  },
  {
    content: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 0,
    totalElements: 0,
    numberOfElements: 0,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        performId: i + 60,
        performTitle: '저희 공연 합니다!',
        performImg: `https://picsum.photos/400/500?random=${i + 1}`,
        performStatDate: '2023-02-05T12:00:00',
        performLocation: '울산',
        performGenres: ['왁킹', '락킹'],
        profile: {
          id: '1',
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '르세라핌',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 1,
    totalElements: 5,
    numberOfElements: 5,
  },
  {
    content: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 0,
    totalElements: 0,
    numberOfElements: 0,
  },
  {
    content: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 15,
    totalPages: 0,
    totalElements: 0,
    numberOfElements: 0,
  },
]
