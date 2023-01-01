// count tool uses

// get the count of tool uses from local storage

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

const getToolUses = () => {
  const toolUses = localStorage.getItem("toolUses");
  if (toolUses) {
    return toolUses;
  }
  return 0;
};

// set the count of tool uses in local storage
const setToolUses = () => {
  const countToolUsage = getToolUses();
  let toolUses = parseInt(countToolUsage) + 1;
  localStorage.setItem("toolUses", toolUses);
};

// If tool uses is greater than 5 and no token then redirect to login page
const checkToolUses = () => {
  const countToolUsage = getToolUses();
  if (countToolUsage > 5 && !getToken()) {
    window.location.href = "/login";
  }
};

// check tool uses on page load

export { checkToolUses, setToolUses };
