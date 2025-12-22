import React from 'react';

class Button extends React.Component {
  render() {
    const { text, color } = this.props;

    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md shadow-md text-white ${color}`} type="submit"
      >
        {text}
      </button>
    );
  }
}

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <Button text="Buy Now" color="bg-blue-500" />
        <Button text="Add to Cart" color="bg-green-500" />
        <Button text="Checkout" color="bg-red-500" />
      </div>
    </div>
  );
}

export default App;
