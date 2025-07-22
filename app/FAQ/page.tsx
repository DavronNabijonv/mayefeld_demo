import Navbar from "@/components/common/navbar";

export default function FaqPage() {
  return (
    <div className="max-w-[1400px] w-full mx-auto">
      <Navbar backFon="light" />
      <p className="text-[40px]">Questions & Answers</p>

      {/* main section */}
      <div className="bg-indigo-200"></div>

      {/* footer */}
      <div className="flex flex-col gap-2 items-start justify-start w-[100%] mt-10">
        <p className="border-t-3 border-gray-600 pt-2 w-full text-[12px]">
          MAYERFELD.CONSULTING
        </p>
      </div>

    </div>
  );
}
