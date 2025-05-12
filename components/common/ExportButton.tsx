import React from 'react'
import { Download, Calendar, FileText, Sheet, Plus } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";


function ExportButton() {
  return (
    <div className="flex items-center gap-2 md:gap-3 ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-4 md:px-5 py-2 text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
                <Download className="h-3.5 md:h-4 w-3.5 md:w-4" />
                <span className="sm:inline">Export</span>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex items-center w-full px-3 py-2 text-sm`}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Export as PDF
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex items-center w-full px-3 py-2 text-sm`}
                      >
                        <Sheet className="mr-2 h-4 w-4" />
                        Export as Excel
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

        </div>
  )
}

export default ExportButton