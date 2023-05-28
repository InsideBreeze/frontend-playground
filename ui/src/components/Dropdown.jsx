import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  return (
    <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenu.Trigger>
        <EllipsisVerticalIcon className="h-8 w-8" />
      </DropdownMenu.Trigger>

			{/* before unmounting, finish the animation */}
      <AnimatePresence>
        {dropdownOpen && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content align="end">
              <motion.div
                className="text-slate-50 bg-slate-900 rounded-md origin-top-right"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <DropdownMenu.Group>
                  <DropdownMenu.Item className="p-2">
                    <div>Mute notifications</div>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Group>
                  <DropdownMenu.Item className="p-2">
                    View group info
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="p-2">
                    Export chat history
                  </DropdownMenu.Item>

                  <DropdownMenu.Item className="p-2">Report</DropdownMenu.Item>

                  <DropdownMenu.Item className="p-2">
                    Leave the group
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
