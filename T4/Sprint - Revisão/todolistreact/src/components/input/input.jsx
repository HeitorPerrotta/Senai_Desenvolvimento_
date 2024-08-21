import "./input.css";
import searchIcon from "../../assets/Poppins/icons/search-icon.svg"

export function Input() {
  return (
      <div className="div-input">
          <img  style={{marginLeft: "8px"}} src={searchIcon} />
          <input style= {{marginRight: "8px"}} placeholder="Procurar tarefa" className="input-text" />
      </div>
  );
}

export default Input;
