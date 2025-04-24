"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const ImageUpload = ({ onUpload }) => {
    const [preview, setPreview] = (0, react_1.useState)(null);
    const handleFileChange = (e) => __awaiter(void 0, void 0, void 0, function* () {
        if (!e.target.files || e.target.files.length === 0)
            return;
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = yield axios_1.default.post('http://localhost:3000/api/product/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            const imageUrl = res.data.imageUrl; // ej: "/uploads/foto.jpg"
            const fullUrl = `http://localhost:3000${imageUrl}`;
            setPreview(fullUrl);
            onUpload(fullUrl);
        }
        catch (error) {
            console.error("Error al subir la imagen:", error);
            alert("Hubo un problema al subir la imagen.");
        }
    });
    return (<div>
      <input type="file" accept="image/*" onChange={handleFileChange}/>
      {preview && (<div style={{ marginTop: '1rem' }}>
          <img src={preview} alt="Vista previa" style={{ width: '200px', height: '200px', objectFit: 'contain', borderRadius: '0.5rem' }}/>
        </div>)}
    </div>);
};
exports.default = ImageUpload;
