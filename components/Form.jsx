import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col mb-16">
      <h1 className="head_text text-left">
        <span className="purple_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md desc text-left">
        Unleash your creativity to {type} and share amazing prompts with the
        world
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-7 mt-10 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-600">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            placeholder="Write your prompt here...."
            required
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-600">
            Tags{` `}
          </span>
          <span className="font-normal">(#development, #product, #idea)</span>
          <input
            value={post.tag}
            placeholder="#tag"
            required
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
          />
        </label>
        <div className="flex-end mb-5 mx-3 gap-4">
          <Link href="/" className="text-md text-gray-600">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-md bg-purple-500 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
