import { useTheme } from "../../Context/ThemeContext";
import useGetBlogs from "../../Hooks/useGetBlogs";
import { cn } from "../../lib/cn";

const CategoryInformations = () => {
  const { BlogById } = useGetBlogs();
  const { theme } = useTheme();
  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-10",
          theme === "light" ? "text-black" : "text-white"
        )}
      >
        <div className="text-xl flex items-center">
          <p>
            <span className="text-6xl font-semibold">U</span>ntil now, trying to
            style an article, document, or blog post with Tailwind has been a
            tedious task that required a keen eye for typography and a lot of
            complex custom CSS.
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>
            By default, Tailwind removes all of the default browser styling from
            paragraphs, headings, lists and more. This ends up being really
            useful for building application UIs because you spend less time
            undoing user-agent styles, but when you really are just trying to
            style some content that came from a rich-text editor in a CMS or a
            markdown file, it can be surprising and unintuitive.
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>
            We get lots of complaints about it actually, with people regularly
            asking us things like:
          </p>
        </div>

        <div className="text-xl flex items-center bg-[#7b00d333] p-10 border-l-6 border-l-[#7b00d3]">
          <blockquote>
            "Why is Tailwind removing the default styles on my " h1 " elements?
            How do I disable this? What do you mean I lose all the other base
            styles too? We hear you, but we're not convinced that simply
            disabling our base styles is what you really want. You don't want to
            have to remove annoying margins every time you use a " p " element
            in a piece of your dashboard UI. And I doubt you really want your
            blog posts to use the user-agent styles either — you want them to
            look awesome, not awful.""
          </blockquote>
        </div>

        <div className="text-xl flex items-center">
          <p>
            The <span className="font-bold">'@tailwindcss/typography'</span>{" "}
            plugin is our attempt to give you what you actually want, without
            any of the downsides of doing something stupid like disabling our
            base styles.
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>
            It adds a new <span className="font-bold">' prose '</span> class
            that you can slap on any block of vanilla HTML content and turn it
            into a beautiful, well-formatted document:
          </p>
        </div>

        <hr />

        <div className="text-xl flex items-center">
          <p id="What_Expect" className="text-2xl font-bold">
            What to expect from here on out
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>
            What follows from here is just a bunch of absolute nonsense I've
            written to dogfood the plugin itself. It includes every sensible
            typographic element I could think of, like bold text, unordered
            lists, ordered lists, code blocks, block quotes, and even italics.{" "}
            <h3>This is inline code</h3>
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>
            It's important to cover all of these use cases for a few reasons:
          </p>
        </div>

        <div className="text-xl flex items-center">
          <ol className="list-decimal list-inside  marker:text-[#ffbdeb] text-xl">
            <li>We want everything to look good out of the box.</li>
            <li>
              Really just the first reason, that's the whole point of the
              plugin.
            </li>
            <li>
              Here's a third pretend reason though a list with three items looks
              more realistic than a list with two items.
            </li>
          </ol>
        </div>

        <div className="text-xl flex items-center">
          <p>Now we're going to try out another header style.</p>
        </div>

        <div className="text-xl flex items-center">
          <p id="Easy" className="text-2xl font-bold">
            Typography should be easy
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>
            So that's a header for you — with any luck if we've done our job
            correctly that will look pretty reasonable.
          </p>
        </div>

        <div className="text-xl flex items-center">
          <p>Something a wise person once told me about typography is:</p>
        </div>

        <div className="text-xl flex items-center bg-[#7b00d333] p-10 border-l-6 border-l-[#7b00d3]">
          <blockquote>
            "Typography is pretty important if you don't want your stuff to look
            like trash. Make it good then it won't be bad."
          </blockquote>
        </div>

        <div className="text-xl flex items-center">
          <p>
            It's probably important that images look okay here by default as
            well:
          </p>
        </div>

        <img src={BlogById?.result[0]?.image} alt="Image.png" />
      </div>
    </>
  );
};

export default CategoryInformations;
