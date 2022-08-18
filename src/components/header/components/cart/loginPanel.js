import React from "react";

import avatar from "./cart-images/image-avatar.png";

const LoginPanel = () => {
  return (
    <div className="login-panel">
      <img
        src={avatar}
        alt="Avatar Logo"
        height={40}
        width={40}
        style={{ border: "1px solid hsl(26, 100%, 55%)", borderRadius: "50%" }}
      />
    </div>
  );
};

export default LoginPanel;
