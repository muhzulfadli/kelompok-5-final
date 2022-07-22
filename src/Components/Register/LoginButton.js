import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="text-xs text-center py-8 lg:py-0">
      Sudah punya akun?{" "}
      <Link to="/login" className="text-purple4 font-bold">
        Masuk di sini
      </Link>
    </div>
  );
};

export default LoginButton;
