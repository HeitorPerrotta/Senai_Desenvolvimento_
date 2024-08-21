import "./button.css";
import edit from "../../assets/Poppins/icons/pencil-icon.svg"
import deleter from "../../assets/Poppins/icons/delete-icon.svg"

export function NovaTarefa({ onClick }) {
  return (
    <button onClick={onClick} className="button-tarefa">
      Nova Tarefa
    </button>
  );
}

export function EditButton() {
    return (
        <button className="box">
        <img className="edit" src={edit} alt="" />
        </button>
    )
}

export function DeleteButton() {
    return (
        <button className="box">
        <img className="delete" src={deleter} alt="" />
        </button>
    )
}
