import Image from "next/image";

const Topbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white fixed top-0 left-64 right-0 z-10">
            <div className="flex items-center">
                <input type="text" placeholder="Search" className="w-full p-2 rounded-md border border-gray-300" />
            </div>
            <div className="flex items-center">
                <button className="mr-4">
                    <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Menu" width={40} height={40} className="rounded-full" />
                </button>
            </div>
        </div>
    );
};

export default Topbar;
