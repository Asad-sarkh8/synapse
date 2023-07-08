import Feed from "@components/Feed";
const HOME = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Unleash Your Creativity with
          <br />
          <span className="orange_gradient">AI Prompts</span>
        </h1>
        <p className="desc text-center">
          The ultimate online platform for connecting with fellow creators and
          exploring the vast realm of AI prompts
        </p>
      </section>
      <Feed />
    </>
  );
};
export default HOME;
