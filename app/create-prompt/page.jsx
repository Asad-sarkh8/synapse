"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateNewPrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [prompt, setPrompt] = useState({
    tag: "",
    prompt: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!session?.user.id) {
      router.push("/");
      return alert("User ID not Found");
    }
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt.prompt,
          userId: session?.user.id,
          tag: prompt.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      //finally executes either way (after try or catch)
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={prompt}
      setPost={setPrompt}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreateNewPrompt;
