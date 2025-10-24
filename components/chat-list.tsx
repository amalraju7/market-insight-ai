import { Separator } from '@/components/ui/separator'
import { UIState } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import Link from 'next/link'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export interface ChatList {
  messages: UIState
  session?: Session
  isShared: boolean
}

export function ChatList({ messages, session, isShared }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-3xl px-4">
      {messages.map((message, index) => (
        <div 
          key={message.id} 
          className="transition-opacity duration-300 hover:opacity-100"
          style={{
            opacity: 0.95,
            transitionDelay: `${index * 50}ms`
          }}
        >
          <div className="py-4">
            {message.display}
          </div>
          {index < messages.length - 1 && (
            <Separator className="my-2 opacity-25" />
          )}
        </div>
      ))}
    </div>
  )
}
