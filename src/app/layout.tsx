import { OverpassFont, UbuntuFont } from "/src/app/fonts";
import "/src/app/globals.css";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${OverpassFont.variable} ${UbuntuFont.variable} relative mx-auto flex min-h-screen w-full max-w-screen-mobile flex-col overflow-x-hidden font-overpass text-neutral-900 desktop:max-w-screen-desktop`}
      >
        {children}
      </body>
    </html>
  );
}
