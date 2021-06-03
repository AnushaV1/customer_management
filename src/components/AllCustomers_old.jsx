import React from 'react'
import { useTable } from 'react-table';
import { Customers } from "./Customers";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function AllCustomers_old() {
  const columns = React.useMemo(
    () => [
        {
            Header: 'First Name',
            accessor:'firstname',
            className: 'colorClass'

        },
        {
            Header: 'Last Name',
            accessor:'lastname',
            className: 'colorClass'
            
        },
        {
            Header: 'Address',
            accessor:'address',
        },
        {
            Header: 'City',
            accessor:'city',

        },
        {
            Header: 'State',
            accessor:'state',
        },
        {
            Header: 'Email',
            accessor:'email',
        },
        {
            Header: 'Phone',
            accessor:'phone',
        },
    ]
    , [])

  const data = React.useMemo(() => Customers, [])

  return (
        <Table columns={columns} data={data} />
  )
}

export default AllCustomers_old;
