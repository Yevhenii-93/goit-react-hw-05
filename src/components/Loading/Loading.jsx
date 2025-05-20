import { HashLoader } from "react-spinners";
import css from "./Loading.module.css";

export default function Loading() {
  return <HashLoader className={css.loading} color="#687cd0" />;
}
