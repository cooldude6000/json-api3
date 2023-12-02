export const EXAMPLE_PROMPT = `DATA: \n"Lionel Messi is 36 years old and plays football for Inter Miami. He has won 8 Ballon d'Or awards and scored over 800 goals."\n\n-----------\nExpected JSON format: 
{
  name: { type: "string" },
  age: { type: "number" },
  currentTeam: { type: "string" },
  awards: {
    type: "array",
    items: { type: "string" },
  },
  goalsScored: { type: "number" }
}
\n\n-----------\nValid JSON output in expected format:`

export const EXAMPLE_ANSWER = `{
  name: "Lionel Messi",
  age: 36,
  currentTeam: "Inter Miami",
  awards: ["Ballon d'Or"],
  goalsScored: 800
}`