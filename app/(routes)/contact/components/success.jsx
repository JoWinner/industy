"use client"
import { useEffect } from "react";

const Success = ({
  title,
  content,
  onAgreeLabel,
  onAgreeClick,
  formElements,
}) => {
  useEffect(() => {
    // Prevent scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed left-0 right-0  top-0 h-full w-5/6   outline-none  scroll-none mx-auto">
      <div className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px] ">
        <div className="pointer-events-auto fixed top-2/3 flex w-full flex-col rounded-md">
          <div className="flex flex-col gap-2 p-4 shadow-md bg-[#040e26] justify-center items-center ">
            <h1 className="text-lg text-[#fc5e28] font-semibold ">
              {title}
            </h1>
            <p className=" text-base  text-white">{content}</p>
            <form className="flex flex-col gap-4 w-full">{formElements}</form>
              <button
                className="px-6 py-2 mt-3 bg-white text-lg font-medium shadow-sm  text-[#040e26]"
                onClick={onAgreeClick}
              >
                {onAgreeLabel}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
