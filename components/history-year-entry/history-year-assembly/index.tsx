import { GeneralAssemblyForListQuery } from "../../../lib/api/generalAssembly";
import { PdfIcon } from "../../pdf-icon";
import { linkStyle, svgStyle } from "./styles.css";
import { FileAsset } from "@sanity/types";

interface Props {
  assembly: GeneralAssemblyForListQuery;
}

export default function HistoryYearAssembly({ assembly }: Props) {
  return (
    <a className={linkStyle} href={(assembly.file.asset as unknown as FileAsset).url}>
      <PdfIcon className={svgStyle} height={"16px"} width={"16px"} />
      <span>{assembly.name || "Generalforsamling"}</span>
      <span>&nbsp;({new Date(assembly.date).toLocaleString("nb-no", { month: "long" })})</span>
    </a>
  );
}