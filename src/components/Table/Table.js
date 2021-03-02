import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Switch } from 'antd';
import { Checkbox } from 'antd';
import Headers from '../Data/Headers';
import SubHeaders from '../Data/SubHeaders';
import DataSource from '../Data/TableData';
import { Context } from '../Context/TableContext';
import { Header } from 'antd/lib/layout/layout';

const DataTable = (props) => {
  const { insertColumn, removeColumn, selectColumn, selected } = props;
  const contextState = React.useContext(Context);
  const [dataInput, setDataInput] = React.useState(Headers);
  React.useEffect(() => {
    let DataInput = Headers;
    DataInput.map((header, index) => {
      // header.onHeaderCell = (column) => {
      //   return {
      //     onClick: () => {
      //       console.log('CLICKED');
      //       selectColumn(index);
      //     },
      //   };
      // };
      //value={selected.includes(index) ? true : false}
      //console.log('selected.includes(index)', selected.includes(index));
      header.title = (
        // <Checkbox
        //   onClick={() => {
        //     console.log('clicked');
        //     selectColumn(index);
        //   }}
        // >
        //   {header.title}
        // </Checkbox>
        <p
          
        >
          {header.title}
        </p>
      );
    });
    setDataInput(DataInput);
  }, []);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
      contextState.setSelectedRows(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
      contextState.setSelectedRows(selectedRows);
    },
  };

  return (
    <Table
      columns={dataInput}
      expandable={{
        expandedRowRender: (record) => {
          console.log(record.info);
          return (
            <Table
              style={{ paddingBottom: '10px' }}
              columns={SubHeaders}
              dataSource={[record.info]}
              pagination={false}
            />
          );
        },
      }}
      rowSelection={{ ...rowSelection }}
      dataSource={DataSource}
    />
  );
};

export default DataTable;
