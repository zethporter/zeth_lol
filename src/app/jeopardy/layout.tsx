import ThemeContainer from "./ThemeContainer";

export default function jeopardyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeContainer>{children}</ThemeContainer>;
}
