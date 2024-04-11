

interface AccountLayoutProps {
  children: React.ReactNode
}

const AccountLayout = async ({
  children,
}: AccountLayoutProps) => {


  return (
    <>
      <div
        className=
          "container px-0 md:px-16 min-h-screen"
      >
        {children}
      </div>
    </>
  )
}

export default AccountLayout
