import GlobalSettings from "./GlobalSettings";
import { CellState } from "./Classes";


export class Utils 
{
    static getCellStateColor(state: CellState): string 
    {
        return GlobalSettings.CellStateColors.has(state)
            ? (GlobalSettings.CellStateColors.get(state) as string)
            : "";
    }

    static GetDistanceBetweenTwoCells(cellOneKey: string, cellTwoKey: string): number 
    {
        var cellOneCoords = this.GetColumnRowFromCellKey(cellOneKey);
        var cellTwoCoords = this.GetColumnRowFromCellKey(cellTwoKey);

        if (cellOneCoords.column == cellTwoCoords.column) 
        {
            if (cellOneCoords.row == cellTwoCoords.row) 
            {

            }
        }
        else
        {
            if (cellOneCoords.row == cellTwoCoords.row) 
            {
                
            }
        }

        return 0;
    }

    static GetColumnRowFromCellKey(key: string): { column: number, row: number } 
    {
        return {
            column: Number(key.substring(0, key.indexOf("_"))),
            row: Number(key.substring(key.indexOf("_") + 1))
        };
    }
}
