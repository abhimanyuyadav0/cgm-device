const HomePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Home Page</h2>
      <p className="text-sm text-gray-600">
        Welcome to the Home Page! This is the main content area, which is scrollable.
      </p>
      {Array(20)
        .fill()
        .map((_, index) => (
          <p key={index} className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
    </div>
  );
};

export default HomePage;