function LayoutPagina(props) {
  return (
    <div className="p-6 bg-slate-100 rounded-md shadow">
      <h2 className="text-blue-800 text-center text-xl font-bold">
        {props.cabecalho || "Cabeçalho Padrão"}
      </h2>
    </div>
  );
}
export default LayoutPagina;
