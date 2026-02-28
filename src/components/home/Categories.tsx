import { Link } from "@/i18n/navigation";
import { GoArrowRight } from "react-icons/go";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const categories = [
  {
    id: 1,
    title: "Design",
    available: 235,
    icon: FaRegMoneyBill1,
  },
  {
    id: 2,
    title: "Sales",
    available: 235,
    icon: FaRegMoneyBill1,
  },
  {
    id: 3,
    title: "Marketing",
    available: 235,
    icon: FaRegMoneyBill1,
  },
  {
    id: 4,
    title: "Finance",
    available: 235,
    icon: FaRegMoneyBill1,
  },
  {
    id: 5,
    title: "Technology",
    available: 235,
    icon: FaRegMoneyBill1,
  },
  {
    id: 6,
    title: "Engineering",
    available: 235,
    icon: FaRegMoneyBill1,
  },
  {
    id: 7,
    title: "Business",
    available: 211,
    icon: FaRegMoneyBill1,
  },
  {
    id: 8,
    title: "Human Resource",
    available: 346,
    icon: FaRegMoneyBill1,
  },
  {
    id: 9,
    title: "Resource",
    available: 346,
    icon: FaRegMoneyBill1,
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-6 lg:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-[32px] lg:text-[48px] font-semibold">
          Explored by <span className="text-[#26A4FF]">Category</span>
        </h2>
        <Link href="/jobs" className="flex items-center justify-between gap-3 text-[#4640DE] font-semibold font-epilogue hidden md:block">
          <span>Show all jobs</span>
          <GoArrowRight />
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {categories?.slice(0, 8).map((category) => (
          <div
            key={category.id}
            className="group border p-3 lg:p-8 hover:bg-[#4640DE] hover:text-white transition-all duration-300 cursor-pointer flex flex-row md:flex-col gap-4 md:gap-0 items-center md:items-start"
          >
            <category.icon className="w-11 lg:w-12 h-11 lg:h-12 text-[#4640DE] group-hover:text-white lg:mb-4 " />
            <div className="w-full ">
              <h3 className="font-semibold text-[20px] lg:text-[24px] lg:mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 text-[#7C8493] group-hover:text-white flex items-center justify-between md:justify-start gap-3">
                <span>{category.available} jobs available</span>
                <GoArrowRight className="font-semibold text-md" />
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/jobs" className="flex items-center justify-between gap-3 text-[#4640DE] font-semibold font-epilogue md:hidden mt-4">
        <span>Show all jobs</span>
        <GoArrowRight />
      </Link>
    </div>
  );
};

export default Categories;
