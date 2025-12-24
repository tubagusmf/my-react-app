export default function Input({ type, placeholder, name, id }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
        />
    );
}
  