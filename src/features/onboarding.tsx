import processes from "../utils/processes";

function Onboarding() {
  const getGradient = (index: number) => {
    return (
      {
        0: "bg-gradient-to-b from-blue-200 to-transparent",
        2: "bg-gradient-to-b from-pink-100 to-transparent",
      }[index] || "bg-transparent"
    );
  };

  return (
    <article className="bg-blue-100 pt-10 lg:pt-12">
      <div className="container mx-auto text-slate-800">
        <div className="text-center">
          <div className="text-xl lg:text-3xl">
            Easy simple <span className="font-bold">3 steps process</span>
          </div>
          <p className="text-2xs lg:text-xs mt-2 opacity-80">
            Join our community and let's heal the world with <br /> your
            knowledge & earn rewards.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 p-4 ${getGradient(
                index
              )}`}
            >
              <div className="border-2 border-blue-200 border-dashed p-3 rounded-full">
                <div className="p-10 rounded-full bg-white overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/100x100/?id=${process.id}`}
                    alt=""
                    className="rounded-full w-14"
                  />
                </div>
              </div>
              <div className="text-sm font-bold capitalize mt-2">
                {process.title}
              </div>
              <div className="text-2xs text-center">{process.description}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Onboarding;
