import { GeneralAssemblyForListQuery } from "../../../lib/api/generalAssembly";
import { PdfIcon } from "../../pdf-icon";
import { linkStyle, svgStyle } from "./styles.css";
import { Association } from "../../../studio/sanity.types";
import { FileAsset } from "@sanity/types";

interface Props {
  assembly: GeneralAssemblyForListQuery;
}

export default function HistoryYearAssembly({ assembly }: Props) {
  return (
    <a className={linkStyle} href={(assembly.file.asset as unknown as FileAsset).url}>
      <PdfIcon className={svgStyle} height={"16px"} width={"16px"} />
      <span>{(assembly.association as unknown as Association).short} {new Date(assembly.date).getMonth() < 10 ? "Vår" : "Høst"}</span>
    </a>
  );
}