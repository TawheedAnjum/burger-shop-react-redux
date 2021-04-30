import top from "../../../assets/images/burger/top.svg";

const TableRow = () => {
  return (
      <tr>
        <th>
            <img src={top} className="imgth" />
        </th>
        <th>Bread</th>
        <th>2x</th>
        <th>200tk</th>
     </tr>

  );
};

export default TableRow;
