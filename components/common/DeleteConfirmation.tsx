// components/common/DeleteConfirmation.tsx
"use client";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  itemType?: string;
}

const DeleteConfirmation = ({ onConfirm, itemType = "item" }: DeleteConfirmationProps) => {
  const showDeleteConfirmation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this ${itemType}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonColor: "#d33", 
      background: "#ffffff",
      buttonsStyling: false, 
      customClass: {
        container: "bg-white dark:bg-gray-800",
        popup: "rounded-xl shadow-lg border border-gray-200",
        title: "text-gray-800 font-semibold",
        htmlContainer: "text-gray-600",
        confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md", 
        cancelButton: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md ml-2" 
      }
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        Swal.fire({
          title: "Deleted!",
          text: `Your ${itemType} has been deleted.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#ffffff",
          customClass: {
            popup: "rounded-xl shadow-lg border border-gray-200"
          }
        });
      }
    });
  };

  return (
    <button 
      onClick={showDeleteConfirmation}
      className="text-black-500"
    >
      <IoTrashOutline size={17} className="cursor-pointer" />
    </button>
  );
};

export default DeleteConfirmation;