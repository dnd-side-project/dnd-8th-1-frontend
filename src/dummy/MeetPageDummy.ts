export const MEET_SINGLE_DUMMY = {
  id: 1,
  title: 'title',
  location: '부산',
  type: '콜라보',
  imgUrl: 'image_url',
  deadline: '2023-03-01T12:00:00',
  profile: {
    id: '프로필ID',
    imgUrl: '프로필이미지',
    name: '프로필 댄스팀 이름',
  },
}

export const MEET_DUMMUMY = [
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        id: i + 1,
        title: '1만나기만나기만나기만나기',
        location: '부산',
        type: i % 2 === 0 ? '콜라보' : '쉐어',
        imgUrl: `https://picsum.photos/400/500?random=${i + 1}`,
        deadline: '2023-02-12T12:00:00',
        profile: {
          id: 1,
          imgUrl: `https://picsum.photos/200/200?random=${i + 1}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 0,
    pageSize: 200,
    totalPages: 3,
    totalElements: 15,
    numberOfElements: 15,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        id: 50 + i + 1,
        title: '2만나기만나기만나기만나기',
        location: '부산',
        type: i % 2 === 0 ? '콜라보' : '쉐어',
        imgUrl: `https://picsum.photos/400/500?random=${i + 2}`,
        deadline: '2023-02-19T12:00:00',
        profile: {
          id: 1,
          imgUrl: `https://picsum.photos/200/200?random=${i + 2}`,
          name: '댄스팀',
        },
      }
    }),

    offset: 0,
    pageNumber: 1,
    pageSize: 200,
    totalPages: 3,
    totalElements: 15,
    numberOfElements: 15,
  },
  {
    content: Array.from({ length: 15 }, (_, i) => {
      return {
        id: 100 + i + 1,
        title: '3만나기만나기만나기만나기',
        location: '서울',
        type: i % 2 === 0 ? '콜라보' : '쉐어',
        imgUrl: `https://picsum.photos/400/500?random=${i + 3}`,
        deadline: '2023-02-28T12:00:00',
        profile: {
          id: 1,
          imgUrl: `https://picsum.photos/200/200?random=${i + 3}`,
          name: '댄스팀',
        },
      }
    }),
    offset: 0,
    pageNumber: 2,
    pageSize: 200,
    totalPages: 3,
    totalElements: 15,
    numberOfElements: 15,
  },
]
