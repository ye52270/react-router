export async function loader({ params }) {
  console.log(params.locationInfo);
  return params;
}

const Address = () => {
  return <div>오시는 길 입니다</div>;
};

export default Address;
