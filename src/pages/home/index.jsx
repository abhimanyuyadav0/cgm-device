const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 mb-6 animate-pulse">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex space-x-4 justify-center">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={`w-6 h-6 bg-blue-500 rounded-full ${
                  index === 0
                    ? "animate-bounce"
                    : index === 1
                    ? "animate-bounce animate-delay-500"
                    : "animate-bounce animate-delay-800"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
