/**
 * Divider OR Component
 * Displays a horizontal divider with "OR" text in the center
 * @returns {JSX.Element} Divider component
 */
export default function Divider_OR() {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <span className="w-full h-[1px] bg-[#c2c8d0]"></span>
      <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
      <span className="w-full h-[1px] bg-[#c2c8d0]"></span>
    </div>
  );
}
