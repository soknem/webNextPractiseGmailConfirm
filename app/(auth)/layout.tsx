
export default function Authlayout({children}:
    Readonly<{children:React.ReactNode}>) {
  return (
    <html>
        <body className="w-full flex flex-auto justify-between">
            {children}
        </body>
    </html>
  )
}
