"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditPromptPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [prompt, setPrompt] = useState({
    tag: "",
    prompt: "",
  });

  //get existing data of the post
  useEffect(() => {
    const getExistingPromptData = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();
      console.log("data received", data);
      setPrompt({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getExistingPromptData();
  }, [promptId, session?.user.id]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) {
      router.push("/");
      return alert("Prompt ID not Found");
    }
    if (!session?.user.id) {
      router.push("/");
      return alert("User ID not Found");
    }
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: prompt.prompt,
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
      type="Edit"
      post={prompt}
      setPost={setPrompt}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPromptPage;
