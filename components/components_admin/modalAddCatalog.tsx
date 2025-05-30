"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalAddCatalogManual from "./modalAddCatalogManual";
import ModalAddCatalogExcel from "./modalAddCatalogExcel";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalAddUser() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Button
        isExternal
        as={Link}
        className="text-dark-red bg-transparent border-none shadow-none hover:bg-white"
        onPress={onOpen}
        isIconOnly
      >
        <FontAwesomeIcon
          icon={faSquarePlus}
          style={{ width: "30px", height: "30px" }}
        />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Add Catalog
              </ModalHeader>
              <ModalBody>
                <p className="text-black">
                  Would you like to add catalog data manually or import from an
                  Excel file?
                </p>
              </ModalBody>
              <ModalFooter>
                <ModalAddCatalogManual />
                <ModalAddCatalogExcel />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
