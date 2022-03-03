import { Container } from "@mui/material";

interface PageContainerProps {
  children?: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Container
      sx={{
        maxWidth: 1440,
        p: { xs: "50px 20px", md: "58px 118px" },
      }}
    >
      {children}
    </Container>
  );
}
