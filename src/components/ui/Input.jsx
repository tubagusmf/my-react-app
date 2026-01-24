export default function Input({ type, placeholder, name, id, value, onChange }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
        />
    );
}
  