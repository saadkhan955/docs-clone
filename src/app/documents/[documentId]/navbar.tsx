"use client"

import { BoldIcon, FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FileTextIcon, GlobeIcon, ItalicIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, StrikethroughIcon, TextIcon, TrashIcon, UnderlineIcon, Undo2Icon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BsFilePdf } from "react-icons/bs"

import { DocumentInput } from "./document-input"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from "@/components/ui/menubar"

const useOsShortcut = () => {
  const [shortcutPrefix, setShortcutPrefix] = useState("⌘")

  useEffect(() => {
    const platform = navigator.userAgent.toLowerCase()
    if (platform.includes('win')) {
      setShortcutPrefix("Ctrl+")
    } else if (platform.includes('linux')) {
      setShortcutPrefix("Ctrl+")
    }
    // Default is already set to ⌘ for macOS
  }, [])

  return shortcutPrefix
}

export const Navbar = () => {
  const shortcutPrefix = useOsShortcut()
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">File</MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="size-4 mr-2" />
                      Save
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON
                      </MenubarItem>
                      <MenubarItem>
                        <GlobeIcon className="size-4 mr-2" />
                        HTML
                      </MenubarItem>
                      <MenubarItem>
                        <BsFilePdf className="size-4 mr-2" />
                        PDF
                      </MenubarItem>
                      <MenubarItem>
                        <FileTextIcon className="size-4 mr-2" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <FilePlusIcon className="size-4 mr-2" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <FilePenIcon className="size-4 mr-2" />
                    Rename
                  </MenubarItem>
                  <MenubarItem>
                    <TrashIcon className="size-4 mr-2" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className="size-4 mr-2" />
                    Print
                    <MenubarShortcut>{`${shortcutPrefix}P`}</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Undo2Icon className="size-4 mr-2" />
                    Undo
                    <MenubarShortcut>{`${shortcutPrefix}Z`}</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    <Redo2Icon className="size-4 mr-2" />
                    Redo
                    <MenubarShortcut>{`${shortcutPrefix}Shift+Z`}</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut
                    <MenubarShortcut>{`${shortcutPrefix}X`}</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy
                    <MenubarShortcut>{`${shortcutPrefix}C`}</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste
                    <MenubarShortcut>{`${shortcutPrefix}V`}</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">Insert</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        1 X 1
                      </MenubarItem>
                      <MenubarItem>
                        2 X 2
                      </MenubarItem>
                      <MenubarItem>
                        3 X 3
                      </MenubarItem>
                      <MenubarItem>
                        4 X 4
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">Format</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="size-4 mr-2" />
                      Text
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>
                        <BoldIcon className="size-4 mr-2" />
                        Bold
                        <MenubarShortcut>{`${shortcutPrefix}B`}</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <ItalicIcon className="size-4 mr-2" />
                        Italic
                        <MenubarShortcut>{`${shortcutPrefix}I`}</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <UnderlineIcon className="size-4 mr-2" />
                        Underline
                        <MenubarShortcut>{`${shortcutPrefix}U`}</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        <StrikethroughIcon className="size-4 mr-2" />
                        <span>Strikethrough</span>&nbsp;&nbsp;
                        <MenubarShortcut>{`${shortcutPrefix}S`}</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    <RemoveFormattingIcon className="size-4 mr-2" />
                    Clear Formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  )
}