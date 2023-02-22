# useQuery 관련 hook

## ex) useMeet

```ts
const useMeet = (payload: MeetPayload) => {
  const { page, size, location, type } = payload
  return useQuery(
    [QUERY_KEY.MEET, page, size, location, type],
    () => getMeet(payload),
    {
      keepPreviousData: true,
    },
  )
}

export default useMeet
```

### useQuery

- `get` 요청을 할 때 주로 사용하는 hook(병렬 요청을 할 땐 useQueries 사용)
- 첫 번째 인자로는 `queryKey`, 두 번째 인자로는 `queryFn`이 들어가며 세 번째 인자로는 `options(optional)`이 들어가게 된다, tanstack Query(v4)부턴 `무조건 배열 형태`로 해야 한다.

### 쿼리 키 내 의존성 배열

- 배열에 주로 첫 번째에 쿼리 키만 넣지만 `특정 값에 의해 데이터가 변경되어야 할 경우` 배열의 2번째 부터 값을 추가해 줄 수 있다.(useEffect의 의존성 배열과 같은 개념)
- 해당 Hook에선 page, size, location, type에 따라 재 요청을 보내야 하는 상황이기 때문에 의존성 배열에 추가 함으로써 해당 값들이 변경될 때마다 refetch 하게 된다.

### keepPreviousData

- `true일 경우 해당 query의 data는 query key가 변경되더라도, 새 데이터가 요청되는 동안 마지막으로 성공한 fetch data로 유지`된다.
- 해당 hook에서는 페이지가 바뀔 때마다 재 요청이 가기 때문에 loading이 계속 될 것 이다. 해당 옵션을 통해 loading 없이 변경 된 데이터가 보여지게 될 것이다.

### enabled

- `enabled에 들어간 값이 존재한다면 해당 hook을 실행`하게 된다.

```ts
const useCandidate = (eventId: number) => {
  return useQuery(
    [QUERY_KEY.MEET_CANDIDATE_VIEW, eventId],
    () => getCandidate(eventId),
    {
      enabled: !!eventId,
    },
  )
}
```

- useCandidate로 예를 들면 eventId가 있을 때 해당 Hook을 실행하게 된다.

# useMutation 관련 hook

```ts
const useRequestCandidate = (
  eventId: number,
  setIsCompleted: Dispatch<SetStateAction<boolean>>,
  setIsCandidate: Dispatch<SetStateAction<boolean>>,
) => {
  const queryClient = useQueryClient()
  return useMutation(
    (payload: MeetApplyRequest) => postRequestCandidate(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.MEET_CANDIDATE_VIEW, eventId])
        setIsCompleted(true)
        setIsCandidate(true)
      },
      onError: () => {
        setIsCandidate(false)
      },
    },
  )
}

export default useRequestCandidate
```

### useMutation

- `patch / post / put / delete` 요청 시 주로 사용하는 hook
- 반환하는 값중 mutate는 setState 처럼 값이 변경되도록 trigger 하는 함수이다. 즉, `mutate로 인해 mutation hook이 실행되는 것`이다.
- 인자로 queryFn 하나를 요구하며 useQuery와 달리 매개변수에 값이 들어갈 수도 있다. 즉, `mutate 인자 안에 넣어 준 data를 api 함수 내 매개변수에 추가할 수 있다.` queryFn에 있는 payload도 같은 형태이다.

### onSuccess

- `요청 성공` 시 실행되는 콜백 함수
- 매개변수로 `성공 한 data의 response`를 가져올 수 있다.

### onError

- `요청 실패` 시 실행되는 콜백 함수
- 매개변수로 `error 객체`를 가져올 수 있다.

### useQueryClient

- `queryClient 객체를 반환`하는 hook
- 주로 `invalidateQueries, prefetchQuery, removeQueries(로그 아웃 & 회원 탈퇴)`를 사용하기 위해 실행 하는 편

### invalidateQueries

- 캐시된 데이터를 `새로 fetch 된 데이터로 변경`하도록 도와주는 메서드
- 인자로 `변경하고자 하는 쿼리 키`를 필요로 한다.

## 입문 할 때 보기 좋은 글

- [kimhyo_0218 - 리액트 쿼리 시리즈](https://velog.io/@kimhyo_0218/React-Query-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-useQuery)
- [jkl1545 - React-Query](https://velog.io/@jkl1545/React-Query)
