import { logoutUser } from "../apollo";

export const Home = () => {
  return (
    <div>
      Home
      <button onClick={() => logoutUser()}>๋ก๊ทธ์์</button>
    </div>
  );
};
