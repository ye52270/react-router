import { Ajax, HTMLRender } from '../get/getdata';
export async function loader() {
  const data = new Ajax();
  data.getRequest().then((res) => {
    return res;
  });
}
const Intro = () => {
  return <div> Intro Page 입니다</div>;
};

export default Intro;
