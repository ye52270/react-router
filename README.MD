# React Router V6 설명

## React Router 를 통해 동적 Router 를 구성할 수 있다

### 1.react-dom-router 를 설치한다(npm 이 설치되어 있어야 한다)

```js
npm install react-router-dom
```

### 2. main.jsx(확장자 앞의 main 은 변경 가능하다)를 구성해준다.

```js
main.jsx;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

> createBrowerRouter, RouterProvider 를 import 한다.

> createBrowerRouter 함수에 path, element 를 매개변수로 호출해서 router 에 저장한다.

> ReactDOM에 RouterProvider probs 를 추가한다.(결국, path 에 따른 element component 를 보여주게 된다)

### 3. element : Root 를 생성해준다 (Root.jsx파일을 만들고 import 한다)

```js
root.jsx;

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>환영합니다</h1>
        <div></div>
        <nav>
          <ul>
            <li>
              <a href={`intro`}>인사말</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={`address`}>오시는길</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail>"></div>
    </>
  );
};

export default Root;
```

```js
main.jsx;
import Root from './router/root';
(...)
```

### 3. child element : /board 등과 같이 하위의 route 를 children 요소로 작성한다.

한 페이지에 ChildRen 요소를 보여주고 싶을경우 <Outlet /> 을 요소에 삽입해 줘야한다

```js
main.jsx;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './router/root'; // root component(/페이지)
import Intro from './router/intro'; // /intro component(/intro페이지)
import Address from './router/address'; // /address(/address페이지)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/intro',
        element: <Intro />,
      },
      {
        path: '/address',
        element: <Address />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

```js
intro.jsx;
const Intro = () => {
  return <div> Intro Page 입니다</div>;
};

export default Intro;
```

```js
address.jsx;
const Address = () => {
  return <div>오시는 길 입니다</div>;
};

export default Address;
```

```js
//<Outlet />을 요소에 추가해야 한 페이지에 children component 가 표시된다
import { Outlet } from 'react-router-dom';
import '../index.css';
const Root = () => {
  return (
    <>
      <div id="sidebar">
        <h1>환영합니다</h1>
        <div></div>
        <nav>
          <ul>
            <li>
              <a href={`intro`}>인사말</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={`address/seoul`}>서울본사</a>
            </li>
            <li>
              <a href={`address/pusan`}>부산지사</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="detail>">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
```

### 4. params

Loaders 를 통해서 URL Params 를 참조할 수 있다

```js
main.jsx;

import Address, { loader as addressLoader } from './router/address';

{
  path: '/address/:locationInfo',
  element: <Address />,
  loader: addressLoader,
},


// /address:seoul 혹은 /address:pusan 이런 식으로 URL Params를 알 수 있다
```

```js
address.jsx;

export async function loader({ params }) {
  console.log(params.locationInfo);
  return params;
}
```

### 5. 변경된 부분만 렌더링 하는 방법(a href -> Link to)

a href 를 사용하면 페이지가 새로 리로딩 되는 현상이 발생한다.\<Link> 를 사용하면 변경된 부분만 렌더링 할 수 있다

```js
<li>
  <a href={`intro`}>인사말</a>
</li>
```

```js
import { Outlet, Link } from 'react-router-dom';
{... 중략 ...}
<li>
  <Link to={`intro`}>인사말</Link>
</li>
```

### 5. 변경된 부분만 렌더링 하는 방법(a href -> Link to)
