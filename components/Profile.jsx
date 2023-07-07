import PromptCard from "./PromptCard";

const Profile = ({ name, desc, posts, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text">
        <span className="purple_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left ">{desc}</p>
      <div className="mt-12 prompt_layout">
        {posts.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
