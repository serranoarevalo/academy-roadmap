export interface ICourse {
  title: string;
  description: string;
  link: string | null;
  required?: boolean;
  recommended?: boolean;
}

interface ICategories {
  [key: string]: ICourse[];
}

const KokoaClone: ICourse = {
  title: "Kokoa Clone",
  description:
    "Github, html, css 등 웹 개발에 필요한 기초 이론을 배우고, 이를 토대로 카카오톡 프론트엔드를 클론코딩 합니다.",
  link: "https://academy.nomadcoders.co/p/kakaoclone_total"
};

const VanillaJS: ICourse = {
  title: "Vanilla JS",
  description:
    "자바스크립트 기초 이론을 배우고, 이를 토대로 간단한 시계, 할일 목록 등을 만듭니다.",
  link:
    "https://academy.nomadcoders.co/p/javascript-basics-for-absolute-beginners-kr"
};

const VanillaJSII: ICourse = {
  title: "Vanilla JS II",
  description:
    "자바스크립트 2D 그래픽 기초 이론을 배우고, 이를 토대로 간단한 그림판을 만듭니다.",
  link: null
};

const Wetube: ICourse = {
  title: "🔥 Wetube 🔥",
  description:
    "유튜브를 클론코딩 합니다. 자바스크립트. NodeJS, Express, Users, 페이스북 로그인 등 유용한 실전 기술을 배우고, 활용합니다.",
  link:
    "https://academy.nomadcoders.co/p/javascript-fullstack-from-zero-to-hero/"
};

const WetubeBonus: ICourse = {
  title: "Wetube Bonus",
  description:
    "SocketIO 를 배우고, 이를 토대로 리얼타임 협업 드로잉 툴을 만듭니다.",
  link: null
};

const MasteringGit: ICourse = {
  title: "Mastering Git",
  description:
    "Git 기초 사용법을 배우고, 더 효율적이고 구조적인 코딩을 시작합니다.",
  link: null
};

const ES6: ICourse = {
  title: "ES6 once and for all",
  description:
    "ES6, ES7, ES8 을 배우면서 자바스크립트 기술을 더 고도화시킵니다. 특히 ES6의 어메이징한 활용법을 배웁니다.",
  link: null
};

const IntroReact: ICourse = {
  title: "Intro to ReactJS",
  description:
    "리액트 JS의 기초 이론을 배우고, 이를 토대로 간단한 영화 웹서비스를 만듭니다.",
  link: "https://academy.nomadcoders.co/p/reactjs-fundamentals"
};

const IntroNative: ICourse = {
  title: "Intro to React Native",
  description:
    "리액트 네이티브의 기초 이론을 배우고, 이를 토대로 간단한 날씨앱을 만듭니다.",
  link: "https://academy.nomadcoders.co/p/fucking-react-native-apps"
};

const Styled: ICourse = {
  title: "Styled Components",
  description:
    "리액트, 리액트 네이티브에 스타일을 어떻게 더하는지 기초 이론을 배웁니다.",
  link: "https://academy.nomadcoders.co/p/styled-components-like-a-boss"
};

const ReactMemebership: ICourse = {
  title: "🚀 React Membership 🚀",
  description:
    "리액트 JS의 심화 이론을 배우고, 영화 웹서비스를 고도화시키며 프로로 거듭납니다.",
  link: "https://academy.nomadcoders.co/p/react-for-beginners"
};

const CSSMaster: ICourse = {
  title: "CSS Layout Masterclass",
  description:
    "CSS Flexbox, Grid의 이론을 배우고, 이를 토대로 웹사이트 15개 레이아웃을 클론코딩 합니다.",
  link: "https://academy.nomadcoders.co/p/cssnext-css-layout-masterclass"
};

const NativeMembership: ICourse = {
  title: "🚀 React Native Membership 🚀",
  description:
    "리액트 네이티브의 심화 이론을 배우고, 영화 앱을 고도화시키며 프로로 거듭납니다.",
  link: "https://academy.nomadcoders.co/p/react-native-for-beginners"
};

const Kawai: ICourse = {
  title: "Kawai To Do",
  description:
    "리액트 네이티브의 심화 이론을 배우고, 이를 토대로 할일목록 앱을 만듭니다.",
  link:
    "https://academy.nomadcoders.co/p/create-a-kawai-to-do-app-with-react-native"
};

const Redux: ICourse = {
  title: "React, Redux Timer App",
  description:
    "리덕스의 기초 이론을 배우고, 이를 토대로 간단한 타이머 앱을 만듭니다.",
  link:
    "https://academy.nomadcoders.co/p/build-a-timer-app-with-react-native-and-redux"
};

const AntiRedux: ICourse = {
  title: "Anti Redux, React Context API",
  description:
    "컨텍스트 API의 기초 이론을 배우고, 리덕스를 대체할 수 있는 방법을 배웁니다.",
  link: "https://academy.nomadcoders.co/p/antiredux-new-react-context-api"
};

const Parcel: ICourse = {
  title: "Parcel 30",
  description:
    "파셀의 기초 이론을 배우고, 웹팩을 대체할 수 있는 파셀 중심의 개발 셋업을 배웁니다.",
  link: "https://academy.nomadcoders.co/p/learn-parcel"
};

const IntroHooks: ICourse = {
  title: "Intro to Hooks",
  description:
    "리액트 Hooks의 기초 이론을 배우고, 더 깔끔한 코드를 갖춘 프로 리액트 개발자가 됩니다.",
  link: null
};

const IntroGraph: ICourse = {
  title: "Intro to GraphQL",
  description:
    "그래프큐엘의 기초 이론을 배우고, 이를 토대로 영화 웹서비스의 그래프큐엘 서버를 만듭니다.",
  link:
    "https://academy.nomadcoders.co/p/make-a-movie-api-with-graphql-and-nodejs-super-begginner"
};

const IntroApollo: ICourse = {
  title: "Intro to Apollo",
  description:
    "아폴로의 기초 이론을 배우고, 이를 토대로 영화 웹서비스의 프론트엔드를 완성합니다.",
  link:
    "https://academy.nomadcoders.co/p/build-a-movie-webapp-with-reactjs-apollo-and-graphql-kr"
};

const Offline: ICourse = {
  title: "Offline Apollo",
  description:
    "아폴로의 심화 이론을 배우고, 이를 토대로 오프라인 노트앱을 만듭니다.",
  link: "https://academy.nomadcoders.co/p/offline-apollo-kr"
};

const Instaclone = {
  title: "🔥 Instaclone 2.0 🔥",
  description:
    "인스타그램을 클론코딩 합니다. 프론트엔드, 백엔드 뿐만 아니라 iOS/Android 앱까지 전체 완성합니다.",
  link: "https://academy.nomadcoders.co/p/instaclone-2-0"
};

const PWA: ICourse = {
  title: "PWA Course",
  description: "리액트, NextJS, GraphCMS를 활용하여 쇼핑몰 PWA를 만듭니다.",
  link: "https://academy.nomadcoders.co/p/ecommerce-clone-nextjs-pwa"
};

const Typescript: ICourse = {
  title: "Intro to Typescript",
  description:
    "타입스크립트의 기초 이론을 배우고, 이를 토대로 블록체인을 만듭니다.",
  link: "https://academy.nomadcoders.co/p/build-a-blockchain-with-typescript"
};

const Nuber: ICourse = {
  title: "🔥 nUber Clone 🔥",
  description:
    "우버를 클론코딩 합니다. 그래프큐엘, 타입스크립트, TypeORM, 구글맵 그리고 아폴로를 배우고, 활용합니다.",
  link:
    "https://academy.nomadcoders.co/p/nuber-fullstack-javascript-graphql-course"
};

const Bitcoin: ICourse = {
  title: "🔥 Bitcoin Clone 🔥",
  description:
    "자바스크립트를 활용하여 비트코인을 클론코딩 합니다. P2P, 탈중앙화, 작업증명 등의 이론을 배우고, 이를 통해 비트코인 지갑과 익스플로러를 만듭니다. ",
  link: "https://academy.nomadcoders.co/p/nomad-coin"
};

const ReasonIntro: ICourse = {
  title: "Intro to ReasonML",
  description: "페이스북이 만든, ReazonML의 기초 이론을 배웁니다.",
  link: null
};

const ReasonReact: ICourse = {
  title: "Intro to Reason React",
  description: "ReasonML을 활용하여 Functional 리액트 앱을 만듭니다.",
  link: null
};

const Senior: ICourse[] = [
  PWA,
  Typescript,
  Nuber,
  Bitcoin,
  ReasonIntro,
  ReasonReact
];

const Beginner: ICourse[] = [
  KokoaClone,
  VanillaJS,
  VanillaJSII,
  Wetube,
  WetubeBonus
];

const Junior: ICourse[] = [
  MasteringGit,
  ES6,
  CSSMaster,
  IntroReact,
  IntroNative,
  Styled,
  ReactMemebership,
  NativeMembership,
  Kawai,
  Redux,
  AntiRedux,
  Parcel,
  IntroHooks,
  IntroGraph,
  IntroApollo,
  Offline,
  Instaclone
];

export const Categories: ICategories = {
  "01 Beginner": Beginner,
  "02 Junior": Junior,
  "03 Senior": Senior
};

interface ITrack {
  goal: ICourse;
  requirements: ICourse[];
}

const WetubeTrack: ITrack = {
  goal: Wetube,
  requirements: [
    { ...KokoaClone, required: true },
    { ...VanillaJS, required: true }
  ]
};

const InstacloneTrack: ITrack = {
  goal: Instaclone,
  requirements: [
    { ...IntroReact, required: true },
    { ...IntroNative, required: true },
    { ...Styled, required: true },
    { ...ReactMemebership, recommended: true },
    { ...NativeMembership, recommended: true },
    { ...IntroHooks, required: true },
    { ...IntroGraph, required: true },
    { ...IntroApollo, required: true },
    { ...Offline, recommended: true }
  ]
};

const NuberTrack: ITrack = {
  goal: Nuber,
  requirements: [
    { ...IntroReact, required: true },
    { ...Styled, required: true },
    { ...ReactMemebership, recommended: true },
    { ...IntroGraph, required: true },
    { ...IntroApollo, required: true },
    { ...Offline, recommended: true },
    { ...Typescript, required: true }
  ]
};

const BitcoinTrack: ITrack = {
  goal: Bitcoin,
  requirements: [
    { ...IntroReact, required: true },
    { ...Typescript, required: true }
  ]
};

export const Tracks: ITrack[] = [
  WetubeTrack,
  InstacloneTrack,
  NuberTrack,
  BitcoinTrack
];

export interface ISection {
  released: boolean;
  name: string;
}

interface IMembership {
  class: ICourse;
  sections: ISection[];
}

export const Memberships: IMembership[] = [
  {
    class: ReactMemebership,
    sections: [
      { released: true, name: "Build a Movie App" },
      { released: true, name: "Typescript + React" },
      { released: false, name: "Hooks: Deep Dive" },
      { released: false, name: "Learn Gatsby" },
      { released: false, name: "Data Visualization with React and D3" }
    ]
  },
  {
    class: NativeMembership,
    sections: [
      { released: true, name: "Build an iOS / Android Movie App" },
      {
        released: true,
        name: "Smilecam: Build a Selfie App with Face Detection"
      },
      { released: false, name: "Make a Game in React Native and WebGL" }
    ]
  }
];
