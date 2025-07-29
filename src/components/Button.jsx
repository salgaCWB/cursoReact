function Button(props) {
  return (
    <button {...props} className="bg-blue-500 text-white p-2 rounded-md">
      {props.children}
    </button>
  );
}

export default Button;
