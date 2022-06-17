import React from "react";
import { BiSearch, BiBell, BiUser } from "react-icons/bi";
import { IoList } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="flex justify-center bg-white px-0 py-5 shadow-lg">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex w-5/12 items-center justify-between space-x-6">
                        <div className="flex flex-row items-center bg-purple4 px-4 py-3  rounded text-white">
                            <img
                                src="/images/handshaker.svg "
                                className="w-8 h-8 mr-2"
                                alt=""
                            />
                            SecondHand
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between space-x-4 rounded-2xl bg-white px-6 py-3 md:bg-slate-100">
                                <form>
                                    <input
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Cari di sini ..."
                                        class="bg-white md:bg-slate-100"
                                    />
                                </form>
                                <BiSearch className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-8">
                        <IoList />
                        <BiBell />
                        <BiUser />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;