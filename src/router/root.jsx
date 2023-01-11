import { Outlet, Link } from 'react-router-dom';
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
              <Link to={`intro`}>인사말</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={`address/seoul`}>서울본사</Link>
            </li>
            <li>
              <Link to={`address/pusan`}>부산지사</Link>
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
