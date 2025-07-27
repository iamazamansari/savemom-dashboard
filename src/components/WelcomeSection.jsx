import welcomeImage from "../assets/welcome.png";

const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col items-center sm:flex-row sm:items-start">
        {" "}
        <img
          src={welcomeImage}
          alt="Welcome Illustration"
          className="h-40 sm:h-52 w-auto mb-4 sm:mb-0 sm:mr-4 px-0 sm:px-16 md:px-24 lg:px-32"
        />
        <div className="text-center sm:text-left">
          {" "}
          <h3 className="text-lg text-savemom-teal">Welcome back Admin</h3>
          <p className="text-gray-600 mt-4 text-sm">
            You have 12 tasks to finish today. <br /> You already completed 189
            tasks. Good job!
          </p>
          <p
            aria-label="78 percent of target achieved"
            className="inline-block text-sm text-[#0D9394] bg-[#d9ffff] px-2 py-0.5 rounded-md shadow-sm mt-8"
          >
            78% of Target
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
