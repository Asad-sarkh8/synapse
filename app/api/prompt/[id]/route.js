import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
//get

export const GET = async (request, { params }) => {
  try {
    //connectToDB is a lambda function (dies everytime after its execution)
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response("Prompt Not Found", { status: 404 });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};

//patch

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    //connectToDB is a lambda function (dies everytime after its execution)
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existingPrompt) {
      return new Response("Prompt Not Found", { status: 404 });
    }
    //after finding the prompt replace it with new prompt
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

//delete
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response("Post Deleted Successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete post", { status: 500 });
  }
};
