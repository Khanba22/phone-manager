import Redirector from "../_components/Redirector";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <Redirector />

    </div>
  );
};

export default layout;
