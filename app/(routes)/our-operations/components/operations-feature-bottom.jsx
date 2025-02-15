import Image from "next/image";
import { CheckSquare } from "lucide-react";

const OperationsFeatureBottom = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
          <div className="flex space-x-2 sm:space-x-4">
            <CheckSquare />
            <div className="space-y-2">
              <p className="text-lg font-medium leadi">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leadi">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <CheckSquare />
            <div className="space-y-2">
              <p className="text-lg font-medium leadi">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leadi">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <CheckSquare />
            <div className="space-y-2">
              <p className="text-lg font-medium leadi">
                Lorem ipsum dolor sit amet
              </p>
              <p className="leadi">
                Praesentium ea et neque distinctio quas eius repudiandae quaerat
                obcaecati voluptatem similique!
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <div className=" aspect-square relative w-full py-10">
              <Image
                src="/images/01.jpg"
                alt=""
                className=" shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OperationsFeatureBottom;
//aspect-square object-cover
