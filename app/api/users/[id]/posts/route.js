import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//params contain the variable given in url (dynamic name of endpoint)
export const GET = async (request, { params }) => {
  try {
    //connectToDB is a lambda function (dies everytime after its execution)
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
