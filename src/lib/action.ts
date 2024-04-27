import OpenAI from "openai";

export async function getRecipes(formData: any) {
  const prompt = [];

  prompt.push("Generate a recipe that incorporates the following details.");
  prompt.push(`[Ingredients: ${formData.ingredients}`);
  prompt.push(`[Dietary Preferences: ${formData.dietaryPreferences}`);
  prompt.push(`[Number of Servings: ${formData.noOfServings}`);

  prompt.push(
    "Please provide a detailed recipe, including steps for preparation and cooking. Only use the ingredients and dietary preferences provides."
  );
  prompt.push(
    "Also give the recipe a suitable name in its local language based on dietary preference."
  );
  prompt.push(
    "Provide the suitable ingredients amount based on the Number of Servings."
  );

  prompt.push(
    "Provide the content in HTML format. Please avoid adding DOCTYPE, HTML, BODY, HEAD  tags and \n in the response."
  );

  const messages = [
    {
      role: "system",
      content: prompt.join(" "),
    },
  ];

  const result = await fetchRecipes(messages);

  return result?.choices.map((choice) => choice.message.content).join("");
}

async function fetchRecipes(messages: any) {
  const OPEN_API_KEY = process.env.NEXT_PUBLIC_OPEN_API_KEY;
  const openAI = new OpenAI({
    apiKey: OPEN_API_KEY,
    // NOTE: Not a good practice using this because of lack of time.
    dangerouslyAllowBrowser: true,
  });
  const aiModel = "gpt-3.5-turbo-0125";

  try {
    const completion = await openAI.chat.completions.create({
      model: aiModel,
      messages,
    });

    return completion;
  } catch (error) {
    console.log(error);
  }
}
