'use client'


import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import Link from "next/link";
import PopUpFn from "../molecules/pop-up";
import { useRouter } from "next/navigation";
// import { deleteProp } from "@/app/utils/util";
// import Toast from "../molecules/toast";
// import { toast } from "react-toastify";

interface Props {
    refetch: (...args: any) => Promise<any>;
}

const DropDownDrinks
: React.FC = () => {
    const router = useRouter()
    const [openModal, setOpenModal] = useState(false);
    // const notify = () => toast.success("Save Property successfully")

    function isModalOpen() {
        setOpenModal(true);
    }

    function isModalClose() {
        setOpenModal(false);
    }


    function deleteListing() {
        const reqbody = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        }

        // fetch(deleteProp, reqbody).then(async (res) => {
        //     if (!res.ok) {
        //         throw new Error("failed to delete")
        //     } else if (res.ok) {
        //         await refetch();
        //         // notify()
        //         setOpenModal(false)
        //         router.push("/dashboard/myProperties");
        //     }

        // }).catch((er) => {
        //     console.log(er);

        // })

    }

    return (
        <div>
            <ul className="w-28 shadow-lg p-4 rounded-lg space-y-4 bg-white text-gray-700">
                <Link href={"/dashboard/edit-drink"}>
                    <li className="flex item-center gap-2 cursor-pointer mb-5">
                        <FaEdit /> Edit
                    </li>
                </Link>
                <li className="flex item-center gap-2 cursor-pointer" onClick={isModalOpen}>
                    <FaTrashAlt /> Delete
                </li>
                <li className="flex item-center gap-2 cursor-pointer">
                    <FaShare /> Share
                </li>
            </ul>
            {openModal && (
                <PopUpFn onclose={isModalClose}>
                    <p className="mb-10 text-xl font-bold">Are you sure you want to delete this listing?</p>
                    <div className="flex justify-between">
                        <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={deleteListing}>
                            Delete
                        </button>
                        <button className="bg-blue text-white px-4 py-2 rounded" onClick={isModalClose}>
                            Cancel
                        </button>
                    </div>
                </PopUpFn>
            )}
            {/* <Toast /> */}
        </div>
    );
};

export default DropDownDrinks
;