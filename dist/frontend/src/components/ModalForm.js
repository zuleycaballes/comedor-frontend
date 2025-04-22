"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ModalForm = ({ isActive, onClose, onSubmit }) => {
    const [form, setForm] = (0, react_1.useState)({
        nombre: "",
        tipo: "",
        descripcion: "",
        inventario: 0,
        id_comedor: 1,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(Object.assign(Object.assign({}, form), { [name]: name === "inventario" ? Number(value) : value }));
    };
    const handleSubmit = () => {
        onSubmit(form);
        onClose();
    };
    return (<div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card" style={{ fontFamily: "Jost, sans-serif" }}>
        <header className="modal-card-head">
          <p className="modal-card-title">Donar producto</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Nombre</label>
            <input className="input" name="nombre" onChange={handleChange}/>
          </div>
          <div className="field">
            <label className="label">Tipo</label>
            <div className="select is-fullwidth">
              <select name="tipo" onChange={handleChange}>
                <option>Selecciona</option>
                <option>Enlatado</option>
                <option>Aceite</option>
                <option>Legumbre</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Descripción</label>
            <input className="input" name="descripcion" onChange={handleChange}/>
          </div>
          <div className="field">
            <label className="label">Inventario</label>
            <input className="input" name="inventario" type="number" onChange={handleChange}/>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSubmit}>
            Donar
          </button>
          <button className="button" onClick={onClose}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>);
};
exports.default = ModalForm;
