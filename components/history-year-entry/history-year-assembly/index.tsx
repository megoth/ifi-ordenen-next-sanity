import { GeneralAssemblyForListQuery } from "../../../lib/api/generalAssembly";
import { PdfIcon } from "../../pdf-icon";
import { linkStyle, svgStyle } from "./styles.css";

interface Props {
  assembly: GeneralAssemblyForListQuery;
}

export default function HistoryYearAssembly({ assembly }: Props) {
  return (
    <a className={linkStyle} href={assembly.file.asset.url}>
      <PdfIcon className={svgStyle} height={16} width={16} />
      <span>{assembly.association.short} {new Date(assembly.date).getMonth() < 8 ? "Vår" : "Høst"}</span>
    </a>
  );
}