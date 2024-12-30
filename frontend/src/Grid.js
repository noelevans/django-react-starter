'use client';
import React, { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

function Grid() {
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);

    return (
        <div style={{ height: 500 }}>
            <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
            />
        </div>
    )
}

export default Grid;
