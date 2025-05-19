function calculateNumberOfSkills(skills) {
  if (!Array.isArray(skills)) {
    throw new Error("Input must be an array");
  }
  return skills.length;
}