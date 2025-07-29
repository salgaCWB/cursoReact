function TextArea(props) {
  return (
    <textarea
      placeholder={props.placeholder || "Digite aqui..."}
      value={props.value || ""}
      onChange={props.onChange || (() => {})}
      className="w-full p-2 rounded-md border border-slate-300"
    />
  );
}

export default TextArea;
