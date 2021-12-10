import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

type ButtonRouterProps = {
  fullWidth?: boolean;
  variant: "contained" | "outlined" | "text";
  path: string;
  disabled: boolean;
  onClick: () => object;
  children: React.ReactNode;
};

const ButtonRouter = ({
  fullWidth,
  variant,
  path,
  disabled,
  children,
  onClick,
}: ButtonRouterProps) => {
  const router = useRouter();

  return (
    <Button
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={() => {
        onClick?.();
        router.push(path, undefined, { shallow: true });
      }}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ButtonRouter;
