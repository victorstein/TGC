import { AnimatePresence, MotiView } from 'moti'
import type { FC, ReactNode } from 'react'

export interface ILoadingWrapperProps {
  loading: boolean
  skeleton?: ReactNode
  children: ReactNode
}

export const LoadingWrapper: FC<ILoadingWrapperProps> = ({
  children,
  loading = false,
  skeleton
}): JSX.Element => {
  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <MotiView
          key='skeleton'
          className='flex flex-1'
          from={{ opacity: 0 }}
          transition={{
            type: 'timing',
            duration: 100
          }}
          exitTransition={{ type: 'timing', duration: 100 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {skeleton}
        </MotiView>
      ) : (
        children
      )}
    </AnimatePresence>
  )
}
