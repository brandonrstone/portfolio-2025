export const AnimatedGradientBackground = ({ children }: { children?: React.ReactNode }) => (
  <section className='w-screen min-h-screen relative left-1/2 right-1/2 flex items-center justify-center -mx-[50vw] animated-gradient'>
    {children}
  </section>
)