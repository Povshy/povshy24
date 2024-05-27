import "./index.css";

import Title from "../../component/title";
import BackButton from "../../component/back-button";

import master from "./scott.png";

const Error: React.FC = () => {
  return (
    <div>
      <BackButton />
      <div className="sending-page">
        <Title title="От халепа..." />
        <div className="scott">
          <img src={master} alt="icon" className="scott-image" />
        </div>
        <Title title="Щось пішло не за планом." />
      </div>
    </div>
  );
};

export default Error;
