import { cn } from "../../lib/cn";
import Hero_Pages from "../templates/Hero_Pages";

export const Contact = () => {
  return (
    <Hero_Pages ImageUrl="/download.png">
      <div>
        <h1 className="text-4xl font-bold">Let's Connect!</h1>
        <form className="text-2xl flex gap-1 flex-col">
          <div className="flex gap-3 flex-wrap items-center">
            <h1>Hello my name is</h1>
            <input
              type="text"
              placeholder="your name"
              className={cn(
                "border-b-2 border-b-gray-500 text-gray-400 w-40 focus:outline-none"
              )}
            />
            <h1>and I want to discuss a potential project.</h1>
          </div>

          <div className="flex gap-3 flex-wrap items-center">
            <h1>You can email me at</h1>
            <input
              type="email"
              placeholder="your@email"
              className="border-b-2 border-b-gray-500 text-gray-400 w-40 focus:outline-none"
            />
            <h1>or reach out to me on</h1>
            <input
              type="text"
              placeholder="your phone"
              className="border-b-2 border-b-gray-500 text-gray-400 w-40 focus:outline-none"
            />
          </div>

          <div>
            <h1>Here are some details about my project:</h1>
          </div>

          <div>
            <textarea
              className="border-b-2 border-b-gray-500 text-gray-400 w-full focus:outline-none"
              placeholder="My project is about..."
            />
          </div>
        </form>
      </div>
    </Hero_Pages>
  );
};
