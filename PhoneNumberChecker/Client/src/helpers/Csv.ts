import { startCase } from "lodash";

export class ObjectToCsvOpt<TObject> {
  showHeader?: boolean;
  excludeProperties?: Array<keyof TObject>;
  fileName?: string;
}

/**
 * A helper class to convert Objects or Arrays to text and downloaded as CSV
 */
export class CsvHelper {
  /**
   *
   * @param opt Setting defaults if show columns header or file name fields are undefined
   * @returns The passed options with defaults being set
   */
  private static SetDefaults<T>(opt: ObjectToCsvOpt<T>) {
    if (opt.showHeader === null || opt.showHeader === undefined) {
      opt.showHeader = true;
    }

    if (opt.fileName === null || opt.fileName === undefined) {
      opt.fileName = `number-${new Date().toLocaleString()}.csv`;
    }

    return opt;
  }

  /**
   *
   * @param obj Object to be downloaded as CSV
   * @param opt Config options like show columns header or file name
   * @returns An array with data formatted as array of array of string
   */
  private static ObjectToCsvData<T extends object>(
    obj: T,
    opt: ObjectToCsvOpt<T>
  ): string[][] {
    // null safety
    if (!obj) return [];

    const { excludeProperties, showHeader } = opt;

    let header: string[] | undefined;

    // Exclude from header
    excludeProperties?.map((x) => delete obj[x]);

    header = showHeader
      ? Object.keys(obj).map((x) => JSON.stringify(startCase(x)))
      : undefined;

    const data = Object.values(obj).map((x) => JSON.stringify(x));

    if (header) return [[...header], [...data]];

    return [[...data]];
  }

  /**
   *
   * @param arr Array to be downloaded as CSV
   * @param opt Config options like show columns header or file name
   * @returns An array with data formatted as array of array of string
   */
  private static ArrayToCsvData<T extends object>(
    arr: T[],
    opt: ObjectToCsvOpt<T>
  ): string[][] {
    const data: string[][] = [];

    arr.map((x, i) => {
      if (i === 0) {
        data.push(...this.ObjectToCsvData(x, opt));
      } else {
        opt.showHeader = false;
        data.push(...this.ObjectToCsvData(x, opt));
      }
    });

    return data;
  }

  /**
   *
   * @param val Object or Array to be downloaded as CSV
   * @param opt Config options like show columns header or file name
   */
  static Download<T extends object>(
    val: T | T[],
    opt: ObjectToCsvOpt<T> = new ObjectToCsvOpt<T>()
  ) {
    opt = this.SetDefaults<T>(opt);

    let data: string[][] = [];

    if (Array.isArray(val)) data = this.ArrayToCsvData<T>(val, opt);
    else data = this.ObjectToCsvData<T>(val, opt);

    /**
     * Building the CSV from the Data two-dimensional array
     * Each columns is separated by "," and new line "\n" for next row
     */
    let csvContent = "";
    data.map((infoArray, index) => {
      const dataString = infoArray.join(",");
      csvContent += index < data.length ? dataString + "\n" : dataString;
    });

    // Create anchor tag with download attributes to download as CSV
    let a = document.createElement("a");

    const type = "text/csv;encoding:utf-8";

    if (!opt.fileName?.toLowerCase().includes(".csv")) opt.fileName += ".csv";

    if (URL && "download" in a) {
      // HTML5 A[download]
      a.href = URL.createObjectURL(
        new Blob([csvContent], {
          type,
        })
      );
      a.setAttribute("download", opt.fileName ?? "file.csv");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      location.href =
        "data:application/octet-stream," + encodeURIComponent(csvContent);
    }
  }
}
