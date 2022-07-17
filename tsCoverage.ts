import glob from "glob";

const getCoverage = async () => {
  const allJSTSFiles = glob.sync("/**/*.[j|t]s?(x)", {
    root: "src",
  });
  const tsFiles = allJSTSFiles.filter(
    (file) => file.endsWith("ts") || file.endsWith("tsx")
  );
  return +(tsFiles.length / allJSTSFiles.length).toFixed(2);
};

export default getCoverage;
