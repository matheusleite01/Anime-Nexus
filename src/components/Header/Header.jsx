import React from "react";
import Input from "../Form/Input";
import { ReactComponent as Lupa } from "../../assets/search.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { GlobalContext } from "../../UserContext";

const Header = ({ id, placeholder, handleSubmit, setValue, ...proops }) => {
  const { setIsOpen } = React.useContext(GlobalContext);

  return (
    <header>
      <form action="" onSubmit={handleSubmit} className="formHeader">
        <Lupa className="iconSearch" />
        <Input
          placeholder={placeholder}
          id={id}
          setValue={setValue}
          className="input"
          {...proops}
        />
      </form>
      <a href="#" className="btn-login">
        Login
      </a>
      <button
        className="btn-menu"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <Menu />
      </button>
    </header>
  );
};

export default Header;
