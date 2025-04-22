import { useEffect, useState } from "react";
 import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   Tooltip,
   CartesianGrid,
   ResponsiveContainer,
   Legend,
   PieChart,
   Pie,
   Cell
 } from "recharts";
 import { Product } from "my-types";
 import axios from "axios";
 
 const DashboardChart = () => {
   const [productos, setProductos] = useState<Product[]>([]);
   const [bajoInventario, setBajoInventario] = useState<Product[]>([]);
 
   useEffect(() => {
     axios.get("http://localhost:3000/api/product")
       .then(res => {
         setProductos(res.data.payload);
         const filtrados = res.data.payload.filter((p: Product) => Number(p.inventario?.toString().trim()) < 15);
         console.log("Productos con inventario < 15:", filtrados);
         setBajoInventario(filtrados);
       })
       .catch(err => console.error("Error al obtener productos:", err));
   }, []);
 
   const pieColors = ["#6FA4D3", "#A8D0DB", "#BFD8EF", "#89B4D2", "#528AAE"];
 
   return (
     <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
       <div style={{ padding: "2rem", backgroundColor: "#ffffff", fontFamily: "Jost, sans-serif", marginTop: "100px" }}>
 
         {/* Resumen Total */}
         <div
           className="box"
           style={{
             backgroundColor: "#ffffff",
             display: "flex",
             justifyContent: "space-between",
             alignItems: "center",
             marginBottom: "2rem"
           }}
         >
           <h2 className="title is-4 has-text-weight-semibold has-text-grey-dark">
             Inventario por Producto
           </h2>
           <div style={{ fontSize: "1.1rem", fontWeight: 500, color: "#6FA4D3" }}>
             Total de productos: {productos.length}
           </div>
         </div>
 
         {/* Gráfico 1 */}
         <div
           className="box"
           style={{ backgroundColor: "#ffffff", marginBottom: "3rem" }}
         >
           <ResponsiveContainer width="100%" height={400}>
             <BarChart data={productos} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis type="number" tick={{ fontSize: 12 }} />
               <YAxis dataKey="descripcion" type="category" tick={{ fontSize: 12 }} width={150} />
               <Tooltip wrapperStyle={{ fontSize: "14px" }} />
               <Legend />
               <Bar dataKey="inventario" fill="#6FA4D3" barSize={24} radius={[0, 4, 4, 0]} name="Inventario Total" />
             </BarChart>
           </ResponsiveContainer>
         </div>
 
         {/* Gráfico 2 (Tipo Pie) */}
         <div className="box" style={{ backgroundColor: "#ffffff" }}>
           <h2 className="title is-5 has-text-weight-semibold has-text-grey-dark mb-4">
             Productos con Bajo Inventario (≤ 15)
           </h2>
           {bajoInventario.length === 0 ? (
             <p className="has-text-centered has-text-grey">
               No hay productos con inventario menor o igual a 15.
             </p>
           ) : (
             <ResponsiveContainer width="100%" height={400}>
               <PieChart>
                 <Pie
                   data={bajoInventario}
                   dataKey="inventario"
                   nameKey="descripcion"
                   cx="50%"
                   cy="50%"
                   outerRadius={120}
                   label={({ name }) => name}
                 >
                   {bajoInventario.map((_, index) => (
                     <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                   ))}
                 </Pie>
                 <Tooltip wrapperStyle={{ fontSize: "14px" }} />
                 <Legend />
               </PieChart>
             </ResponsiveContainer>
           )}
         </div>
 
       </div>
     </div>
   );
 };
 
 export default DashboardChart;