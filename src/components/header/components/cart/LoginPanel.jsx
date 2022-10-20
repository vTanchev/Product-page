import React from "react";

import avatar from "../../../../assets/images/image-avatar.png";

const LoginPanel = () => {
  return (
    <div className="login-panel">
      <img
        src={avatar}
        alt="Avatar Logo"
        height={40}
        width={40}
        style={{
          border: "1px solid hsl(26, 100%, 55%)",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default LoginPanel;
