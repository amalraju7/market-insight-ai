'use client'

import { MarketSidebar } from '@/components/tradingview/market-sidebar'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { SidebarProvider, useSidebar } from '@/lib/hooks/use-sidebar'

interface ChatLayoutProps {
  children: React.ReactNode
}

function ChatLayoutContent({ children }: ChatLayoutProps) {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      {/* Main chat area */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      
      {/* Market sidebar toggle button - visible on xl screens */}
      <div className="hidden xl:block absolute right-0 top-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8 rounded-l-md rounded-r-none border-r-0 bg-white shadow-md hover:bg-gray-50"
          style={{
            right: isSidebarOpen ? '600px' : '0px',
            transition: 'right 0.3s ease-in-out'
          }}
        >
          {isSidebarOpen ? (
            <ChevronRightIcon className="h-4 w-4" />
          ) : (
            <ChevronLeftIcon className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Market sidebar - collapsible */}
      <div 
        className={`hidden xl:block border-l border-border overflow-hidden bg-gray-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-[600px]' : 'w-0'
        }`}
      >
        <div className="h-full p-3 w-[600px]">
          <MarketSidebar />
        </div>
      </div>
    </div>
  )
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <SidebarProvider>
      <ChatLayoutContent>{children}</ChatLayoutContent>
    </SidebarProvider>
  )
}
