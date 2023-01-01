// Get all suggestions from top search engines
// import axios from "axios";
const axios = require("axios");

const getSearchSuggestions = async (keyword) => {
  let url = "https://suggestqueries.google.com/complete/search";

  let params = {
    client: "chrome",
    hl: "",
    gl: "",
    callback: "jQuery22008223804207678171_1670938717549",
    q: "gitignore y",
    _: "1670938717611",
  };

  //
  let params2 = {
    client: "chrome",
    hl: "hi",
    gl: "in",
    callback: "jQuery220029527664590589_1670941024256",
    _: 1670941024268,
  };

  let suggestions;

  function getGoogleSuggestions(search_term) {
    return axios
      .get(url, { params: { ...params, q: search_term } })
      .then((response) => {
        // console.log(response.data);
        suggestions = response.data;
        suggestions = suggestions
          .split("jQuery22008223804207678171_1670938717549(")[1]
          .split("]")[0]
          .split("[")[2]
          .split('","')
          .map((item) => item.replace(/"/g, ""));
        return suggestions;
      })
      .catch((error) => console.log(error));
  }

  async function main(query) {
    // loop all alphabet
    let data = [];
    try {
      for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(97 + i);
        // loop all alphabet
        let terms = await getGoogleSuggestions(query + char + "");
        //   console.log(object);
        // console.log(terms, "terms");
        let terms2 = await getGoogleSuggestions(char + " " + query + "");
        data = [...data, ...terms, ...terms2];
        data = [...new Set(data)];
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  //   return main(keyword).then((data) => console.log(data));
  return getGoogleSuggestions(keyword);
};

const Suggestion = async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) return res.status(400).json({ message: "Keyword is required" });
  const suggestions = await getSearchSuggestions(keyword);
  res.status(200).send({ suggestions });
  // res.send("hello");
};

// async function main() {
//   const suggestions = await getSearchSuggestions("gitignore");
//   console.log(suggestions, "suggestions");
// }
// main();
export default Suggestion;
