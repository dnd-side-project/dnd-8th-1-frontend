# DND 8기 1조 Repository - DANverSE

## 시작 하기

### [자세한 내용은 wiki - getting started를 참고해주세요!](https://github.com/dnd-side-project/dnd-8th-1-frontend/wiki/Getting-Started#-localhostpem-localhost-keypem-download)

- node version - `16.18.1`
- platform - mac, window 등

<br/>

1. 레포지토리 클론

```
git clone https://github.com/dnd-side-project/dnd-8th-1-frontend.git
```

<br/>

2. localhost.pem, localhost-key.pem Download (mac 유저만 해당되며, window 유저일 경우 wiki 내 [localhost.pem, localhost-key.pem Download](https://github.com/dnd-side-project/dnd-8th-1-frontend/wiki/Getting-Started) 섹션 참고 하세요!)

```
yarn init-https
```

<br/>

3. 환경 변수 파일 추가(.env.development)

```
NEXT_PUBLIC_API_END_POINT=https://danverse.o-r.kr/
NEXT_PUBLIC_GOOGLE_CLIENT_ID=660329626176-s20348mpdpcu5gojab3g4jl92lphm7n3.apps.googleusercontent.com
NEXT_PUBLIC_GOOGLE_REDIRECT_URI=https://localhost:3001/oauth/callback
NEXT_PUBLIC_GOOGLE_CLIENT_SECREET=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
```

<br/>

4. yarn 버전 확인 후 yarn `1.x` 버전일 경우 적용

```
yarn set version berry
```

<br/>

5. vs code extension ZipFS 설치

<img width="460" alt="image" src="https://user-images.githubusercontent.com/87177577/224735266-6ebae878-2d3b-4a6c-b3b7-f035093966a2.png"/>
<br/>

6. vs code allow 설정

<img width="460" alt="image" src="https://user-images.githubusercontent.com/87177577/224741823-ec3ca481-8e2a-46f2-8756-a61057c21d4e.png">

- 다음과 같은 박스가 로드 된다면 allow 클릭

<br/>

7. yarn berry unplug file 설치

```
yarn unplug
```

<br/>

8. local 실행

```
yarn dev
```

<br/>

9. storybook 실행

```
yarn storybook
```

## Contributing Guide

Danverse Wiki의 Contribution Guide를 참고해주세요 :)

- [Contributing Guide 바로 가기](https://github.com/dnd-side-project/dnd-8th-1-frontend/wiki/Contributing-Guide)

<br/>

## 팀원 소개

<div align="center">
<br />
<table>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/87177577/227233617-e82e8b31-fb49-40e7-857f-ea7a5310cf30.jpg" width="250px;" alt="손진영"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/74234333?v=4" width="250px;" alt="김다은"/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/jinyoung234">
        <div>손진영</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dar-jeeling">
        <div>김다은</div>
      </a>
    </td>
  </tr>
</table>
<br />
</div>
