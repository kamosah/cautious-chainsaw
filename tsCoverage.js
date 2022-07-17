import glob from "glob";

let tsCoverage = 0;

const getCoverage = async () => {
  const allJSTSFiles = glob.sync("/**/*.[j|t]s?(x)", {
    root: "src",
  });
  const tsFiles = allJSTSFiles.filter(
    (file) => file.endsWith("ts") || file.endsWith("tsx")
  );
  tsCoverage = +(tsFiles.length / allJSTSFiles.length).toFixed(2);
  return tsCoverage;
};

getCoverage().then((coverage) => {
  console.log("10");
  return coverage;
});

export default getCoverage;

