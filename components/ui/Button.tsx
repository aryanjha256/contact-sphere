import { Button } from "@nextui-org/button";

interface ButtonContent {
  title: string;
}

const MainButton: React.FC<ButtonContent> = ({ title }) => {
  return (
    <>
      <Button radius="none" size="sm">
        {title}
      </Button>
    </>
  );
};

export default MainButton;
