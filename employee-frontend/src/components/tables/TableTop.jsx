import React from 'react';
import { useMemo } from 'react';
import TWButton from '../button/TWButton';


function TableTop({ buttons, title }) {
  const buttonList = useMemo(
    () => buttons?.map((i) => <TWButton {...i} key={i.label} />),
    [buttons]
  );

  return (
    <div className="flex flex-col gap-y-4 rounded-sm border border-stroke bg-white p-3 shadow-default sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
      </div>
      <div className="flex flex-col gap-4 2xsm:flex-row 2xsm:items-center">
        {buttonList}
      </div>
    </div>
  );
}

export default TableTop;
