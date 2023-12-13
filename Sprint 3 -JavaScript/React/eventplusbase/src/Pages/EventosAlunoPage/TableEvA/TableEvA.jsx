import React from "react";
import comentaryIcon from "../../../assets/images/comentary-icon.svg";
// import trashDelete from "../../../assets/images/trash-delete.svg";
import { dateFormateDbToView } from "../../../Utils/stringFunction";
import ToggleSwitch from "../../../Components/Toggle/Toggle";
// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

// import trashDelete from "../../../assets/images/trash-delete.svg";
import "./TableEvA.css";

const Table = ({ dados, fnConnect = null, fnShowModal = null }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data_head-row tbal-data_head-row--red-color">
          <th className="tbal-data_head-title tbal-data_head-title--big">
            Evento
          </th>
          <th className="tbal-data_head-title tbal-data_head-title--big">
            Data
          </th>
          <th className="tbal-data_head-title tbal-data_head-title--big">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((e) => {
          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data_data tbal-data_data--big">
                {e.nomeEvento}
              </td>

              <td className="tbal-data_data tbal-datadata--big tbal-data_btn-actions">
                {/* {e.dataEvento} */}
                {dateFormateDbToView(e.dataEvento)}
              </td>

              <td className="tbal-data_data tbal-datadata--big tbal-data_btn-actions">
                <img
                  className="tbal-data__icon"
                  idevento={e.idEvento}
                  src={comentaryIcon}
                  alt=""
                  onClick={fnShowModal}
                />

                <ToggleSwitch
                toggleActive = {e.situacao}
                manipulationFunction={() => {
                  fnConnect(
                    e.idEvento,
                    e.situacao ? "unconnect" : "connect",
                    e.idPresencaEvento //parametro opicional

                  )
                }}
                />

              </td>

            </tr>
          );

        })}

      </tbody>

    </table>
  );
};

export default Table;