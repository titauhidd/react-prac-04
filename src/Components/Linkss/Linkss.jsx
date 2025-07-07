const Linkss = ({ routeli }) => {
  console.log(routeli);
  return (
    <li>
      <a href={routeli.path}>{routeli.name}</a>
    </li>
  );
};

export default Linkss;
