import { Table } from "antd";

const DTable = ({ columns, dataSource, ...rest }) => {
  return (
    <div className="mx-3 my-1">
      <div className="md:max-w-[1000px] max-w-[100%] mx-auto">
        <Table
          {...rest}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          
        />
      </div>
    </div>
  );
};

export default DTable;
