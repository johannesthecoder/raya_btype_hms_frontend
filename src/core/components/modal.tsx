import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  title: string;
  okayLabel?: string;
  onOkay?: Function;
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ title, okayLabel = "Okay", onOkay, children }: ModalProps): JSX.Element => {
  return (
    <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center bg-primary bg-opacity-30">
      <div className="bg-white  p-3 flex flex-col gap-3 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">{title}</div>
          <div>
            <AiOutlineClose className="text-2xl" />
          </div>
        </div>
        {/* <div className={`${} text-lg font-bold border-b py-2`}>{title}</div> */}
        {children}
        <div className="flex justify-end gap-3">
          <button className="border border-primary px-4 py-2 rounded-lg text-primary hover:bg-primary hover:bg-opacity-25">
            {okayLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
