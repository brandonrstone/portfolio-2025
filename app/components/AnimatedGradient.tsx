export const AnimatedGradientBackground = ({ children }: { children?: React.ReactNode }) => (
  <section className='w-screen relative left-1/2 right-1/2 -mx-[50vw] animated-gradient min-h-screen flex items-center justify-center'>
    {children}
  </section>
)