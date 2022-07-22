import React from "react";
import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div className="text-xs text-center py-8 lg:py-0">
      Belum punya akun?{" "}
      <Link to="/register" className="text-purple4 font-bold">
        Daftar di sini
      </Link>
    </div>
  );
};

export default RegisterButton;
