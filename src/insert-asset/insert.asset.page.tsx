import Link from "next/link";
import Header from "../components/header.component";

export default function InsertAssetPage(props: any) {
  const { typePageInsertAsset } = props;
  const chkTypePageInsert = () => {
    typePageInsertAsset(true);
  };
  return (
    <div className="flex flex-col w-full h-screen relative ">
      <Header headerName="New/Assets" />
      <div className="flex flex-col justify-center items-center mt-[10px]  w-full">
        <div className="flex flex-wrap flex-col justify-center items-center bg-black border-mainGreen border-2 mt-[10px] w-[500px] rounded-lg ">
          <span className="pl-2 text-white w-[95%] mt-3">
            Select Top Layout [0/10]
          </span>
          <Link
            href=""
            className="flex flex-wrap flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[296px] rounded-lg m-3"
            onClick={chkTypePageInsert}
          >
            <div>
              <span className="pl-2 text-white w-[95%] mt-3 text-center text-[20px]">
                + Select Image
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center bg-black border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg ">
          <span className="pl-2 text-white w-[95%] mt-3">
            Select Top Layout [0/10]
          </span>
          <Link
            href=""
            className="flex flex-wrap flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[296px] rounded-lg m-3"
            onClick={chkTypePageInsert}
          >
            <div>
              <span className="pl-2 text-white w-[95%] mt-3 text-center text-[20px]">
                + Select Image
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap flex-col justify-center items-center bg-black border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg ">
          <span className="pl-2 text-white w-[95%] mt-3">
            Select Top Layout [0/10]
          </span>
          <Link
            href=""
            className="flex flex-wrap flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[296px] rounded-lg m-3"
            onClick={chkTypePageInsert}
          >
            <div>
              <span className="pl-2 text-white w-[95%] mt-3 text-center text-[20px]">
                + Select Image
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
