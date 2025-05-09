import React from 'react';

export interface Column<T> {
  header?: string;
  accessor?: keyof T;
  key?: string;
  label?: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: T[keyof T], row?: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  caption?: string;
}

function Table<T extends { id: number | string }>({ 
  columns, 
  data, 
  onRowClick,
  caption 
}: TableProps<T>) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full text-base">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-gray-50 border-b">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-6 py-4 text-${column.align || 'left'} text-base font-medium text-gray-500 ${column.width ? `w-${column.width}` : ''}`}
              >
                {column.header || column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onRowClick?.(item)}
              className={`hover:bg-gray-50 transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((column, index) => {
                const value = column.accessor ? item[column.accessor] : item[column.key as keyof T];
                return (
                  <td
                    key={index}
                    className={`px-6 py-4 text-${column.align || 'left'} text-base ${
                      column.accessor === 'title' || column.key === 'title' ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {column.render ? (
                      column.render(value, item)
                    ) : (
                      <div className="whitespace-pre-line">
                        {String(value)}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table; 