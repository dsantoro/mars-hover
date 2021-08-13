const CAMS = [
  "fhaz",
  "rhaz",
  "mast",
  "chemcam",
  "mahli",
  "mardi",
  "navcam",
  "pamcam",
  "minites",
];

const SelectCam = (props) => {
  return (
    <select {...props}>
      {CAMS.map((item) => (
        <option key={item} value={item}>
          {item.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default SelectCam;
