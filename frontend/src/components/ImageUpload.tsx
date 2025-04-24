import { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:3000/api/product/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const imageUrl = res.data.imageUrl; // ej: "/uploads/foto.jpg"
      const fullUrl = `http://localhost:3000${imageUrl}`;
      setPreview(fullUrl);
      onUpload(fullUrl);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      alert("Hubo un problema al subir la imagen.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: '1rem' }}>
          <img
            src={preview}
            alt="Vista previa"
            style={{ width: '200px', height: '200px', objectFit: 'contain', borderRadius: '0.5rem' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;