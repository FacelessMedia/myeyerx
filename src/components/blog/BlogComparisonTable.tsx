interface Column {
  header: string;
  highlight?: boolean;
}

interface BlogComparisonTableProps {
  columns: Column[];
  rows: string[][];
}

export function BlogComparisonTable({ columns, rows }: BlogComparisonTableProps) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`text-left px-4 py-3 font-bold text-heading border-b border-gray-200 ${i === 0 ? "min-w-[140px]" : ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-2.5 border-b border-gray-100 ${columns[ci]?.highlight ? "font-bold text-amber-600" : "text-gray-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
