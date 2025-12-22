export default function Input({ type, placeholder }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
        />
    );
}
  