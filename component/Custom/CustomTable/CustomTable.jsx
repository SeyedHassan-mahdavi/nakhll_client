import { Fragment } from "react";
import BootstrapTable from "react-bootstrap-table-next";

const CustomTable = ({ products, columns, ...otherProps }) => {
  return (
    <Fragment>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        {...otherProps}
      />
    </Fragment>
  );
};

export default CustomTable;
